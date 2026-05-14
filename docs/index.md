# Contact Center Documentation
## Overview
General overview of the Contact Center documentation.

## Components

- [Packaged Contact Center Enterprise (PCCE) 15.0 2K](cc/index.md)
- [Verint WFO](verint.md)
- [Logepal](logepal.md)

!!! note "Manual Rebuild MkDocs after pulling changes (normally not required)"
    Use these commands when permissions break the build or after updating the repo:

    bash

    source /opt/docs/venv/bin/activate

    sudo chown -R kvaksin:kvaksin /opt/docs/site
    
    git pull
    
    /opt/docs/venv/bin/mkdocs build
    

<script>
document.addEventListener("DOMContentLoaded", () => {
  const server = window.location.hostname;
  const protocol = window.location.protocol === "https:" ? "https:" : "http:";
  const url = `${protocol}//${server}:9003/hooks/update-docs`;

  fetch(url)
    .then(response => {
      if (response.ok) {
        showBanner("Documentation update triggered.", "#dff0d8", "#3c763d");
      } else {
        showBanner("Documentation update failed.", "#f2dede", "#a94442");
      }
    })
    .catch(() => {
      showBanner("Documentation update failed.", "#f2dede", "#a94442");
    });
});

function showBanner(text, bg, color) {
  const msg = document.createElement("div");
  msg.textContent = text;
  msg.style = `
    padding:10px;
    background:${bg};
    color:${color};
    position:fixed;
    top:0;
    left:0;
    width:100%;
    z-index:9999;
    text-align:center;
    font-weight:500;
  `;
  document.body.prepend(msg);
  setTimeout(() => msg.remove(), 5000);
}
</script>
