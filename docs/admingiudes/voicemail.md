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

# Webex Calling – Voicemail Admin Guide

This document provides a complete administrator workflow for managing voicemail in Webex Calling, including:

- Resetting voicemail PINs  
- Enabling voicemail email notifications  
- User, Shared, and Workspace voicemail configuration  

---

## !!! note "Scope"
This guide applies to **Webex Calling (Multi‑Tenant)** using **Control Hub**.

---

# 1. Reset Voicemail PIN (Admin Side)

Admins cannot view existing PINs — only **reset** them.  
PIN resets are performed in **Control Hub**.

---

## 1.1 Reset Voicemail PIN for a User

### Steps
1. Go to **https://admin.webex.com → Management → Users**  
2. Select the user  
3. Open the **Calling** tab  
4. Scroll to **Voicemail**  
5. Click **Reset Voicemail PIN**  
6. Choose:
   - Send temporary PIN to user  
   - Or set a temporary PIN manually  

### Result
User is forced to create a new PIN at next voicemail login.

---

## 1.2 Reset Voicemail PIN for Shared Voicemail  
*(Call Queue, Hunt Group, Auto Attendant)*

### Steps
1. Go to **Services → Calling → Features**  
2. Select:
   - **Call Queue**, or  
   - **Hunt Group**, or  
   - **Auto Attendant**  
3. Open the feature  
4. Go to **Voicemail**  
5. Click **Reset Voicemail PIN**

### Result
Admin receives a temporary PIN to distribute to the team.

---

## 1.3 Reset Voicemail PIN for a Workspace

### Steps
1. Go to **Management → Workspaces**  
2. Select the workspace  
3. Open **Calling**  
4. Scroll to **Voicemail**  
5. Click **Reset Voicemail PIN**

---

# 2. Enable Voicemail Email Notifications

Webex Calling supports:
- Email notification  
- Email with WAV attachment  
- Optional transcription  

---

## 2.1 Enable Email Notification for a User

### Steps
1. Go to **Users → Select User**  
2. Open **Calling**  
3. Scroll to **Voicemail**  
4. Enable:
   - **Email a copy of voicemail**  
   - Enter email address  
   - Choose:
     - Email only  
     - Email with WAV attachment  
     - Delete after sending (optional)  

---

## 2.2 Enable Email Notification for Shared Voicemail  
*(Call Queue, Hunt Group, Auto Attendant)*

### Steps
1. Go to **Services → Calling → Features**  
2. Select the feature  
3. Go to **Voicemail**  
4. Enable:
   - **Email a copy of voicemail**  
   - Enter shared mailbox or distribution list  
   - Choose attachment option  

---

## 2.3 Enable Email Notification for Workspace Voicemail

### Steps
1. Go to **Management → Workspaces**  
2. Select workspace  
3. Open **Calling**  
4. Scroll to **Voicemail**  
5. Enable:
   - **Email a copy of voicemail**  
   - Enter room or team email  
   - Choose attachment option  

---

# 3. Summary Table

| Task | User | Shared (Queue/Hunt/AA) | Workspace |
|------|------|-------------------------|-----------|
| Reset voicemail PIN | Users → Calling → Voicemail | Features → Voicemail | Workspaces → Calling |
| Enable email notifications | Users → Calling → Voicemail | Features → Voicemail | Workspaces → Calling |
| Supports transcription | Yes | Yes | Yes |
| WAV attachment | Yes | Yes | Yes |

---

## !!! tip "Best Practice"
Use **distribution lists** for shared voicemail email delivery to avoid individual mailbox dependency.

---

# 4. Engineer Checklist

- [ ] Confirm voicemail is enabled for the user/feature/workspace  
- [ ] Reset PIN and provide temporary code if needed  
- [ ] Enable email notifications  
- [ ] Validate email address or distribution list  
- [ ] Test voicemail delivery  
- [ ] Document configuration in customer records  

---

# 5. Mermaid Diagram (Voicemail Flow)

```mermaid
flowchart TD
    A[Caller Leaves Voicemail] --> B[Webex Calling Voicemail Server]
    B --> C{Mailbox Type?}
    C --> D[User Mailbox]
    C --> E[Shared Mailbox (Queue/Hunt/AA)]
    C --> F[Workspace Mailbox]
    D --> G[Email Notification (Optional)]
    E --> G
    F --> G
    G --> H[Admin or User Receives Email/WAV]
