document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".site-header__toggle");
  const menu = document.getElementById("site-header-menu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
});
