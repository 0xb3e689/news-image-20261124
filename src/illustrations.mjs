// Bespoke editorial illustrations for the 11 lead & featured stories (v7 Championship Edition)
// Designed for instant 300px-thumbnail readability: big bold high-contrast callout banners + crisp scene art.

function heroBanner(mainText, subText, x, y, w, bg = "#132238", accent = "#F5C242", mainFs = 17.5) {
  return `<g>
    <rect x="${x}" y="${y}" width="${w}" height="29" rx="3" fill="${bg}" stroke="#FFFFFF" stroke-width="0.9"/>
    <text x="${x + w / 2}" y="${y + 20.5}" text-anchor="middle" fill="#FFFFFF" font-family="Helvetica Neue, Arial, sans-serif" font-size="${mainFs}" font-weight="900" letter-spacing="0.2">${mainText}</text>
    <rect x="${x}" y="${y + 31}" width="${w}" height="14" rx="2" fill="${accent}"/>
    <text x="${x + w / 2}" y="${y + 41}" text-anchor="middle" fill="#101B2B" font-family="Helvetica Neue, Arial, sans-serif" font-size="8.2" font-weight="900" letter-spacing="0.35">${subText}</text>
  </g>`;
}

function medBanner(mainText, subText, x, y, w, bg = "#132238", accent = "#F5C242", mainFs = 13.5) {
  return `<g>
    <rect x="${x}" y="${y}" width="${w}" height="22" rx="2.5" fill="${bg}"/>
    <text x="${x + w / 2}" y="${y + 15.5}" text-anchor="middle" fill="#FFFFFF" font-family="Helvetica Neue, Arial, sans-serif" font-size="${mainFs}" font-weight="900" letter-spacing="0.15">${mainText}</text>
    <rect x="${x}" y="${y + 24}" width="${w}" height="12.5" rx="2" fill="${accent}"/>
    <text x="${x + w / 2}" y="${y + 33}" text-anchor="middle" fill="#101B2B" font-family="Helvetica Neue, Arial, sans-serif" font-size="7.4" font-weight="900" letter-spacing="0.25">${subText}</text>
  </g>`;
}

