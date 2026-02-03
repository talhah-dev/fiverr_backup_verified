const navbar = document.getElementById("navbar");

navbar.innerHTML = `
<header class="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
  <nav class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="flex h-20 items-center justify-between">
      <a href="dashboard.html" class="flex items-center gap-3">
        <img src="/docs/assets/logo.png" class="md:h-16 h-14" alt="Backup Verified">
      </a>

      <div class="hidden lg:flex items-center gap-8">
        <a href="dashboard.html" class="text-sm font-semibold text-slate-700 hover:text-slate-900">Dashboard</a>
        <a href="backups.html" class="text-sm font-semibold text-slate-700 hover:text-slate-900">Backups</a>
        <a href="verifications.html" class="text-sm font-semibold text-slate-700 hover:text-slate-900">Verifications</a>
        <a href="billing.html" class="text-sm font-semibold text-slate-700 hover:text-slate-900">Billing</a>
        <a href="settings.html" class="text-sm font-semibold text-slate-700 hover:text-slate-900">Settings</a>
      </div>

      <div class="hidden lg:flex items-center gap-3">
        <button id="adminLogoutBtn"
          class="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900">
          Logout
        </button>

        <a href="contact.html"
          class="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20">
          Support
          <i class="fa-solid fa-headset"></i>
        </a>
      </div>

      <button id="adminNavToggle" type="button"
        class="lg:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
        aria-controls="adminMobileNav" aria-expanded="false">
        <i id="adminNavOpenIcon" class="fa-solid fa-bars"></i>
        <i id="adminNavCloseIcon" class="fa-solid fa-xmark !hidden"></i>
      </button>
    </div>

    <div id="adminMobileNav"
      class="lg:hidden overflow-hidden max-h-0 opacity-0 pointer-events-none transition-all duration-300 ease-in-out">
      <div class="pb-6 pt-2">
        <div class="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">

          <a href="dashboard.html"
            class="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            <span class="flex items-center gap-3">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-700">
                <i class="fa-solid fa-chart-line"></i>
              </span>
              Dashboard
            </span>
            <i class="fa-solid fa-angle-right text-slate-400"></i>
          </a>

          <a href="backups.html"
            class="mt-1 flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            <span class="flex items-center gap-3">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-700">
                <i class="fa-solid fa-database"></i>
              </span>
              Backups
            </span>
            <i class="fa-solid fa-angle-right text-slate-400"></i>
          </a>

          <a href="verifications.html"
            class="mt-1 flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            <span class="flex items-center gap-3">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-600/10 text-emerald-700">
                <i class="fa-solid fa-shield-halved"></i>
              </span>
              Verifications
            </span>
            <i class="fa-solid fa-angle-right text-slate-400"></i>
          </a>

          <a href="billing.html"
            class="mt-1 flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            <span class="flex items-center gap-3">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-600/10 text-amber-700">
                <i class="fa-solid fa-receipt"></i>
              </span>
              Billing
            </span>
            <i class="fa-solid fa-angle-right text-slate-400"></i>
          </a>

          <a href="settings.html"
            class="mt-1 flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            <span class="flex items-center gap-3">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900/5 text-slate-900">
                <i class="fa-solid fa-gear"></i>
              </span>
              Settings
            </span>
            <i class="fa-solid fa-angle-right text-slate-400"></i>
          </a>

          <div class="mt-3 grid gap-2 sm:grid-cols-2">
            <a href="contact.html"
              class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
              Support
              <i class="fa-solid fa-headset"></i>
            </a>

            <button id="adminLogoutBtnMobile"
              class="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              Logout
              <i class="fa-solid fa-right-from-bracket"></i>
            </button>
          </div>

        </div>
      </div>
    </div>
  </nav>
</header>
`;

const navToggle = document.getElementById('adminNavToggle');
const mobileNav = document.getElementById('adminMobileNav');
const navOpenIcon = document.getElementById('adminNavOpenIcon');
const navCloseIcon = document.getElementById('adminNavCloseIcon');

function setIcons(isOpen) {
  if (isOpen) {
    navOpenIcon.classList.add('hidden');
    navCloseIcon.classList.remove('hidden');
  } else {
    navCloseIcon.classList.add('hidden');
    navOpenIcon.classList.remove('hidden');
  }
}

function openMobileNav() {
  mobileNav.classList.remove('max-h-0', 'opacity-0', 'pointer-events-none');
  mobileNav.classList.add('max-h-[560px]', 'opacity-100');
  navToggle.setAttribute('aria-expanded', 'true');
  setIcons(true);
}

function closeMobileNav() {
  mobileNav.classList.add('max-h-0', 'opacity-0', 'pointer-events-none');
  mobileNav.classList.remove('max-h-[560px]', 'opacity-100');
  navToggle.setAttribute('aria-expanded', 'false');
  setIcons(false);
}

navToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  if (isOpen) closeMobileNav();
  else openMobileNav();
});

document.addEventListener('click', (e) => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  if (!isOpen) return;

  const clickedInside = mobileNav.contains(e.target) || navToggle.contains(e.target);
  if (!clickedInside) closeMobileNav();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') closeMobileNav();
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) closeMobileNav();
});

function logout() {
  localStorage.removeItem('bv_token');
  window.location.href = 'login.html';
}

document.getElementById('adminLogoutBtn')?.addEventListener('click', logout);
document.getElementById('adminLogoutBtnMobile')?.addEventListener('click', logout);
