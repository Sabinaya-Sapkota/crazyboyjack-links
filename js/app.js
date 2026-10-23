(function () {
  "use strict";

  var ICONS = {
    youtube: '<path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/>',
    tiktok: '<path d="M19.6 6.7a4.8 4.8 0 0 1-3.8-4.2V2h-3.4v13.4a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .8.1V9.2a6.3 6.3 0 1 0 5.5 6.2V8.9a8.2 8.2 0 0 0 4.8 1.5V7a4.8 4.8 0 0 1-1-.3z"/>',
    facebook: '<path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5.2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.4" cy="6.6" r="1.25"/>'
  };

  var $ = function (id) { return document.getElementById(id); };
  var grid = $("grid");

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* socials */
  $("socials").innerHTML = SOCIALS.map(function (s) {
    return '<a class="btn' + (s.primary ? " yt" : "") + '" href="' + esc(s.url) + '" target="_blank" rel="noopener">' +
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' + (ICONS[s.id] || "") + "</svg>" +
      "<span>" + esc(s.name) + "<small>" + esc(s.handle) + "</small></span></a>";
  }).join("");

  /* channel cards */
  function render() {
    grid.innerHTML = CHANNELS.map(function (c) {
      return '<a class="ch" href="https://www.youtube.com/@' + esc(c.handle) + '" target="_blank" rel="noopener">' +
        '<img src="assets/channels/' + esc(c.img) + '" alt="" width="64" height="64" loading="lazy">' +
        "<span><b>" + esc(c.name) + "</b><i>@" + esc(c.handle) + "</i></span></a>";
    }).join("");
  }
  render();

  /* share */
  var toast = $("toast"), tt;
  function say(msg) {
    toast.textContent = msg; toast.classList.add("show");
    clearTimeout(tt); tt = setTimeout(function () { toast.classList.remove("show"); }, 2200);
  }
  $("share").addEventListener("click", function () {
    var data = { title: document.title, url: location.href.split("#")[0] };
    if (navigator.share) { navigator.share(data).catch(function () {}); return; }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(data.url).then(function () { say("Link copied"); }, function () { say("Copy failed. Copy the address bar link instead."); });
    } else { say("Copy the address bar link to share."); }
  });
})();
