/* w-wall: "The doubling wall" (s-03, blueprint B1, step-locked scrollytelling canvas).
   Model (facts c-02, c-03, x-02): brute force on n switches checks 2^n rows.
     n=3 → 8 · n=20 → 1,048,576 · n=100 → ≈1.27×10^30 · n=110 → ≈1.30×10^33 (×1,024) · n=1000 → ≈1.07×10^301
     Step 5 adds the best known algorithm before the claim, 1.307^n: at n=1000, 10^(1000·log10 1.307) ≈ 10^116.
   All row counts are computed exactly with BigInt; nothing is hard-coded except the step's n and its
   plain-language time line (taken from facts/x-02 and the manifest).
   The page drives steps via data-step + 'didactician:step'; steps 4-5 are gated on k-02. */
Didactician.widget('w-wall', function (el, ctx) {
  'use strict';

  var LOG2 = Math.log10(2);
  var LOGB = Math.log10(1.307);          // best known before the claim (c-03)
  var AXIS_SMALL = 36;                   // steps 1-4: wall drawn up to 10^36
  var AXIS_BIG = 330;                    // step 5: wall drawn up to 10^330
  var SUP = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
  function sup(n) { return String(n).replace(/\d/g, function (d) { return SUP[d]; }); }
  function tsup(n) { return '<tspan class="ww-sup" dy="-0.45em">' + n + '</tspan>'; }   // SVG exponent

  var STEPS = [
    null,
    { n: 3, axis: AXIS_SMALL, time: 'Instant. You could check every row by hand.' },
    { n: 20, axis: AXIS_SMALL, time: 'A laptop: well under a second.' },
    { n: 100, axis: AXIS_SMALL, time: 'A billion computers, each checking a billion rows per second: <strong>tens of thousands of years</strong>.' },
    { n: 110, axis: AXIS_SMALL, gate: 'k-02', time: 'About a thousand times longer than at n = 100, on the same billion computers.' },
    { n: 1000, axis: AXIS_BIG, gate: 'k-02', best: true, time: 'More rows than the ~10<sup>80</sup> atoms in the observable universe.' }
  ];

  /* ---------------------------------------------------------------- number formatting */
  // Exact 2^n. Up to 10^15 in full with thousands separators; above that as m.mm × 10^e.
  function pow2(n) {
    var s = (BigInt(2) ** BigInt(n)).toString();
    if (s.length <= 15) return { html: Number(s).toLocaleString('en-US'), text: Number(s).toLocaleString('en-US') };
    var e = s.length - 1;
    var m = Math.round(Number(s.slice(0, 4)) / 10) / 100;   // 3 significant figures
    if (m >= 10) { m = 1; e += 1; }
    var ms = m.toFixed(2);
    return { html: '≈ ' + ms + ' × 10<sup>' + e + '</sup>', text: 'about ' + ms + ' times 10 to the ' + e };
  }

  /* ---------------------------------------------------------------- DOM */
  el.innerHTML =
    '<div class="ww" data-layout="wide">' +
      '<div class="ww-text">' +
        '<div class="ww-stepno"></div>' +
        '<div class="ww-n"><span class="ww-nval"></span> switches</div>' +
        '<div class="ww-count"><span class="ww-num"></span><span class="ww-count-unit"> rows</span></div>' +
        '<div class="ww-unit">rows to check <span class="ww-formula"></span></div>' +
        '<div class="ww-mult" hidden></div>' +
        '<p class="ww-time"><span class="ww-time-k">Time</span> <span class="ww-time-v"></span></p>' +
        '<div class="ww-prev"></div>' +
        '<div class="ww-best" hidden>' +
          '<div class="ww-best-num"><span class="ww-best-f">1.307ⁿ</span> ≈ 10<sup>116</sup> steps</div>' +
          '<div class="ww-best-lab">best known before the claim (randomised, PPSZ family)</div>' +
          '<div class="ww-best-cap">Smaller base, same exponential shape.<span class="ww-best-more"> Each +10 switches still multiplies the work: ×1,024 for 2ⁿ, ×14.5 for 1.307ⁿ.</span></div>' +
        '</div>' +
      '</div>' +
      '<div class="ww-chart">' +
        '<svg class="ww-svg" role="img" aria-label="Log-scale bars of the number of rows"></svg>' +
        '<div class="ww-scale">Log scale: one tick = ×10</div>' +
      '</div>' +
      '<p class="ww-sr" aria-live="polite"></p>' +
    '</div>';

  var root = el.querySelector('.ww');
  var q = function (s) { return el.querySelector(s); };
  var ui = {
    stepno: q('.ww-stepno'), nval: q('.ww-nval'), num: q('.ww-num'), formula: q('.ww-formula'),
    mult: q('.ww-mult'), time: q('.ww-time'), timeV: q('.ww-time-v'), prev: q('.ww-prev'),
    best: q('.ww-best'), chart: q('.ww-chart'), svg: q('.ww-svg'), sr: q('.ww-sr')
  };

  /* ---------------------------------------------------------------- state */
  // Animated values: shown n for the counter, bar heights (log10), axis top (log10).
  var cur = { n: 3, bar: 3 * LOG2, best: 0, axis: AXIS_SMALL };
  var shown = 0, anim = null, size = { w: 0, h: 0 }, layout = 'wide';

  function gateOpen(id) { return el.getAttribute('data-gate-' + id) === 'open'; }
  function effectiveStep(raw) {
    var s = Math.max(1, Math.min(5, parseInt(raw, 10) || 1));
    while (s > 1 && STEPS[s].gate && !gateOpen(STEPS[s].gate)) s--;   // never show gated content early
    return s;
  }

  function setCounter(n) {
    var p = pow2(n);
    ui.nval.textContent = 'n = ' + n.toLocaleString('en-US');
    ui.num.innerHTML = p.html;
    ui.formula.innerHTML = '(2<sup>' + n + '</sup>)';
  }

  function renderText(step) {
    var S = STEPS[step], P = STEPS[step - 1];
    ui.stepno.textContent = 'Step ' + step + ' of 5';
    ui.timeV.innerHTML = S.time;
    if (step === 4) {
      ui.mult.hidden = false;
      ui.mult.innerHTML = '×1,024 (2<sup>10</sup>) more than n = 100';
    } else ui.mult.hidden = true;
    ui.prev.innerHTML = P ? 'Before: n = ' + P.n.toLocaleString('en-US') + ' → ' + pow2(P.n).html + ' rows' : '&nbsp;';
    ui.best.hidden = !S.best;
    root.classList.toggle('has-best', !!S.best);
    if (size.w) measure();
    var p = pow2(S.n);
    ui.sr.textContent = 'Step ' + step + ' of 5. n = ' + S.n + ' switches: ' + p.text + ' rows to check. ' +
      ui.timeV.textContent.replace('~1080', 'about 10 to the 80') + (S.best ? ' Best known before the claim, 1.307 to the n: about 10 to the 116 steps. Smaller base, same exponential shape.' : '');
  }

  /* ---------------------------------------------------------------- chart */
  function f1(x) { return Math.round(x * 10) / 10; }

  function draw() {
    var W = size.w, H = size.h;
    if (W < 40 || H < 40) return;
    var step = shown || 1, S = STEPS[step], P = STEPS[step - 1];
    var ghost = P ? Math.min(P.n * LOG2, cur.bar) : 0;
    var axis = cur.axis;
    var labelEvery = axis > 60 ? 100 : 10;
    var out = [];
    var showBest = cur.best > 0.01;
    var settled = !anim;   // value labels on the 1.307^n bar only once it has landed

    if (layout === 'wide') {
      // Vertical "wall": axis on the left, bars rise from the bottom.
      var top = 16, bottom = H - 44, ax = 52;   // room for 12px '10³⁰⁰' tick labels
      var gap = 36;
      var bw = Math.max(32, Math.min(56, (W - ax - 16 - gap - 8) / 2));
      var x1 = ax + 16, x2 = x1 + bw + gap;
      var Y = function (v) { return bottom - (bottom - top) * Math.max(0, v) / axis; };
      var px = (bottom - top) / axis;
      out.push(ticksV(ax, Y, axis, px, labelEvery));
      // 2^n bar: dim part up to the previous step's value, full ink for this step's growth
      out.push(barV(x1, bw, Y(ghost), bottom, 'ww-bar ww-dim'));
      out.push(barV(x1, bw, Y(cur.bar), Y(ghost), 'ww-bar'));
      if (P && ghost > 0) {
        var gy = Y(ghost);
        out.push('<line class="ww-ghost" x1="' + f1(x1 - 4) + '" x2="' + f1(x1 + bw + 4) + '" y1="' + f1(gy) + '" y2="' + f1(gy) + '"/>');
        var below = bottom - gy > 18;
        if (below || gy - Y(cur.bar) > 18)
          out.push('<text class="ww-ghost-lab' + (below ? '' : ' ww-on-bar') + '" x="' + f1(x1 + bw / 2) + '" y="' + f1(below ? gy + 13 : gy - 5) + '" text-anchor="middle">n=' + P.n + '</text>');
      }
      out.push('<text class="ww-barname" x="' + f1(x1 + bw / 2) + '" y="' + f1(bottom + 18) + '" text-anchor="middle">2ⁿ</text>');
      out.push('<text class="ww-barsub" x="' + f1(x1 + bw / 2) + '" y="' + f1(bottom + 34) + '" text-anchor="middle">brute force</text>');
      if (showBest) {
        out.push(barV(x2, bw, Y(cur.best), bottom, 'ww-bar ww-bar-best'));
        out.push('<text class="ww-barname ww-best-ink" x="' + f1(x2 + bw / 2) + '" y="' + f1(bottom + 18) + '" text-anchor="middle">1.307ⁿ</text>');
        out.push('<text class="ww-barsub ww-best-ink" x="' + f1(x2 + bw / 2) + '" y="' + f1(bottom + 34) + '" text-anchor="middle">best known</text>');
        if (settled) out.push('<text class="ww-barval ww-best-ink" x="' + f1(x2 + bw / 2) + '" y="' + f1(Y(cur.best) - 6) + '" text-anchor="middle">≈10' + tsup(Math.round(cur.best)) + '</text>');
      }
      out.push('<text class="ww-barval" x="' + f1(x1 + bw / 2) + '" y="' + f1(Math.max(top + 10, Y(cur.bar) - 6)) + '" text-anchor="middle">' + topLabel() + '</text>');
    } else {
      // Narrow: the same wall laid on its side, so the readout keeps the full width.
      var left = 8, right = W - 12, axY = H - 26;
      var rows = showBest ? 2 : 1;
      var rowH = Math.max(6, Math.min(26, (axY - 18 - 4 - (rows - 1) * 20) / rows));
      var y1 = 18, y2 = y1 + rowH + 20;
      var X = function (v) { return left + (right - left) * Math.max(0, v) / axis; };
      var pxh = (right - left) / axis;
      out.push(ticksH(axY, X, axis, pxh, labelEvery));
      out.push('<text class="ww-barname" x="' + left + '" y="' + (y1 - 5) + '">2ⁿ <tspan class="ww-barsub">brute force</tspan></text>');
      out.push(barH(left, X(ghost), y1, rowH, 'ww-bar ww-dim'));
      out.push(barH(X(ghost), X(cur.bar), y1, rowH, 'ww-bar'));
      if (P && ghost > 0) {
        var gx = X(ghost);
        out.push('<line class="ww-ghost" x1="' + f1(gx) + '" x2="' + f1(gx) + '" y1="' + f1(y1 - 3) + '" y2="' + f1(y1 + rowH + 3) + '"/>');
      }
      // value labels sit on the label line above each bar, right-aligned, so they never cross a bar or the axis
      out.push('<text class="ww-barval" x="' + f1(Math.max(X(cur.bar), left + 150)) + '" y="' + (y1 - 5) + '" text-anchor="end">' + topLabel() + '</text>');
      if (showBest) {
        out.push('<text class="ww-barname ww-best-ink" x="' + left + '" y="' + (y2 - 5) + '">1.307ⁿ <tspan class="ww-barsub">best known</tspan></text>');
        out.push(barH(left, X(cur.best), y2, rowH, 'ww-bar ww-bar-best'));
        if (settled) out.push('<text class="ww-barval ww-best-ink" x="' + f1(Math.max(X(cur.best), left + 200)) + '" y="' + (y2 - 5) + '" text-anchor="end">≈10' + tsup(Math.round(cur.best)) + '</text>');
      }
    }
    ui.svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    ui.svg.setAttribute('width', W);
    ui.svg.setAttribute('height', H);
    ui.svg.innerHTML = out.join('');
  }

  function topLabel() {
    var e = Math.floor(cur.n * LOG2 + 1e-9);
    return e < 1 ? String(Math.pow(2, cur.n)) : '≈10' + tsup(e);
  }
  function barV(x, w, yTop, yBot, cls) {
    var h = Math.max(0, yBot - yTop);
    if (h < 0.5) return '';
    return '<rect class="' + cls + '" x="' + f1(x) + '" y="' + f1(yTop) + '" width="' + f1(w) + '" height="' + f1(Math.max(h, 2)) + '"/>';
  }
  function barH(x0, x1, y, h, cls) {
    var w = Math.max(0, x1 - x0);
    if (w < 0.5) return '';
    return '<rect class="' + cls + '" x="' + f1(x0) + '" y="' + f1(y) + '" width="' + f1(Math.max(w, 2)) + '" height="' + f1(h) + '"/>';
  }
  // One tick per factor of 10 (they fuse into a texture at step 5: too many to count, which is the point).
  function ticksV(ax, Y, axis, px, every) {
    var d = '', dm = '', lab = '';
    for (var k = 0; k <= Math.floor(axis); k++) {
      var y = f1(Y(k));
      if (k % every === 0) {
        dm += 'M' + (ax - 8) + ' ' + y + 'H' + (ax + 2);
        lab += '<text class="ww-axlab" x="' + (ax - 12) + '" y="' + f1(Y(k) + 4) + '" text-anchor="end">10' + tsup(k) + '</text>';
      } else d += 'M' + (ax - 4) + ' ' + y + 'H' + ax;
    }
    var op = px < 3 ? ' style="opacity:' + Math.max(0.25, px / 3).toFixed(2) + '"' : '';
    return '<line class="ww-axis" x1="' + ax + '" x2="' + ax + '" y1="' + f1(Y(0)) + '" y2="' + f1(Y(axis)) + '"/>' +
      '<path class="ww-tick"' + op + ' d="' + d + '"/><path class="ww-tick ww-tick-major" d="' + dm + '"/>' + lab;
  }
  function ticksH(ay, X, axis, px, every) {
    var d = '', dm = '', lab = '';
    for (var k = 0; k <= Math.floor(axis); k++) {
      var x = f1(X(k));
      if (k % every === 0) {
        dm += 'M' + x + ' ' + (ay - 2) + 'V' + (ay + 8);
        lab += '<text class="ww-axlab" x="' + x + '" y="' + (ay + 21) + '" text-anchor="' + (k === 0 ? 'start' : 'middle') + '">10' + tsup(k) + '</text>';
      } else d += 'M' + x + ' ' + ay + 'V' + (ay + 4);
    }
    var op = px < 3 ? ' style="opacity:' + Math.max(0.25, px / 3).toFixed(2) + '"' : '';
    return '<line class="ww-axis" x1="' + f1(X(0)) + '" x2="' + f1(X(axis)) + '" y1="' + ay + '" y2="' + ay + '"/>' +
      '<path class="ww-tick"' + op + ' d="' + d + '"/><path class="ww-tick ww-tick-major" d="' + dm + '"/>' + lab;
  }

  /* ---------------------------------------------------------------- step transitions */
  function ease(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }   // ease-in-out

  function go(raw, instant) {
    var step = effectiveStep(raw);
    if (step === shown && !instant) return;
    var S = STEPS[step];
    var from = { n: cur.n, bar: cur.bar, best: cur.best, axis: cur.axis };
    var to = { n: S.n, bar: S.n * LOG2, best: S.best ? S.n * LOGB : 0, axis: S.axis };
    shown = step;
    renderText(step);
    if (anim) cancelAnimationFrame(anim);
    anim = null;
    if (instant || ctx.reducedMotion) {
      cur = to; setCounter(to.n); root.classList.remove('is-moving'); draw(); return;
    }
    root.classList.add('is-moving');
    anim = -1;
    var t0 = performance.now(), dur = 650;
    (function frame(now) {
      var t = Math.min(1, (now - t0) / dur), e = ease(t);
      cur.bar = from.bar + (to.bar - from.bar) * e;
      cur.best = from.best + (to.best - from.best) * e;
      cur.axis = from.axis + (to.axis - from.axis) * e;
      // The counter steps through whole n only, so every value it flashes is a true 2^n.
      cur.n = Math.round(from.n + (to.n - from.n) * e);
      setCounter(cur.n);
      draw();
      if (t < 1) anim = requestAnimationFrame(frame);
      else { anim = null; cur = to; setCounter(to.n); draw(); root.classList.remove('is-moving'); }
    })(t0);
  }

  /* ---------------------------------------------------------------- layout */
  function fit() {
    root.classList.remove('is-compact');
    if (layout !== 'narrow') return;
    var t = el.querySelector('.ww-text');
    if (t.scrollHeight > t.clientHeight + 1) root.classList.add('is-compact');
  }
  function measure() {
    fit();
    var r = ui.svg.parentNode.getBoundingClientRect();
    var scaleH = el.querySelector('.ww-scale').offsetHeight;
    size.w = Math.floor(r.width);
    size.h = Math.max(0, Math.floor(r.height - scaleH));
    draw();
  }
  ctx.onResize(function (w) {
    var next = w >= 440 ? 'wide' : 'narrow';
    layout = next;
    root.setAttribute('data-layout', next);
    root.style.setProperty('--ww-w', w + 'px');
    measure();
  });
  if ('ResizeObserver' in window) new ResizeObserver(measure).observe(ui.chart);

  el.addEventListener('didactician:step', function (e) { go(e.detail && e.detail.step != null ? e.detail.step : el.dataset.step); });
  el.addEventListener('didactician:gate', function () { go(el.dataset.step); });

  go(el.dataset.step || 1, true);
  measure();
});
