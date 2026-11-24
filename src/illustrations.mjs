// Bespoke editorial scene illustrations for the 13 lead & featured stories (v6 Full-Day Edition)
// Every card features a bold 300px-readable top topic bar + distinct visual storytelling art.

function topBar(label, bg = "#9E1F24", w = 134, h = 15, fs = 8.1, x = 22, y = 4) {
  return `<g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${bg}"/>
    <text x="${x + w / 2}" y="${y + h - 4.2}" text-anchor="middle" fill="#FFFFFF" font-family="Helvetica Neue, Arial, sans-serif" font-size="${fs}" font-weight="900" letter-spacing="0.3">${label}</text>
  </g>`;
}

function pill(label, x, y, w, h = 15, bg = "#132238", fg = "#FFFFFF", fs = 8.1) {
  return `<g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${bg}" stroke="#FAF7F0" stroke-width="0.9"/>
    <text x="${x + w / 2}" y="${y + h - 4.2}" text-anchor="middle" fill="${fg}" font-family="Helvetica Neue, Arial, sans-serif" font-size="${fs}" font-weight="900" letter-spacing="0.25">${label}</text>
  </g>`;
}

export function renderIllustration(key, isHero = false) {
  const W = isHero ? 266 : 196;
  const H = isHero ? 96 : 62;

  switch (key) {
    case "huawei":
      // Federal courtroom columns, telecom tower silhouette, verdict sheet stamped 10/12 GUILTY vs crossed RACKETEERING
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#EFEAE0"/>
        <!-- Courthouse columns left -->
        <rect x="0" y="20" width="114" height="76" fill="#DDD5C5"/>
        <polygon points="8,36 58,20 108,36" fill="#2B3A4E"/>
        <rect x="16" y="37" width="10" height="44" fill="#F8F5EE" stroke="#94A3B8" stroke-width="0.8"/>
        <rect x="36" y="37" width="10" height="44" fill="#F8F5EE" stroke="#94A3B8" stroke-width="0.8"/>
        <rect x="56" y="37" width="10" height="44" fill="#F8F5EE" stroke="#94A3B8" stroke-width="0.8"/>
        <rect x="76" y="37" width="10" height="44" fill="#F8F5EE" stroke="#94A3B8" stroke-width="0.8"/>
        <rect x="94" y="37" width="10" height="44" fill="#F8F5EE" stroke="#94A3B8" stroke-width="0.8"/>
        <rect x="8" y="81" width="100" height="8" fill="#2B3A4E"/>
        <!-- Wooden gavel over steps -->
        <g transform="translate(86,66) rotate(-28)">
          <rect x="-26" y="-2.5" width="24" height="5" rx="1.5" fill="#9A5B2C" stroke="#3E2723" stroke-width="0.8"/>
          <rect x="-4" y="-10" width="12" height="20" rx="2" fill="#7C431C" stroke="#3E2723" stroke-width="1"/>
        </g>
        <!-- Verdict document right -->
        <g transform="translate(124,25)">
          <rect width="126" height="64" rx="3" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
          <text x="63" y="14" text-anchor="middle" fill="#475569" font-family="Helvetica Neue, Arial, sans-serif" font-size="7.5" font-weight="800">BROOKLYN FEDERAL JURY</text>
          <!-- Red GUILTY stamp -->
          <rect x="10" y="19" width="106" height="20" rx="2" fill="#FEF2F2" stroke="#B8292F" stroke-width="1.4"/>
          <text x="63" y="33" text-anchor="middle" fill="#B8292F" font-family="Helvetica Neue, Arial, sans-serif" font-size="11.5" font-weight="900">GUILTY · 10 / 12</text>
          <!-- Acquitted racketeering line -->
          <text x="63" y="52" text-anchor="middle" fill="#475569" font-family="Helvetica Neue, Arial, sans-serif" font-size="7.5" font-weight="800">RACKETEERING: ACQUITTED</text>
        </g>
        ${topBar("HUAWEI CONVICTED · 10/12", "#8B1E24", 150, 16, 8.3, 6, 5)}
      </svg>`;

    case "riyadh":
      // Faceted 80-storey Riyadh PIF Tower skyline, impact smoke plume at mid-height, desert dusk sky, 11 WOUNDED
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="riySky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#22324A"/><stop offset="100%" stop-color="#C98A5B"/>
          </linearGradient>
        </defs>
        <rect width="${W}" height="${H}" fill="url(#riySky)"/>
        <!-- Surrounding KAFD financial towers -->
        <rect x="14" y="48" width="24" height="48" fill="#334155"/>
        <rect x="44" y="58" width="20" height="38" fill="#475569"/>
        <rect x="148" y="44" width="26" height="52" fill="#334155"/>
        <rect x="180" y="56" width="22" height="40" fill="#475569"/>
        <rect x="210" y="64" width="32" height="32" fill="#334155"/>
        <!-- Iconic 80-storey faceted PIF Tower -->
        <polygon points="84,96 86,20 104,10 122,20 124,96" fill="#CBD5E1" stroke="#1E293B" stroke-width="1.2"/>
        <line x1="104" y1="10" x2="104" y2="96" stroke="#64748B" stroke-width="1"/>
        <path d="M86 30 H122 M86 42 H122 M86 54 H122 M86 66 H122 M86 78 H122" stroke="#64748B" stroke-width="0.7"/>
        <!-- Impact fire & wind-blown smoke plume -->
        <polygon points="106,42 126,38 125,52 108,50" fill="#1E293B"/>
        <path d="M111 49 L115 39 L119 46 L124 38 L126 49 Z" fill="#F97316"/>
        <path d="M115 49 L118 43 L122 49 Z" fill="#FEF08A"/>
        <ellipse cx="142" cy="36" rx="18" ry="6" fill="#475569" opacity="0.78"/>
        <ellipse cx="164" cy="30" rx="22" ry="7" fill="#64748B" opacity="0.58"/>
        <ellipse cx="188" cy="26" rx="18" ry="5.5" fill="#94A3B8" opacity="0.4"/>
        <!-- Emergency lights below -->
        <circle cx="72" cy="90" r="3" fill="#EF4444"/><circle cx="79" cy="90" r="3" fill="#3B82F6"/>
        ${topBar("PIF TOWER HIT · 2ND IN 5 DAYS", "#A12628", 164, 16, 8.2, 6, 5)}
        ${pill("11 WOUNDED", 174, 74, 84, 16, "#132238", "#FDE68A", 8.6)}
      </svg>`;

    case "senegal":
      // Golden AFCON trophy on stadium podium + Senegal flag + CAS gavel + 1-0 RESTORED
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#123026"/>
        <!-- Pitch base -->
        <rect x="0" y="64" width="${W}" height="32" fill="#1E7D46"/>
        <line x1="0" y1="64" x2="${W}" y2="64" stroke="#A7F3D0" stroke-width="1.2" opacity="0.6"/>
        <!-- Senegal tricolour flag left -->
        <g transform="translate(16,32)">
          <rect x="0" y="0" width="22" height="38" fill="#00853F"/>
          <rect x="22" y="0" width="22" height="38" fill="#FDEF42"/>
          <rect x="44" y="0" width="22" height="38" fill="#E31B23"/>
          <polygon points="33,12 35,18 41,18 36,21.5 38,27.5 33,24 28,27.5 30,21.5 25,18 31,18" fill="#00853F"/>
        </g>
        <!-- Golden AFCON Trophy center -->
        <g transform="translate(133,52)">
          <!-- Globe top -->
          <circle cx="0" cy="-16" r="11" fill="#F59E0B" stroke="#FEF08A" stroke-width="1.2"/>
          <ellipse cx="0" cy="-16" rx="5" ry="10.5" fill="none" stroke="#FEF08A" stroke-width="0.8"/>
          <line x1="-10.5" y1="-16" x2="10.5" y2="-16" stroke="#FEF08A" stroke-width="0.8"/>
          <!-- Cup body & pedestal -->
          <path d="M-8 -5 L8 -5 L5 10 L-5 10 Z" fill="#D97706" stroke="#FEF08A" stroke-width="0.9"/>
          <rect x="-13" y="10" width="26" height="8" rx="1.5" fill="#78350F" stroke="#FDE68A" stroke-width="0.8"/>
          <text x="0" y="16" text-anchor="middle" fill="#FDE68A" font-family="Helvetica Neue, Arial, sans-serif" font-size="6.2" font-weight="900">AFCON 25</text>
        </g>
        <!-- CAS verdict card right -->
        <g transform="translate(174,32)">
          <rect width="80" height="36" rx="3" fill="#FAF7F0" stroke="#1E293B" stroke-width="1.2"/>
          <text x="40" y="13" text-anchor="middle" fill="#1E293B" font-family="Helvetica Neue, Arial, sans-serif" font-size="7.5" font-weight="900">CAS APPEAL</text>
          <text x="40" y="28" text-anchor="middle" fill="#166534" font-family="Georgia, serif" font-size="13.5" font-weight="900">1–0 WINS</text>
        </g>
        ${topBar("AFCON TITLE RESTORED", "#166534", 136, 16, 8.2, 6, 5)}
        ${pill("SENEGAL CHAMPIONS", 148, 74, 110, 16, "#132238", "#FDE68A", 8.2)}
      </svg>`;

    case "shanghai":
      // Shanghai Pudong skyline (Oriental Pearl Tower) + red CCDI investigation folder
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#E6EBF0"/>
        <rect x="0" y="50" width="${W}" height="12" fill="#3B698A"/>
        <!-- Shanghai Pudong skyline -->
        <rect x="20" y="34" width="14" height="16" fill="#475569"/>
        <rect x="64" y="24" width="14" height="26" fill="#334155"/>
        <polygon points="82,50 88,16 96,50" fill="#475569"/>
        <!-- Oriental Pearl Tower -->
        <line x1="48" y1="14" x2="48" y2="50" stroke="#1E293B" stroke-width="2"/>
        <line x1="42" y1="50" x2="48" y2="38" stroke="#1E293B" stroke-width="1.5"/>
        <line x1="54" y1="50" x2="48" y2="38" stroke="#1E293B" stroke-width="1.5"/>
        <circle cx="48" cy="37" r="6" fill="#B8292F"/>
        <circle cx="48" cy="24" r="4" fill="#B8292F"/>
        <!-- CCDI investigation dossier right -->
        <g transform="translate(114,22)">
          <rect width="72" height="34" rx="2" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.1"/>
          <rect x="8" y="6" width="56" height="4" fill="#CBD5E1"/>
          <rect x="8" y="13" width="40" height="3.5" fill="#CBD5E1"/>
          <rect x="8" y="20" width="56" height="10" rx="1.5" fill="#FEF2F2" stroke="#B8292F" stroke-width="1.2"/>
          <text x="36" y="27.5" text-anchor="middle" fill="#B8292F" font-family="Helvetica Neue, Arial, sans-serif" font-size="7.4" font-weight="900">CCDI PROBE</text>
        </g>
        ${topBar("SHANGHAI CHIEF", "#B8292F", 104, 14, 7.6, 22, 4)}
      </svg>`;

    case "cia":
      // Intelligence agency OSINT terminal screen breached with alert wave & open padlock
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#101D2E"/>
        <!-- Terminal monitor -->
        <rect x="18" y="22" width="96" height="34" rx="3" fill="#1E293B" stroke="#64748B" stroke-width="1.2"/>
        <rect x="23" y="26" width="86" height="24" fill="#0B1320"/>
        <line x1="28" y1="32" x2="72" y2="32" stroke="#38BDF8" stroke-width="1.8"/>
        <line x1="28" y1="38" x2="94" y2="38" stroke="#EF4444" stroke-width="1.8"/>
        <line x1="28" y1="44" x2="62" y2="44" stroke="#38BDF8" stroke-width="1.8"/>
        <!-- Unlocked breached padlock right -->
        <g transform="translate(148,38)">
          <path d="M-8 -4 V-12 A8 8 0 0 1 8 -12" fill="none" stroke="#F87171" stroke-width="2.6" stroke-linecap="round"/>
          <rect x="-12" y="-4" width="24" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1"/>
          <circle cx="0" cy="4" r="2.5" fill="#FFFFFF"/>
        </g>
        ${topBar("CIA & ODNI BREACH", "#A12628", 118, 14, 7.6, 22, 4)}
      </svg>`;

    case "gaza":
      // Dusk Gaza City skyline, drone overhead, smoke plume
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#E6DACB"/>
        <rect x="0" y="48" width="${W}" height="14" fill="#8C7E6D"/>
        <rect x="20" y="29" width="24" height="19" fill="#6E6254"/>
        <rect x="48" y="22" width="22" height="26" fill="#7D7061"/>
        <rect x="74" y="31" width="24" height="17" fill="#6E6254"/>
        <ellipse cx="64" cy="18" rx="14" ry="5" fill="#52525B" opacity="0.72"/>
        <ellipse cx="80" cy="13" rx="18" ry="5.5" fill="#71717A" opacity="0.52"/>
        <!-- Drone silhouette upper right -->
        <g transform="translate(154,28)">
          <line x1="-18" y1="0" x2="18" y2="0" stroke="#1E293B" stroke-width="2"/>
          <polygon points="0,-3 5,2 -5,2" fill="#1E293B"/>
          <line x1="-8" y1="0" x2="-12" y2="-5" stroke="#1E293B" stroke-width="1.3"/>
          <line x1="8" y1="0" x2="12" y2="-5" stroke="#1E293B" stroke-width="1.3"/>
        </g>
        ${topBar("HAMAS CHIEF KILLED", "#9E1F24", 122, 14, 7.5, 22, 4)}
      </svg>`;

    case "australia":
      // Canberra Parliament House + Southern Cross flag + gavel swinging from lower-left cracking smartphone
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#DFECEE"/>
        <path d="M0 62 L0 50 L32 39 L68 39 L100 50 L100 62 Z" fill="#648A78"/>
        <rect x="30" y="43" width="40" height="13" fill="#F8FAFC" stroke="#475569" stroke-width="0.9"/>
        <line x1="50" y1="20" x2="50" y2="43" stroke="#1E293B" stroke-width="1.5"/>
        <polygon points="40,39 50,24 60,39" fill="none" stroke="#1E293B" stroke-width="1.2"/>
        <!-- Smartphone -->
        <g transform="translate(126,12)">
          <rect width="28" height="44" rx="4" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
          <rect x="3" y="5" width="22" height="32" rx="1" fill="#E0F2FE"/>
          <rect x="6" y="8" width="16" height="6" rx="1" fill="#BAE6FD"/>
          <rect x="6" y="17" width="16" height="8" rx="1" fill="#BAE6FD"/>
          <polyline points="4,14 14,21 10,27 22,34" fill="none" stroke="#DC2626" stroke-width="1.6"/>
        </g>
        <!-- Gavel swinging naturally from lower-left -->
        <g transform="translate(116,28) rotate(-32)">
          <rect x="-24" y="-2" width="22" height="4" rx="1.5" fill="#A06B3B" stroke="#3E2723" stroke-width="0.7"/>
          <rect x="-3" y="-8.5" width="10" height="17" rx="2" fill="#7C4A22" stroke="#3E2723" stroke-width="0.9"/>
        </g>
        ${topBar("BIG TECH · 5% FINE", "#157580", 112, 14, 7.6, 22, 4)}
      </svg>`;

    case "congo":
      // Split scene over eastern Congo green hills: Cessna cargo plane in storm clouds vs rebel anti-air smoke
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#D5E2DC"/>
        <!-- South Kivu green mountains -->
        <polygon points="0,62 46,34 94,62" fill="#2E6B4A"/>
        <polygon points="62,62 118,28 176,62" fill="#23573B"/>
        <polygon points="130,62 174,38 196,62" fill="#357A54"/>
        <!-- Storm cloud + Cessna silhouette left -->
        <ellipse cx="48" cy="27" rx="24" ry="8" fill="#64748B" opacity="0.8"/>
        <g transform="translate(60,33) rotate(12)">
          <line x1="-14" y1="0" x2="14" y2="0" stroke="#FFFFFF" stroke-width="2.4"/>
          <line x1="-2" y1="-8" x2="-2" y2="8" stroke="#FFFFFF" stroke-width="2"/>
        </g>
        <!-- Dashed claim divider -->
        <line x1="108" y1="20" x2="108" y2="62" stroke="#1E293B" stroke-width="1.2" stroke-dasharray="3,2"/>
        <!-- Rebel smoke column right -->
        <path d="M148 48 Q154 32 166 24" fill="none" stroke="#DC2626" stroke-width="1.8" stroke-dasharray="3,2"/>
        <ellipse cx="166" cy="25" rx="12" ry="4.5" fill="#52525B" opacity="0.7"/>
        ${topBar("MISSING | CLAIM", "#B25E12", 104, 14, 7.6, 22, 4)}
      </svg>`;

    case "sarkozy":
      // Paris Palais de Justice columns + French tricolour + court summons stamped TRIAL
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#ECE8E0"/>
        <!-- Courthouse steps & columns -->
        <polygon points="16,32 54,20 92,32" fill="#1E293B"/>
        <rect x="22" y="33" width="8" height="22" fill="#94A3B8"/>
        <rect x="38" y="33" width="8" height="22" fill="#94A3B8"/>
        <rect x="54" y="33" width="8" height="22" fill="#94A3B8"/>
        <rect x="70" y="33" width="8" height="22" fill="#94A3B8"/>
        <rect x="14" y="55" width="80" height="5" fill="#1E293B"/>
        <!-- French flag + court order right -->
        <g transform="translate(106,24)">
          <rect x="0" y="0" width="12" height="30" fill="#002395"/>
          <rect x="12" y="0" width="12" height="30" fill="#FFFFFF"/>
          <rect x="24" y="0" width="12" height="30" fill="#ED2939"/>
          <rect x="40" y="4" width="42" height="22" rx="2" fill="#FFFFFF" stroke="#B8292F" stroke-width="1.3"/>
          <text x="61" y="18" text-anchor="middle" fill="#B8292F" font-family="Helvetica Neue, Arial, sans-serif" font-size="8.5" font-weight="900">TRIAL</text>
        </g>
        ${topBar("SARKOZY ORDERED", "#205288", 112, 14, 7.6, 22, 4)}
      </svg>`;

    case "tennessee":
      // US Capitol dome + blue-tilted House hemicycle stamped 259 SEATS
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#EEF1F6"/>
        <!-- Capitol dome left -->
        <g transform="translate(42,56)" fill="#94A3B8">
          <rect x="-24" y="-8" width="48" height="8"/>
          <path d="M-16 -8 A16 16 0 0 1 16 -8 Z"/>
          <rect x="-3" y="-29" width="6" height="6"/>
        </g>
        <!-- Hemicycle seat chart right -->
        <g transform="translate(136,52)">
          <path d="M-42 0 A42 42 0 0 1 16 -38" fill="none" stroke="#1D4ED8" stroke-width="10"/>
          <path d="M18 -37 A42 42 0 0 1 42 0" fill="none" stroke="#DC2626" stroke-width="10"/>
          <text x="0" y="-4" text-anchor="middle" fill="#1D4ED8" font-family="Georgia, serif" font-size="16" font-weight="900">259</text>
        </g>
        ${topBar("US HOUSE FLIP", "#6A3A8A", 98, 14, 7.6, 22, 4)}
      </svg>`;

    case "shenzhou":
      // Deep-space Tiangong station + docking capsule + 5-star China & crescent-star Pakistan flags
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#0C1C33"/>
        <path d="M-10 62 Q98 42 206 62 Z" fill="#1D5D8C"/>
        <path d="M-10 62 Q98 44 206 62" fill="none" stroke="#7AD0FA" stroke-width="1.6"/>
        <!-- Tiangong -->
        <g transform="translate(114,32)">
          <rect x="-46" y="-8" width="26" height="6" fill="#2A7AC2" stroke="#9BD3FF" stroke-width="0.6"/>
          <rect x="-46" y="2" width="26" height="6" fill="#2A7AC2" stroke="#9BD3FF" stroke-width="0.6"/>
          <rect x="20" y="-8" width="26" height="6" fill="#2A7AC2" stroke="#9BD3FF" stroke-width="0.6"/>
          <rect x="20" y="2" width="26" height="6" fill="#2A7AC2" stroke="#9BD3FF" stroke-width="0.6"/>
          <rect x="-20" y="-4" width="40" height="8" rx="3" fill="#F1F5F9"/>
          <path d="M-64 -2 L-54 -4 L-54 4 L-64 2 Z" fill="#F8FAFC"/>
          <circle cx="-67" cy="0" r="2" fill="#F59E0B"/>
        </g>
        <!-- China & Pakistan flags -->
        <g transform="translate(12,43)">
          <rect width="19" height="13" rx="1.5" fill="#DE2910" stroke="#FFF" stroke-width="0.7"/>
          <polygon points="4.8,3 5.5,5.2 7.8,5.2 6,6.5 6.7,8.7 4.8,7.3 2.9,8.7 3.6,6.5 1.8,5.2 4.1,5.2" fill="#FFDE00"/>
          <rect x="23" width="19" height="13" rx="1.5" fill="#01411C" stroke="#FFF" stroke-width="0.7"/>
          <rect x="23" width="4.5" height="13" fill="#FFFFFF"/>
          <circle cx="34.5" cy="6.5" r="3.2" fill="#FFFFFF"/><circle cx="35.9" cy="6" r="2.7" fill="#01411C"/>
          <polygon points="37,4 37.5,5.4 39,5.4 37.8,6.2 38.2,7.6 37,6.8 35.8,7.6 36.2,6.2 35,5.4 36.5,5.4" fill="#FFFFFF"/>
        </g>
        ${topBar("SHENZHOU-24", "#C46316", 94, 14, 7.6, 22, 4)}
      </svg>`;

    case "odesa":
      // Night Ukrainian apartment block with jagged blast flames + emergency vehicle
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#141C2C"/>
        <rect x="20" y="24" width="52" height="38" fill="#334155"/>
        <rect x="78" y="19" width="56" height="43" fill="#475569"/>
        <!-- Shattered façade & jagged flames -->
        <polygon points="90,23 120,22 124,39 108,43 92,38" fill="#0F172A"/>
        <path d="M96 39 L101 27 L106 35 L111 25 L117 38 Z" fill="#EA580C"/>
        <path d="M101 39 L106 31 L110 36 L113 30 L116 39 Z" fill="#FDE047"/>
        <rect x="28" y="30" width="7" height="7" fill="#FDE68A" opacity="0.7"/>
        <rect x="42" y="30" width="7" height="7" fill="#1E293B"/>
        <rect x="56" y="30" width="7" height="7" fill="#1E293B"/>
        <rect x="28" y="42" width="7" height="7" fill="#1E293B"/>
        <rect x="42" y="42" width="7" height="7" fill="#FDE68A" opacity="0.5"/>
        <!-- Ambulance -->
        <rect x="144" y="47" width="32" height="12" rx="2" fill="#F8FAFC"/>
        <circle cx="152" cy="46" r="3" fill="#3B82F6"/><circle cx="166" cy="46" r="3" fill="#EF4444"/>
        ${topBar("ODESA · 2 KILLED", "#9E1F24", 106, 14, 7.6, 22, 4)}
      </svg>`;

    case "cartagena":
      // Yellow colonial Cartagena storefront + supermarket entrance + armored cash van + police cordon lights
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#F6E9CE"/>
        <rect x="0" y="50" width="${W}" height="12" fill="#475569"/>
        <!-- Yellow colonial/supermarket facade -->
        <rect x="14" y="21" width="94" height="29" fill="#EAB308" stroke="#854D0E" stroke-width="1"/>
        <rect x="22" y="30" width="24" height="20" fill="#1E293B"/>
        <rect x="54" y="30" width="44" height="12" fill="#E0F2FE" stroke="#475569" stroke-width="0.8"/>
        <!-- Armored cash van & police car right -->
        <rect x="118" y="34" width="38" height="17" rx="2" fill="#334155" stroke="#0F172A" stroke-width="1"/>
        <rect x="144" y="37" width="9" height="6" fill="#93C5FD"/>
        <circle cx="127" cy="51" r="3.5" fill="#0F172A"/><circle cx="147" cy="51" r="3.5" fill="#0F172A"/>
        <rect x="162" y="41" width="24" height="10" rx="2" fill="#166534"/>
        <circle cx="170" cy="40" r="2.6" fill="#EF4444"/><circle cx="178" cy="40" r="2.6" fill="#3B82F6"/>
        ${topBar("~25 HOSTAGES", "#9E1F24", 94, 14, 7.6, 22, 4)}
      </svg>`;

    default:
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="#E2E8F0"/></svg>`;
  }
}