export function renderIllustration(key, isHero = false) {
  const W = isHero ? 328 : 244;
  const H = isHero ? 98 : 66;

  switch (key) {
    case "huawei":
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#EFE9DD"/>
        <!-- Federal courthouse left -->
        <rect x="0" y="0" width="136" height="${H}" fill="#DFD7C6"/>
        <polygon points="10,30 68,10 126,30" fill="#1F3044"/>
        <rect x="20" y="32" width="11" height="48" fill="#FBF9F4" stroke="#94A3B8" stroke-width="0.9"/>
        <rect x="42" y="32" width="11" height="48" fill="#FBF9F4" stroke="#94A3B8" stroke-width="0.9"/>
        <rect x="64" y="32" width="11" height="48" fill="#FBF9F4" stroke="#94A3B8" stroke-width="0.9"/>
        <rect x="86" y="32" width="11" height="48" fill="#FBF9F4" stroke="#94A3B8" stroke-width="0.9"/>
        <rect x="106" y="32" width="11" height="48" fill="#FBF9F4" stroke="#94A3B8" stroke-width="0.9"/>
        <rect x="10" y="80" width="116" height="9" fill="#1F3044"/>
        <!-- Gavel -->
        <g transform="translate(106,68) rotate(-28)">
          <rect x="-28" y="-3" width="26" height="6" rx="2" fill="#9A5B2C" stroke="#3E2723" stroke-width="0.9"/>
          <rect x="-4" y="-11" width="13" height="22" rx="2" fill="#7C431C" stroke="#3E2723" stroke-width="1"/>
        </g>
        <!-- Big 300px-readable verdict banner right -->
        <text x="231" y="21" text-anchor="middle" fill="#475569" font-family="Helvetica Neue, Arial, sans-serif" font-size="8.5" font-weight="900" letter-spacing="0.4">BROOKLYN FEDERAL JURY</text>
        ${heroBanner("10/12 GUILTY", "IRAN SANCTIONS · TRADE SECRETS", 145, 28, 172, "#9E1F24", "#F5C242", 18)}
      </svg>`;

    case "riyadh":
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="riySky7" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1B2B42"/><stop offset="100%" stop-color="#C88352"/>
          </linearGradient>
        </defs>
        <rect width="${W}" height="${H}" fill="url(#riySky7)"/>
        <!-- Surrounding KAFD towers -->
        <rect x="10" y="48" width="24" height="50" fill="#2A3A4F"/>
        <rect x="38" y="58" width="20" height="40" fill="#3B4D63"/>
        <rect x="122" y="54" width="22" height="44" fill="#2A3A4F"/>
        <!-- Iconic faceted 80-storey PIF Tower -->
        <polygon points="68,98 70,18 90,7 110,18 112,98" fill="#CBD5E1" stroke="#1E293B" stroke-width="1.3"/>
        <line x1="90" y1="7" x2="90" y2="98" stroke="#64748B" stroke-width="1"/>
        <path d="M70 28 H110 M70 40 H110 M70 52 H110 M70 64 H110 M70 76 H110" stroke="#64748B" stroke-width="0.75"/>
        <!-- Fire & smoke plume -->
        <polygon points="92,40 113,36 112,51 94,49" fill="#1E293B"/>
        <path d="M97 48 L101 37 L105 45 L110 36 L112 48 Z" fill="#F97316"/>
        <path d="M101 48 L104 42 L108 48 Z" fill="#FEF08A"/>
        <ellipse cx="128" cy="34" rx="18" ry="6" fill="#475569" opacity="0.82"/>
        <ellipse cx="148" cy="27" rx="20" ry="6.5" fill="#64748B" opacity="0.62"/>
        <!-- Emergency beacons -->
        <circle cx="58" cy="91" r="3.2" fill="#EF4444"/><circle cx="66" cy="91" r="3.2" fill="#3B82F6"/>
        <!-- Big 300px-readable callout right -->
        <rect x="155" y="10" width="160" height="14" rx="2" fill="#A12628"/>
        <text x="235" y="20" text-anchor="middle" fill="#FFFFFF" font-family="Helvetica Neue, Arial, sans-serif" font-size="8.2" font-weight="900" letter-spacing="0.35">RIYADH FINANCIAL DISTRICT</text>
        ${heroBanner("11 WOUNDED", "PIF TOWER HIT · 2ND IN 5 DAYS", 155, 29, 160, "#132238", "#F5C242", 18)}
      </svg>`;

    case "senegal":
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#0F2E22"/>
        <rect x="0" y="66" width="${W}" height="32" fill="#195238"/>
        <!-- Senegal flag left -->
        <g transform="translate(14,20)">
          <rect width="78" height="50" rx="2" fill="#FDEF42" stroke="#FFFFFF" stroke-width="1"/>
          <rect width="26" height="50" fill="#00853F"/>
          <rect x="52" width="26" height="50" fill="#E31B23"/>
          <polygon points="39,14 41.6,22 50,22 43.2,26.8 45.8,35 39,30 32.2,35 34.8,26.8 28,22 36.4,22" fill="#00853F"/>
        </g>
        <!-- AFCON golden trophy center -->
        <g transform="translate(122,12)">
          <circle cx="0" cy="18" r="14" fill="#F5B82E" stroke="#FEF08A" stroke-width="1.2"/>
          <path d="M-11 18 Q0 10 11 18 M-11 18 Q0 26 11 18 M0 4 V32" fill="none" stroke="#B45309" stroke-width="0.9"/>
          <polygon points="-8,32 8,32 5,56 -5,56" fill="#D97706"/>
          <rect x="-15" y="56" width="30" height="10" rx="2" fill="#92400E" stroke="#F5C242" stroke-width="1"/>
          <text x="0" y="63.5" text-anchor="middle" fill="#FEF08A" font-family="Helvetica Neue, Arial, sans-serif" font-size="6.8" font-weight="900">AFCON 25</text>
        </g>
        <!-- Big 300px-readable CAS callout right -->
        <text x="234" y="21" text-anchor="middle" fill="#A7F3D0" font-family="Helvetica Neue, Arial, sans-serif" font-size="8.4" font-weight="900" letter-spacing="0.4">CAS UNANIMOUS RULING</text>
        ${heroBanner("1–0 RESTORED", "SENEGAL AFCON CHAMPIONS", 154, 28, 160, "#14532D", "#F5C242", 17.5)}
      </svg>`;

    case "shanghai":
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#EAEFF5"/>
        <!-- Shanghai Pudong skyline + Oriental Pearl -->
        <rect x="0" y="54" width="${W}" height="12" fill="#2A4D6E"/>
        <rect x="14" y="34" width="14" height="20" fill="#64748B"/>
        <line x1="42" y1="7" x2="42" y2="54" stroke="#334155" stroke-width="2"/>
        <circle cx="42" cy="19" r="5" fill="#C22E34"/>
        <circle cx="42" cy="36" r="7" fill="#C22E34"/>
        <polygon points="35,54 42,38 49,54" fill="none" stroke="#334155" stroke-width="1.4"/>
        <rect x="57" y="22" width="13" height="32" fill="#475569"/>
        <polygon points="76,54 83,16 90,54" fill="#64748B"/>
        ${medBanner("CCDI PROBE", "SHANGHAI PARTY CHIEF", 104, 14, 130, "#9E1F24", "#F5C242", 14)}
      </svg>`;

    case "cia":
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#0F1B2E"/>
        <!-- Terminal + broken red padlock left -->
        <rect x="12" y="14" width="60" height="40" rx="3" fill="#1E293B" stroke="#475569" stroke-width="1.2"/>
        <rect x="18" y="22" width="32" height="3.5" fill="#38BDF8"/>
        <rect x="18" y="30" width="46" height="3.5" fill="#EF4444"/>
        <rect x="18" y="38" width="26" height="3.5" fill="#94A3B8"/>
        <path d="M84 29 V21 A7 7 0 0 1 98 21" fill="none" stroke="#FCA5A5" stroke-width="2.6"/>
        <rect x="78" y="29" width="24" height="22" rx="3" fill="#DC2626"/>
        <circle cx="90" cy="39" r="3" fill="#FFFFFF"/>
        ${medBanner("BREACHED", "CIA & ODNI UNCLASSIFIED", 112, 14, 122, "#B8292F", "#F5C242", 13.5)}
      </svg>`;

    case "gaza":
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#E6D8C5"/>
        <rect x="0" y="54" width="${W}" height="12" fill="#7D6B59"/>
        <!-- Gaza silhouette + drone -->
        <rect x="10" y="32" width="22" height="22" fill="#6B5A49"/>
        <rect x="36" y="24" width="26" height="30" fill="#8C7763"/>
        <rect x="66" y="35" width="24" height="19" fill="#5C4D3E"/>
        <ellipse cx="48" cy="20" rx="14" ry="5" fill="#475569" opacity="0.65"/>
        <path d="M54 11 H86 M70 7 V15" stroke="#1E293B" stroke-width="2"/>
        ${medBanner("GAZA STRIKE", "HAMAS SECURITY CHIEF KILLED", 100, 14, 134, "#8E1D21", "#F5C242", 13.5)}
      </svg>`;

    case "australia":
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#DCECF0"/>
        <!-- Parliament flagpole + phone + gavel -->
        <polygon points="8,66 36,42 64,66" fill="#5D7E69"/>
        <line x1="36" y1="14" x2="36" y2="42" stroke="#1E293B" stroke-width="1.6"/>
        <line x1="25" y1="42" x2="36" y2="20" stroke="#1E293B" stroke-width="1"/>
        <line x1="47" y1="42" x2="36" y2="20" stroke="#1E293B" stroke-width="1"/>
        <rect x="66" y="12" width="28" height="44" rx="4" fill="#1E293B"/>
        <rect x="70" y="18" width="20" height="30" rx="1" fill="#F8FAFC"/>
        <path d="M72 25 L80 33 L76 37 L87 43" fill="none" stroke="#DC2626" stroke-width="1.8"/>
        ${medBanner("5% FINES", "AUSTRALIA BIG TECH LAW", 104, 14, 130, "#14727D", "#F5C242", 14.5)}
      </svg>`;

    case "ebola":
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#E1EAE3"/>
        <!-- Ituri clinic + WHO medical cross + alert ring -->
        <rect x="0" y="54" width="${W}" height="12" fill="#3B6E4C"/>
        <rect x="14" y="24" width="66" height="30" rx="2" fill="#FFFFFF" stroke="#2D5A3D" stroke-width="1.3"/>
        <polygon points="10,25 47,12 84,25" fill="#2D5A3D"/>
        <!-- Red medical cross -->
        <rect x="42" y="29" width="10" height="20" rx="1" fill="#C22E34"/>
        <rect x="37" y="34" width="20" height="10" rx="1" fill="#C22E34"/>
        <!-- Warning shield right of clinic -->
        <polygon points="90,26 98,42 82,42" fill="#F59E0B" stroke="#92400E" stroke-width="1"/>
        <text x="90" y="40" text-anchor="middle" fill="#1E293B" font-family="Helvetica Neue, Arial, sans-serif" font-size="9" font-weight="900">!</text>
        ${medBanner("EBOLA ALERT", "ITURI · WORKERS TRAPPED", 104, 14, 130, "#216E43", "#F5C242", 13.5)}
      </svg>`;

    case "sarkozy":
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#ECE8DF"/>
        <!-- Paris court + French tricolour -->
        <polygon points="8,24 38,10 68,24" fill="#1E3A5F"/>
        <rect x="14" y="25" width="7" height="31" fill="#94A3B8"/>
        <rect x="28" y="25" width="7" height="31" fill="#94A3B8"/>
        <rect x="42" y="25" width="7" height="31" fill="#94A3B8"/>
        <rect x="56" y="25" width="7" height="31" fill="#94A3B8"/>
        <rect x="8" y="56" width="60" height="5" fill="#1E3A5F"/>
        <rect x="74" y="16" width="10" height="38" fill="#002395"/>
        <rect x="84" y="16" width="10" height="38" fill="#FFFFFF"/>
        <rect x="94" y="16" width="10" height="38" fill="#ED2939"/>
        ${medBanner("TO TRIAL", "SARKOZY & CARLA BRUNI", 112, 14, 122, "#1E4E82", "#F5C242", 14)}
      </svg>`;

    case "shenzhou":
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#0A192F"/>
        <path d="M-10 72 Q122 46 254 72" fill="#1D4E89" stroke="#60A5FA" stroke-width="1"/>
        <!-- Tiangong space station -->
        <rect x="18" y="25" width="52" height="8" rx="3" fill="#E2E8F0"/>
        <rect x="72" y="14" width="24" height="6" fill="#2563EB" stroke="#93C5FD" stroke-width="0.7"/>
        <rect x="72" y="38" width="24" height="6" fill="#2563EB" stroke="#93C5FD" stroke-width="0.7"/>
        <line x1="84" y1="20" x2="84" y2="38" stroke="#CBD5E1" stroke-width="1.5"/>
        <!-- China + Pakistan mini flags -->
        <rect x="16" y="45" width="22" height="14" fill="#DE2910" stroke="#FFFFFF" stroke-width="0.6"/>
        <circle cx="21" cy="50" r="2.2" fill="#FFDE00"/>
        <rect x="44" y="45" width="22" height="14" fill="#01411C" stroke="#FFFFFF" stroke-width="0.6"/>
        <rect x="44" y="45" width="6" height="14" fill="#FFFFFF"/>
        <circle cx="57" cy="52" r="3" fill="#FFFFFF"/><circle cx="58.5" cy="51.2" r="2.5" fill="#01411C"/>
        ${medBanner("TIANGONG", "1ST FOREIGN ASTRONAUT", 104, 14, 130, "#C25E14", "#F5C242", 13.8)}
      </svg>`;

    case "microsoft":
    default:
      return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#171E2E"/>
        <!-- 4-pane window grid with alert pulse -->
        <g transform="translate(18,14)">
          <rect x="0" y="0" width="17" height="17" fill="#F25022"/>
          <rect x="20" y="0" width="17" height="17" fill="#7FBA00"/>
          <rect x="0" y="20" width="17" height="17" fill="#00A4EF"/>
          <rect x="20" y="20" width="17" height="17" fill="#FFB900"/>
        </g>
        <!-- Red outage waveform -->
        <path d="M62 38 L70 38 L75 18 L81 48 L87 28 L93 38 L100 38" fill="none" stroke="#EF4444" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
        ${medBanner("CODE RED", "MICROSOFT M365 OUTAGE", 106, 14, 128, "#B8292F", "#F5C242", 14.5)}
      </svg>`;
  }
}
