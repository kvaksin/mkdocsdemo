function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text);
  } else {
    const temp = document.createElement("textarea");
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
  }
}

function autoHidePassword(span, icon) {
  setTimeout(() => {
    span.innerText = "••••••••";
    if (icon) icon.innerText = "visibility";
  }, 5000);
}

function initCredentials() {

  /* ------------------------------
     COPY USERNAME BUTTON
  ------------------------------ */
  document.querySelectorAll(".copy-btn").forEach(btn => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = "1";

    btn.addEventListener("click", () => {
      const text = btn.getAttribute("data-copy");
      copyText(text);

      const icon = btn.querySelector(".md-icon");
      if (icon) {
        icon.innerText = "check";
        setTimeout(() => icon.innerText = "content_copy", 1200);
      }
    });
  });


  /* ------------------------------
     COPY PASSWORD BUTTON
  ------------------------------ */
  document.querySelectorAll(".copy-pass").forEach(btn => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = "1";

    btn.addEventListener("click", () => {
      const pwd = btn.getAttribute("data-copy");
      copyText(pwd);

      const icon = btn.querySelector(".md-icon");
      if (icon) {
        icon.innerText = "check";
        setTimeout(() => icon.innerText = "content_copy", 1200);
      }
    });
  });


  /* ------------------------------
     PASSWORD VISIBILITY TOGGLE
  ------------------------------ */
  document.querySelectorAll(".toggle-pass").forEach(btn => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = "1";

    btn.addEventListener("click", () => {
      const span = btn.parentElement.querySelector(".password");
      const real = span.getAttribute("data-password");
      const icon = btn.querySelector(".md-icon");

      if (span.innerText === "••••••••") {
        // Reveal
        span.innerText = real;
        icon.innerText = "visibility_off";

        // Auto-hide
        autoHidePassword(span, icon);

      } else {
        // Hide
        span.innerText = "••••••••";
        icon.innerText = "visibility";
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", initCredentials);
document.body.addEventListener("md-content-rendered", initCredentials);
