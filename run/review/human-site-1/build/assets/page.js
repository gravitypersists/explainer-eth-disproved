/* Page behaviour for the ETH explainer: checks and gates, the scrollytelling step controller,
   w-switchboard, w-race, the foundation diagram and the hero flair.

   Contract with the widget builders (w-wall, w-ladder): see widgets/manifest.json "contract".
   In short: the mount inside each .d-scrolly carries data-step="<n>" for the active step and
   receives a `didactician:step` CustomEvent {detail: {step, key, total}} whenever it changes;
   when a check is committed every mount gets data-gate-<check>="open" and a `didactician:gate`
   CustomEvent {detail: {check}}. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var NS = 'http://www.w3.org/2000/svg';

  /* ---------------------------------------------------------------- gates */
  var committed = {};
  var gateHooks = {};
  function onCommit(id, fn) { (gateHooks[id] = gateHooks[id] || []).push(fn); if (committed[id]) fn(); }
  function commit(id) {
    if (committed[id]) return;
    committed[id] = true;
    $$('[data-gate="' + id + '"]').forEach(function (el) { el.hidden = false; });
    $$('[data-gate-hide="' + id + '"]').forEach(function (el) { el.hidden = true; });
    $$('[data-widget]').forEach(function (m) {
      m.setAttribute('data-gate-' + id, 'open');
      m.dispatchEvent(new CustomEvent('didactician:gate', { detail: { check: id } }));
    });
    (gateHooks[id] || []).forEach(function (fn) { fn(); });
    scrollies.forEach(function (s) { s.update(true); });
  }

  /* ---------------------------------------------------------------- checks */
  function optText(b) { return b.textContent.replace(/\s+/g, ' ').trim(); }
  $$('.d-check[data-check]').forEach(function (card) {
    var id = card.getAttribute('data-check');
    var fb = $('.d-feedback', card);
    if (card.hasAttribute('data-reveal')) {
      var btn = $('.reveal-btn', card);
      btn.addEventListener('click', function () {
        fb.hidden = false; btn.hidden = true; commit(id);
      });
      return;
    }
    var opts = $$('.d-options .d-option', card);
    var your = $('.fb-your', card);
    opts.forEach(function (b) {
      b.setAttribute('aria-pressed', 'false');
      b.addEventListener('click', function () {
        if (card.classList.contains('is-done')) return;
        card.classList.add('is-done');
        var right = b.hasAttribute('data-correct');
        opts.forEach(function (o) {
          o.setAttribute('aria-pressed', o === b ? 'true' : 'false');
          o.setAttribute('aria-disabled', 'true');
          if (o.hasAttribute('data-correct')) o.classList.add('is-right');
        });
        if (!right) b.classList.add('is-wrong');
        var good = opts.filter(function (o) { return o.hasAttribute('data-correct'); })[0];
        if (your) your.textContent = right ? 'You chose “' + optText(b) + '”. That’s right.' : 'You chose “' + optText(b) + '”. The answer is “' + optText(good) + '”.';
        fb.hidden = false;
        commit(id);
      });
    });
  });

  // k-08: five statements, each committed on its own
  $$('.k8-item').forEach(function (item) {
    var ans = item.getAttribute('data-answer');
    var btns = $$('.d-option', item);
    var fb = $('.d-feedback', item), your = $('.fb-your', item);
    btns.forEach(function (b) {
      b.setAttribute('aria-pressed', 'false');
      b.addEventListener('click', function () {
        if (item.classList.contains('is-done')) return;
        item.classList.add('is-done');
        var right = b.getAttribute('data-v') === ans;
        btns.forEach(function (o) {
          o.setAttribute('aria-pressed', o === b ? 'true' : 'false');
          o.setAttribute('aria-disabled', 'true');
          if (o.getAttribute('data-v') === ans) o.classList.add('is-right');
        });
        if (!right) b.classList.add('is-wrong');
        your.textContent = right ? 'You said “' + optText(b) + '”. Right.' : 'You said “' + optText(b) + '”. Not quite.';
        fb.hidden = false;
      });
    });
  });

  /* ---------------------------------------------------------------- scrollytelling steps */
  var scrollies = [];
  $$('[data-scrolly]').forEach(function (sc) {
    var mount = $('.d-scrolly-canvas [data-widget]', sc), canvas = $('.d-scrolly-canvas', sc);
    var current = null;
    var all = $$('.d-step', sc);
    function update(force) {
      var steps = all.filter(function (s) { return !s.hidden; });
      if (!steps.length) return;
      // Desktop: 60% down the viewport. Mobile (canvas stacked on top): partway into the band below
      // the sticky canvas, so a step is active while it is readable under the canvas, never over it.
      var vh = window.innerHeight, line = vh * 0.6, pick = steps[0];
      if (window.innerWidth < 900 && canvas) {
        var cb = Math.min(canvas.getBoundingClientRect().bottom, vh * 0.7);
        line = cb + (vh - cb) * 0.45;
      }
      steps.forEach(function (s) { if (s.getBoundingClientRect().top < line) pick = s; });
      if (pick === current && !force) return;
      var changed = pick !== current;
      current = pick;
      all.forEach(function (s) { s.classList.toggle('is-active', s === pick); });
      if (!mount || !changed) return;
      var step = +pick.getAttribute('data-step');
      mount.setAttribute('data-step', String(step));
      mount.setAttribute('data-step-key', pick.getAttribute('data-key') || '');
      mount.dispatchEvent(new CustomEvent('didactician:step', { detail: { step: step, key: pick.getAttribute('data-key') || '', total: all.length } }));
    }
    scrollies.push({ update: update });
    update(true);
  });
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; scrollies.forEach(function (s) { s.update(false); }); });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  /* ---------------------------------------------------------------- hero flair */
  (function () {
    var host = $('.hero-bits');
    if (!host) return;
    var rows = 40, cols = 140, frag = document.createDocumentFragment();
    for (var r = 0; r < rows; r++) {
      var line = '';
      for (var c = 0; c < cols; c++) line += Math.random() < 0.5 ? '0' : '1';
      var sp = document.createElement('span');
      sp.textContent = line;
      sp.style.setProperty('--d', Math.round(Math.random() * 500) + 'ms');
      frag.appendChild(sp);
    }
    host.appendChild(frag);
    if (!reduce) requestAnimationFrame(function () { host.classList.add('is-playing'); });
  })();

  /* ---------------------------------------------------------------- w-switchboard */
  var RULES = [
    { n: 1, f: function (v) { return v.x || v.y || v.z; } },
    { n: 2, f: function (v) { return !v.x || v.y; } },
    { n: 3, f: function (v) { return !v.y || v.z; } },
    { n: 4, f: function (v) { return !v.z || !v.x; } }
  ];
  (function () {
    var fig = $('#w-switchboard');
    if (!fig) return;
    var state = { x: true, y: false, z: false };
    var lamps = $$('.sb-lamp', fig), status = $('.sb-status', fig);
    function render() {
      var on = 0;
      RULES.forEach(function (r, i) {
        var lit = r.f(state);
        if (lit) on++;
        lamps[i].classList.toggle('is-on', lit);
        $('.sb-state b', lamps[i]).textContent = lit ? 'on' : 'off';
      });
      status.textContent = on === 4 ? 'All 4 satisfied: this setting works' : on + ' of 4 rules satisfied';
      status.classList.toggle('is-win', on === 4);
    }
    $$('.sb-switch', fig).forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-var');
        state[k] = !state[k];
        b.setAttribute('aria-checked', state[k] ? 'true' : 'false');
        $('.sb-val', b).textContent = state[k] ? 'T' : 'F';
        render();
      });
    });
    render();
  })();

  // the brute-force sweep (locked until k-01 is committed)
  (function () {
    var fig = $('#w-switchboard-sweep');
    if (!fig) return;
    var go = $('.sweep-go', fig), replay = $('[data-replay]', fig), body = $('tbody', fig), count = $('.sweep-count', fig);
    var rows = [], timer = null;
    for (var i = 0; i < 8; i++) {
      var v = { x: !!(i & 4), y: !!(i & 2), z: !!(i & 1) };
      var bad = RULES.filter(function (r) { return !r.f(v); }).map(function (r) { return r.n; });
      var tr = document.createElement('tr');
      tr.className = bad.length ? 'is-bad' : 'is-ok';
      var res = bad.length ? '✗ breaks rule' + (bad.length > 1 ? 's ' : ' ') + bad.join(', ') : '✓ works';
      tr.innerHTML = '<td>' + (v.x ? 'T' : 'F') + '</td><td>' + (v.y ? 'T' : 'F') + '</td><td>' + (v.z ? 'T' : 'F') + '</td><td>' + res + '</td>';
      body.appendChild(tr);
      rows.push(tr);
    }
    function finish() {
      rows.forEach(function (r) { r.classList.add('shown'); r.classList.remove('is-now'); });
      count.innerHTML = '2 of 8 settings work: (F, F, T) and (F, T, T).<small>One more switch would double the table to 16 rows.</small>';
      go.textContent = 'Try all 8';
    }
    function run() {
      clearTimeout(timer);
      rows.forEach(function (r) { r.classList.remove('shown', 'is-now'); });
      count.textContent = '';
      replay.disabled = false;
      if (reduce) { finish(); return; }
      var k = 0;
      (function next() {
        if (k > 0) rows[k - 1].classList.remove('is-now');
        if (k >= rows.length) { finish(); return; }
        rows[k].classList.add('shown', 'is-now');
        count.textContent = 'Checking row ' + (k + 1) + ' of 8…';
        k++;
        timer = setTimeout(next, 250);
      })();
    }
    onCommit('k-01', function () { go.disabled = false; });
    go.addEventListener('click', run);
    fig.addEventListener('didactician:replay', function () { if (!go.disabled) run(); });
  })();

  /* ---------------------------------------------------------------- foundation diagram */
  function Foundation(fig) {
    var stage = $('.fnd-stage', fig), svg = $('.fnd-arrows', fig), grid = $('.fnd-grid', fig);
    var colour = { eth: 'var(--c1)', seth: 'var(--c5)', ovc: 'var(--c3)' };
    function draw() {
      fig.classList.toggle('is-narrow', stage.clientWidth < 600);
      while (svg.lastChild && svg.lastChild.nodeName !== 'defs') svg.removeChild(svg.lastChild);
      var sr = stage.getBoundingClientRect();
      svg.setAttribute('viewBox', '0 0 ' + Math.round(sr.width) + ' ' + Math.round(sr.height));
      var narrow = fig.classList.contains('is-narrow');
      var b = fig.getAttribute('data-state') === 'b';
      var ts = $$('.fnd-t[data-rests]', grid).filter(function (t) { return t.offsetParent !== null; });
      ts.forEach(function (t, i) {
        var base = $('.fnd-base[data-k="' + t.getAttribute('data-rests') + '"]', grid);
        if (!base || base.offsetParent === null) return;
        var a = t.getBoundingClientRect(), c = base.getBoundingClientRect();
        var from, to, curve = 0;
        if (narrow) {
          from = { x: a.left - sr.left - 2, y: a.top - sr.top + a.height / 2 };
          to = { x: c.left - sr.left - 2, y: c.top - sr.top + c.height / 2 + (i % 2 ? 6 : -6) };
          var len = Math.abs(to.y - from.y);
          var off = Math.min(36, 14 + len / 18);
          curve = len ? off / len : 0;
        } else {
          var x = a.left - sr.left + a.width / 2;
          from = { x: x, y: a.bottom - sr.top };
          to = { x: x, y: c.top - sr.top };
        }
        var rests = t.getAttribute('data-rests');
        var dashed = b && rests !== 'ovc';
        var p = Didactician.arrow(svg, from, to, { color: colour[rests], width: 2, gap: 2, curve: curve, dashed: dashed, className: 'arr' });
        if (t.hasAttribute('data-layer')) p.setAttribute('data-layer', t.getAttribute('data-layer'));
        // state B only: a second, solid arrow to a weaker assumption the theorem also rests on (edit distance → OVC)
        var also = b && t.getAttribute('data-also');
        var alt = also && $('.fnd-base[data-k="' + also + '"]', grid);
        if (!alt || alt.offsetParent === null) return;
        var d = alt.getBoundingClientRect(), f2, t2, c2 = 0;
        if (narrow) {
          // right-hand gutter, so it doesn't tangle with the left-gutter arrows
          f2 = { x: a.right - sr.left + 2, y: a.top - sr.top + a.height / 2 };
          t2 = { x: d.right - sr.left + 2, y: d.top - sr.top + d.height / 2 };
          var len2 = Math.abs(t2.y - f2.y);
          c2 = len2 ? -Math.min(30, 14 + len2 / 18) / len2 : 0;
        } else {
          f2 = { x: a.right - sr.left - 14, y: a.bottom - sr.top };
          t2 = { x: d.left - sr.left + 18, y: d.top - sr.top };
        }
        Didactician.arrow(svg, f2, t2, { color: colour[also], width: 2, gap: 2, curve: c2, className: 'arr arr-also' });
      });
    }
    if ('ResizeObserver' in window) new ResizeObserver(function () { draw(); }).observe(stage);
    window.addEventListener('load', draw);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
    draw();
    return { draw: draw };
  }

  // s-05: the ETH layer, then the SETH layer, once visible (replayable)
  (function () {
    var fig = $('#f-foundation-a');
    if (!fig) return;
    fig.setAttribute('data-state', 'a');
    var f = Foundation(fig), t1 = null, t2 = null;
    function play() {
      clearTimeout(t1); clearTimeout(t2);
      fig.classList.remove('show-1', 'show-2');
      if (reduce) { fig.classList.add('show-1', 'show-2'); return; }
      fig.classList.add('pre');
      t1 = setTimeout(function () { fig.classList.add('show-1'); }, 150);
      t2 = setTimeout(function () { fig.classList.add('show-2'); }, 1400);
    }
    if ('IntersectionObserver' in window && !reduce) {
      fig.classList.add('pre');
      var io = new IntersectionObserver(function (es) {
        if (es[0].isIntersecting) { io.disconnect(); play(); }
      }, { threshold: 0.35 });
      io.observe(fig);
    }
    fig.addEventListener('didactician:replay', play);
    f.draw();
  })();

  // s-07: state A until k-06 is committed, then it cracks into state B when visible
  (function () {
    var fig = $('#f-foundation-b');
    if (!fig) return;
    fig.setAttribute('data-state', 'a');
    var f = Foundation(fig), title = $('.fig-title', fig), replay = $('[data-replay]', fig);
    var labelA = fig.getAttribute('aria-label');
    var labelB = 'Foundation diagram, if the claim holds. ETH and SETH are marked refuted (claimed). The theorems that rested on ETH keep their statements but are marked unproven again, not disproved. Edit distance has lost its SETH basis but still stands, because its proof also rests on a third foundation, the Orthogonal Vectors Conjecture (not refuted), which also holds up the lower bounds for longest common subsequence and regex matching.';
    function toB() {
      fig.setAttribute('data-state', 'b');
      title.textContent = title.getAttribute('data-title-b');
      fig.setAttribute('aria-label', labelB);
      f.draw();
    }
    function crack() {
      fig.setAttribute('data-state', 'a');
      f.draw();
      void fig.offsetWidth;
      requestAnimationFrame(function () { requestAnimationFrame(toB); });
    }
    onCommit('k-06', function () {
      replay.disabled = false;
      if (reduce || !('IntersectionObserver' in window)) { toB(); return; }
      var io = new IntersectionObserver(function (es) {
        if (es[0].isIntersecting) { io.disconnect(); crack(); }
      }, { threshold: 0.4 });
      io.observe(fig);
    });
    fig.addEventListener('didactician:replay', function () { if (committed['k-06']) crack(); });
    fig.setAttribute('aria-label', labelA);
  })();

  /* ---------------------------------------------------------------- w-race */
  (function () {
    var fig = $('#w-race');
    if (!fig) return;
    var host = $('.race-chart', fig), live = $('.race-live', fig);
    var mode = 'sparse';
    var L2 = Math.log10(2), LP = Math.log10(1.307);
    // log10(step count), i.e. digits, with every hidden constant set to 1 (x-03)
    var F = {
      brute: function (n) { return n * L2; },
      ppsz: function (n) { return n * LP; },
      sparse: function (n) { return n * L2 / Math.sqrt(Math.log(n)); },
      general: function (n) { return n * L2 * Math.log(Math.log(n)) / Math.sqrt(Math.log(n)); }
    };
    function el(tag, attrs, parent, text) {
      var e = document.createElementNS(NS, tag);
      for (var k in attrs) e.setAttribute(k, attrs[k]);
      if (text != null) e.textContent = text;
      if (parent) parent.appendChild(e);
      return e;
    }
    function fmt(d) { return Math.round(d).toLocaleString('en-US'); }
    function draw() {
      var W = host.clientWidth;
      if (!W) return;
      var narrow = W < 560;
      var H = narrow ? 320 : 360;
      var m = { l: 44, r: narrow ? 72 : 168, t: 60, b: 44 };
      var pw = W - m.l - m.r, ph = H - m.t - m.b;
      var X = function (lx) { return m.l + (lx - 1) / 5 * pw; };       // log10 n in [1, 6]
      var Y = function (ld) { return m.t + ph - ld / 6 * ph; };         // log10 digits in [0, 6]
      host.textContent = '';
      var svg = el('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': 'Line chart. Horizontal axis: number of variables n from 10 to a million, log scale. Vertical axis: digits in the step count, log scale.' }, host);
      // banner inside the chart area (ac-08)
      var bn = el('g', { class: 'banner' }, svg);
      el('rect', { x: 0, y: 0, width: W, height: 28, rx: 6 }, bn);
      el('text', { x: W / 2, y: 14, 'text-anchor': 'middle', 'dominant-baseline': 'middle' }, bn,
        narrow ? 'Illustrative · constants set to 1' : 'Illustrative · constants set to 1 · real constants unknown, could be large');
      // grid + ticks
      var xt = ['10', '100', '1k', '10k', '100k', '1M'];
      for (var i = 0; i <= 5; i++) {
        el('line', { x1: X(i + 1), x2: X(i + 1), y1: m.t, y2: m.t + ph, class: 'grid' }, svg);
        el('text', { x: X(i + 1), y: m.t + ph + 16, 'text-anchor': 'middle', class: 'tick' }, svg, xt[i]);
      }
      var yt = ['1', '10', '100', '1k', '10k', '100k', '1M'];
      for (var j = 0; j <= 6; j++) {
        el('line', { x1: m.l, x2: m.l + pw, y1: Y(j), y2: Y(j), class: 'grid' }, svg);
        el('text', { x: m.l - 6, y: Y(j), 'text-anchor': 'end', 'dominant-baseline': 'middle', class: 'tick' }, svg, yt[j]);
      }
      el('line', { x1: m.l, x2: m.l + pw, y1: m.t + ph, y2: m.t + ph, class: 'ax' }, svg);
      el('line', { x1: m.l, x2: m.l, y1: m.t, y2: m.t + ph, class: 'ax' }, svg);
      el('text', { x: m.l + pw / 2, y: H - 6, 'text-anchor': 'middle', class: 'axl' }, svg, 'n, number of variables');
      el('text', { x: m.l - 36, y: m.t - 14, 'text-anchor': 'start', class: 'axl' }, svg, 'digits in the step count');
      // lines
      var series = [
        { k: 'brute', name: narrow ? '2ⁿ' : '2ⁿ brute force', c: 'var(--c6)' },
        { k: 'ppsz', name: narrow ? '1.307ⁿ' : '1.307ⁿ best before', c: 'var(--c4)' },
        { k: mode, name: narrow ? 'claimed' : 'claimed bound', c: 'var(--c2)' }
      ];
      var ends = [];
      series.forEach(function (s) {
        var d = '';
        for (var q = 0; q <= 200; q++) {
          var lx = 1 + 5 * q / 200, v = F[s.k](Math.pow(10, lx));
          d += (q ? 'L' : 'M') + X(lx).toFixed(1) + ',' + Y(Math.log10(Math.max(1, v))).toFixed(1);
        }
        el('path', { d: d, class: 'ln', style: 'stroke:' + s.c }, svg);
        var endV = F[s.k](1e6);
        ends.push({ s: s, y: Y(Math.log10(endV)), v: endV });
      });
      // direct labels at the right ends, nudged apart
      ends.sort(function (a, b) { return a.y - b.y; });
      var gapY = narrow ? 30 : 30;
      for (var e = 1; e < ends.length; e++) if (ends[e].y - ends[e - 1].y < gapY) ends[e].y = ends[e - 1].y + gapY;
      ends.forEach(function (o) {
        var lx = m.l + pw + 8;
        el('text', { x: lx, y: o.y - 4, class: 'lbl', style: 'fill:' + o.s.c }, svg, o.s.name);
        el('text', { x: lx, y: o.y + 10, class: 'val' }, svg, fmt(o.v) + (narrow ? '' : ' digits'));
      });
      // crossover
      var xo = el('g', { class: 'xo' }, svg);
      if (mode === 'sparse') {
        var nX = Math.exp(Math.pow(L2 / LP, 2));                         // ≈ 815
        var cx = X(Math.log10(nX)), cy = Y(Math.log10(F.ppsz(nX)));
        el('circle', { cx: cx, cy: cy, r: 6, style: 'fill: var(--surface); stroke: var(--ink); stroke-width: 2px' }, xo);
        var t1 = el('text', { x: cx + 4, y: cy + 30, 'text-anchor': 'start' }, xo, 'crossover ≈ n = 800');
        el('text', { x: cx + 4, y: cy + 46, 'text-anchor': 'start', class: 'val' }, xo, '(constants set to 1)');
        live.textContent = 'Sparse formulas: the claimed bound crosses below 1.307 to the n at about n = 800, with constants set to 1.';
        void t1;
      } else {
        var ay = m.t + ph - 30;                                           // empty lower-right corner
        el('text', { x: m.l + pw - 6, y: ay, 'text-anchor': 'end' }, xo, 'crossover ≈ n = 10⁷⁹ →');
        el('text', { x: m.l + pw - 6, y: ay + 16, 'text-anchor': 'end', class: 'val' }, xo, 'far off the chart');
        live.textContent = 'General bound: the crossover moves to roughly n = 10 to the 79, far off the chart.';
      }
    }
    $$('.race-toggle [data-mode]', fig).forEach(function (b) {
      b.addEventListener('click', function () {
        mode = b.getAttribute('data-mode');
        $$('.race-toggle [data-mode]', fig).forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
        draw();
      });
    });
    if ('ResizeObserver' in window) new ResizeObserver(draw).observe(host);
    onCommit('k-05', function () { requestAnimationFrame(draw); });
    draw();
  })();
})();
