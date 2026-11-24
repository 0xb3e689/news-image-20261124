// Editorial scene illustrations for stories 1-13
// Every illustration depicts the concrete facts of its story with zero text-slide filler.

function banner(label, bg = "#9E1F24", x = 6, y = 6, w = 140, h = 16, fs = 8.4) {
  return `<g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${bg}"/>
    <text x="${x + w / 2}" y="${y + h - 4.7}" text-anchor="middle" fill="#FFFFFF" font-family="Helvetica Neue, Arial, sans-serif" font-size="${fs}" font-weight="800" letter-spacing="0.35">${label}</text>
  </g>`;
}

function pill(label, x, y, w, h = 15, bg = "#132238", fg = "#FFFFFF", fs = 8.2) {
  return `<g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${bg}" stroke="#FAF7F0" stroke-width="0.9"/>
    <text x="${x + w / 2}" y="${y + h - 4.3}" text-anchor="middle" fill="${fg}" font-family="Helvetica Neue, Arial, sans-serif" font-size="${fs}" font-weight="800" letter-spacing="0.25">${label}</text>
  </g>`;
}

export function renderIllustration(key, isHero = false) {
  const W = isHero ? 266 : 196;
  const H = isHero ? 96 : 62;

  switch (key) {
    case "shenzhou":
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="spSky" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#0A182D"/><stop offset="100%" stop-color="#1A365D"/>
          </linearGradient>
        </defs>
        <rect width="${W}" height="${H}" fill="url(#spSky)"/>
        <path d="M-20 96 Q133 56 286 96 Z" fill="#1D5D8C"/>
        <path d="M-20 96 Q133 60 286 96" fill="none" stroke="#7AD0FA" stroke-width="2.4" opacity="0.85"/>
        <circle cx="24" cy="36" r="1.1" fill="#FFF" opacity="0.7"/>
        <circle cx="54" cy="24" r="1.3" fill="#FFF" opacity="0.85"/>
        <circle cx="196" cy="18" r="1.2" fill="#FFF" opacity="0.8"/>
        <circle cx="242" cy="34" r="1.4" fill="#FDE68A"/>
        <!-- Tiangong orbital station & approaching Shenzhou-24 -->
        <g transform="translate(136,44)">
          <rect x="-76" y="-14" width="44" height="10" fill="#2A7AC2" stroke="#9BD3FF" stroke-width="0.8"/>
          <rect x="-76" y="4" width="44" height="10" fill="#2A7AC2" stroke="#9BD3FF" stroke-width="0.8"/>
          <rect x="32" y="-14" width="44" height="10" fill="#2A7AC2" stroke="#9BD3FF" stroke-width="0.8"/>
          <rect x="32" y="4" width="44" height="10" fill="#2A7AC2" stroke="#9BD3FF" stroke-width="0.8"/>
          <line x1="-54" y1="-14" x2="-54" y2="-4" stroke="#9BD3FF" stroke-width="0.6"/>
          <line x1="-54" y1="4" x2="-54" y2="14" stroke="#9BD3FF" stroke-width="0.6"/>
          <line x1="54" y1="-14" x2="54" y2="-4" stroke="#9BD3FF" stroke-width="0.6"/>
          <line x1="54" y1="4" x2="54" y2="14" stroke="#9BD3FF" stroke-width="0.6"/>
          <rect x="-32" y="-6" width="64" height="12" rx="4" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1"/>
          <rect x="-10" y="-10" width="20" height="20" rx="3" fill="#E2E8F0" stroke="#64748B" stroke-width="1"/>
          <circle cx="0" cy="0" r="3.5" fill="#1D4ED8"/>
          <!-- Approaching Shenzhou-24 capsule with mini solar wings -->
          <rect x="-95" y="-12" width="6" height="6" fill="#3B82F6" stroke="#9BD3FF" stroke-width="0.5"/>
          <rect x="-95" y="6" width="6" height="6" fill="#3B82F6" stroke="#9BD3FF" stroke-width="0.5"/>
          <path d="M-100 -3 L-84 -5 L-84 5 L-100 3 Z" fill="#F8FAFC" stroke="#94A3B8" stroke-width="0.6"/>
          <circle cx="-103" cy="0" r="2.6" fill="#F59E0B"/>
        </g>
        <!-- Accurate China (5 stars) & Pakistan (crescent + star) flags -->
        <g transform="translate(8,73)">
          <rect width="23" height="15" rx="2" fill="#DE2910" stroke="#FFF" stroke-width="0.8"/>
          <polygon points="5.5,3.5 6.4,6.1 9,6.1 6.9,7.7 7.7,10.2 5.5,8.7 3.3,10.2 4.1,7.7 2,6.1 4.6,6.1" fill="#FFDE00"/>
          <circle cx="10.5" cy="3.2" r="0.8" fill="#FFDE00"/><circle cx="12" cy="5.2" r="0.8" fill="#FFDE00"/>
          <circle cx="12" cy="7.8" r="0.8" fill="#FFDE00"/><circle cx="10.5" cy="9.8" r="0.8" fill="#FFDE00"/>
          <rect x="28" width="23" height="15" rx="2" fill="#01411C" stroke="#FFF" stroke-width="0.8"/>
          <rect x="28" width="5.5" height="15" rx="1" fill="#FFFFFF"/>
          <circle cx="41.5" cy="7.5" r="3.9" fill="#FFFFFF"/>
          <circle cx="43.1" cy="6.8" r="3.2" fill="#01411C"/>
          <polygon points="44.8,4.6 45.4,6.3 47.1,6.3 45.7,7.3 46.2,9 44.8,8 43.4,9 43.9,7.3 42.5,6.3 44.2,6.3" fill="#FFFFFF"/>
        </g>
        ${banner("FIRST FOREIGNER ON TIANGONG", "#B8292F", 6, 6, 156, 16, 8.2)}
        ${pill("SHENZHOU-24", 168, 74, 92, 16, "#102847", "#FDE68A", 8.6)}
      </svg>`;

    case "markets":
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#ECF2EB"/>
        <!-- Subtle skyline backdrop -->
        <g fill="#D5E1D4">
          <rect x="0" y="64" width="14" height="32"/>
          <rect x="228" y="42" width="16" height="54"/><rect x="246" y="56" width="20" height="40"/>
          <polygon points="236,26 232,42 240,42"/>
        </g>
        <line x1="0" y1="30" x2="${W}" y2="30" stroke="#CFE0CD" stroke-width="0.8"/>
        <line x1="0" y1="56" x2="${W}" y2="56" stroke="#CFE0CD" stroke-width="0.8"/>
        <line x1="0" y1="82" x2="${W}" y2="82" stroke="#CFE0CD" stroke-width="0.8"/>
        <!-- Ascending rebound arrow cleanly above bars -->
        <path d="M132 18 Q182 22 232 10" fill="none" stroke="#C46316" stroke-width="2" stroke-dasharray="4,2"/>
        <polygon points="236,9 227,7 229,14" fill="#C46316"/>
        <!-- Three regional chip-index bars -->
        <g font-family="Helvetica Neue, Arial, sans-serif">
          <rect x="14" y="28" width="58" height="61" rx="3" fill="#186340"/>
          <text x="43" y="49" text-anchor="middle" fill="#FFFFFF" font-size="14.5" font-weight="900">+9.0%</text>
          <text x="43" y="65" text-anchor="middle" fill="#C7F2D9" font-size="8.4" font-weight="800">TAIWAN</text>
          <text x="43" y="77" text-anchor="middle" fill="#9EE6BD" font-size="7.4">TAIEX</text>

          <rect x="80" y="39" width="58" height="50" rx="3" fill="#227A50"/>
          <text x="109" y="57" text-anchor="middle" fill="#FFFFFF" font-size="14" font-weight="900">+6.5%</text>
          <text x="109" y="71" text-anchor="middle" fill="#C7F2D9" font-size="8.4" font-weight="800">SEOUL</text>
          <text x="109" y="82" text-anchor="middle" fill="#9EE6BD" font-size="7.4">KOSPI</text>

          <rect x="146" y="48" width="58" height="41" rx="3" fill="#2F9464"/>
          <text x="175" y="64" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="900">+4.0%</text>
          <text x="175" y="76" text-anchor="middle" fill="#DDF7E8" font-size="7.8" font-weight="800">TOKYO</text>
          <text x="175" y="85" text-anchor="middle" fill="#B7EBD0" font-size="7.2">NIKKEI</text>
        </g>
        <!-- AI microchip -->
        <g transform="translate(216,42)">
          <rect width="38" height="38" rx="4" fill="#132238" stroke="#D97706" stroke-width="1.6"/>
          <rect x="9" y="9" width="20" height="20" rx="2" fill="#2A466B"/>
          <text x="19" y="22.5" text-anchor="middle" fill="#FDE68A" font-family="Helvetica Neue, Arial, sans-serif" font-size="9.5" font-weight="900">AI</text>
          <path d="M9 -4 v4 M19 -4 v4 M29 -4 v4 M9 38 v4 M19 38 v4 M29 38 v4" stroke="#D97706" stroke-width="1.6"/>
        </g>
        ${banner("ASIAN CHIP RALLY", "#165B3A", 6, 5, 114, 16, 8.4)}
      </svg>`;

    case "hormuz":
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <!-- Left: Hormuz channel with 3 tankers claimed hit + underwater mine -->
        <rect width="160" height="${H}" fill="#DCCDB8"/>
        <rect x="0" y="42" width="160" height="54" fill="#2B597A"/>
        <path d="M0 30 Q45 24 85 37 T160 33 L160 43 L0 43 Z" fill="#B59B78"/>
        <!-- Distant tanker 2 with wind-blown smoke plume -->
        <path d="M10 49 L44 49 L41 54 L13 54 Z" fill="#334155"/>
        <path d="M22 49 Q26 40 31 49 Z" fill="#F97316"/>
        <ellipse cx="32" cy="39" rx="7" ry="2.6" fill="#64748B" opacity="0.65"/>
        <ellipse cx="40" cy="36" rx="9" ry="2.5" fill="#94A3B8" opacity="0.45"/>
        <!-- Distant tanker 3 with wind-blown smoke plume -->
        <path d="M110 49 L144 49 L141 54 L113 54 Z" fill="#334155"/>
        <path d="M122 49 Q126 40 131 49 Z" fill="#F97316"/>
        <ellipse cx="132" cy="39" rx="7" ry="2.6" fill="#64748B" opacity="0.65"/>
        <ellipse cx="141" cy="36" rx="9" ry="2.5" fill="#94A3B8" opacity="0.45"/>
        <!-- Foreground tanker 1 -->
        <path d="M36 69 L126 69 L120 79 L42 79 Z" fill="#1E293B"/>
        <rect x="102" y="59" width="14" height="10" fill="#E2E8F0"/>
        <rect x="54" y="64" width="42" height="5" fill="#991B1B"/>
        <path d="M64 64 Q71 42 79 64 Z" fill="#F59E0B"/>
        <path d="M74 64 Q82 37 90 64 Z" fill="#EA580C"/>
        <path d="M79 64 Q83 49 87 64 Z" fill="#FEF08A"/>
        <!-- Stylized spiked naval mine below waterline -->
        <g transform="translate(26,84)" stroke="#0F172A" stroke-width="1.3">
          <circle cx="0" cy="0" r="5" fill="#1E293B"/>
          <line x1="-8" y1="0" x2="8" y2="0"/><line x1="0" y1="-8" x2="0" y2="8"/>
          <line x1="-6" y1="-6" x2="6" y2="6"/><line x1="-6" y1="6" x2="6" y2="-6"/>
        </g>
        <!-- Divider -->
        <line x1="160" y1="0" x2="160" y2="${H}" stroke="#132238" stroke-width="1.5" stroke-dasharray="4,3"/>
        <!-- Right: Oil barrel & downward sloping 3-month low chart -->
        <rect x="161" y="0" width="105" height="${H}" fill="#EFECE3"/>
        <g transform="translate(166,22)">
          <rect x="0" y="2" width="20" height="30" rx="3" fill="#1E293B"/>
          <line x1="0" y1="11" x2="20" y2="11" stroke="#64748B" stroke-width="1.4"/>
          <line x1="0" y1="23" x2="20" y2="23" stroke="#64748B" stroke-width="1.4"/>
          <path d="M10 13 Q13.5 19 10 21 Q6.5 19 10 13 Z" fill="#F59E0B"/>
        </g>
        <text x="228" y="29" text-anchor="middle" fill="#475569" font-family="Helvetica Neue, Arial, sans-serif" font-size="7.5" font-weight="800">BRENT</text>
        <text x="228" y="45" text-anchor="middle" fill="#132238" font-family="Georgia, serif" font-size="14" font-weight="900">~$89–92</text>
        <polyline points="170,56 192,59 214,62 234,66 256,66" fill="none" stroke="#157580" stroke-width="2.2"/>
        <circle cx="256" cy="66" r="2.5" fill="#157580"/>
        <text x="213" y="75" text-anchor="middle" fill="#157580" font-family="Helvetica Neue, Arial, sans-serif" font-size="7.5" font-weight="800">3-MONTH LOW</text>
        ${banner("IRGC CLAIM · 3 TANKERS", "#A12628", 6, 6, 132, 16, 8.2)}
        ${pill("CLAIM | UNVERIFIED", 169, 79, 88, 13, "#9A5B13", "#FFFFFF", 7.1)}
      </svg>`;

    case "hasina":
      // Biman-styled jet with swept-back wing flying Delhi -> Dhaka toward Dec 16 calendar
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#DCEAE3"/>
        <rect x="0" y="46" width="${W}" height="16" fill="#475569"/>
        <line x1="8" y1="54" x2="128" y2="54" stroke="#F8FAFC" stroke-width="1.5" stroke-dasharray="9,6"/>
        <text x="159" y="57" text-anchor="middle" fill="#E2E8F0" font-family="Helvetica Neue, Arial, sans-serif" font-size="6.8" font-weight="800">DELHI → DHAKA</text>
        <!-- Airport control tower -->
        <rect x="26" y="24" width="10" height="22" fill="#64748B"/>
        <polygon points="22,24 40,24 37,16 25,16" fill="#1E293B"/>
        <rect x="25" y="18" width="12" height="4" fill="#93C5FD"/>
        <!-- Airliner flying right with properly swept-back wing -->
        <g transform="translate(88,28) rotate(7)">
          <path d="M-32 0 L18 -2 L29 2 L17 6 L-30 5 Z" fill="#FFFFFF" stroke="#1E293B" stroke-width="1"/>
          <polygon points="18,0 24,1.5 18,2.5" fill="#1E293B"/>
          <polygon points="-28,0 -34,-12 -21,-12 -15,0" fill="#006A4E"/>
          <circle cx="-25" cy="-6" r="3.2" fill="#F42A41"/>
          <!-- Swept-back wing -->
          <polygon points="3,4 -11,13 -18,13 -6,4" fill="#CBD5E1" stroke="#475569" stroke-width="0.7"/>
        </g>
        <!-- Calendar leaf DEC 16 -->
        <g transform="translate(142,6)">
          <rect width="46" height="37" rx="3" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.2"/>
          <rect width="46" height="11" rx="2" fill="#B8292F"/>
          <text x="23" y="8.5" text-anchor="middle" fill="#FFFFFF" font-family="Helvetica Neue, Arial, sans-serif" font-size="7.5" font-weight="900">DEC</text>
          <text x="23" y="30" text-anchor="middle" fill="#132238" font-family="Georgia, serif" font-size="18" font-weight="900">16</text>
        </g>
      </svg>`;

    case "australia":
      // Canberra Parliament House + angled gavel striking a social-feed smartphone screen
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#DFECEE"/>
        <!-- Canberra Parliament House silhouette -->
        <path d="M0 62 L0 50 L32 39 L68 39 L100 50 L100 62 Z" fill="#648A78"/>
        <rect x="30" y="43" width="40" height="13" fill="#F8FAFC" stroke="#475569" stroke-width="0.9"/>
        <line x1="50" y1="10" x2="50" y2="43" stroke="#1E293B" stroke-width="1.6"/>
        <polygon points="40,39 50,17 60,39" fill="none" stroke="#1E293B" stroke-width="1.2"/>
        <rect x="50" y="10" width="15" height="8" fill="#1E3A8A"/>
        <circle cx="59" cy="13" r="0.9" fill="#FFF"/><circle cx="62" cy="15" r="0.9" fill="#FFF"/><circle cx="57" cy="16" r="0.9" fill="#FFF"/>
        <!-- Social-feed smartphone struck on the right -->
        <g transform="translate(124,8)">
          <rect width="30" height="47" rx="4" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
          <rect x="3" y="5" width="24" height="35" rx="1" fill="#E0F2FE"/>
          <!-- Feed card bars inside phone -->
          <rect x="6" y="8" width="18" height="7" rx="1" fill="#BAE6FD"/>
          <rect x="6" y="18" width="18" height="9" rx="1" fill="#BAE6FD"/>
          <rect x="6" y="30" width="12" height="6" rx="1" fill="#BAE6FD"/>
          <!-- Crack across screen -->
          <polyline points="4,15 14,22 10,29 24,36" fill="none" stroke="#DC2626" stroke-width="1.7"/>
        </g>
        <!-- Gavel swinging cleanly from lower-left striking phone -->
        <g transform="translate(115,24) rotate(-32)">
          <rect x="-24" y="-2" width="22" height="4" rx="1.5" fill="#A06B3B" stroke="#3E2723" stroke-width="0.7"/>
          <rect x="-3" y="-9" width="10" height="18" rx="2" fill="#7C4A22" stroke="#3E2723" stroke-width="0.9"/>
        </g>
        <!-- Impact rays -->
        <path d="M122 10 L118 5 M123 18 L116 16 M123 26 L117 29" stroke="#DC2626" stroke-width="1.4" stroke-linecap="round"/>
        ${pill("5% FINE", 142, 42, 48, 16, "#B8292F", "#FFFFFF", 8.4)}
      </svg>`;

    case "ukjrf":
      // Unheated UK terraced houses (cold smokeless chimneys) + empty plate & fork/knife + 3.8M UK
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#D6DCE3"/>
        <ellipse cx="44" cy="11" rx="24" ry="7" fill="#B8C2CE"/>
        <ellipse cx="144" cy="11" rx="30" ry="8" fill="#B8C2CE"/>
        <!-- Cold brick chimneys (no smoke) -->
        <rect x="44" y="12" width="7" height="11" fill="#64748B"/>
        <rect x="84" y="12" width="7" height="11" fill="#64748B"/>
        <rect x="120" y="12" width="7" height="11" fill="#64748B"/>
        <!-- Terraced houses -->
        <g stroke="#334155" stroke-width="0.8">
          <polygon points="16,30 35,17 54,30" fill="#475569"/>
          <rect x="16" y="30" width="38" height="32" fill="#8C584C"/>
          <polygon points="54,30 73,17 92,30" fill="#334155"/>
          <rect x="54" y="30" width="38" height="32" fill="#7A4C42"/>
          <polygon points="92,30 111,17 130,30" fill="#475569"/>
          <rect x="92" y="30" width="38" height="32" fill="#8C584C"/>
        </g>
        <!-- Dark unlit windows -->
        <rect x="23" y="36" width="8" height="10" fill="#1E293B"/>
        <rect x="39" y="36" width="8" height="10" fill="#1E293B"/>
        <rect x="61" y="36" width="8" height="10" fill="#1E293B"/>
        <rect x="77" y="36" width="8" height="10" fill="#FDE68A" opacity="0.55"/>
        <rect x="99" y="36" width="8" height="10" fill="#1E293B"/>
        <rect x="115" y="36" width="8" height="10" fill="#1E293B"/>
        <rect x="31" y="49" width="9" height="13" fill="#0F172A"/>
        <rect x="69" y="49" width="9" height="13" fill="#0F172A"/>
        <rect x="107" y="49" width="9" height="13" fill="#0F172A"/>
        <!-- Empty dinner plate with fork & knife on right -->
        <g transform="translate(163,44)">
          <circle cx="0" cy="0" r="13" fill="#FFFFFF" stroke="#475569" stroke-width="1.3"/>
          <circle cx="0" cy="0" r="8.5" fill="none" stroke="#CBD5E1" stroke-width="1"/>
          <line x1="-18" y1="-9" x2="-18" y2="10" stroke="#334155" stroke-width="1.6" stroke-linecap="round"/>
          <path d="M-20 -9 V-3 M-16 -9 V-3" stroke="#334155" stroke-width="1.1"/>
          <line x1="18" y1="-9" x2="18" y2="10" stroke="#334155" stroke-width="1.8" stroke-linecap="round"/>
        </g>
        ${pill("3.8M UK", 136, 7, 54, 17, "#9E1F24", "#FFFFFF", 9)}
      </svg>`;

    case "kadiz":
      // East Sea, Ulleungdo peak with shelter-alert icon, radar arcs, sleek swept-wing jets flying RIGHT
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#11273B"/>
        <rect x="0" y="46" width="${W}" height="16" fill="#1D4466"/>
        <!-- Ulleungdo volcanic island -->
        <polygon points="14,47 40,25 64,47" fill="#2E4E43"/>
        <polygon points="32,47 52,32 72,47" fill="#3B6254"/>
        <!-- Shelter alert warning triangle on island -->
        <polygon points="44,35 37,45 51,45" fill="#F59E0B" stroke="#11273B" stroke-width="0.9"/>
        <text x="44" y="44" text-anchor="middle" fill="#11273B" font-family="Helvetica Neue, Arial, sans-serif" font-size="7.5" font-weight="900">!</text>
        <!-- Radar arcs -->
        <path d="M46 46 A30 30 0 0 1 76 16" fill="none" stroke="#38BDF8" stroke-width="1.1" opacity="0.55"/>
        <path d="M46 46 A46 46 0 0 1 92 3" fill="none" stroke="#38BDF8" stroke-width="1" stroke-dasharray="3,2" opacity="0.45"/>
        <!-- Sleek SK interceptor jets well separated pointing RIGHT toward intruder -->
        <g transform="translate(90,20) rotate(-8)">
          <polygon points="18,0 2,-3 -8,-10 -12,-10 -6,-2 -15,-2 -17,-6 -19,-6 -18,0 -19,6 -17,6 -15,2 -6,2 -12,10 -8,10 2,3" fill="#F8FAFC"/>
        </g>
        <g transform="translate(107,40) rotate(-5) scale(0.84)">
          <polygon points="18,0 2,-3 -8,-10 -12,-10 -6,-2 -15,-2 -17,-6 -19,-6 -18,0 -19,6 -17,6 -15,2 -6,2 -12,10 -8,10 2,3" fill="#CBD5E1"/>
        </g>
        <!-- Larger Russian military aircraft turning away top-right -->
        <g transform="translate(162,18) rotate(8)">
          <polygon points="20,0 4,-3 -10,-12 -14,-11 -5,-2 -18,-2 -21,-6 -23,-6 -21,0 -23,6 -21,6 -18,2 -5,2 -14,11 -10,12 4,3" fill="#F87171"/>
        </g>
        ${pill("KADIZ", 142, 43, 48, 15, "#B8292F", "#FFFFFF", 8.2)}
      </svg>`;

    case "alahly":
      // Cairo stadium pitch + empty manager dugout & tactical easel board + COACH SACKED stamp
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#132238"/>
        <!-- Pitch -->
        <rect x="0" y="34" width="${W}" height="28" fill="#1E7D46"/>
        <rect x="0" y="42" width="${W}" height="8" fill="#248F52"/>
        <line x1="0" y1="34" x2="${W}" y2="34" stroke="#FFFFFF" stroke-width="1.2" opacity="0.7"/>
        <!-- Floodlights -->
        <circle cx="26" cy="11" r="3.5" fill="#FEF08A" opacity="0.9"/>
        <circle cx="170" cy="11" r="3.5" fill="#FEF08A" opacity="0.9"/>
        <!-- Manager dugout with two empty seats -->
        <g transform="translate(14,23)">
          <rect x="0" y="0" width="58" height="25" rx="2" fill="#1E293B" stroke="#94A3B8" stroke-width="1.1"/>
          <rect x="3" y="3" width="52" height="7" fill="#334155"/>
          <rect x="10" y="12" width="15" height="12" rx="2" fill="#B91C1C"/>
          <rect x="33" y="12" width="15" height="12" rx="2" fill="#475569"/>
        </g>
        <!-- Abandoned tactical board on easel -->
        <g transform="translate(82,27)">
          <line x1="6" y1="18" x2="3" y2="27" stroke="#CBD5E1" stroke-width="1.4"/>
          <line x1="18" y1="18" x2="21" y2="27" stroke="#CBD5E1" stroke-width="1.4"/>
          <rect x="0" y="0" width="24" height="19" rx="1.5" fill="#FFFFFF" stroke="#0F172A" stroke-width="1"/>
          <circle cx="7" cy="6" r="1.5" fill="#DC2626"/><circle cx="17" cy="6" r="1.5" fill="#1D4ED8"/>
          <line x1="7" y1="13" x2="17" y2="10" stroke="#0F172A" stroke-width="1.1"/>
          <circle cx="12" cy="14" r="1.4" fill="#DC2626"/>
        </g>
        <!-- Football on touchline -->
        <circle cx="144" cy="51" r="5.5" fill="#FFFFFF" stroke="#1E293B" stroke-width="1"/>
        <!-- Scoreboard -->
        <rect x="58" y="4" width="80" height="15" rx="2" fill="#0F172A" stroke="#64748B" stroke-width="0.8"/>
        <text x="98" y="14.5" text-anchor="middle" fill="#FDE68A" font-family="Helvetica Neue, Arial, sans-serif" font-size="8.8" font-weight="900">AHLY 0–2 PYR</text>
        ${pill("COACH SACKED", 112, 26, 78, 16, "#B8292F", "#FFFFFF", 7.8)}
      </svg>`;

    case "singapore":
      // Singapore port cranes, container ship with glowing AI chip crates, clean upward export arrow
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#E6F0EC"/>
        <rect x="0" y="45" width="${W}" height="17" fill="#2C6B8A"/>
        <!-- Port gantry cranes -->
        <g stroke="#B8292F" stroke-width="1.8" fill="none">
          <path d="M24 45 L24 18 L52 18 M34 45 L34 18"/>
          <path d="M56 45 L56 22 L78 22 M64 45 L64 22"/>
        </g>
        <!-- Container ship with microchip-marked electronics cargo -->
        <path d="M68 48 L158 48 L152 56 L74 56 Z" fill="#132238"/>
        <rect x="80" y="40" width="14" height="8" fill="#D97706"/>
        <rect x="96" y="40" width="14" height="8" fill="#1E40AF"/>
        <rect x="112" y="40" width="14" height="8" fill="#166534"/>
        <rect x="88" y="33" width="14" height="7" fill="#B8292F"/>
        <rect x="104" y="33" width="14" height="7" fill="#0D9488"/>
        <rect x="134" y="34" width="12" height="14" fill="#F8FAFC"/>
        <!-- Clean rising arrow to top-right clear of pill -->
        <polyline points="72,30 96,24 118,16" fill="none" stroke="#166534" stroke-width="2.2"/>
        <polygon points="122,14 114,13 117,19" fill="#166534"/>
        ${pill("+45.8% Q3", 124, 6, 66, 16, "#166534", "#FFFFFF", 8.6)}
      </svg>`;

    case "zaporizhzhia":
      // Night Ukrainian apartment block with blast damage, moon shifted clear to top-left, emergency ambulance
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#141C2C"/>
        <circle cx="38" cy="11" r="5" fill="#FEF3C7" opacity="0.85"/>
        <!-- Apartment blocks -->
        <rect x="24" y="21" width="52" height="41" fill="#334155"/>
        <rect x="82" y="13" width="58" height="49" fill="#475569"/>
        <!-- Shattered façade & jagged flames -->
        <polygon points="94,20 124,18 128,36 112,41 96,35" fill="#0F172A"/>
        <path d="M100 36 L104 24 L109 32 L114 21 L120 35 Z" fill="#EA580C"/>
        <path d="M105 36 L109 28 L113 33 L116 26 L119 36 Z" fill="#FDE047"/>
        <rect x="88" y="21" width="6" height="7" fill="#1E293B"/>
        <rect x="128" y="21" width="6" height="7" fill="#1E293B"/>
        <!-- Windows -->
        <rect x="32" y="27" width="7" height="7" fill="#FDE68A" opacity="0.7"/>
        <rect x="46" y="27" width="7" height="7" fill="#1E293B"/>
        <rect x="60" y="27" width="7" height="7" fill="#1E293B"/>
        <rect x="32" y="40" width="7" height="7" fill="#1E293B"/>
        <rect x="46" y="40" width="7" height="7" fill="#FDE68A" opacity="0.5"/>
        <rect x="90" y="46" width="8" height="8" fill="#1E293B"/>
        <!-- Smoke -->
        <circle cx="122" cy="15" r="7" fill="#64748B" opacity="0.6"/>
        <circle cx="132" cy="10" r="8" fill="#94A3B8" opacity="0.4"/>
        <!-- Emergency vehicle -->
        <rect x="148" y="47" width="30" height="12" rx="2" fill="#F8FAFC"/>
        <circle cx="156" cy="46" r="3" fill="#3B82F6"/>
        <circle cx="170" cy="46" r="3" fill="#EF4444"/>
        ${pill("2 KILLED", 132, 7, 58, 15, "#9E1F24", "#FFFFFF", 8.2)}
      </svg>`;

    case "gaza":
      // Coastal Khan Younis buildings, smoke column, crisp Red Crescent ambulance
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#ECE3D6"/>
        <rect x="0" y="48" width="${W}" height="14" fill="#8C7E6D"/>
        <rect x="20" y="29" width="24" height="19" fill="#6E6254"/>
        <rect x="48" y="21" width="22" height="27" fill="#7D7061"/>
        <rect x="74" y="31" width="24" height="17" fill="#6E6254"/>
        <circle cx="59" cy="15" r="8" fill="#52525B" opacity="0.75"/>
        <circle cx="71" cy="11" r="10" fill="#71717A" opacity="0.65"/>
        <circle cx="84" cy="9" r="7" fill="#A1A1AA" opacity="0.5"/>
        <!-- Ambulance with crisp Red Crescent -->
        <rect x="114" y="37" width="44" height="18" rx="2" fill="#FFFFFF" stroke="#475569" stroke-width="1.1"/>
        <rect x="144" y="40" width="11" height="7" fill="#93C5FD"/>
        <circle cx="130" cy="46" r="5" fill="#DC2626"/>
        <circle cx="132" cy="46" r="3.8" fill="#FFFFFF"/>
        <circle cx="124" cy="55" r="3.8" fill="#1E293B"/>
        <circle cx="148" cy="55" r="3.8" fill="#1E293B"/>
        ${pill("3+ KILLED", 122, 8, 68, 16, "#9E1F24", "#FFFFFF", 8.5)}
      </svg>`;

    case "nepal":
      // Snow-capped Himalayas, red seismic epicentre rings & clean seismograph wave
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#DCE8F2"/>
        <polygon points="0,62 46,16 92,62" fill="#5A6F82"/>
        <polygon points="46,16 32,30 46,27 59,30" fill="#FFFFFF"/>
        <polygon points="56,62 108,12 162,62" fill="#41576B"/>
        <polygon points="108,12 91,29 108,25 125,29" fill="#FFFFFF"/>
        <polygon points="122,62 164,24 196,62" fill="#5A6F82"/>
        <circle cx="98" cy="42" r="5.5" fill="#DC2626" opacity="0.9"/>
        <circle cx="98" cy="42" r="13" fill="none" stroke="#DC2626" stroke-width="1.6"/>
        <circle cx="98" cy="42" r="22" fill="none" stroke="#EF4444" stroke-width="1.2" stroke-dasharray="3,2"/>
        <polyline points="6,53 34,53 42,45 50,58 58,41 66,57 74,48 82,53 190,53" fill="none" stroke="#B8292F" stroke-width="1.8"/>
        ${pill("M5.6", 142, 8, 48, 17, "#B8292F", "#FFFFFF", 9.5)}
      </svg>`;

    case "nfl":
      // Night stadium: dark power-out tower left vs lit tower right, yellow uprights, laced football splitting posts
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#0F1C2E"/>
        <rect x="0" y="42" width="${W}" height="20" fill="#1D6F3D"/>
        <line x1="20" y1="42" x2="10" y2="62" stroke="#FFFFFF" stroke-width="1" opacity="0.6"/>
        <line x1="98" y1="42" x2="98" y2="62" stroke="#FFFFFF" stroke-width="1" opacity="0.6"/>
        <line x1="176" y1="42" x2="186" y2="62" stroke="#FFFFFF" stroke-width="1" opacity="0.6"/>
        <!-- Left light tower OFF (power outage) -->
        <rect x="20" y="15" width="16" height="7" fill="#1E293B" stroke="#475569" stroke-width="0.9"/>
        <line x1="28" y1="22" x2="28" y2="42" stroke="#475569" stroke-width="2"/>
        <!-- Second light tower ON -->
        <circle cx="54" cy="18" r="11" fill="#FEF08A" opacity="0.24"/>
        <rect x="46" y="15" width="16" height="7" fill="#FEF08A"/>
        <line x1="54" y1="22" x2="54" y2="42" stroke="#94A3B8" stroke-width="2"/>
        <!-- Yellow goalposts -->
        <path d="M104 44 V31 M84 31 H124 M84 31 V8 M124 31 V8" stroke="#FACC15" stroke-width="2.6" fill="none" stroke-linecap="round"/>
        <!-- Football with laces sailing through uprights -->
        <path d="M64 46 Q84 24 104 18" fill="none" stroke="#F8FAFC" stroke-width="1.4" stroke-dasharray="3,2"/>
        <g transform="translate(105,18) rotate(-14)">
          <ellipse cx="0" cy="0" rx="7" ry="4.3" fill="#92400E" stroke="#F8FAFC" stroke-width="0.8"/>
          <line x1="-3" y1="0" x2="3" y2="0" stroke="#FFFFFF" stroke-width="0.9"/>
          <line x1="-1.5" y1="-1.4" x2="-1.5" y2="1.4" stroke="#FFFFFF" stroke-width="0.7"/>
          <line x1="1.5" y1="-1.4" x2="1.5" y2="1.4" stroke="#FFFFFF" stroke-width="0.7"/>
        </g>
        ${pill("22–20", 138, 8, 52, 17, "#7C1D25", "#FDE68A", 9.5)}
      </svg>`;

    default:
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="#E2E8F0"/></svg>`;
  }
}
