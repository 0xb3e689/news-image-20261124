// Clean real-projection world map (Equirectangular) with pins for stories 1–11 (v7)

import { REGIONS } from "./stories.mjs";

const W = 282;
const H = 186;

function proj(lon, lat) {
  const x = ((lon + 180) / 360) * W;
  const y = ((82 - lat) / 142) * H;
  return [Number(x.toFixed(1)), Number(y.toFixed(1))];
}

function poly(coords) {
  return coords
    .map(([lon, lat]) => {
      const [x, y] = proj(lon, lat);
      return `${x},${y}`;
    })
    .join(" ");
}

const LANDMASSES = [
  // North America
  [[-165, 65], [-140, 70], [-110, 68], [-82, 62], [-64, 48], [-70, 41], [-80, 26], [-88, 21], [-97, 20], [-105, 20], [-117, 32], [-125, 49], [-145, 60]],
  // Greenland
  [[-52, 60], [-42, 60], [-20, 72], [-25, 81], [-58, 78]],
  // South America
  [[-80, 10], [-62, 11], [-35, -6], [-40, -23], [-58, -38], [-68, -54], [-74, -46], [-71, -18], [-81, -4]],
  // Europe
  [[-9, 37], [3, 43], [16, 41], [28, 41], [40, 47], [58, 60], [32, 70], [18, 68], [8, 57], [-5, 48]],
  // UK & Ireland
  [[-6, 50], [1, 51], [0, 58], [-6, 57]],
  // Africa
  [[-17, 15], [-6, 36], [11, 37], [32, 31], [43, 12], [51, 11], [40, -10], [35, -26], [20, -35], [14, -22], [9, 4], [-8, 5]],
  // Madagascar
  [[44, -25], [49, -13], [50, -18], [46, -25]],
  // Asia
  [[27, 41], [44, 41], [58, 60], [105, 72], [170, 66], [142, 54], [130, 35], [122, 24], [108, 12], [100, 14], [90, 22], [78, 8], [67, 24], [56, 26], [48, 30], [36, 36]],
  // Arabian Peninsula
  [[35, 30], [48, 30], [59, 22], [44, 12], [35, 28]],
  // Japan
  [[130, 31], [141, 36], [145, 44], [139, 42], [131, 34]],
  // Indonesia / Maritime SE Asia
  [[96, 5], [106, -6], [118, -8], [115, -2], [104, 1]],
  [[110, 1], [118, 5], [118, -3], [110, -3]],
  // Australia
  [[114, -22], [129, -14], [142, -12], [153, -27], [148, -38], [131, -32], [115, -34]],
  // New Zealand
  [[167, -46], [174, -41], [178, -37], [173, -35], [169, -43]],
];

const PIN_OFFSETS = {
  1: [4, -4],  // Brooklyn NY
  5: [-3, 5],  // Washington DC
  2: [4, 2],   // Riyadh
  6: [-4, -3], // Gaza
};

export function renderWorldMap(stories) {
  const landSvg = LANDMASSES.map(
    (pts) => `<polygon points="${poly(pts)}" fill="#D9D3C3" stroke="#ABA493" stroke-width="0.65" stroke-linejoin="round"/>`
  ).join("");

  const gridLines = [-30, 0, 30, 60]
    .map((lat) => {
      const [, y] = proj(0, lat);
      return `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="#C9D7E3" stroke-width="0.45" stroke-dasharray="2,2"/>`;
    })
    .join("");

  const pins = stories
    .map((s) => {
      const [bx, by] = proj(s.lon, s.lat);
      const [ox, oy] = PIN_OFFSETS[s.id] || [0, 0];
      const x = bx + ox;
      const y = by + oy;
      const col = REGIONS[s.region]?.color || "#1E3A5F";
      return `<g>
        <circle cx="${x}" cy="${y}" r="6.4" fill="${col}" stroke="#FFFFFF" stroke-width="1.25"/>
        <text x="${x}" y="${y + 2.5}" text-anchor="middle" fill="#FFFFFF" font-family="Helvetica Neue, Arial, sans-serif" font-size="6.9" font-weight="900">${s.id}</text>
      </g>`;
    })
    .join("");

  return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:${H}px;border-radius:2px;border:1px solid #C8C1B0;">
    <rect width="${W}" height="${H}" fill="#EAF1F7"/>
    ${gridLines}
    ${landSvg}
    ${pins}
  </svg>`;
}
