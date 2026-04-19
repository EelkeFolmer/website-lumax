---
title: "AI-BIRD"
weight: 1
tag: "Bird monitoring platform"
summary: "Cloud-based platform that automatically detects and counts birds — including avian influenza casualties — in drone imagery."
url_external: ""
illustration: |
  <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
    <!-- Sky -->
    <rect width="560" height="320" fill="#dce8f0"/>
    <rect width="560" height="120" fill="#c8dce8"/>

    <!-- Ground / colony area -->
    <path d="M0,195 Q140,182 280,190 Q420,198 560,185 L560,320 L0,320Z" fill="#8aaa78"/>
    <path d="M0,210 Q140,200 280,206 Q420,212 560,202 L560,320 L0,320Z" fill="#6a8a58"/>

    <!-- Aerial orthomosaic grid overlay (drone map) -->
    <rect x="80" y="210" width="400" height="90" fill="#7a9a68" rx="2"/>
    <g stroke="#5a7a48" stroke-width="0.8" opacity="0.5">
      <line x1="80" y1="225" x2="480" y2="225"/>
      <line x1="80" y1="240" x2="480" y2="240"/>
      <line x1="80" y1="255" x2="480" y2="255"/>
      <line x1="80" y1="270" x2="480" y2="270"/>
      <line x1="80" y1="285" x2="480" y2="285"/>
      <line x1="120" y1="210" x2="120" y2="300"/>
      <line x1="160" y1="210" x2="160" y2="300"/>
      <line x1="200" y1="210" x2="200" y2="300"/>
      <line x1="240" y1="210" x2="240" y2="300"/>
      <line x1="280" y1="210" x2="280" y2="300"/>
      <line x1="320" y1="210" x2="320" y2="300"/>
      <line x1="360" y1="210" x2="360" y2="300"/>
      <line x1="400" y1="210" x2="400" y2="300"/>
      <line x1="440" y1="210" x2="440" y2="300"/>
    </g>

    <!-- Birds (alive) — small white dots with teal detection boxes -->
    <g fill="#e8f0e0">
      <circle cx="112" cy="228" r="5"/>
      <circle cx="145" cy="242" r="5"/>
      <circle cx="175" cy="225" r="5"/>
      <circle cx="210" cy="248" r="5"/>
      <circle cx="250" cy="232" r="5"/>
      <circle cx="295" cy="250" r="5"/>
      <circle cx="330" cy="228" r="5"/>
      <circle cx="365" cy="245" r="5"/>
      <circle cx="405" cy="232" r="5"/>
      <circle cx="440" cy="252" r="5"/>
      <circle cx="128" cy="265" r="5"/>
      <circle cx="168" cy="272" r="5"/>
      <circle cx="215" cy="268" r="5"/>
      <circle cx="262" cy="275" r="5"/>
      <circle cx="312" cy="268" r="5"/>
      <circle cx="350" cy="278" r="5"/>
      <circle cx="388" cy="265" r="5"/>
      <circle cx="425" cy="275" r="5"/>
    </g>
    <!-- Detection boxes — alive (teal) -->
    <g fill="none" stroke="#1a9898" stroke-width="1.5">
      <rect x="105" y="221" width="14" height="14" rx="1"/>
      <rect x="138" y="235" width="14" height="14" rx="1"/>
      <rect x="168" y="218" width="14" height="14" rx="1"/>
      <rect x="203" y="241" width="14" height="14" rx="1"/>
      <rect x="243" y="225" width="14" height="14" rx="1"/>
      <rect x="288" y="243" width="14" height="14" rx="1"/>
      <rect x="323" y="221" width="14" height="14" rx="1"/>
      <rect x="358" y="238" width="14" height="14" rx="1"/>
      <rect x="398" y="225" width="14" height="14" rx="1"/>
      <rect x="433" y="245" width="14" height="14" rx="1"/>
    </g>

    <!-- Dead birds (orange/red boxes) -->
    <g fill="#d08040">
      <circle cx="192" cy="268" r="4.5"/>
      <circle cx="345" cy="262" r="4.5"/>
      <circle cx="455" cy="270" r="4.5"/>
    </g>
    <g fill="none" stroke="#c84820" stroke-width="1.8">
      <rect x="185" y="261" width="14" height="14" rx="1"/>
      <rect x="338" y="255" width="14" height="14" rx="1"/>
      <rect x="448" y="263" width="14" height="14" rx="1"/>
    </g>
    <!-- Dead bird X marks -->
    <g stroke="#c84820" stroke-width="1.5" stroke-linecap="round">
      <line x1="188" y1="264" x2="196" y2="272"/><line x1="196" y1="264" x2="188" y2="272"/>
      <line x1="341" y1="258" x2="349" y2="266"/><line x1="349" y1="258" x2="341" y2="266"/>
      <line x1="451" y1="266" x2="459" y2="274"/><line x1="459" y1="266" x2="451" y2="274"/>
    </g>

    <!-- Drone above -->
    <g transform="translate(280,68)">
      <rect x="-16" y="-8" width="32" height="16" rx="4" fill="#1a2838" stroke="#0a1828" stroke-width="1.5"/>
      <line x1="-16" y1="0" x2="-42" y2="-16" stroke="#1a2838" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="16" y1="0" x2="42" y2="-16" stroke="#1a2838" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="-16" y1="0" x2="-42" y2="16" stroke="#1a2838" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="16" y1="0" x2="42" y2="16" stroke="#1a2838" stroke-width="3.5" stroke-linecap="round"/>
      <ellipse cx="-42" cy="-16" rx="13" ry="4" fill="none" stroke="#1a2838" stroke-width="1.5"/>
      <ellipse cx="42" cy="-16" rx="13" ry="4" fill="none" stroke="#1a2838" stroke-width="1.5"/>
      <ellipse cx="-42" cy="16" rx="13" ry="4" fill="none" stroke="#1a2838" stroke-width="1.5"/>
      <ellipse cx="42" cy="16" rx="13" ry="4" fill="none" stroke="#1a2838" stroke-width="1.5"/>
      <circle cx="0" cy="10" r="5" fill="#2a3848" stroke="#0a1828" stroke-width="1"/>
      <!-- Dashed survey line down -->
      <line x1="0" y1="16" x2="0" y2="122" stroke="#1a2838" stroke-width="1" stroke-dasharray="6,5" opacity="0.35"/>
    </g>

    <!-- Birds in sky (flying) -->
    <path d="M90,80 Q98,74 106,80" fill="none" stroke="#2a3848" stroke-width="2" stroke-linecap="round"/>
    <path d="M115,65 Q123,59 131,65" fill="none" stroke="#2a3848" stroke-width="2" stroke-linecap="round"/>
    <path d="M400,72 Q408,66 416,72" fill="none" stroke="#2a3848" stroke-width="2" stroke-linecap="round"/>
    <path d="M430,55 Q438,49 446,55" fill="none" stroke="#2a3848" stroke-width="2" stroke-linecap="round"/>
    <path d="M460,75 Q467,69 474,75" fill="none" stroke="#2a3848" stroke-width="1.8" stroke-linecap="round"/>

    <!-- Count label -->
    <rect x="14" y="14" width="130" height="44" rx="6" fill="white" opacity="0.88"/>
    <text x="24" y="32" font-family="monospace" font-size="9" fill="#1a2838" font-weight="bold">AI-BIRD DETECTION</text>
    <circle cx="24" cy="46" r="4" fill="#1a9898"/>
    <text x="32" y="49" font-family="monospace" font-size="8" fill="#1a2838">18 alive</text>
    <circle cx="82" cy="46" r="4" fill="#c84820"/>
    <text x="90" y="49" font-family="monospace" font-size="8" fill="#1a2838">3 dead</text>
  </svg>
---

AI-BIRD is een cloud-gebaseerd platform voor efficiënte monitoring van broedvogelkolonies en detectie van vogelgriepslachtoffers in drone-beelden.

## How it works

Users upload drone imagery to the cloud. AI-BIRD automatically processes the images via photogrammetry into orthorectified maps, which are then analysed for the presence of live and dead birds. Results are presented through an interactive data portal where users can review and manually adjust detections.

## What it does

- Automated counting of breeding birds in large colonies
- Detection of avian influenza casualties (dead birds)
- Identificatie van nesten
- Tijdsreeksen van koloniegroei en -ontwikkeling
- Interactive portal for review and annotation

## Background

Developed together with the Dutch Centre for Field Ornithology ([Sovon](https://sovon.nl)). The avian influenza outbreaks of recent years have greatly increased the urgency for remote monitoring — AI-BIRD makes it possible to survey colonies without disturbing the birds.
