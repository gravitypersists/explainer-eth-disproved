/* w-ladder: where could the best *possible* 3-SAT algorithm sit? (s-04 state "eth", s-06 state "claim").
   Plan v2 (R-05, R-06, R-14): an ORDINAL ranking. Rungs sit at a fixed pitch, ordered by how fast the
   work grows as n gets large (x-04). No length encodes magnitude: no bars, no digit counts.
   Each rung: formula, plain name, a "we have this" / "nobody has found this" tag, and the multiplier
   per extra switch in words. The bets are brackets on the right edge; ETH's line is drawn.
   The page drives the steps: data-step on the mount + 'didactician:step' events. Two mounts share
   this id, so every [data-widget="w-ladder"] is initialised here, branching on data-state. */
(function () {
  'use strict';

  // Top (fastest-growing) to bottom (slowest-growing). Asymptotic order as n grows:
  // 2^n > 1.307^n > [ETH's line] > 2^(n/sqrt(log n)) > 2^sqrt(n) > n^3.
  //   c-02 brute force 2^n; c-03 best known 1.307^n (PPSZ family);
  //   c-04 ETH: some fixed multiplier 2^s > 1 per switch (on average, worst case);
  //   c-14 the claim 2^(n/(log n)^(1/2+o(1))): exponent n/sqrt(log n) -> per-switch 2^(1/sqrt(log n)) -> 1, slowly;
  //   c-06 2^sqrt(n): per-switch 2^(1/sqrt(n)) -> 1; c-05 n^3: doubling n multiplies the work by 2^3 = 8.
  var HAVE = 'we have this', NOBODY = 'nobody has found this';
  var RUNGS = [
    { id: 'brute', f: '2<sup>n</sup>', color: 'var(--c6)', tag: HAVE, tagCls: 'have',
      name: ['brute force: try every setting', 'brute force'],
      mult: ['×2 per extra switch', '×2 per switch'] },
    { id: 'ppsz', f: '1.307<sup>n</sup>', color: 'var(--c4)', tag: HAVE, tagCls: 'have',
      name: ['best known before the claim (PPSZ)', 'best known (PPSZ)', 'best known'],
      mult: ['×1.307 per extra switch', '×1.307 per switch'] },
    { id: 'claim', f: '2<sup>n/√log n</sup>', color: 'var(--c2)', tag: 'claimed', tagCls: 'claimed',
      name: ['OpenAI’s claimed algorithm (roughly)', 'OpenAI’s claimed algorithm', 'OpenAI’s claim'],
      mult: ['the multiplier fades toward ×1, slowly', 'fades toward ×1, slowly', 'fades to ×1, slowly'] },
    { id: 'sqrt', f: '2<sup>√n</sup>', color: 'var(--ink-2)', tag: NOBODY, tagCls: 'nobody',
      name: ['subexponential example', 'subexponential'],
      mult: ['the multiplier fades toward ×1', 'fades toward ×1', 'fades to ×1'] },
    { id: 'poly', f: 'n<sup>3</sup>', color: 'var(--ink-2)', tag: NOBODY, tagCls: 'nobody',
      name: ['polynomial: what P = NP would need', 'polynomial: what P = NP needs', 'polynomial (P = NP)'],
      mult: ['doubling the switches: ×8 work', 'doubling the switches: ×8', '×8 per doubling'] }
  ];
  var ORDER = ['brute', 'ppsz', 'claim', 'sqrt', 'poly'];

  var ANN = {
    pnp: { cls: 'pnp', v: ['ruled out by P ≠ NP'] },
    eth: { cls: 'eth', v: ['ruled out by ETH (not by P ≠ NP)', 'ruled out by ETH, not P ≠ NP', 'ruled out by ETH only'] },
    flag: { cls: 'flag', v: ['below ETH’s line: if this holds, ETH’s bet is lost', 'below ETH’s line: ETH’s bet is lost', 'ETH’s bet is lost'] },
    ok: { cls: 'ok', v: ['still far below: P vs NP untouched', 'P vs NP untouched'] }
  };
  var TXT = {
    title: 'Where could the best <i>possible</i> 3-SAT algorithm sit?',
    axis: 'work grows faster as you add switches',
    note: 'order as n gets large',
    pnp: ['P ≠ NP bets: the best algorithm is somewhere up here', 'P ≠ NP bets: somewhere up here', 'P ≠ NP bets: up here'],
    eth: ['ETH bets: up here, a fixed multiplier per switch', 'ETH bets: up here'],
    ethLine: [
      ['ETH’s line', ': above it, a fixed multiplier per switch; below it, the multiplier fades'],
      ['ETH’s line', ': above, a fixed multiplier per switch; below, it fades'],
      ['ETH’s line', ' · above: a fixed multiplier · below: it fades'],
      ['ETH’s line', ' · above: fixed · below: fades'],
      ['ETH’s line', '']
    ],
    foot: ['ETH’s bracket is shorter: it’s the bolder bet.', 'Shorter bracket: the bolder bet.']
  };
  var STEPS = {
    eth: ['Four candidates', 'P ≠ NP’s bet', 'ETH’s bet'],
    claim: ['The ladder as we left it', 'Where the claim lands', 'P vs NP is untouched']
  };
  var LIVE = {
    eth: [
      'Four candidate answers for the fastest possible 3-SAT algorithm, ranked by how fast the work grows as you add switches (order as n gets large). Top: 2^n, brute force, we have this, ×2 per extra switch. Then 1.307^n, the best known before the claim, we have this, ×1.307 per switch. Then 2^√n, a subexponential example, nobody has found this, the multiplier fades toward ×1. Bottom: n^3, polynomial, what P = NP would need, nobody has found this, doubling the switches multiplies the work by 8.',
      'P ≠ NP’s bet: a bracket spans every rung above n^3. The best algorithm is somewhere up there. n^3 is ruled out by P ≠ NP.',
      'ETH’s bet: ETH’s line is drawn between 1.307^n and 2^√n. Above it, a fixed multiplier per switch; below it, the multiplier fades. ETH’s bracket spans only the two rungs above the line, so it is shorter: the bolder bet. 2^√n is ruled out by ETH, but not by P ≠ NP.'
    ],
    claim: [
      'The ladder as we left it: 2^n and 1.307^n above ETH’s line; 2^√n and n^3 below it. P ≠ NP’s bracket covers everything above n^3; ETH’s shorter bracket covers only the rungs above its line.',
      'OpenAI’s claimed algorithm, roughly 2^(n/√log n), slides in below ETH’s line and above 2^√n: its multiplier per switch fades toward ×1, slowly. If the claim holds, ETH’s bet is lost. Positions show order as n gets large, not size at any particular n.',
      'n^3, the polynomial rung, is still far below the claimed algorithm, and P ≠ NP’s bracket still covers the claim, so P vs NP is untouched.'
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
    var total = STEPS[state].length;

    var root = h('div', 'wl');
    root.setAttribute('data-state', state);
    var kick = h('div', 'wl-kick');
    var title = h('div', 'wl-title', TXT.title);
    var axis = h('div', 'wl-axis');
    var axHead = h('div', 'wl-axhead');
    var axLab = h('div', 'wl-axlab', TXT.axis);
    var note = h('div', 'wl-note', TXT.note);
    var pnpLab = h('div', 'wl-hl wl-hl-pnp');
    var ethLab = h('div', 'wl-hl wl-hl-eth');
    var pnpRail = h('div', 'wl-rail wl-rail-pnp');
    var ethRail = h('div', 'wl-rail wl-rail-eth');
    var pnpLead = h('div', 'wl-lead wl-lead-pnp');
    var ethLead = h('div', 'wl-lead wl-lead-eth');
    var ethRule = h('div', 'wl-ethrule');
    var ethStub = h('div', 'wl-ethrule');
    var ethLineLab = h('div', 'wl-ethlab', '<b></b><span></span>');
    var foot = h('div', 'wl-foot');
    var live = h('p', 'wl-live');
    live.setAttribute('aria-live', 'polite');
    [kick, title, axis, axHead, axLab, note, pnpLead, ethLead, pnpRail, ethRail, ethStub, ethRule, ethLineLab, pnpLab, ethLab]
      .forEach(function (n) { root.appendChild(n); });

    var rows = {};
    RUNGS.forEach(function (r) {
      var row = h('div', 'wl-row wl-row-' + r.id);
      row.style.setProperty('--wl-col', r.color);
      var f = h('span', 'wl-f', r.f);
      var name = h('span', 'wl-name');
      var tag = h('span', 'wl-chip wl-tag wl-tag-' + r.tagCls, r.tag);
      var mult = h('span', 'wl-mult');
      var ann = h('span', 'wl-chip wl-ann');
      [f, name, tag, mult, ann].forEach(function (n) { row.appendChild(n); });
      root.appendChild(row);
      rows[r.id] = { r: r, row: row, f: f, name: name, tag: tag, mult: mult, ann: ann };
    });
    root.appendChild(foot);
    root.appendChild(live);
    el.appendChild(root);

    var G = null;      // geometry from the last layout()
    var cur = 0, started = false;

    function px(n) { return Math.round(n) + 'px'; }
    function place(node, x, y, w, hh) {
      node.style.left = px(x); node.style.top = px(y);
      if (w != null) node.style.width = px(w);
      if (hh != null) node.style.height = px(hh);
    }
    function W(node) { return node.offsetWidth; }
    function Hh(node) { return node.offsetHeight; }
    // the longest variant that fits in `room` px; falls back to the last one
    function fit(node, variants, room, html) {
      for (var i = 0; i < variants.length; i++) {
        if (html) node.innerHTML = variants[i]; else node.textContent = variants[i];
        if (W(node) <= room) return i;
      }
      return variants.length - 1;
    }
    function setEthLine(i) {
      ethLineLab.firstChild.textContent = TXT.ethLine[i][0];
      ethLineLab.lastChild.textContent = TXT.ethLine[i][1];
    }

    /* Layout. Three modes, chosen by measured fit (not by device):
       - wide:    two-line rungs (formula · name · tag / multiplier · note), axis label in the header;
       - narrow:  two-line rungs (formula · name / tag-or-note chip · multiplier), axis label rotated
                  along the axis; rung pitch ≥ 40px;
       - compact: one line per rung, no tag chips (short mounts such as a landscape phone).
       Geometry always reserves the claim slot below ETH's line, so both mounts have the same ladder
       at a given size. Where the claim rung is not shown, the two lower rungs sit up in its place and
       the freed slot at the bottom carries the footer. Content is anchored to the top (P-01). */
    function layout() {
      var cs = getComputedStyle(el);
      var Wm = el.clientWidth;
      var maxH = parseFloat(cs.maxHeight);
      var H = (isFinite(maxH) ? maxH : Math.max(el.clientHeight, 420)) - 2;
      root.style.height = H + 'px';

      var modes = [];
      if (Wm >= 440) modes.push('wide');
      if (Wm < 520) modes.push('narrow');
      if (Wm >= 480) modes.push('compact');
      var g = null;
      for (var i = 0; i < modes.length && !g; i++) {
        if (modes[i] === 'wide') g = tryMode('wide', Wm, H, false, true);   // bet labels on lines of their own
        if (!g) g = tryMode(modes[i], Wm, H, false, false);
      }
      if (!g) g = tryMode(modes[modes.length - 1], Wm, H, true, false);   // squeeze: never overflow
      G = g;
      if (started) render(cur || 1, true);
    }

    function tryMode(mode, Wm, H, force, generous) {
      var narrow = mode === 'narrow', compact = mode === 'compact', wide = mode === 'wide';
      root.className = 'wl is-' + mode;
      var pad = wide ? 16 : 8;
      var gap = 12;
      var lineH = wide ? 20 : 18;

      // right-edge rails: outer = P ≠ NP, inner = ETH
      var railW = narrow ? 7 : 8, railGap = narrow ? 10 : 12;
      var oL = Wm - pad - railW - 2, iL = oL - railGap;
      var axisX = narrow ? pad + 19 : pad + 5;          // x of the axis line
      var rowX = narrow ? pad + 26 : pad + 18;          // rung text starts here
      var rowR = iL - (wide ? 10 : 6);                  // rung text must end before the inner rail
      var rowW = rowR - rowX;

      // ---- header -------------------------------------------------------------------
      var y = pad;
      kick.style.display = 'none';
      axLab.classList.toggle('is-rot', narrow);
      var headTop, titleW;
      if (wide) {
        title.style.width = (oL + railW - (rowX - 13)) + 'px';
        title.style.whiteSpace = '';
        place(title, rowX - 13, y);
        y += Hh(title) + 8;
      } else if (narrow) {
        title.style.width = (Wm - 2 * pad) + 'px';
        title.style.whiteSpace = '';
        place(title, pad, y);
        y += Hh(title) + 6;
      } else {
        title.style.width = 'auto';
        title.style.whiteSpace = 'nowrap';
        titleW = W(title);
        place(title, pad, y);
      }
      headTop = y;
      var rightEdgeP = oL + railW, rightEdgeE = iL + railW;

      // header lines. Each pair puts a left item and a right-aligned bet label on one line if both
      // fit, else the label gets its own line below. P ≠ NP's label always sits above ETH's, so the
      // P ≠ NP leader (at the outer rail) passes to the right of the ETH label.
      var lines = [], at = {};
      function pair(leftKey, leftEnd, labNode, variants, edge, key) {
        var v = fit(labNode, variants, edge - leftEnd - gap);
        var k = lines.length;
        if (leftKey) at[leftKey] = k;
        if (edge - W(labNode) >= leftEnd + gap) { lines.push(1); at[key] = k; }
        else {
          v = fit(labNode, variants, edge - rowX);
          if (leftKey) lines.push(1);
          at[key] = lines.length; lines.push(1);
        }
        return v;
      }
      var vP, vE;
      var noteInline = false;
      if (wide) {
        axLab.textContent = TXT.axis;
        var axEnd = rowX + W(axLab);
        noteInline = axEnd + 10 + W(note) <= rightEdgeP;
        if (generous) {
          // L0: axis label (+ note); then each bet's label on its own line, longest wording that fits
          at.axis = 0; lines.push(1);
          if (!noteInline) { at.note = lines.length; lines.push(1); } else at.note = 0;
          vP = fit(pnpLab, TXT.pnp, rightEdgeP - rowX); at.p = lines.length; lines.push(1);
          vE = fit(ethLab, TXT.eth, rightEdgeE - rowX); at.e = lines.length; lines.push(1);
        } else {
          noteInline = false;
          vP = pair('axis', axEnd, pnpLab, TXT.pnp, rightEdgeP, 'p');
          vE = pair('note', rowX + W(note), ethLab, TXT.eth, rightEdgeE, 'e');
        }
      } else if (narrow) {
        axLab.textContent = TXT.axis;          // runs up the axis, rotated
        vP = pair('note', rowX + W(note), pnpLab, TXT.pnp, rightEdgeP, 'p');
        vE = pair(null, rowX, ethLab, TXT.eth, rightEdgeE, 'e');
      } else {
        axLab.textContent = TXT.axis + ' · ' + TXT.note;
        vP = pair('title', pad + titleW, pnpLab, TXT.pnp, rightEdgeP, 'p');
        vE = pair('axis', rowX + W(axLab), ethLab, TXT.eth, rightEdgeE, 'e');
      }
      note.style.display = compact ? 'none' : '';

      // compact: the title shares line 0 with P ≠ NP's label, so the header starts at the title's top
      var lineY = [];
      for (var li = 0; li < lines.length; li++) { lineY.push(headTop + li * lineH); }
      if (compact) place(title, pad, lineY[0] + (lineH - Hh(title)) / 2);
      var headBottom = headTop + lines.length * lineH;

      // ---- rung content heights ---------------------------------------------------------
      // set names (longest that fits on line 1)
      var fCol = 0;
      RUNGS.forEach(function (r) { fCol = Math.max(fCol, W(rows[r.id].f)); });
      var nameX = wide || compact ? fCol + (wide ? 12 : 8) : null;
      RUNGS.forEach(function (r) {
        var o = rows[r.id];
        o.tag.style.display = compact ? 'none' : '';
        var room;
        if (wide) room = rowW - nameX;
        else if (narrow) room = rowW - W(o.f) - 6;
        else room = Math.min(rowW * 0.38, rowW - nameX - 160);
        o.vName = fit(o.name, r.name, room);
      });
      var l1 = 0, l2 = 0, l3 = 0;
      RUNGS.forEach(function (r) {
        var o = rows[r.id];
        o.mult.textContent = r.mult[0];
        l1 = Math.max(l1, Hh(o.f), Hh(o.name));
        l2 = Math.max(l2, Hh(o.mult), narrow ? Hh(o.tag) : 0);
        l3 = Math.max(l3, Hh(o.tag));
      });
      // wide: formula · name / multiplier / tag (+ the step's note); narrow: formula · name / chip · multiplier
      var content = compact ? Math.max(l1, l2) : (wide ? l1 + 2 + l2 + 4 + l3 : l1 + 3 + l2);
      var minPitch = narrow ? Math.max(40, content + 2) : (compact ? content + 3 : content + 8);
      var maxPitch = narrow ? 50 : (compact ? 32 : 84);

      // ETH's line row
      setEthLine(0);
      var ethLabH = Hh(ethLineLab);
      var ethRowH = ethLabH + (wide ? 10 : 6);

      // foot (eth state only) sits in the freed claim slot; claim state shows none
      var fixed = (headBottom + 4) + ethRowH + (compact ? 4 : pad);
      // five pitches: brute, ppsz, | ETH's line |, claim slot, 2^√n, n^3. Where the claim is not shown
      // the lower two rungs sit up in its slot and the footer takes the freed pitch at the bottom.
      var pitch = Math.floor((H - fixed) / 5);
      if (pitch < minPitch && !force) return null;
      pitch = Math.max(Math.min(pitch, maxPitch), force ? Math.min(minPitch, Math.max(content + 1, pitch)) : minPitch);

      var y0 = headBottom + 4;
      var pos = {};
      pos.brute = y0; pos.ppsz = y0 + pitch;
      var ethRowY = y0 + 2 * pitch;
      var slotY = ethRowY + ethRowH;
      pos.claim = slotY;
      pos.sqrtUp = slotY; pos.polyUp = slotY + pitch;
      pos.sqrtDn = slotY + pitch; pos.polyDn = slotY + 2 * pitch;
      var bottom = slotY + 3 * pitch;

      // ---- place rungs -------------------------------------------------------------------
      var lead = Math.max(0, Math.min(8, Math.floor((pitch - content) / 2)));
      RUNGS.forEach(function (r) {
        var o = rows[r.id];
        var top = r.id === 'sqrt' ? pos.sqrtUp : r.id === 'poly' ? pos.polyUp : pos[r.id];
        place(o.row, rowX, top, rowW, pitch);
        o.top = top;
        if (compact) {
          var cy = pitch / 2;
          place(o.f, 0, cy - Hh(o.f) / 2);
          place(o.name, nameX, cy - Hh(o.name) / 2);
          o.l2x = nameX + W(o.name) + 12; o.l2y = cy; o.l2r = rowW;
        } else if (wide) {
          var y1 = lead + l1 / 2;
          place(o.f, 0, y1 - Hh(o.f) / 2 - 1);
          place(o.name, nameX, y1 - Hh(o.name) / 2);
          o.l2x = nameX; o.l2y = lead + l1 + 2 + l2 / 2; o.l2r = rowW;
          o.l3y = lead + l1 + 2 + l2 + 4 + l3 / 2;
        } else {
          var y1n = lead + l1 / 2;
          place(o.f, 0, y1n - Hh(o.f) / 2 - 1);
          place(o.name, W(o.f) + 6, y1n - Hh(o.name) / 2);
          o.l2x = 0; o.l2y = lead + l1 + 3 + l2 / 2; o.l2r = rowW;
        }
      });

      // ---- axis ---------------------------------------------------------------------------
      var axTop;
      if (narrow) {
        axTop = headTop + 2;
        // rotated label: reads bottom to top, beside the axis line
        var axLen = bottom - axTop;
        axLab.style.width = 'auto';
        var labW = W(axLab), labH = Hh(axLab);
        // centre of the rotated box sits at (pad + labH/2, axTop + 14 + labW/2)
        var cx = pad + labH / 2, cyy = axTop + 12 + Math.min(labW, axLen - 12) / 2;
        place(axLab, cx - labW / 2, cyy - labH / 2);
        axLab.style.display = labW <= axLen - 10 ? '' : 'none';
      } else {
        var ly = lineY[at.axis];
        axLab.style.display = '';
        place(axLab, rowX, ly + (lineH - Hh(axLab)) / 2);
        axTop = ly + 3;
      }
      place(axHead, axisX - 5, axTop);
      place(axis, axisX - 1, axTop + 7, 2, bottom - axTop - 7);
      if (!compact) place(note, noteInline ? rowX + W(axLab) + 10 : rowX, lineY[at.note] + (lineH - Hh(note)) / 2);

      // ---- header labels, rails, leaders ---------------------------------------------------
      var pLine = at.p, eLine = at.e;
      place(pnpLab, rightEdgeP - W(pnpLab), lineY[pLine] + (lineH - Hh(pnpLab)) / 2);
      place(ethLab, rightEdgeE - W(ethLab), lineY[eLine] + (lineH - Hh(ethLab)) / 2);
      var railTop = pos.brute + 3;
      place(ethRail, iL, railTop, railW, pos.ppsz + pitch - 3 - railTop);
      place(pnpRail, oL, railTop, railW);
      var lp = lineY[pLine] + (lineH + Hh(pnpLab)) / 2 + 1, le = lineY[eLine] + (lineH + Hh(ethLab)) / 2 + 1;
      place(pnpLead, oL + railW - 1, lp, 1, Math.max(0, railTop - lp));
      place(ethLead, iL + railW - 1, le, 1, Math.max(0, railTop - le));

      // ---- ETH's line ----------------------------------------------------------------------
      var ethLabRoom = oL - 8 - (rowX - 4);
      var vL = 0;
      for (; vL < TXT.ethLine.length; vL++) { setEthLine(vL); if (W(ethLineLab) <= ethLabRoom) break; }
      if (vL >= TXT.ethLine.length) { vL = TXT.ethLine.length - 1; setEthLine(vL); }
      var midY = ethRowY + ethRowH / 2;
      // the dashed rule runs the full width, broken only where its label sits at the left end
      place(ethLineLab, rowX - 4, midY - Hh(ethLineLab) / 2);
      place(ethStub, axisX + 3, midY - 1, Math.max(0, rowX - 6 - (axisX + 3)), 0);
      var ruleX = rowX - 4 + W(ethLineLab) + 2;
      place(ethRule, ruleX, midY - 1, Math.max(0, Wm - pad - ruleX), 0);

      return {
        mode: mode, pad: pad, Wm: Wm, H: H, pitch: pitch, rowX: rowX, rowW: rowW, pos: pos, bottom: bottom,
        railTop: railTop, oL: oL, iL: iL, slotY: slotY, vP: vP, vE: vE, vL: vL
      };
    }

    // ---- per-step rung line 2: tag / multiplier / note -------------------------------------
    function fitRow(o, annKey) {
      var mode = G.mode, r = o.r;
      var a = annKey ? ANN[annKey] : null;
      o.ann.className = 'wl-chip wl-ann' + (a ? ' wl-ann-' + a.cls : '');
      o.ann.style.display = a ? '' : 'none';
      var room = o.l2r - o.l2x;
      var mi, ai, done = false;
      o.mult.style.display = '';
      if (mode === 'narrow') {
        // one chip slot: the step's note replaces the tag; then the multiplier
        o.tag.style.display = a ? 'none' : '';
        var chip = a ? o.ann : o.tag;
        var av = a ? a.v : [r.tag];
        for (ai = 0; ai < av.length && !done; ai++) {
          if (a) o.ann.textContent = av[ai];
          for (mi = 0; mi < r.mult.length; mi++) {
            o.mult.textContent = r.mult[mi];
            if (W(chip) + 6 + W(o.mult) <= room) { done = true; break; }
          }
        }
        place(chip, o.l2x, o.l2y - Hh(chip) / 2);
        place(o.mult, o.l2x + W(chip) + 6, o.l2y - Hh(o.mult) / 2);
      } else if (mode === 'wide') {
        // line 2: the multiplier; line 3: the tag, then the step's note (which replaces the tag if both don't fit)
        fit(o.mult, r.mult, room);
        place(o.mult, o.l2x, o.l2y - Hh(o.mult) / 2);
        o.tag.style.display = '';
        if (a) {
          // keep the tag only if the note still fits in its fullest wording beside it
          o.ann.textContent = a.v[0];
          var okBoth = W(o.tag) + 8 + W(o.ann) <= room;
          if (!okBoth) { o.tag.style.display = 'none'; fit(o.ann, a.v, room); }
          place(o.tag, o.l2x, o.l3y - Hh(o.tag) / 2);
          place(o.ann, okBoth ? o.l2x + W(o.tag) + 8 : o.l2x, o.l3y - Hh(o.ann) / 2);
        } else place(o.tag, o.l2x, o.l3y - Hh(o.tag) / 2);
      } else {
        // multiplier, then the note after it
        for (mi = 0; mi < r.mult.length; mi++) {
          o.mult.textContent = r.mult[mi];
          if (!a) { if (W(o.mult) <= room) break; continue; }
          for (ai = 0; ai < a.v.length; ai++) {
            o.ann.textContent = a.v[ai];
            if (W(o.mult) + 10 + W(o.ann) <= room) { done = true; break; }
          }
          if (done) break;
        }
        if (mi >= r.mult.length) mi = r.mult.length - 1;
        place(o.mult, o.l2x, o.l2y - Hh(o.mult) / 2);
        if (a) {
          place(o.ann, o.l2x + W(o.mult) + 10, o.l2y - Hh(o.ann) / 2);
          if (!done) o.ann.style.display = 'none';
        }
      }
    }

    function vis(node, s) {   // s: 'full' | 'dim' | 'hide'
      node.classList.toggle('is-hidden', s === 'hide');
      node.classList.toggle('is-dim', s === 'dim');
    }

    function render(step, fromLayout) {
      step = Math.max(1, Math.min(total, step | 0 || 1));
      var prev = cur;
      cur = step;
      if (!G) return;
      kick.textContent = 'Step ' + step + ' of ' + total + ' · ' + STEPS[state][step - 1];
      if (!fromLayout) live.textContent = LIVE[state][step - 1];
      else if (!live.textContent) live.textContent = LIVE[state][step - 1];

      // row: [state, annotation, annState]
      var R = {}, P, E, L, F;
      if (state === 'eth') {
        if (step === 1) { R = { brute: ['full'], ppsz: ['full'], claim: ['hide'], sqrt: ['full'], poly: ['full'] }; P = 'hide'; E = 'hide'; }
        if (step === 2) { R = { brute: ['full'], ppsz: ['full'], claim: ['hide'], sqrt: ['full'], poly: ['dim', 'pnp', 'full'] }; P = 'full'; E = 'hide'; }
        if (step === 3) { R = { brute: ['full'], ppsz: ['full'], claim: ['hide'], sqrt: ['dim', 'eth', 'full'], poly: ['dim', 'pnp', 'dim'] }; P = 'dim'; E = 'full'; }
        L = E; F = step === 3 ? 'full' : 'hide';
      } else {
        if (step === 1) { R = { brute: ['full'], ppsz: ['full'], claim: ['hide'], sqrt: ['dim', 'eth', 'full'], poly: ['dim', 'pnp', 'dim'] }; P = 'dim'; E = 'full'; L = 'full'; }
        if (step === 2) { R = { brute: ['dim'], ppsz: ['dim'], claim: ['full', 'flag', 'full'], sqrt: ['dim', 'eth', 'dim'], poly: ['dim', 'pnp', 'dim'] }; P = 'dim'; E = 'full'; L = 'full'; }
        if (step === 3) { R = { brute: ['dim'], ppsz: ['dim'], claim: ['full', 'flag', 'dim'], sqrt: ['dim', 'eth', 'dim'], poly: ['full', 'ok', 'full'] }; P = 'full'; E = 'dim'; L = 'dim'; }
        F = 'hide';
      }
      var open = state === 'claim' && step >= 2;   // the claim slot is open: lower rungs move down

      // first reveal of the eth ladder: rungs appear top to bottom (flair, < 1s total)
      var stagger = state === 'eth' && step === 1 && prev !== 1 && !reducedMotion && !fromLayout;
      ORDER.forEach(function (id, i) {
        var o = rows[id], s = R[id];
        o.row.style.transitionDelay = stagger ? (i * 120) + 'ms' : '0ms';
        vis(o.row, s[0]);
        o.row.classList.toggle('is-dim', s[0] === 'dim');
        fitRow(o, s[1] || null);
        o.ann.classList.toggle('is-annDim', s[2] === 'dim');
        var dy = (open && (id === 'sqrt' || id === 'poly')) ? G.pitch : 0;
        o.row.style.transform = s[0] === 'hide' ? 'translateX(-16px)' : (dy ? 'translateY(' + dy + 'px)' : '');
      });
      axis.style.transitionDelay = axHead.style.transitionDelay = '0ms';

      // P ≠ NP's bracket spans every rung above n^3 (down to 2^√n, wherever it sits)
      var sqBottom = (open ? G.pos.sqrtDn : G.pos.sqrtUp) + G.pitch - 3;
      pnpRail.style.height = px(sqBottom - G.railTop);
      [pnpRail, pnpLab, pnpLead].forEach(function (n) { vis(n, P); });
      [ethRail, ethLab, ethLead].forEach(function (n) { vis(n, E); });
      [ethStub, ethRule, ethLineLab].forEach(function (n) { vis(n, L); });

      // footer: in the freed slot under n^3 (eth state)
      if (state === 'eth') {
        var fy = G.pos.polyUp + G.pitch + 2;
        foot.style.width = 'auto';
        var room = G.Wm - G.pad - G.rowX;
        fit(foot, TXT.foot, room);
        place(foot, G.rowX, fy + Math.max(0, (Math.min(G.pitch, G.H - fy - 2) - Hh(foot)) / 2));
      }
      vis(foot, F);
      root.setAttribute('data-step', String(step));
    }

    // start with the rungs hidden, then reveal, so the first state transition is visible
    ORDER.forEach(function (id) { rows[id].row.classList.add('is-hidden'); });
    var first = parseInt(el.getAttribute('data-step'), 10) || 1;
    layout();
    function start() { started = true; render(parseInt(el.getAttribute('data-step'), 10) || first); }
    if (reducedMotion) start();
    else requestAnimationFrame(function () { requestAnimationFrame(start); });

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
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { layout(); });
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
