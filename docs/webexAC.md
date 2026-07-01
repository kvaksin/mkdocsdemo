# Operator Transition Training — CUAC to Webex Attendant Console (WxAC)

This page provides a complete, operator‑focused transition guide for moving from the legacy **Cisco Unified Attendant Console (CUAC)** to the modern, cloud‑native **Webex Attendant Console (WxAC)**.  
It includes the educational vision behind the training, the delta‑focused learning content, and a visual Mermaid diagram of the rollout strategy.

---

## 🎯 Training Purpose

Operators already know how to handle calls.  
This training focuses exclusively on:

- What is *different*  
- What is *new*  
- What is *no longer applicable*  
- What workflows have been *simplified or automated*  

---

# 🌱 Educational Vision & Training Philosophy

Transitioning operators from CUAC to WxAC is not just a technical migration — it is a **behavioral change process**.  
Our training strategy is built on three core principles of adult learning:

## 1. Reduce Cognitive Load
We avoid re-teaching telephony basics and focus only on the delta between CUAC and WxAC.

## 2. Build Confidence Before Competence
Operators must feel safe before they can perform well.  
Early exposure reduces fear and creates curiosity.

## 3. Learn by Doing
Hands-on practice builds muscle memory.  
Operators master drag‑and‑drop transfers, dynamic parking, and directory search through repetition.

---

# 🗺️ Training Rollout Strategy (Mermaid Diagram)

```mermaid
flowchart LR
    A([Phase 1: Awareness<br/>1–2 Weeks Prior]) --> B([Phase 2: Sandbox Practice<br/>3–5 Days Prior])
    B --> C([Phase 3: Go-Live Shadowing<br/>Launch Day])
    C --> D([Phase 4: Mastery & Post-Mortem<br/>14 Days Post])

    classDef phase fill:#e8f1ff,stroke:#4a78ff,stroke-width:1px,color:#000,border-radius:6px;
    class A,B,C,D phase;
```