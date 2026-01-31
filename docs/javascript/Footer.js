const footer = document.getElementById('footer')
footer.innerHTML = `
<footer class="relative overflow-hidden bg-slate-950 text-slate-300">
  <div class="absolute inset-0">
    <div class="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"></div>
    <div class="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl"></div>
  </div>

  <div class="relative mx-auto max-w-7xl px-6 py-20 pb-10 lg:px-8">
    <div class="grid gap-14 lg:grid-cols-5">
      <div class="lg:col-span-2" data-aos="fade-up">
        <div class="flex items-center gap-4">
           <a href="index.html" class="flex items-center gap-3">
            <img src="/docs/assets/logo.png" class="md:h-24 h-22" alt="">
          </a>
        </div>

        <p class="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
          BackupVerified provides automated MySQL backups with restore verification.
          You don’t just store backups — you prove they work.
        </p>

        <div class="mt-6 flex items-center gap-3">
          <a href="#"
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="#"
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="mailto:support@backupverified.com"
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <h4 class="text-sm font-semibold uppercase tracking-wide text-white">
          Product
        </h4>
        <ul class="mt-5 space-y-3 text-sm">
          <li><a href="how-it-works.html" class="hover:text-white">How it works</a></li>
          <li><a href="features.html" class="hover:text-white">Features</a></li>
          <li><a href="pricing.html" class="hover:text-white">Pricing</a></li>
          <li><a href="documentation.html" class="hover:text-white">Documentation</a></li>
        </ul>
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <h4 class="text-sm font-semibold uppercase tracking-wide text-white">
          Company
        </h4>
        <ul class="mt-5 space-y-3 text-sm">
          <li><a href="about.html" class="hover:text-white">About</a></li>
          <li><a href="contact.html" class="hover:text-white">Contact</a></li>
          <li><a href="login.html" class="hover:text-white">Client login</a></li>
          <li><a href="signup.html" class="hover:text-white">Sign up</a></li>
        </ul>
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <h4 class="text-sm font-semibold uppercase tracking-wide text-white">
          Legal
        </h4>
        <ul class="mt-5 space-y-3 text-sm">
          <li><a href="terms.html" class="hover:text-white">Terms of Service</a></li>
          <li><a href="privacy.html" class="hover:text-white">Privacy Policy</a></li>
        </ul>
      </div>
    </div>

    <div class="mt-16 border-t border-white/10 pt-8">
      <div class="flex text-center items-center justify-center gap-4 ">
        <p class="text-sm text-slate-400">
          © <span id="year"></span> BackupVerified. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>

<script>
  document.getElementById('year').textContent = new Date().getFullYear();
</script>


`