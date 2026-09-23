  var root = document.documentElement;
  try {
    var saved = localStorage.getItem('theme');
    if (saved) root.setAttribute('data-theme', saved);
  } catch (e) {}

  document.getElementById('theme-toggle').addEventListener('click', function () {
    var current = root.getAttribute('data-theme') === 'dark' ? 'dark' :
                  (root.getAttribute('data-theme') === 'light' ? 'light' :
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  var buttons = document.querySelectorAll('.nav-btn');
  var panels = document.querySelectorAll('.panel');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      panels.forEach(function (p) { p.classList.remove('active'); });
      btn.classList.add('active');
      document.getElementById(btn.dataset.target).classList.add('active');
      document.getElementById('content').scrollTo({ top: 0, behavior: 'auto' });
    });
  });

  var copyBtn = document.getElementById('copy-email');
  copyBtn.addEventListener('click', function () {
    try {
      navigator.clipboard.writeText('hola@alexsam.dev');
      copyBtn.textContent = 'Copiado';
      copyBtn.dataset.copied = 'true';
      setTimeout(function () { copyBtn.textContent = 'Copiar correo'; copyBtn.dataset.copied = 'false'; }, 1800);
    } catch (e) {}
  });