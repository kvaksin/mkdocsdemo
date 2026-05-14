document.addEventListener("DOMContentLoaded", () => {
  const topBtn = document.createElement("button");
  topBtn.id = "back-to-top-btn";
  topBtn.textContent = "Top ↑";
  document.body.appendChild(topBtn);

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topBtn.classList.add("visible");
    } else {
      topBtn.classList.remove("visible");
    }
  });
});
