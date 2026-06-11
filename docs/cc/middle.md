flowchart LR

    %% Styles
    classDef system fill:#f0f0f0,stroke:#555,stroke-width:1px,border-radius:6px;
    classDef middleware fill:#e8f5e9,stroke:#2e7d32,stroke-width:1px,border-radius:6px;
    classDef crm fill:#e3f2fd,stroke:#1565c0,stroke-width:1px,border-radius:6px;
    classDef recorder fill:#fff3e0,stroke:#ef6c00,stroke-width:1px,border-radius:6px;
    classDef ops fill:#ede7f6,stroke:#5e35b1,stroke-width:1px,border-radius:6px;
    classDef desktop fill:#fce4ec,stroke:#ad1457,stroke-width:1px,border-radius:6px;
    classDef ai fill:#e8eaf6,stroke:#3949ab,stroke-width:1px,border-radius:6px;

    %% Airline Systems
    PNR["Airline PNR System<br>Bookings / PNR / Tickets"]:::ops
    OPS["Flight Ops System<br>Delays / Cancellations / Gate Changes"]:::ops
    BAG["Baggage System<br>Lost / Delayed / Damaged"]:::ops
    LOY["Loyalty System<br>Tiers / Miles / Benefits"]:::ops
    PAY["Payment & Refund System<br>Payments / Refunds / Chargebacks"]:::ops

    %% PCCE Layer
    PCCE["Cisco PCCE<br>Routing / CVP / ECC"]:::system
    Finesse["Cisco Finesse<br>Agent State / Dialog Events"]:::system
    CVP["Cisco CVP<br>IVR Steps / ECC Variables"]:::system

    %% Middleware
    MW["Debian Middleware<br><br>
        • Customer Journey API<br>
        • Passenger Resolver (email/mobile/PNR/loyalty)<br>
        • Activity Store (last 10)<br>
        • Dynamics Connector (CRM)<br>
        • Verint Connector (recordings)<br>
        • Airline Connectors (PNR / Ops / Baggage / Loyalty / Payments)<br>
        • AI Engine (summaries, sentiment, next best action)<br>
        • WebSocket Push<br>
        • Redis Cache<br>
        • PostgreSQL DB"]:::middleware

    %% CRM
    D365["Microsoft Dynamics 365<br>Cases / Activities / Customer Data"]:::crm

    %% Verint
    Verint["Verint Platform<br>Recordings / QM / WFM / Analytics"]:::recorder

    %% AI
    AI["AI Engine<br>Summaries / Sentiment / Next Best Action<br>Customer Story Builder"]:::ai

    %% Agent Desktop
    Agent["Finesse Agent Desktop<br>
           • Passenger Profile<br>
           • Flight Status<br>
           • Loyalty Tier<br>
           • Baggage Cases<br>
           • Payments/Refunds<br>
           • Last 10 Activities<br>
           • Last 5 CRM Activities<br>
           • Last 5 Verint Calls<br>
           • IVR Journey<br>
           • AI Insights"]:::desktop

    %% Connections
    PCCE --> Finesse
    PCCE --> CVP

    Finesse -->|s23| MW
    CVP -->|s24| MW

    MW -->|s25| D365
    MW -->|s26| Verint

    MW -->|s27| PNR
    MW -->|s28| OPS
    MW -->|s29| BAG
    MW -->|s30| LOY
    MW -->|s31| PAY

    MW -->|s32| AI

    MW -->|s33| Agent
    Agent -->|s34| MW


    