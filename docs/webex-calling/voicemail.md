---
title: "Webex Calling – Voicemail Admin Guide"
description: "Admin procedures for resetting voicemail PINs and enabling voicemail email notifications for Users, Shared Mailboxes, and Workspaces."
tags:
  - webex
  - calling
  - voicemail
  - admin
  - control-hub
authors:
  - Konstantin Vaksin
---


# Webex Calling – Voicemail Administration Guide

## 1. Reset Voicemail PIN

## User Voicemail PIN Reset

<div class="grid cards" markdown>

![User Voicemail](media/uservoicemail.gif)

-   ### **Steps**
    1. Go to **admin.webex.com → Users**
    2. Select the user
    3. Open **Calling**
    4. Scroll to **Voicemail**
    5. Click **Reset Voicemail PIN**
    6. Choose:
       - Auto‑email temporary PIN  
       - Or set PIN manually

-   ### **Details**
    - Admins **cannot view** existing PINs  
    - User must **change PIN at next login**  
    - Works for all Webex Calling Professional users  
    - Recommended: let system generate temporary PIN  

</div>

---

## Shared Voicemail PIN Reset  
*(Call Queue, Hunt Group, Auto Attendant)*

<div class="grid cards" markdown>

-   ### **Steps**
    1. Go to **Services → Calling → Features**
    2. Select **Call Queue / Hunt Group / Auto Attendant**
    3. Open the feature
    4. Go to **Voicemail**
    5. Click **Reset Voicemail PIN**

-   ### **Details**
    - Shared mailbox PIN is used by multiple agents  
    - Admin receives temporary PIN  
    - Best practice: store PIN in team password vault  
    - Email notifications recommended for shared mailboxes  

</div>

---

## Workspace Voicemail PIN Reset

<div class="grid cards" markdown>

-   ### **Steps**
    1. Go to **Management → Workspaces**
    2. Select workspace
    3. Open **Calling**
    4. Scroll to **Voicemail**
    5. Click **Reset Voicemail PIN**

-   ### **Details**
    - Used for meeting rooms, huddle spaces, devices  
    - PIN is required only if voicemail is accessed from device  
    - Email notifications can be sent to room mailbox  

</div>

---

# 2. Enable Voicemail Email Notifications

## User Voicemail Email Delivery

<div class="grid cards" markdown>

-   ### **Steps**
    1. Go to **Users → Calling → Voicemail**
    2. Enable **Email a copy of voicemail**
    3. Enter user email
    4. Choose:
       - Email only  
       - Email + WAV  
       - Delete after sending (optional)

-   ### **Details**
    - WAV attachment = 8–30 KB per message  
    - Transcription can be enabled  
    - “Delete after sending” reduces mailbox storage  
    - Recommended for executives and mobile workers  

</div>

---

## Shared Voicemail Email Delivery  
*(Queue / Hunt / AA)*

<div class="grid cards" markdown>

-   ### **Steps**
    1. Go to **Services → Calling → Features**
    2. Select the feature
    3. Open **Voicemail**
    4. Enable **Email a copy of voicemail**
    5. Enter shared mailbox or distribution list

-   ### **Details**
    - Best practice: use **distribution list**  
    - Ensures multiple agents receive voicemail  
    - WAV attachment recommended for support teams  
    - Works even if no one checks voicemail via phone  

</div>

---

## Workspace Voicemail Email Delivery

<div class="grid cards" markdown>

-   ### **Steps**
    1. Go to **Workspaces → Calling → Voicemail**
    2. Enable **Email a copy of voicemail**
    3. Enter room or team email
    4. Choose attachment option

-   ### **Details**
    - Ideal for meeting rooms with shared responsibility  
    - Room mailbox receives voicemail alerts  
    - WAV attachment optional  

</div>

---

# 3. Summary Table

| Task | User | Shared | Workspace |
|------|------|--------|-----------|
| Reset PIN | Users → Calling | Features → Voicemail | Workspaces → Calling |
| Email notifications | Users → Calling | Features → Voicemail | Workspaces → Calling |
| WAV attachment | Yes | Yes | Yes |
| Transcription | Yes | Yes | Yes |

---

# 4. Engineer Checklist

<div class="grid cards" markdown>

-   ### **Configuration**
    - [ ] Voicemail enabled  
    - [ ] PIN reset  
    - [ ] Email notifications enabled  
    - [ ] Distribution list validated  

-   ### **Testing**
    - [ ] Leave test voicemail  
    - [ ] Confirm email delivery  
    - [ ] Confirm WAV attachment  
    - [ ] Document configuration  

</div>

---

# 5. Voicemail Flow Diagram

<div class="mermaid">
flowchart TD
    A[Caller Leaves Voicemail] --> B[Webex Voicemail Server]
    B --> C{Mailbox Type}
    C --> D[User]
    C --> E[Shared Queue/Hunt/AA]
    C --> F[Workspace]
    D --> G[Email Notification]
    E --> G
    F --> G
    G --> H[Recipient Receives Email/WAV]
</div>
