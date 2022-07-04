const htmlElement = document.documentElement;
const toggle = document.querySelector("dark-mode-toggle");

// Set or remove the `dark` class the first time.
toggle.mode === "dark"
  ? htmlElement.classList.add("dark")
  : htmlElement.classList.remove("dark");

// Listen for toggle changes (which includes `prefers-color-scheme` changes)
// and toggle the `dark` class accordingly.
toggle.addEventListener("colorschemechange", () => {
  htmlElement.classList.toggle("dark", toggle.mode === "dark");
});
