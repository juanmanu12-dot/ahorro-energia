/* profile-menu.js — incluir en todas las páginas con menú de perfil */

(function () {
  // Leer datos del usuario guardados
  const userData = JSON.parse(sessionStorage.getItem('user') || '{}');
  const type = sessionStorage.getItem('accountType') || 'hogar';

  const typeLabels = {
    hogar:      '🏠 Persona de Hogar',
    empresa:    '🏢 Empresa',
    estudiante: '🎓 Estudiante',
  };

  const dashRoutes = {
    hogar:      '/hogar/inicio/index.html',
    empresa:    '/empresa/inicio/index.html',
    estudiante: '/estudiante/inicio/index.html',
  };

  // Inyectar dropdown en cada .avatar-wrap que encuentre
  document.querySelectorAll('.avatar-wrap').forEach(wrap => {
    const btn = wrap.querySelector('.avatar-btn');
    if (!btn) return;

    // Crear dropdown
    const dd = document.createElement('div');
    dd.className = 'profile-dropdown';
    dd.innerHTML = `
      <div class="pd-header">
        <div class="pd-name">${userData.username || 'Usuario'}</div>
        <div class="pd-type">${typeLabels[type] || 'Hogar'}</div>
      </div>
      <a href="#" class="pd-item" id="pd-config">
        <span class="pd-item-icon">⚙️</span> Configuración
      </a>
      <div class="pd-divider"></div>
      <button class="pd-item" id="pd-switch">
        <span class="pd-item-icon">🔄</span> Cambiar de cuenta
      </button>
      <button class="pd-item danger" id="pd-logout">
        <span class="pd-item-icon">🚪</span> Cerrar sesión
      </button>
    `;
    wrap.appendChild(dd);

    // Abrir / cerrar
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      dd.classList.toggle('open');
    });

    document.addEventListener('click', () => dd.classList.remove('open'));

    // Acciones
    dd.querySelector('#pd-switch').addEventListener('click', () => {
      sessionStorage.removeItem('accountType');
      window.location.href = resolveRoot() + 'auth/tipo-cuenta/index.html';
    });

    dd.querySelector('#pd-logout').addEventListener('click', () => {
      sessionStorage.clear();
      window.location.href = resolveRoot() + 'auth/login/index.html';
    });

    dd.querySelector('#pd-config').addEventListener('click', (e) => {
      e.preventDefault();
      // Abrir modal de configuración si existe
      const modal = document.getElementById('configModal');
      if (modal) {
        modal.classList.add('open');
        dd.classList.remove('open');
      }
    });
  });

  // Calcula el path relativo a la raíz según profundidad
  function resolveRoot() {
    const depth = window.location.pathname.split('/').filter(Boolean).length;
    // En servidor local o file:// calcula ../../ según profundidad
    return '../'.repeat(Math.max(depth - 1, 0));
  }
})();
