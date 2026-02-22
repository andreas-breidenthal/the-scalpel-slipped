// The Scalpel Slipped — site navigation injector
document.addEventListener('DOMContentLoaded', function () {
  const el = document.getElementById('site-nav');
  if (!el) return;
  el.innerHTML = `
    <nav class="site-nav">
      <a href="https://andreas-breidenthal.github.io/" class="home">Andreas Breidenthal</a>
      <div class="site-nav-links">
        <a href="index.html">Contents</a>
        <a href="https://github.com/andreas-breidenthal/the-scalpel-slipped" target="_blank" rel="noopener">GitHub</a>
      </div>
    </nav>`;
});
