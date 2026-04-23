---
title: "CODAP"
weight: 3
tag: "Data visualisatie platform"
summary: "Interactive open-source platform for ecological data analysis — charts, maps and tables in one workspace."
url_external: "https://codap.concord.org"
illustration: |
  <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
    <!-- Achtergrond — lichte interface kleur -->
    <rect width="560" height="320" fill="#f0ede5"/>

    <!-- App window chrome -->
    <rect x="14" y="14" width="532" height="292" rx="8" fill="white" stroke="#dddbd4" stroke-width="1.5"/>
    <!-- Title bar -->
    <rect x="14" y="14" width="532" height="32" rx="8" fill="#f5f4f0"/>
    <rect x="14" y="30" width="532" height="16" fill="#f5f4f0"/>
    <circle cx="32" cy="30" r="5" fill="#ff6058"/>
    <circle cx="48" cy="30" r="5" fill="#ffbb2c"/>
    <circle cx="64" cy="30" r="5" fill="#28ca42"/>
    <text x="190" y="35" font-family="monospace" font-size="10" fill="#5a6270" font-weight="bold">CODAP — Ecological Data Analysis</text>

    <!-- Panel 1: Data table (left) -->
    <rect x="24" y="56" width="168" height="238" rx="4" fill="#faf9f5" stroke="#dddbd4" stroke-width="1"/>
    <rect x="24" y="56" width="168" height="22" rx="4" fill="#e8f0f9"/>
    <rect x="24" y="66" width="168" height="12" fill="#e8f0f9"/>
    <text x="32" y="72" font-family="monospace" font-size="8.5" fill="#1a5fa8" font-weight="bold">Salmon Count Data</text>
    <!-- Table headers -->
    <line x1="24" y1="78" x2="192" y2="78" stroke="#dddbd4" stroke-width="1"/>
    <text x="28" y="89" font-family="monospace" font-size="7.5" fill="#5a6270" font-weight="bold">River</text>
    <text x="82" y="89" font-family="monospace" font-size="7.5" fill="#5a6270" font-weight="bold">Species</text>
    <text x="138" y="89" font-family="monospace" font-size="7.5" fill="#5a6270" font-weight="bold">Count</text>
    <line x1="24" y1="92" x2="192" y2="92" stroke="#dddbd4" stroke-width="1"/>
    <!-- Table rows -->
    <g font-family="monospace" font-size="7.5" fill="#2a3a28">
      <text x="28" y="104">Nitinat</text><text x="82" y="104">Coho</text><text x="152" y="104">342</text>
      <rect x="24" y="95" width="168" height="12" fill="#f5faf0" opacity="0.6"/>
      <text x="28" y="116">Nitinat</text><text x="82" y="116">Sockeye</text><text x="152" y="116">218</text>
      <text x="28" y="128">Koeye</text><text x="82" y="128">Coho</text><text x="152" y="128">489</text>
      <rect x="24" y="119" width="168" height="12" fill="#f5faf0" opacity="0.6"/>
      <text x="28" y="140">Koeye</text><text x="82" y="140">Chinook</text><text x="152" y="140">127</text>
      <text x="28" y="152">KwaKwa</text><text x="82" y="152">Coho</text><text x="152" y="152">302</text>
      <rect x="24" y="143" width="168" height="12" fill="#f5faf0" opacity="0.6"/>
      <text x="28" y="164">KwaKwa</text><text x="82" y="164">Sockeye</text><text x="152" y="164">195</text>
      <text x="28" y="176">Coquitlam</text><text x="82" y="176">Coho</text><text x="152" y="176">568</text>
      <rect x="24" y="167" width="168" height="12" fill="#f5faf0" opacity="0.6"/>
      <text x="28" y="188">Coquitlam</text><text x="82" y="188">Sockeye</text><text x="152" y="188">411</text>
      <text x="28" y="200">Bear</text><text x="82" y="200">Chinook</text><text x="152" y="200">88</text>
      <rect x="24" y="191" width="168" height="12" fill="#f5faf0" opacity="0.6"/>
      <text x="28" y="212">Bear</text><text x="82" y="212">Coho</text><text x="152" y="212">276</text>
      <text x="28" y="224">Tranquil</text><text x="82" y="224">Chum</text><text x="152" y="224">634</text>
      <rect x="24" y="215" width="168" height="12" fill="#f5faf0" opacity="0.6"/>
      <text x="28" y="236">Tranquil</text><text x="82" y="236">Coho</text><text x="152" y="236">198</text>
    </g>

    <!-- Panel 2: Bar chart (top right) -->
    <rect x="200" y="56" width="168" height="130" rx="4" fill="#faf9f5" stroke="#dddbd4" stroke-width="1"/>
    <text x="208" y="70" font-family="monospace" font-size="8.5" fill="#1a5fa8" font-weight="bold">Count by River</text>
    <!-- Bars -->
    <g>
      <!-- Bar base line -->
      <line x1="215" y1="170" x2="358" y2="170" stroke="#dddbd4" stroke-width="1"/>
      <!-- Bars -->
      <rect x="220" y="118" width="18" height="52" rx="2" fill="#1a5fa8" opacity="0.85"/>
      <rect x="245" y="130" width="18" height="40" rx="2" fill="#1a5fa8" opacity="0.85"/>
      <rect x="270" y="108" width="18" height="62" rx="2" fill="#4a7a5e" opacity="0.85"/>
      <rect x="295" y="138" width="18" height="32" rx="2" fill="#1a5fa8" opacity="0.85"/>
      <rect x="320" y="122" width="18" height="48" rx="2" fill="#4a7a5e" opacity="0.85"/>
      <!-- Hover highlight -->
      <rect x="270" y="108" width="18" height="62" rx="2" fill="white" opacity="0.15"/>
      <!-- Tooltip -->
      <rect x="254" y="96" width="52" height="18" rx="3" fill="#1a2838" opacity="0.9"/>
      <text x="258" y="108" font-family="monospace" font-size="7.5" fill="white">Koeye: 616</text>
      <polygon points="278,114 274,124 282,124" fill="#1a2838" opacity="0.9"/>
      <!-- X labels -->
      <g font-family="monospace" font-size="6.5" fill="#5a6270" text-anchor="middle">
        <text x="229" y="180">Nit.</text>
        <text x="254" y="180">KwaK.</text>
        <text x="279" y="180">Koeye</text>
        <text x="304" y="180">Coq.</text>
        <text x="329" y="180">Bear</text>
      </g>
    </g>

    <!-- Panel 3: Scatter plot (bottom right) -->
    <rect x="200" y="194" width="168" height="100" rx="4" fill="#faf9f5" stroke="#dddbd4" stroke-width="1"/>
    <text x="208" y="208" font-family="monospace" font-size="8.5" fill="#1a5fa8" font-weight="bold">Count vs. Date</text>
    <!-- Axes -->
    <line x1="220" y1="278" x2="358" y2="278" stroke="#dddbd4" stroke-width="1"/>
    <line x1="220" y1="215" x2="220" y2="278" stroke="#dddbd4" stroke-width="1"/>
    <!-- Scatter points + trend line -->
    <path d="M228,265 C248,255 268,248 290,242 C310,237 330,234 350,230" fill="none" stroke="#4a7a5e" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.7"/>
    <g fill="#1a5fa8" opacity="0.8">
      <circle cx="230" cy="268" r="3.5"/>
      <circle cx="245" cy="260" r="3.5"/>
      <circle cx="258" cy="255" r="3.5"/>
      <circle cx="272" cy="250" r="3.5"/>
      <circle cx="285" cy="246" r="3.5"/>
      <circle cx="300" cy="240" r="3.5"/>
      <circle cx="315" cy="238" r="3.5"/>
      <circle cx="330" cy="234" r="3.5"/>
      <circle cx="345" cy="230" r="3.5"/>
    </g>
    <!-- Outlier in different color -->
    <circle cx="258" cy="265" r="3.5" fill="#c84820" opacity="0.8"/>

    <!-- Panel 4: Map (far right) -->
    <rect x="376" y="56" width="160" height="238" rx="4" fill="#dce8f4" stroke="#dddbd4" stroke-width="1"/>
    <text x="384" y="70" font-family="monospace" font-size="8.5" fill="#1a5fa8" font-weight="bold">BC River Map</text>
    <!-- Simplified BC coastline sketch -->
    <path d="M390,88 C394,95 398,110 395,125 C392,140 385,152 382,165 C380,178 384,192 382,205 C380,218 374,228 374,240 C374,255 380,265 385,272" fill="none" stroke="#4a7a9a" stroke-width="1.5" opacity="0.6"/>
    <!-- Rivers (blue lines) -->
    <g stroke="#1a5fa8" stroke-width="1.5" stroke-linecap="round" opacity="0.7">
      <path d="M420,120 C415,130 408,138 398,142"/>
      <path d="M448,145 C440,152 430,158 418,162"/>
      <path d="M435,178 C428,185 418,190 408,192"/>
      <path d="M452,210 C444,218 434,224 422,226"/>
    </g>
    <!-- Monitoring points -->
    <g>
      <circle cx="398" cy="142" r="5" fill="#1a5fa8" stroke="white" stroke-width="1.5"/>
      <circle cx="418" cy="162" r="5" fill="#4a7a5e" stroke="white" stroke-width="1.5"/>
      <circle cx="408" cy="192" r="5" fill="#1a5fa8" stroke="white" stroke-width="1.5"/>
      <circle cx="422" cy="226" r="5" fill="#4a7a5e" stroke="white" stroke-width="1.5"/>
      <circle cx="445" cy="248" r="5" fill="#c84820" stroke="white" stroke-width="1.5"/>
      <!-- Selected point ring -->
      <circle cx="418" cy="162" r="9" fill="none" stroke="#4a7a5e" stroke-width="1.5" stroke-dasharray="3,2"/>
    </g>
    <!-- Map labels -->
    <g font-family="monospace" font-size="7" fill="#2a3848">
      <text x="402" y="140">Nitinat</text>
      <text x="422" y="160">Koeye</text>
      <text x="412" y="190">KwaKwa</text>
      <text x="426" y="224">Coq.</text>
      <text x="449" y="246">Bear</text>
    </g>
    <!-- Legend -->
    <circle cx="384" cy="278" r="4" fill="#1a5fa8"/>
    <text x="392" y="281" font-family="monospace" font-size="7" fill="#2a3848">Coho</text>
    <circle cx="420" cy="278" r="4" fill="#4a7a5e"/>
    <text x="428" y="281" font-family="monospace" font-size="7" fill="#2a3848">Sockeye</text>
    <circle cx="460" cy="278" r="4" fill="#c84820"/>
    <text x="468" y="281" font-family="monospace" font-size="7" fill="#2a3848">Chinook</text>
  </svg>
---

CODAP (Common Online Data Analysis Platform) is a free, open-source platform for visualising and analysing ecological data. It combines tables, charts and maps in one interactive workspace.

## How it works

Data is loaded into CODAP via drag-and-drop, CSV import or direct URL. Users can then interactively create charts and maps — a selection in the table is automatically highlighted across all other views.

## What it does

- Interactive data exploration without coding
- Dynamically linked tables, charts and maps
- Drag-and-drop interface for easy analysis
- Suited for field researchers and resource managers
- Free and accessible via the browser

## Use at Lumax

CODAP is used to make ecological monitoring data accessible to land stewards, First Nations and resource managers — enabling them to explore and discover patterns in the data collected by Lumax.

[Visit codap.concord.org →](https://codap.concord.org)
