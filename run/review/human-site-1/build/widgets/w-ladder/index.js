/* w-ladder: growth-rate ladder for 3-SAT (s-04 state "eth", s-06 state "claim").
   Bars encode log10(step count) at n = 1,000, computed from the formulas below (no canned lengths).
   The page drives the steps: data-step on the mount + 'didactician:step' events. Two mounts share
   this id, so every [data-widget="w-ladder"] is initialised here, branching on data-state. */
(function () {
  'use strict';

  var N = 1000;
  var LOG2 = Math.log10(2);

  // Rows top (slow) to bottom (fast). log10 of the step count at n = N.
  var RUNGS = [
    { id: 'brute', f: '2<sup>n</sup>', name: 'brute force', short: 'brute force', color: 'var(--c6)',
      lg: function (n) { return n * LOG2; } },                                   // c-02
    { id: 'ppsz', f: '1.307<sup>n</sup>', name: 'best known before the claim', short: 'best known before the claim', color: 'var(--c4)',
      lg: function (n) { return n * Math.log10(1.307); } },                      // c-03
    { id: 'claim', f: '2<sup>n/√log n</sup>', name: 'OpenAI’s claimed algorithm (roughly)', short: 'OpenAI’s claim (roughly)', color: 'var(--c2)',
      lg: function (n) { return n / Math.sqrt(Math.log(n)) * LOG2; } },          // c-14, x-03 (constants = 1)
    { id: 'sqrt', f: '2<sup>√n</sup>', name: 'subexponential', short: 'subexponential', color: 'var(--ink-2)',
      lg: function (n) { return Math.sqrt(n) * LOG2; } },                        // c-06
    { id: 'poly', f: 'n<sup>3</sup>', name: 'polynomial: what P = NP would need', short: 'polynomial', color: 'var(--ink-2)',
      lg: function (n) { return 3 * Math.log10(n); } }                           // x-04
  ];

  function digits(L) { return Math.floor(L) + 1; }
  function countText(L, short) {
    var s = digits(L) + ' digits';
    if (!short && L < 12) {
      var v = Math.pow(10, L) / 1e9;
      s += ' · ' + (Math.abs(v - Math.round(v)) < 0.05 ? Math.round(v) : v.toFixed(1)) + ' billion';
    }
    return s;
  }

  // P-04: 2^√n and n^3 look alike at n = 1,000; say how fast they separate (computed, not typed in).
  var BIG = 1e6;
  var SQ_BIG = digits(RUNGS[3].lg(BIG)), PO_BIG = digits(RUNGS[4].lg(BIG));
  var SQ_N = digits(RUNGS[3].lg(N)), PO_N = digits(RUNGS[4].lg(N));
  var SQRT_NOTES = [
    'close to n³ at n = 1,000; pulls away fast: at n = 10⁶, ' + SQ_BIG + ' vs ' + PO_BIG + ' digits',
    'pulls away from n³ fast: at n = 10⁶, ' + SQ_BIG + ' vs ' + PO_BIG + ' digits',
    'at n = 10⁶: ' + SQ_BIG + ' vs n³’s ' + PO_BIG + ' digits'
  ];

  var TITLES = {
    eth: ['The rungs: running times for 3-SAT', 'What P ≠ NP rules out', 'What ETH rules out', 'ETH forbids more'],
    claim: ['The ladder as we left it', 'Where the claim lands', 'P vs NP is untouched']
  };
  var SQ_LIVE = ' 2^√n and n^3 look alike at n = 1,000, but 2^√n pulls away fast: at n = 1,000,000 it has ' +
    SQ_BIG + ' digits against n^3’s ' + PO_BIG + '.';
  var LIVE = {
    eth: [
      'Four running times for 3-SAT, bar length is the number of digits at n = 1,000: 2^n, ' + digits(RUNGS[0].lg(N)) +
        ' digits; 1.307^n, ' + digits(RUNGS[1].lg(N)) + ' digits; 2^√n, ' + SQ_N + ' digits; n^3, ' + PO_N + ' digits.' + SQ_LIVE,
      'P ≠ NP rules out the polynomial rung, n^3, only.',
      'ETH rules out everything below the exponential rungs: 2^√n, n^3 and the empty rung between them and 1.307^n.' + SQ_LIVE,
      'ETH is the stronger bet: its forbidden zone covers three rungs, P ≠ NP’s covers one.'
    ],
    claim: [
      'The ladder as left: P ≠ NP forbids the polynomial rung; ETH forbids every rung below the exponential ones.',
      'OpenAI’s claimed algorithm, about 2^(n/√log n), lands inside the zone ETH said was empty. Its bar uses the sparse-formula bound with all hidden constants set to 1, so its exact position next to 1.307^n (' +
        digits(RUNGS[2].lg(N)) + ' vs ' + digits(RUNGS[1].lg(N)) + ' digits at n = 1,000) is illustrative: the real constants are unknown.',
      'The polynomial rung, n^3 with ' + PO_N + ' digits, is still far below the claimed rung, so P vs NP is untouched.'
    ]
  };

  function h(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function setup(el, reducedMotion) {
    if (el.__wlInit) return;
    el.__wlInit = true;
    var state = el.getAttribute('data-state') === 'claim' ? 'claim' : 'eth';
    var total = TITLES[state].length;

    var root = h('div', 'wl');
    root.setAttribute('data-state', state);
    var head = h('div', 'wl-head');
    var headN = h('span', 'wl-head-n');
    var headT = h('span', 'wl-head-t');
    head.appendChild(headN); head.appendChild(headT);
    var stage = h('div', 'wl-stage');
    var foot = h('div', 'wl-foot');
    var live = h('p', 'wl-live');
    live.setAttribute('aria-live', 'polite');
    root.appendChild(head); root.appendChild(stage); root.appendChild(foot); root.appendChild(live);

    // zones (drawn first so rows sit on top)
    var eth = h('div', 'wl-band wl-band-eth');
    var ethLab = h('div', 'wl-strip', '<span class="wl-strip-t"></span><span class="wl-pill wl-pill-claim">claim lands inside ↓</span>');
    eth.appendChild(ethLab);
    var pnp = h('div', 'wl-band wl-band-pnp');
    var pnpLab = h('div', 'wl-strip', '<span class="wl-strip-t"></span>');
    pnp.appendChild(pnpLab);
    stage.appendChild(eth); stage.appendChild(pnp);

    var rows = {};
    RUNGS.forEach(function (r) {
      var L = r.lg(N);
      var row = h('div', 'wl-row wl-row-' + r.id);
      row.style.setProperty('--wl-col', r.color);
      var lab = h('div', 'wl-lab', '<span class="wl-f">' + r.f + '</span> <span class="wl-name"></span>');
      var track = h('div', 'wl-track');
      var bar = h('div', 'wl-bar');
      var cnt = h('span', 'wl-count', countText(L));
      track.appendChild(bar);
      row.appendChild(lab); row.appendChild(track); row.appendChild(cnt);
      var note = null;
      if (r.id === 'sqrt') { note = h('span', 'wl-note'); row.appendChild(note); }
      stage.appendChild(row);
      rows[r.id] = { r: r, L: L, row: row, lab: lab, track: track, bar: bar, cnt: cnt, note: note, name: lab.querySelector('.wl-name') };
    });

    var stronger = h('div', 'wl-call wl-call-eth', 'ETH is the stronger bet: it forbids more.');
    var untouched = h('div', 'wl-call wl-call-pnp', '');
    stage.appendChild(stronger); stage.appendChild(untouched);

    el.appendChild(root);

    var geo = null;
    var cur = 0;

    function place(node, x, y, w, hh) {
      node.style.left = Math.round(x) + 'px'; node.style.top = Math.round(y) + 'px';
      if (w != null) node.style.width = Math.round(w) + 'px';
      if (hh != null) node.style.height = Math.round(hh) + 'px';
    }
    // pick the longest text variant that fits in `room` px (or none)
    function fitText(node, variants, room) {
      for (var i = 0; i < variants.length; i++) {
        node.textContent = variants[i];
        if (node.offsetWidth <= room) return true;
      }
      node.textContent = '';
      return false;
    }

    /* Layout. Three modes, chosen by measured fit, not by device:
       - regular (two-line rungs: label line, bar line; zone labels get their own strip rows)
       - narrow is regular with short names (W < 440)
       - compact (short mounts, e.g. a landscape phone): one line per rung, label column + bar,
         zone labels sit at the right end of the zone's first rung.
       Content is anchored to the top of the mount and the footnote follows it, so on phones the
       part each step changes stays in the upper part of the canvas (P-01). */
    function layout() {
      var cs = getComputedStyle(el);
      var W = el.clientWidth;
      var maxH = parseFloat(cs.maxHeight);
      var H = (isFinite(maxH) ? maxH : Math.max(el.clientHeight, 420)) - 2;
      root.style.height = H + 'px';
      var narrow = W < 440;
      var pad = narrow ? 12 : 20;
      var fs = narrow ? 13 : (H > 520 ? 15 : 14);
      var ff = narrow ? 16 : (H > 520 ? 20 : 17);
      root.classList.toggle('is-narrow', narrow);
      root.classList.remove('is-compact', 'wl-swap-pnp');
      stronger.textContent = 'ETH is the stronger bet: it forbids more.';
      eth.querySelector('.wl-pill').style.display = '';
      root.style.setProperty('--wl-fs', fs + 'px');
      root.style.setProperty('--wl-ff', ff + 'px');
      root.style.setProperty('--wl-pad', pad + 'px');
      var x0 = pad, inner = W - 2 * pad - 2;
      var rowX = x0 + 8, trackW = inner - 16;
      var stripH = Math.round(fs * 1.7);
      var bandPad = 6;

      setFoot(cur || 1, narrow);
      var headH = head.offsetHeight;
      var avail0 = H - headH - pad;               // stage + gap + foot

      // ---- try regular -----------------------------------------------------------
      RUNGS.forEach(function (r) { rows[r.id].name.textContent = narrow ? r.short : r.name; });
      var abbr = narrow && state === 'claim';
      var ethT = abbr ? 'ETH: nothing down here' : 'ETH says: not anywhere down here';
      var pnpT = abbr ? 'P ≠ NP: not down here' : 'P ≠ NP says: not down here';
      eth.querySelector('.wl-strip-t').textContent = ethT;
      pnp.querySelector('.wl-strip-t').textContent = pnpT;
      RUNGS.forEach(function (r) { rows[r.id].cnt.textContent = countText(rows[r.id].L, false); });
      var footH;

      var labH = rows.brute.lab.offsetHeight;
      var barT = narrow ? 10 : (H > 520 ? 18 : 14);
      var rowMin = labH + 4 + barT + (narrow ? 3 : 6);
      var reserve = rows.brute.cnt.offsetWidth + 10;
      var barMax = trackW - reserve;
      function barW(o) { return Math.max(6, o.L / rows.brute.L * barMax); }
      // P-04 note: inline after the 2^√n count if it fits, else on its own line
      var sq = rows.sqrt;
      var sqCntEnd = barW(sq) + 8 + sq.cnt.offsetWidth;
      sq.note.style.width = 'auto';
      var noteInline = fitText(sq.note, SQRT_NOTES.slice(0, 2), trackW - sqCntEnd - 12);
      var noteLine = 0;
      if (!noteInline) { fitText(sq.note, SQRT_NOTES, trackW); noteLine = sq.note.offsetHeight + 2; }
      // footer: reserve the tallest footer this mount will show, so steps don't reflow the ladder
      setFoot(total, narrow);
      footH = foot.offsetHeight;
      setFoot(cur || 1, narrow);
      var stageMax = avail0 - footH - 8;
      // 'untouched' (claim step 3): beside n^3 inside the P ≠ NP zone if it fits there, else on its own line below
      var pnpT0 = pnp.querySelector('.wl-strip-t');
      var usedR = Math.max(rowX + rows.poly.lab.offsetWidth, rowX + barW(rows.poly) + 8 + rows.poly.cnt.offsetWidth,
                           x0 + 4 + 8 + pnpT0.offsetWidth);
      var callW = Math.min(narrow ? 170 : 260, x0 + inner - usedR - 18);
      untouched.classList.remove('is-below');
      untouched.style.width = Math.max(40, callW) + 'px';
      untouched.textContent = narrow ? '\u2191 Far below the claim, so P vs NP is untouched.'
                                     : '\u2191 Still nowhere near this, so P vs NP is untouched.';
      var noteBelow = callW < 100 || untouched.offsetHeight > stripH + rowMin - 2;
      var unH = 0;
      if (noteBelow) {
        untouched.classList.add('is-below');
        untouched.textContent = 'n\u00b3 is still nowhere near the claim, so P vs NP is untouched.';
        untouched.style.width = (inner - 28) + 'px';
        unH = state === 'claim' ? untouched.offsetHeight + 4 : 0;
      }
      var need = 5 * rowMin + noteLine + 2 * stripH + 2 * bandPad + 4 + unH;
      // the 2^√n note is optional where it doesn't fit on its own line (the live text still carries it)
      if (need > stageMax && noteLine) { need -= noteLine; noteLine = 0; sq.note.textContent = ''; }
      // phones in portrait never go compact (too narrow for one-line rungs): squeeze the rung padding instead
      if (need > stageMax && narrow) {
        var squeeze = Math.min(rowMin - (labH + barT + 3), Math.ceil((need - stageMax) / 5));
        rowMin -= squeeze; need -= 5 * squeeze;
      }

      if (need <= stageMax || narrow) {
        // grow rungs into spare room, but only a little on phones, so the stack stays high in the canvas
        var grow = Math.max(0, Math.floor((stageMax - need) / 5));
        var rowH = Math.min(rowMin + grow, narrow ? rowMin + 8 : 96);
        if (!narrow) barT = Math.max(barT, Math.min(22, Math.round(rowH * 0.25)));
        root.style.setProperty('--wl-bar', barT + 'px');
        root.style.setProperty('--wl-strip', stripH + 'px');
        var lead = Math.max(0, Math.floor((rowH - rowMin) / 2));
        var y = 0, pos = {}, hgt = {};
        function addRow(id) { pos[id] = y; hgt[id] = rowH + (id === 'sqrt' ? noteLine : 0); y += hgt[id]; }
        addRow('brute'); addRow('ppsz'); y += bandPad;
        var ethTop = y; y += stripH;
        addRow('claim'); addRow('sqrt');
        var pnpTop = y; y += stripH;
        addRow('poly');
        var unTop = y; y += unH;
        var bottom = y + bandPad;

        RUNGS.forEach(function (r) {
          var o = rows[r.id];
          var w = barW(o);
          place(o.row, rowX, pos[r.id], trackW, hgt[r.id]);
          place(o.lab, 0, lead);
          place(o.track, 0, lead + labH + 4, trackW, barT);
          o.bar.style.width = w + 'px';
          var cy = lead + labH + 4 + barT / 2;
          place(o.cnt, w + 8, cy - o.cnt.offsetHeight / 2);
          o.barW = w;
          if (o.note) {
            if (noteInline) place(o.note, w + 8 + o.cnt.offsetWidth + 12, cy - o.note.offsetHeight / 2);
            else place(o.note, 0, lead + labH + 4 + barT + 3);
          }
        });
        place(eth, x0, ethTop, inner, bottom - ethTop);
        place(pnp, x0 + 4, pnpTop, inner - 8, bottom - pnpTop - 3);
        eth.firstChild.style.height = pnp.firstChild.style.height = stripH + 'px';
        eth.firstChild.style.justifyContent = pnp.firstChild.style.justifyContent = '';
        pnp.querySelector('.wl-strip-t').style.visibility = '';

        stronger.style.width = Math.min(narrow ? 200 : 280, inner - 20) + 'px';
        stronger.style.textAlign = 'right';
        place(stronger, x0 + inner - stronger.offsetWidth - 10, pos.claim + Math.max(0, (rowH - stronger.offsetHeight) / 2));
        if (noteBelow) {
          place(untouched, x0 + 14, unTop);
        } else {
          var zoneH = bottom - pnpTop;
          place(untouched, x0 + inner - untouched.offsetWidth - 10, pnpTop + Math.max(2, (zoneH - untouched.offsetHeight) / 2));
        }
        stage.style.top = headH + 'px';
        stage.style.height = bottom + 'px';
        foot.style.top = (headH + bottom + 8) + 'px';
        geo = { narrow: narrow, compact: false };
        return;
      }

      // ---- compact: one line per rung -------------------------------------------------
      root.classList.add('is-compact');
      headH = head.offsetHeight;
      avail0 = H - headH - pad;
      RUNGS.forEach(function (r) {
        var o = rows[r.id];
        o.name.textContent = r.short;
        o.cnt.textContent = countText(o.L, true);
      });
      eth.querySelector('.wl-strip-t').textContent = 'ETH: nothing down here';
      pnp.querySelector('.wl-strip-t').textContent = 'P ≠ NP: not down here';
      setFoot(cur || 1, true);
      footH = foot.offsetHeight;
      var labW = 0;
      RUNGS.forEach(function (r) { labW = Math.max(labW, rows[r.id].lab.offsetWidth); });
      labW += 10;
      var lineH = Math.max(labH, rows.brute.cnt.offsetHeight);
      var cStage = avail0 - footH - 6;
      var cRow = Math.max(lineH + 2, Math.min(36, Math.floor((cStage - 2 * 3 - 4) / 5)));
      var cBar = Math.max(8, Math.min(14, cRow - 14));
      root.style.setProperty('--wl-bar', cBar + 'px');
      var cTrackW = trackW - labW;
      var cReserve = rows.brute.cnt.offsetWidth + 10;
      var cMax = cTrackW - cReserve;
      var cPad = 3;
      var cy0 = 0, cpos = {};
      cpos.brute = cy0; cy0 += cRow;
      cpos.ppsz = cy0; cy0 += cRow + cPad;
      var cEthTop = cy0;
      cpos.claim = cy0; cy0 += cRow;
      cpos.sqrt = cy0; cy0 += cRow;
      var cPnpTop = cy0;
      cpos.poly = cy0; cy0 += cRow;
      var cBottom = cy0 + cPad;
      var ends = {};
      RUNGS.forEach(function (r) {
        var o = rows[r.id];
        var w = Math.max(6, o.L / rows.brute.L * cMax);
        place(o.row, rowX, cpos[r.id], trackW, cRow);
        place(o.lab, 0, (cRow - o.lab.offsetHeight) / 2);
        place(o.track, labW, (cRow - cBar) / 2, cTrackW, cBar);
        o.bar.style.width = w + 'px';
        place(o.cnt, labW + w + 8, (cRow - o.cnt.offsetHeight) / 2);
        o.barW = w;
        ends[r.id] = rowX + labW + w + 8 + o.cnt.offsetWidth;
      });
      place(eth, x0, cEthTop - 1, inner, cBottom - cEthTop + 1);
      place(pnp, x0 + 4, cPnpTop - 1, inner - 8, cBottom - cPnpTop - 2);
      // zone labels: right end of the zone's first rung
      [eth, pnp].forEach(function (b) {
        b.firstChild.style.height = (cRow - 2) + 'px';
        b.firstChild.style.justifyContent = 'flex-end';
      });
      // the claim pill only if it fits next to the claim bar
      var pill = eth.querySelector('.wl-pill');
      var ethLabLeft = x0 + inner - eth.querySelector('.wl-strip-t').offsetWidth - 16;
      pill.style.display = (ethLabLeft - pill.offsetWidth - 8 > ends.claim + 6) ? '' : 'none';
      // P-04 note inline after the 2^√n count
      var sqRoom = (x0 + inner - 8) - (ends.sqrt + 12);
      if (fitText(sq.note, SQRT_NOTES, sqRoom)) place(sq.note, ends.sqrt + 12 - rowX, (cRow - sq.note.offsetHeight) / 2);
      // 'untouched' (claim step 3): after the n^3 count if it fits before the P ≠ NP label, else it takes that label's place
      untouched.classList.remove('is-below');
      untouched.style.width = 'auto';
      untouched.style.textAlign = 'left';
      var pnpLabW = pnp.querySelector('.wl-strip-t').offsetWidth + 16;
      var unRoom = (x0 + inner - pnpLabW - 8) - (ends.poly + 12);
      var unVariants = ['← still far below the claim: P vs NP untouched', '← P vs NP untouched'];
      var swap = !fitText(untouched, unVariants, unRoom);
      if (swap) fitText(untouched, ['P vs NP untouched: n³ is far below the claim', 'P vs NP untouched'], (x0 + inner - 8) - (ends.poly + 12));
      untouched.style.width = untouched.offsetWidth + 1 + 'px';
      place(untouched, swap ? x0 + inner - untouched.offsetWidth - 12 : ends.poly + 12, cpos.poly + (cRow - untouched.offsetHeight) / 2);
      root.classList.toggle('wl-swap-pnp', swap);
      // 'stronger' (eth step 4): on the empty claim rung, left of the ETH label
      stronger.style.width = 'auto';
      stronger.style.textAlign = 'left';
      fitText(stronger, ['ETH is the stronger bet: it forbids more.', 'ETH forbids more.'], ethLabLeft - rowX - 12);
      place(stronger, rowX, cpos.claim + (cRow - stronger.offsetHeight) / 2);
      stage.style.top = headH + 'px';
      stage.style.height = cBottom + 'px';
      foot.style.top = (headH + cBottom + 6) + 'px';
      geo = { narrow: true, compact: true };
    }

    function setFoot(step, narrow) {
      var t = 'Bar length = digits in the step count at <i>n</i> = 1,000.';
      if (state === 'claim' && step >= 2) {
        t += narrow ? ' Claimed bar: sparse bound, constants set to 1, so its exact spot is illustrative.'
                    : '<br>Claimed bar: sparse-formula bound with hidden constants set to 1, so its exact position is illustrative. Zones are about how counts grow, not their size here.';
      }
      if (foot.__t !== t) { foot.innerHTML = t; foot.__t = t; }
    }

    function vis(node, shown, focus) {
      node.classList.toggle('is-hidden', !shown);
      node.classList.toggle('is-dim', shown && !focus);
    }

    function render(step) {
      step = Math.max(1, Math.min(total, step | 0 || 1));
      var prev = cur;
      cur = step;
      headN.textContent = step + ' / ' + total;
      headT.textContent = TITLES[state][step - 1];
      live.textContent = LIVE[state][step - 1];
      var prevFootH = foot.offsetHeight;
      setFoot(step, geo && geo.narrow);
      if (foot.offsetHeight !== prevFootH) layout();

      var S = {}; // id -> [shown, focus]
      var claimShown = state === 'claim' && step >= 2;
      if (state === 'eth') {
        S.brute = [true, step === 1];
        S.ppsz = [true, step === 1];
        S.claim = [false, false];
        S.sqrt = [true, step === 1 || step >= 3];
        S.poly = [true, true];
        S.pnp = [step >= 2, step === 2 || step === 4];
        S.eth = [step >= 3, step >= 3];
        S.stronger = [step >= 4, true];
        S.untouched = [false, false];
      } else {
        S.brute = [true, step === 1];
        S.ppsz = [true, step <= 2];
        S.claim = [claimShown, step >= 2];
        S.sqrt = [true, step === 1];
        S.poly = [true, step === 1 || step === 3];
        S.pnp = [true, step === 1 || step === 3];
        S.eth = [true, step <= 2];
        S.stronger = [false, false];
        S.untouched = [step >= 3, true];
      }
      // first reveal of the eth ladder: rungs grow bottom to top (stagger, < 1.5s total)
      var stagger = state === 'eth' && step === 1 && prev !== 1 && !reducedMotion;
      ['poly', 'sqrt', 'claim', 'ppsz', 'brute'].forEach(function (id, i) {
        var o = rows[id];
        o.row.style.transitionDelay = o.bar.style.transitionDelay = stagger ? (i * 110) + 'ms' : '0ms';
        vis(o.row, S[id][0], S[id][1]);
      });
      vis(pnp, S.pnp[0], S.pnp[1]);
      vis(eth, S.eth[0], S.eth[1]);
      vis(stronger, S.stronger[0], S.stronger[1]);
      vis(untouched, S.untouched[0], S.untouched[1]);
      root.classList.toggle('show-claim-flag', state === 'claim' && step === 2);
      root.classList.toggle('show-pnp-ok', state === 'claim' && step === 3);
      root.setAttribute('data-step', String(step));
    }

    // Start with bars collapsed, then reveal, so the first state transition is visible.
    RUNGS.forEach(function (r) { rows[r.id].row.classList.add('is-hidden'); });
    layout();
    var first = parseInt(el.getAttribute('data-step'), 10) || 1;
    if (reducedMotion) render(first);
    else requestAnimationFrame(function () { requestAnimationFrame(function () { render(first); }); });

    el.addEventListener('didactician:step', function (e) {
      render(e.detail && e.detail.step ? e.detail.step : parseInt(el.getAttribute('data-step'), 10));
    });
    new MutationObserver(function () {
      var s = parseInt(el.getAttribute('data-step'), 10);
      if (s && s !== cur) render(s);
    }).observe(el, { attributes: true, attributeFilter: ['data-step'] });

    var lastW = el.clientWidth, lastVH = window.innerHeight;
    function maybeRelayout() {
      var w = el.clientWidth, vh = window.innerHeight;
      if (Math.abs(w - lastW) < 1 && Math.abs(vh - lastVH) < 1) return;
      lastW = w; lastVH = vh;
      layout();
    }
    if ('ResizeObserver' in window) new ResizeObserver(maybeRelayout).observe(el);
    window.addEventListener('resize', maybeRelayout);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);
  }

  Didactician.widget('w-ladder', function (el, ctx) {
    // The kit only finds the first mount; initialise every mount with this id.
    var mounts = document.querySelectorAll('[data-widget="w-ladder"]');
    Array.prototype.forEach.call(mounts, function (m) {
      try { setup(m, ctx.reducedMotion); }
      catch (e) {
        console.error('w-ladder failed:', e);
        var p = document.createElement('p'); p.className = 'd-caption';
        p.textContent = 'This interactive figure failed to load.'; m.appendChild(p);
      }
    });
  });
})();
