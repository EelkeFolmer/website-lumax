---
title: "SalmonVision"
weight: 2
tag: "Salmon monitoring platform"
summary: "AI platform for automated salmon counting and species identification from underwater cameras, sonar and drones."
url_external: "https://salmonvision.org"
illustration: |
  <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
    <!-- Rivier cross-section: boven = oppervlak, onder = onderwater -->
    <!-- Water boven (oppervlak) -->
    <rect width="560" height="320" fill="#4a8aaa"/>

    <!-- Wateroppervlak lichtere band -->
    <rect width="560" height="40" fill="#6aaac8"/>
    <path d="M0,28 Q70,18 140,28 Q210,38 280,28 Q350,18 420,28 Q490,38 560,28" fill="none" stroke="#88c0d8" stroke-width="2.5" opacity="0.7"/>
    <path d="M0,38 Q90,28 180,38 Q270,48 360,38 Q450,28 560,36" fill="none" stroke="#88c0d8" stroke-width="1.8" opacity="0.5"/>

    <!-- Rivierbodem -->
    <path d="M0,280 Q100,268 200,275 Q300,282 400,270 Q480,262 560,272 L560,320 L0,320Z" fill="#5a4a30"/>
    <path d="M0,290 Q80,282 180,288 Q290,294 390,282 Q480,273 560,280 L560,320 L0,320Z" fill="#4a3a22"/>
    <!-- Stenen -->
    <ellipse cx="80" cy="294" rx="22" ry="10" fill="#6a5a40"/>
    <ellipse cx="180" cy="288" rx="16" ry="8" fill="#7a6a50"/>
    <ellipse cx="310" cy="292" rx="20" ry="9" fill="#6a5a40"/>
    <ellipse cx="430" cy="285" rx="18" ry="8" fill="#7a6a50"/>
    <ellipse cx="510" cy="295" rx="14" ry="7" fill="#6a5a40"/>

    <!-- Waterplanten / wier -->
    <g stroke="#3a6840" stroke-width="2.5" stroke-linecap="round" fill="none">
      <path d="M45,282 C42,265 48,250 44,238"/>
      <path d="M55,280 C58,263 54,248 58,235"/>
      <path d="M230,278 C227,261 233,246 229,234"/>
      <path d="M242,276 C246,259 242,244 246,231"/>
      <path d="M480,280 C477,263 483,248 479,235"/>
    </g>

    <!-- ZALM 1 — groot, links, duidelijk zichtbaar -->
    <g transform="translate(155,170) rotate(-8)">
      <path d="M-80,0 C-75,-22 -45,-32 0,-34 C42,-34 78,-22 95,-6 C104,4 102,16 90,24 C75,32 48,36 10,36 C-28,36 -62,28 -80,14 Z" fill="#7a9870" stroke="#2a3820" stroke-width="1.8"/>
      <path d="M-80,0 L-110,20 L-106,6 L-118,0 L-106,-6 L-110,-20 Z" fill="#6a8860" stroke="#2a3820" stroke-width="1.8"/>
      <path d="M-75,2 C-48,10 -5,12 35,8 C65,4 85,-4 88,4 C75,12 42,18 5,18 C-28,18 -60,10 -74,2 Z" fill="#c8d8b8" stroke="#2a3820" stroke-width="1.2"/>
      <path d="M-10,-34 C-4,-48 8,-52 15,-44 C10,-36 2,-32 -8,-32 Z" fill="#6a8860" stroke="#2a3820" stroke-width="1.5"/>
      <circle cx="80" cy="-5" r="6" fill="#0a0808"/>
      <circle cx="78" cy="-7" r="2.2" fill="white" opacity="0.7"/>
      <circle cx="40" cy="-18" r="3.5" fill="#c84820" opacity="0.7"/>
      <circle cx="15" cy="-22" r="3" fill="#c84820" opacity="0.7"/>
      <circle cx="-15" cy="-20" r="3.5" fill="#c84820" opacity="0.7"/>
    </g>

    <!-- ZALM 2 — midden, iets kleiner -->
    <g transform="translate(330,145) rotate(5)">
      <path d="M-68,0 C-63,-18 -38,-27 0,-28 C36,-28 66,-18 80,-5 C88,3 86,14 76,20 C63,27 40,30 8,30 C-24,30 -52,23 -68,12 Z" fill="#7a9870" stroke="#2a3820" stroke-width="1.8"/>
      <path d="M-68,0 L-94,17 L-90,5 L-100,0 L-90,-5 L-94,-17 Z" fill="#6a8860" stroke="#2a3820" stroke-width="1.8"/>
      <path d="M-63,2 C-40,8 -4,10 29,6 C55,3 72,-3 74,3 C62,10 35,15 4,15 C-24,15 -51,8 -62,2 Z" fill="#c8d8b8" stroke="#2a3820" stroke-width="1.2"/>
      <circle cx="67" cy="-4" r="5.5" fill="#0a0808"/>
      <circle cx="65" cy="-6" r="2" fill="white" opacity="0.7"/>
      <circle cx="32" cy="-15" r="3" fill="#c84820" opacity="0.7"/>
      <circle cx="8" cy="-18" r="3" fill="#c84820" opacity="0.7"/>
    </g>

    <!-- ZALM 3 — rechts, lager, deels in schaduw -->
    <g transform="translate(470,210) rotate(-12)" opacity="0.75">
      <path d="M-58,0 C-53,-15 -32,-23 0,-24 C30,-24 56,-15 68,-4 C74,3 72,12 64,17 C53,23 34,26 6,26 C-20,26 -44,20 -58,10 Z" fill="#6a8860" stroke="#2a3820" stroke-width="1.5"/>
      <path d="M-58,0 L-80,14 L-76,4 L-85,0 L-76,-4 L-80,-14 Z" fill="#5a7850" stroke="#2a3820" stroke-width="1.5"/>
      <path d="M-53,2 C-34,7 -3,8 24,5 C46,2 60,-2 62,3 C52,8 29,12 4,12 C-20,12 -44,7 -53,2 Z" fill="#b8c8a8" stroke="#2a3820" stroke-width="1"/>
      <circle cx="56" cy="-3" r="5" fill="#0a0808"/>
    </g>

    <!-- SONAR detectiegebied (halve cirkel onderin) -->
    <g opacity="0.22">
      <path d="M280,40 Q480,40 480,240 Q480,40 280,40" fill="none" stroke="#f0c840" stroke-width="1.2"/>
      <path d="M280,40 Q420,40 420,210 Q420,40 280,40" fill="none" stroke="#f0c840" stroke-width="1.2"/>
      <path d="M280,40 Q360,40 360,180 Q360,40 280,40" fill="none" stroke="#f0c840" stroke-width="1.2"/>
    </g>
    <!-- Sonar fan -->
    <path d="M280,40 L150,280 L410,280 Z" fill="#f0e840" opacity="0.06"/>
    <path d="M280,40 L150,280" stroke="#f0e840" stroke-width="1" opacity="0.25"/>
    <path d="M280,40 L410,280" stroke="#f0e840" stroke-width="1" opacity="0.25"/>

    <!-- AI detection boxes op zalmen -->
    <g fill="none" stroke="#f0c840" stroke-width="1.8">
      <rect x="75" y="140" width="160" height="66" rx="3"/>
      <rect x="260" y="118" width="140" height="56" rx="3"/>
    </g>
    <!-- Species label -->
    <rect x="75" y="140" width="115" height="16" rx="2" fill="#f0c840"/>
    <text x="80" y="151" font-family="monospace" font-size="9" fill="#1a1a08" font-weight="bold">Coho · 94%</text>
    <rect x="260" y="118" width="100" height="16" rx="2" fill="#f0c840"/>
    <text x="265" y="129" font-family="monospace" font-size="9" fill="#1a1a08" font-weight="bold">Sockeye · 89%</text>

    <!-- Underwater camera rig links -->
    <g transform="translate(42,100)">
      <rect x="-12" y="-8" width="24" height="16" rx="4" fill="#1a2838" stroke="#0a1020" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="6" fill="#1a3050" stroke="#0a1020" stroke-width="1"/>
      <circle cx="0" cy="0" r="3" fill="#2a4878"/>
      <line x1="0" y1="-8" x2="0" y2="-28" stroke="#1a2838" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="-4" y="-32" width="8" height="6" rx="1" fill="#1a2838"/>
    </g>

    <!-- Info label -->
    <rect x="14" y="14" width="145" height="22" rx="5" fill="white" opacity="0.88"/>
    <text x="22" y="28" font-family="monospace" font-size="9" fill="#1a2838" font-weight="bold">SALMONVISION · LIVE</text>
    <circle cx="152" cy="25" r="4" fill="#22c840" opacity="0.9"/>
  </svg>
---

SalmonVision is een collaboratief platform dat hardware en AI-tools combineert voor geautomatiseerde zalm-telling en soortidentificatie vanuit onderwatercamera's, sonar en drone-beelden.

## How it works

The platform processes imagery from underwater cameras, sonar and drones using computer vision models that automatically detect, count and identify salmon species. Via a web application, users can upload data, run AI analyses and validate results — all from one dashboard.

## What it does

- Automated salmon counting from video and sonar
- Species identification (Coho, Sockeye, Chum, Chinook, and more)
- End-to-end workflow from data upload to verified report
- Support for remote locations (solar power, Starlink)
- Collaboration with First Nations and resource managers

## Partners

Developed together with the **Pacific Salmon Foundation**, **Wild Salmon Center** and **Simon Fraser University**. The platform is deployed along the coast of British Columbia, in close collaboration with First Nations communities.

[Visit salmonvision.org →](https://salmonvision.org)
