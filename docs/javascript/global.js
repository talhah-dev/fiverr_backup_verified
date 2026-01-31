const lenis = new Lenis({
  autoRaf: true,
});

  const bottomToTopScroll = document.getElementById("bottomToTopScroll");

  bottomToTopScroll.innerHTML = `
  <div
    class="bottomToTop fixed bottom-6 right-6 z-40 w-12 h-12 hidden cursor-pointer rounded-full 
          bg-slate-800
          text-white flex items-center justify-center
          shadow-lg hover:shadow-xl hover:scale-105
          transition-all duration-300">
        <i class="fa-solid fa-angle-up text-lg text-white"></i>
  </div>
  `;

  document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.querySelector(".bottomToTop");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        scrollToTopBtn.classList.remove("hidden");
        scrollToTopBtn.classList.add("flex");
      } else {
        scrollToTopBtn.classList.add("hidden");
        scrollToTopBtn.classList.remove("flex");
      }
    });

    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });


AOS.init({
  once: true,
  duration: 1000
});