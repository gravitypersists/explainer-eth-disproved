/* w-wall: "The doubling wall" (s-03, blueprint B1, step-locked scrollytelling canvas). Plan v2: R-03, R-04.
   Model (facts c-02, c-03; examples x-02, x-03): brute force on n switches checks R(n) = 2^n rows.
     Steps 1-4, bar mode, LINEAR scale: the current bar's height H is R(n); the previous step's bar is drawn
       beside it at its true height H·R(prev)/R(n). Under 1px it becomes a 1px hairline with a dashed outline.
     Step 5, digit mode: 2^1000 written out in full (302 digits).
     Step 6: adds ⌊1.307^1000⌋ = ⌊1307^1000 / 1000^1000⌋ (117 digits) under it, same type and line width.
     Steps 5-6 also show 10^80 (atoms in the observable universe) as "1" + 80 zeros (81 digits).
   Every number is computed here with BigInt; digit counts are read from the computed strings.
   The canvas holds no time text (H-01): the page's step cards carry it. No log scale anywhere (H-02).
   The page drives steps via data-step + 'didactician:step'; steps 4-6 are gated on k-02. */
Didactician.widget('w-wall', function (el, ctx) {
  'use strict';

  var SUP = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
  function sup(n) { return String(n).replace(/\d/g, function (d) { return SUP[d]; }); }
  function group(s) { return s.replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
  function groupHtml(s) { return group(s).replace(/,/g, ',<wbr>'); }   // wrap only between digit groups
  function rows(n) { return BigInt(2) ** BigInt(n); }

  var D2 = rows(1000).toString();                                              // 302 digits
  var DB = (BigInt(1307) ** BigInt(1000) / BigInt(1000) ** BigInt(1000)).toString(); // ⌊1.307^1000⌋, 117 digits
  var DA = '1' + new Array(81).join('0');                                       // 10^80, 81 digits

  var STEPS = [null,
    { n: 3, mode: 'bars' }, { n: 20, mode: 'bars' }, { n: 100, mode: 'bars' },
    { n: 110, mode: 'bars', gate: 'k-02' },
    { n: 1000, mode: 'digits', gate: 'k-02' },
    { n: 1000, mode: 'digits', gate: 'k-02', best: true }
  ];
  var LAST = STEPS.length - 1;

  el.innerHTML =
    '<div class="ww" data-mode="bars" data-layout="wide">' +
      '<div class="ww-head">' +
        '<div class="ww-n"><span class="ww-nval"></span> switches</div>' +
        '<div class="ww-count"><span class="ww-f"></span> <span class="ww-num"></span> <span class="ww-unit">rows</span></div>' +
      '</div>' +
      '<div class="ww-bars" aria-hidden="true">' +
        '<div class="ww-plot">' +
          '<div class="ww-col ww-prev">' +
            '<div class="ww-call"></div>' +
            '<div class="ww-lead"></div>' +
            '<div class="ww-outline"></div>' +
            '<div class="ww-bar ww-bar-prev"></div>' +
          '</div>' +
          '<div class="ww-col ww-cur"><div class="ww-bar ww-bar-cur"></div></div>' +
        '</div>' +
        '<div class="ww-labs"><div class="ww-lab-prev"></div><div class="ww-lab-cur"></div></div>' +
      '</div>' +
      '<div class="ww-digits" aria-hidden="true">' +
        '<div class="ww-ruler"><span class="ww-ruler-t"></span></div>' +
        blk('two', '2' + sup(1000) + ' = a <b>' + D2.length + '-digit</b> number of rows', '', D2) +
        blk('best', '1.307' + sup(1000) + ' (best known<span class="ww-long"> before the claim</span>) = a <b>' + DB.length + '-digit</b> number', '', DB) +
        blk('atoms', '<span class="ww-long">10' + sup(80) + ' ≈ atoms in the observable universe: an <b>' + DA.length + '-digit</b> number</span>',
          '<span class="ww-short">≈ atoms in the universe (10' + sup(80) + '): <b>' + DA.length + ' digits</b></span>', DA) +
        '<p class="ww-cap">Smaller multiplier per switch, still a fixed one.</p>' +
      '</div>' +
      '<p class="ww-sr" aria-live="polite"></p>' +
    '</div>';

  function blk(k, label, shortLabel, digits) {
    return '<div class="ww-blk ww-blk-' + k + '">' +
      '<div class="ww-blab">' + label + shortLabel + '</div>' +
      '<div class="ww-brow"><div class="ww-dg">' + digits + '</div>' +
      '<div class="ww-brk"><span>' + digits.length + ' digits</span></div></div>' +
    '</div>';
  }

  var root = el.querySelector('.ww');
  var q = function (s) { return el.querySelector(s); };
  var ui = {
    nval: q('.ww-nval'), f: q('.ww-f'), num: q('.ww-num'),
    plot: q('.ww-plot'), prev: q('.ww-prev'), call: q('.ww-call'), outline: q('.ww-outline'),
    barPrev: q('.ww-bar-prev'), barCur: q('.ww-bar-cur'), labPrev: q('.ww-lab-prev'), labCur: q('.ww-lab-cur'),
    digits: q('.ww-digits'), ruler: q('.ww-ruler-t'), best: q('.ww-blk-best'), sr: q('.ww-sr')
  };

  var shown = 0, layout = 'wide', curScale = { prev: 0, cur: 0 };

  function gateOpen(id) { return el.getAttribute('data-gate-' + id) === 'open'; }
  function effectiveStep(raw) {
    var s = Math.max(1, Math.min(LAST, parseInt(raw, 10) || 1));
    while (s > 1 && STEPS[s].gate && !gateOpen(STEPS[s].gate)) s--;   // never show gated content early
    return s;
  }

  /* ---------------------------------------------------------------- bars (steps 1-4) */
  function plotH() { return ui.plot.clientHeight || 1; }
  // True relative height of the previous bar, as a fraction of H (exact ratio of powers of two).
  function frac(step) { return step > 1 ? Math.pow(2, STEPS[step - 1].n - STEPS[step].n) : 0; }

  function setScale(bar, s, animate) {
    bar.style.transition = animate ? '' : 'none';
    bar.style.transform = 'scaleY(' + s + ')';
    if (!animate) { void bar.offsetHeight; bar.style.transition = ''; }
  }
  function placeBars(step, from) {
    var H = plotH(), f = frac(step);
    var hasPrev = step > 1;
    var tiny = hasPrev && f * H < 1;
    var prevTarget = hasPrev ? Math.max(f, 1 / H) : 0;       // sub-pixel bars drawn as a 1px hairline
    ui.prev.classList.toggle('is-empty', !hasPrev);
    ui.prev.classList.toggle('is-tiny', tiny);
    if (from) {
      setScale(ui.barPrev, from.prev, false);
      setScale(ui.barCur, from.cur, false);
    }
    var animate = !!from && !ctx.reducedMotion;
    setScale(ui.barPrev, prevTarget, animate);
    setScale(ui.barCur, 1, animate);
    curScale = { prev: prevTarget, cur: 1 };
  }

  function renderBars(step) {
    var S = STEPS[step], P = STEPS[step - 1];
    ui.labCur.textContent = 'n = ' + S.n;
    ui.labPrev.textContent = P ? 'n = ' + P.n : '';
    if (P) {
      var H = plotH(), tiny = frac(step) * H < 1;
      ui.call.innerHTML = '<b>n = ' + P.n + '</b> · <span class="ww-call-num">' + groupHtml(rows(P.n).toString()) + '</span> rows' +
        (tiny ? ' · <span class="ww-call-note">too small to see at this scale</span>' : '');
    } else ui.call.innerHTML = '';
  }

  /* ---------------------------------------------------------------- digits (steps 5-6): fit type to the canvas */
  var chCache = {};
  function chWidth(fs) {
    if (chCache[fs]) return chCache[fs];
    var s = document.createElement('span');
    s.className = 'ww-measure';
    s.style.fontSize = fs + 'px';
    s.textContent = '0000000000';
    ui.digits.appendChild(s);
    var w = s.getBoundingClientRect().width / 10;
    ui.digits.removeChild(s);
    return (chCache[fs] = w || fs * 0.6);
  }
  function fitDigits() {
    if (root.getAttribute('data-mode') !== 'digits') return;
    var sizes = el.clientWidth >= 440 ? [18, 17, 16, 15, 14, 13, 12, 11.5, 11] : [13, 12.5, 12, 11.5, 11];
    var short = root.hasAttribute('data-short');
    var avail = ui.digits.clientWidth - 30 - (short ? 158 : 0);   // room for the bracket rail (+ label column)
    // Fit for step 6's content (all three blocks) so the type and line width stay the same from step 5 to 6.
    var hadBest = root.classList.contains('has-best');
    root.classList.add('has-best');
    root.classList.remove('is-tight');
    var done = false;
    for (var pass = 0; pass < 2 && !done; pass++) {
      if (pass === 1) root.classList.add('is-tight');
      for (var i = 0; i < sizes.length; i++) {
        var fs = sizes[i];
        var per = Math.max(10, Math.floor(avail / chWidth(fs)));
        if (per > (short ? 100 : 60)) per = short ? 100 : 60;   // keep the block a block, not a ribbon
        root.style.setProperty('--ww-dfs', fs + 'px');
        root.style.setProperty('--ww-per', per);
        ui.ruler.textContent = per + ' digits per line';
        if (ui.digits.scrollHeight <= ui.digits.clientHeight + 1) { done = true; break; }
      }
    }
    root.classList.toggle('has-best', hadBest);
    markBrackets();
  }
  // Vertical "302 digits" label inside the bracket only where the block is tall enough to hold it.
  function markBrackets() {
    el.querySelectorAll('.ww-brow').forEach(function (r) {
      r.classList.add('has-brk-text');
      var span = r.querySelector('.ww-brk span');
      r.classList.toggle('has-brk-text', span.getBoundingClientRect().height + 4 <= r.getBoundingClientRect().height);
    });
  }

  /* ---------------------------------------------------------------- step transitions */
  function go(raw, instant) {
    var step = effectiveStep(raw);
    if (step === shown && !instant) return;
    var prevShown = shown;
    shown = step;
    var S = STEPS[step];
    root.setAttribute('data-step', step);
    root.setAttribute('data-mode', S.mode);
    root.classList.toggle('has-best', !!S.best);
    ui.nval.textContent = 'n = ' + S.n.toLocaleString('en-US');
    if (S.mode === 'bars') {
      ui.f.innerHTML = '2<sup>' + S.n + '</sup> =';
      ui.num.innerHTML = groupHtml(rows(S.n).toString());
      renderBars(step);
      var from = null;
      if (!instant && prevShown && STEPS[prevShown].mode === 'bars') {
        // forward: the old bar (was full height) shrinks to its true size while the new one rises from 0
        // backward: the bar coming back grows from its hairline; the one before it simply appears
        from = step > prevShown ? { prev: 1, cur: 0 } : { prev: Math.max(frac(step), 1 / plotH()), cur: curScale.prev };
      } else if (!instant && prevShown && !ctx.reducedMotion) {
        from = { prev: 1, cur: 0 };
      }
      placeBars(step, from);
    } else {
      fitDigits();
    }
    say(step);
  }

  function say(step) {
    var S = STEPS[step], P = STEPS[step - 1], t;
    if (S.mode === 'bars') {
      t = 'n = ' + S.n + ' switches: 2 to the ' + S.n + ' = ' + group(rows(S.n).toString()) + ' rows to check. Linear scale: this bar is full height.';
      if (P) t += ' The bar for n = ' + P.n + ' (' + group(rows(P.n).toString()) + ' rows) is drawn at its true size beside it: ' +
        (frac(step) * plotH() < 1 ? 'too small to see at this scale.' : 'a sliver.');
    } else {
      t = 'n = 1,000 switches: 2 to the 1000 is a ' + D2.length + '-digit number of rows, written out in full. ' +
        '10 to the 80, roughly the atoms in the observable universe, is an ' + DA.length + '-digit number.';
      if (S.best) t += ' The best known algorithm before the claim, 1.307 to the 1000 steps, is a ' + DB.length +
        '-digit number: smaller multiplier per switch, still a fixed one.';
    }
    ui.sr.textContent = t;
  }

  /* ---------------------------------------------------------------- layout */
  function relayout() {
    if (!shown) return;
    if (STEPS[shown].mode === 'bars') { renderBars(shown); placeBars(shown, null); } else fitDigits();
  }
  function setShort() {
    var short = el.clientWidth >= 560 && el.clientHeight > 0 && el.clientHeight < 300;
    if (short) root.setAttribute('data-short', ''); else root.removeAttribute('data-short');
  }
  ctx.onResize(function (w) {
    layout = w >= 440 ? 'wide' : 'narrow';
    root.setAttribute('data-layout', layout);
    setShort();
    relayout();
  });
  if ('ResizeObserver' in window) {
    var lastH = 0;
    new ResizeObserver(function () {
      var h = el.clientHeight;
      if (Math.abs(h - lastH) < 1) return;
      lastH = h; setShort(); relayout();
    }).observe(el);
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { chCache = {}; relayout(); });

  el.addEventListener('didactician:step', function (e) { go(e.detail && e.detail.step != null ? e.detail.step : el.dataset.step); });
  el.addEventListener('didactician:gate', function () { go(el.dataset.step); });

  go(el.dataset.step || 1, true);
});
