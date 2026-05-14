---
title: "Packaged Contact Center Enterprise (PCCE) 15.0 2K"
description: "High‑availability Cisco Packaged CCE 15.0 architecture for up to 2000 agents, including core routing, CVP, Finesse, CUIC, VVB, and optional components."
summary: "Cisco PCCE 15.0 2K Reference Design overview."
tags:
  - cisco
  - pcce
  - contact-center
  - reference-design
  - architecture
last_updated: 2026-05-08
authors:
  - Konstantin Vaksin
---
# Packaged Contact Center Enterprise (PCCE) 15.0 2K
## Specifications for a Reference Design Solution
The Reference Designs define vision of the functionality that most contact centers use. The Reference Designs consist of:

**Core components**—Components that make up every contact center:

* Ingress, Egress
* Unified Customer Voice Portal (Unified CVP)
* Unified Contact Center Enterprise (Unified CCE)
* Cisco Virtualized Voice Browser (VVB)
* Unified Communications Manager (Unified CM)
* Cisco Finesse
* Cisco Unified Intelligence Center

**Optional Cisco components**—Components that add functionality that not every contact center needs.

* Customer Collaboration Platform
* Cisco Unified SIP Proxy
* Enterprise Chat and Email
* Cisco IdS
* Cloud Connect
* Reverse Proxy

**Optional third-party components**—Third-party components that you can add to provide other features.

* Load balancers
* Recording
* Speech servers - ASR/TTS
* Wallboards
* Workforce management

## 2000 Agent Reference Designs
All contact center enterprise solutions support the 2000 Agent Reference design on the [Cisco UCS C240 M5SX or Cisco UCS C240 M6SX](#support-on-the-cisco-ucs-c240-m5sx-and-cisco-ucs-c240-m6sx-large-trc-servers).

* In this Reference Design, Cisco Unified Intelligence Center, Live Data, Identity Service for Single Sign-On are coresident on a single VM.

* Unified Communications Manager Publisher and Subscribers can be deplouyed on separate servers, instead of deploying them as shown in the 2000 Agent Reference Design layout. You should dedicate two of the subscribers to Unified CCE. All devices on these subscribers must be SIP.

> * In 2000 Agent Reference Designs, a coresident Unified CM can support a maximum of 2000 phones. This includes your phones for all types of agents, whether contact center agents or back-office workers. If your solution requires more than 2000 phones, use a Unified CM on a separate server instead.

* In the global deployment topology, each remote site can have its own Unified CM cluster. A remote site cannot include a Cisco Unified Intelligence Center server.

* In Packaged CCE global deployments, you cannot create a remote site without PG VMs.

* There is possibility to deploy optional AW-HDS-DDS per site on external servers for longer data retention.

### Support on the Cisco UCS C240 M5SX and Cisco UCS C240 M6SX Large TRC Servers

The following figure shows the base layout of the components in a 2000 Agent Reference Design on Cisco UCS C240 M5SX and Cisco UCS C240 M6SX Large TRC servers.

**Figure 1. 2000 Agent Reference Design Model** 
![PCCE2k](../images/488700.avif)

**Table 1. 2000 Agent Reference Design Model**

| # | UCS Blade | VM Role / Function                 | vCPU | RAM (GB) | Disks (GB)        | Network Interfaces | Notes |
|---|-----------|------------------------------------|------|----------|-------------------|-------| ---|
| 1 |           | **Rogger A**                           | 4    | 6        | 150 + 150         | NIC1 - PCCEPublic</br>NIC2 - PCCEPrivate | Router + Logger (WinOS + SQL)|
|2|     | **AW-HDS A**                              | 4    | 16       | 150 + 500          | NIC1 - PCCEPublic |Admin + Historical (WinOS + SQL)|
|3|     | **Rogger B**         | 4    | 6       | 150 + 150          | NIC1 - PCCEPublic</br>NIC2 - PCCEPrivate |Router + Logger (WinOS + SQL)|
|4|     | **AW-HDS B**                              | 4    | 16       | 150 + 500       | NIC1 - PCCEPublic   | Admin + Historical (WinOS + SQL)|
|5|     | **PG1A +PG2A**                   | 2    | 6        | 150          | NIC1 - PCCEPublic</br>NIC2 - PCCEPrivate |Primary PG (WinOS)|
|6|     | **PG1B +PG2B**                 | 2    | 6       | 150         | NIC1 - PCCEPublic</br>NIC2 - PCCEPrivate | Backup PG (WinOS) |
|7|     | **CVP Call Server A&VXML Server A**                    | 4    | 12        | 250          | NIC1 - PCCEPublic | CVP A (WinOS)|
|8|     | **CVP Call Server B&VXML Server B**                     | 4    | 12        | 250          | NIC1 - PCCEPublic | CVP B (WinOS)|
|9|     | **Finesse A**                             | 4    | 16        | 146         | NIC1 - PCCEPublic | Agent desktop (VOS) |
|10|     | **CUIC A**                                | 4    | 24        | 200          | NIC1 - PCCEPublic | Reporting tool + IDS + LiveData (VOS)|
|11|     | **Finesse B**                             | 4    | 16        | 146          | NIC1 - PCCEPublic | Agent desktop (VOS) |
|12|     | **CUIC B**                                | 4    | 24        | 200          | NIC1 - PCCEPublic | Reporting tool + IDS + LiveData (VOS) |
|13|    | **VVB A** | 4 | 10 | 146 | NIC1 - PCCEPublic | Virtual VXML Browser A (VOS)
|14|    | **VVB B** | 4 | 10 | 146 | NIC1 - PCCEPublic | Virtual VXML Browser B (VOS)
|15|     | **CVP Reporting Server (CVP RPT)**        | 4    | 6        | 80 + 438          | NIC1 - PCCEPublic | CVP reporting (WinOS + InformixDB) |
|16|     | **CloudConnect A** | 4 |16 | 750 | NIC1 - PCCEPublic | Cloud Connect for Orchestration and DigitalChannels. Should be in Enterprise network (VOS)|
|17|     | **CloudConnect B** | 4 |16 | 750 | NIC1 - PCCEPublic | Same as CloudConnect A (VOS)|
|18|    | **Reverse Proxy A** | | | | NIC1 - PCCEPublic</br> NIC2 - Externaly routable with DNS* | Reverse proxy is installed on Redhat|
|19|    | **Reverse Proxy B** | | | | NIC1 - PCCEPublic</br> NIC2 - Externaly routable with DNS* | Reverse proxy is installed on Redhat|

***Reverse Proxy** can be accessed via loadbalancer. It is required component for the WxConnect based Email/Digital Channels functionalit

