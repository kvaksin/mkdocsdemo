---
title: "Administration Documentation Portal"
description: "Central hub for Webex Calling, Infrastructure, Reporting, and Operational documentation."
hide:
  - toc
---

# Administration Documentation Portal

Welcome to the unified administration portal.  
This site provides structured, engineer‑ready documentation for **Webex Calling**, **Training materials**, **Quick guides**.
---

## 📁 Main Documentation Areas

<div class="grid cards" markdown>

-   ### Webex Calling
    **Core collaboration platform documentation**
    - [Voicemail Admin Guide](webex-calling/voicemail.md)  
    - User & Workspace Management  
    - Call Queues, Hunt Groups, Auto Attendants  
    - Schedules & Holidays  
    **→ [Open Webex Calling Docs](webex-calling/)**

-   ### Training Materials
    **Backend systems and automation**
    - Linux server configuration  
    - Systemd services  
    - SFTP chroot  
    - File Browser deployment  
    - CI/CD & automation tooling  
    **→ [Open Training Materials](training/)**


</div>

---

## 🧭 Quick Navigation Map

<div class="mermaid">

%%{init: {'securityLevel':'loose'}}%%
flowchart TD
    A[Documentation Portal] --> B[Webex Calling]
    A --> C[Training Materials]

    B --> B1[Voicemail Admin Guide]
    B --> B2[User & Workspace Management]

    click B1 "webex-calling/voicemail.md" "Open Voicemail Guide"

</div>
