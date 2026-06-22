---
title: "Brigentine Webex Calling Migration Plan"
summary: "End‑to‑end migration plan for transitioning Brigentine users from CUCM to Webex Calling with Dial Plan coexistence and CFUR routing."
tags:
  - webex-calling
  - cucm
  - migration
  - cfur
  - dial-plan
  - cube
  - pstn
status: "Published"
author: "Konstantin Vaksin"
date: 2026-06-23
---

# Brigentine Webex Calling Migration Plan

## 1. Overview

This document describes the complete migration process for moving Brigentine users from Cisco Unified CM (CUCM) to Webex Calling while ensuring uninterrupted service during coexistence.

### Key principles

- All DIDs are ported into Webex Calling.
- Until a user is migrated (licensed + device activated), calls for their DID are routed to CUCM via CUBE.
- Migration is executed in controlled waves using the UC Migration Wizard.
- CFUR and Dial Plan routing ensure continuity during the transition.

### Routing logic

- **Unassigned or non‑licensed DIDs** → Webex Dial Plan → CUBE → CUCM  
- **Licensed Webex Calling users with assigned DIDs** → Webex Calling (no CUCM involvement)

---

## 2. Architecture Summary

- PSTN → Webex Calling (Cloud)  
- Webex Calling → Local Gateway (CUBE) → CUCM (unmigrated users)  
- Webex Calling → Webex devices (migrated users)

!!! tip
    This architecture enables **zero‑downtime coexistence** during migration.

---

## 3. Phase 0 — Pre‑Migration Preparation

### 3.1 Prerequisites

- Webex Calling location created for Brigentine  
- Local Gateway (CUBE) registered  
- CUCM export (phones, users, DNs) prepared  
- DID ranges identified  
- Porting date confirmed with PSTN provider  

### 3.2 Migration Waves

- Define migration waves (site, department, device type)  
- Identify special cases (contact center, analog, fax, lobby phones)  
- Identify unsupported phone models  

---

## 4. Phase 1 — Dial Plan Setup (Before Porting)

### 4.1 Create Dial Plan for All “To‑Be‑Ported” DIDs

**Control Hub:**  
Services → PSTN & Routing → Gateway Configuration → Dial Plans

Example patterns:

```
+1416555XXXX → Route Group → CUBE
+1604555XXXX → Route Group → CUBE
```

!!! warning
    Without these Dial Plan rules, **ported numbers will not reach CUCM**, causing service interruption.

**Result:**  
After porting, PSTN calls still reach CUCM until users are migrated.

---

## 5. Phase 2 — Configure CFUR in CUCM (Before Porting)

CFUR must be configured **before porting** to ensure:

- Internal CUCM callers dialing old extensions reach the user’s new Webex DID  
- CUCM‑originated calls (CTI, IVRs, integrations) continue to work  
- If a CUCM phone unregisters, calls still reach Webex Calling  

!!! warning
    CFUR **must** be configured before porting.  
    If not, internal CUCM calls may fail or loop.

### 5.1 Ensure CUCM Can Route Webex DIDs

1. Go to **Call Routing → Route/Hunt → Route Pattern**  
2. Create or verify an E.164 pattern, e.g.:

```
+1[2-9]XX[2-9]XXXXXX
```

3. Assign to the **CUBE SIP trunk**  
4. Ensure the partition is included in a PSTN‑capable CSS  

### 5.2 Configure CFUR on Each DN

1. Go to **Call Routing → Directory Number**  
2. Open DN (e.g., 4001)  
3. Under *Call Forward and Call Pickup Settings*:  
   - Call Forward Unregistered Internal: `+14165551234`  
   - Call Forward Unregistered External: `+14165551234`  
4. Set **Forward Unregistered CSS** to a CSS that can reach the E.164 Route Pattern  
5. Save and Apply  

### 5.3 Test CFUR

1. Unregister the CUCM phone  
2. Dial the DN from another CUCM phone  
3. Expected:  
   - CUCM detects DN is unregistered  
   - CFUR forwards to Webex DID  
   - CUBE → Webex Calling  
   - Webex device rings  

!!! tip
    Always test CFUR on at least **two DNs per site** before porting.

---

## 6. Phase 3 — UC Migration Wizard Preparation

**Control Hub:**  
Services → Updates & Migration → Migrate Unified CM to Webex Calling

### Steps

1. Upload CUCM export  
2. Define import rules (device mapping, user mapping, DN→DID mapping)  
3. Validate device eligibility  
4. Do **not** import yet  

!!! note
    This phase prepares the migration but does not activate any devices.

---

## 7. Phase 4 — Number Porting

### 7.1 Port DIDs into Webex Calling

**Behavior on port day:**

- PSTN → Webex Calling  
- Webex → Dial Plan → CUBE → CUCM  
- CUCM phones continue to ring  
- CFUR ensures internal CUCM calls reach Webex DIDs  

!!! success
    At this stage, **all PSTN numbers are in Webex**, but CUCM still handles users.

This creates a **safe coexistence window**.

---

## 8. Phase 5 — Import Users & Assign Licenses

**Control Hub:**  
Services → Updates & Migration → UC Migration Wizard

### During import

- Users created in Webex Calling  
- Licenses assigned  
- DIDs assigned  
- Devices associated  

### Routing change

Once a DID is assigned to a licensed user:

- Webex Calling owns the number  
- PSTN calls no longer route to CUCM  
- Dial Plan is bypassed for that DID  

!!! warning
    After this step, CUCM will **no longer receive calls** for these users.

---

## 9. Phase 6 — Phone Upgrade & Migration

### 9.1 Migrate Phones per Wave

Using UC Migration Wizard:

1. Select migration wave  
2. Trigger firmware upgrade (CUCM → MPP)  
3. Phones reboot and register to Webex Calling  
4. CUCM registration removed  

### Behavior

- **Migrated users:** PSTN → Webex → Webex device  
- **Unmigrated users:** PSTN → Webex → CUBE → CUCM  
- CFUR still protects internal CUCM calls  

---

## 10. Phase 7 — Validation & Cleanup

### 10.1 Functional Validation

- Inbound calls reach Webex devices  
- Outbound calls show correct caller ID  
- Voicemail works  
- Features validated (transfer, park, pickup, hunt groups)  

### 10.2 CUCM Cleanup (Per Wave)

After users are fully migrated:

- Remove old DNs  
- Remove old devices  
- Remove old voicemail boxes  
- Remove old forwarding rules  
- Remove CFUR (no longer needed once CUCM is retired)  

!!! note
    Do not remove CFUR until **all** internal systems stop referencing CUCM DNs.

---

## 11. Phase 8 — Final Cutover & Decommissioning

### 11.1 Routing Cleanup

- Remove Dial Plan patterns for CUCM routing  
- Decommission CUBE if no longer required  

### 11.2 CUCM Decommissioning

- Confirm no active users or services  
- Archive configuration  
- Power down CUCM cluster  

!!! warning
    Ensure **emergency calling**, **fax**, and **analog lines** are fully migrated before decommissioning CUCM.

---

## 12. Quick Flow Summary

### Before porting
- PSTN → CUCM  
- Internal CUCM calls use DNs  

### After CFUR + Dial Plan (pre‑porting)
- Internal CUCM calls → CFUR → Webex DID → CUBE → Webex  
- PSTN still → CUCM  

### After porting (pre‑migration)
- PSTN → Webex → CUBE → CUCM  
- Internal CUCM calls → CFUR → Webex  

### After user migration
- PSTN → Webex → Webex device  
- CUCM only used for unmigrated users  
