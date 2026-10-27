/* ToC for the ETH explainer: the kit's rail + mobile "Contents" disclosure, re-skinned (R-13).
   Numbered chapters with full titles (no glyphs, no truncation), the current chapter marked by an
   accent bar, a tinted pill and an accent number; visited chapters in secondary ink, upcoming ones
   muted. Progress is a thin accent track with "Chapter N of 9 · ~M min" under it. The mobile
   summary reads "Contents · Chapter N of 9: <short title>" and follows the scroll.
   Sources: h2[id] and h3[id] inside main. h3s show only under the current h2.
   An h2 may carry data-short="…" for the short title used in the mobile summary. */
(function () {
  'use strict';
  var root = document.querySelector('[data-toc-source]') || document.querySelector('main') || document.body;
  var rail = document.querySelector('[data-toc]');
  var mobile = document.querySelector('[data-toc-mobile]');
  if (!rail && !mobile) return;

  var slug = function (s) { return s.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').slice(0, 60); };
  var heads = Array.prototype.slice.call(root.querySelectorAll('h2, h3')).filter(function (h) {
    return !h.closest('[data-toc-skip], .d-check, figure, [data-widget]');
  });
  heads.forEach(function (h) { if (!h.id) h.id = slug(h.textContent) || 'section'; });
  var tree = [];
  heads.forEach(function (h) {
    if (h.tagName === 'H2' || !tree.length) tree.push({ h: h, subs: [] });
    else tree[tree.length - 1].subs.push(h);
  });
  if (!tree.length) return;
  var total = tree.length;
  var short = function (node) {
    var s = node.h.getAttribute('data-short');
    return s || node.h.textContent.trim().split(':')[0];
  };
  // a chapter's anchor is its section when there is one, so the chapter kicker counts as inside it
  var anchorOf = function (h) { return (h.tagName === 'H2' && h.closest('section')) || h; };

  var chapterLink = function (node, i) {
    var a = document.createElement('a');
    a.href = '#' + node.h.id;
    a.className = 'toc-ch';
    var n = document.createElement('span');
    n.className = 'toc-n'; n.textContent = String(i + 1);
    n.setAttribute('aria-hidden', 'true');
    var t = document.createElement('span');
    t.className = 'toc-t'; t.textContent = node.h.textContent.trim();
    a.appendChild(n); a.appendChild(t);
    return a;
  };
  var subLink = function (h) {
    var a = document.createElement('a');
    a.href = '#' + h.id; a.className = 'sub';
    a.textContent = h.textContent.trim();
    return a;
  };

  var minutes = rail && rail.getAttribute('data-minutes');
  var railLinks = [], mobLinks = [], progBar = null, timeEl = null, sumText = null;

  if (rail) {
    var h1 = document.querySelector('h1');
    var title = document.createElement('div');
    title.className = 'd-rail-title';
    title.textContent = h1 ? h1.textContent.trim() : document.title;
    var label = document.createElement('div');
    label.className = 'd-rail-label'; label.textContent = 'Contents';
    var nav = document.createElement('nav');
    nav.setAttribute('aria-label', 'Contents');
    tree.forEach(function (node, i) {
      var a = chapterLink(node, i);
      nav.appendChild(a);
      node.a = a;
      railLinks.push({ a: a, h: node.h, node: node });
      if (node.subs.length) {
        var subs = document.createElement('div'); subs.className = 'subs';
        var inner = document.createElement('div');
        node.subs.forEach(function (s) {
          var sa = subLink(s); inner.appendChild(sa);
          railLinks.push({ a: sa, h: s, node: node });
        });
        subs.appendChild(inner); nav.appendChild(subs); node.subsEl = subs;
      }
    });
    var prog = document.createElement('div'); prog.className = 'd-rail-prog'; prog.setAttribute('aria-hidden', 'true');
    progBar = document.createElement('b'); prog.appendChild(progBar);
    timeEl = document.createElement('div'); timeEl.className = 'd-rail-time';
    rail.textContent = '';
    rail.appendChild(title); rail.appendChild(label); rail.appendChild(nav); rail.appendChild(prog); rail.appendChild(timeEl);
    if (h1 && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { title.classList.toggle('on', !es[0].isIntersecting); }).observe(h1);
    }
  }

  if (mobile) {
    mobile.textContent = '';
    var sum = document.createElement('summary');
    var k = document.createElement('span'); k.className = 'toc-sum-k'; k.textContent = 'Contents ·';
    sumText = document.createElement('span'); sumText.className = 'toc-sum-t';
    sum.appendChild(k); sum.appendChild(sumText);
    var mnav = document.createElement('nav'); mnav.setAttribute('aria-label', 'Contents');
    tree.forEach(function (node, i) { var a = chapterLink(node, i); mnav.appendChild(a); mobLinks.push(a); });
    mnav.addEventListener('click', function (e) { if (e.target.closest('a')) mobile.open = false; });
    mobile.appendChild(sum); mobile.appendChild(mnav);
  }

  // scrollspy: the current chapter is the last one whose section top has passed 30% of the viewport
  var activeCh = -1, activeSub = null;
  var spy = function () {
    var y = window.innerHeight * 0.3, ci = 0;
    tree.forEach(function (node, i) { if (anchorOf(node.h).getBoundingClientRect().top <= y) ci = i; });
    var node = tree[ci], sub = null;
    node.subs.forEach(function (s) { if (s.getBoundingClientRect().top <= y) sub = s; });
    if (ci !== activeCh) {
      activeCh = ci;
      tree.forEach(function (n, i) {
        if (n.a) {
          n.a.classList.toggle('on', i === ci);
          n.a.classList.toggle('is-visited', i < ci);
          if (i === ci) n.a.setAttribute('aria-current', 'location'); else n.a.removeAttribute('aria-current');
        }
        if (n.subsEl) n.subsEl.classList.toggle('open', i === ci);
        if (mobLinks[i]) { mobLinks[i].classList.toggle('on', i === ci); }
      });
      var line = 'Chapter ' + (ci + 1) + ' of ' + total;
      if (timeEl) timeEl.textContent = line + (minutes ? ' · ~' + minutes + ' min' : '');
      if (sumText) sumText.textContent = line + ': ' + short(node);
    }
    if (sub !== activeSub) {
      activeSub = sub;
      railLinks.forEach(function (r) { if (r.a.classList.contains('sub')) r.a.classList.toggle('on', r.h === sub); });
    }
    if (progBar) {
      var el = document.documentElement;
      var p = Math.max(0, Math.min(1, el.scrollTop / Math.max(1, el.scrollHeight - el.clientHeight)));
      progBar.style.width = (p * 100).toFixed(1) + '%';
    }
  };
  spy();
  window.addEventListener('scroll', spy, { passive: true });
  window.addEventListener('resize', spy);
})();
