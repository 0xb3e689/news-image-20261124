// Equirectangular world map with numbered story pins 1-13 (v6 Full-Day Edition)
// Projection: lon [-180, 180] -> x [0, W], lat [82, -58] -> y [0, H]

const W = 282;
const H = 204;

export function project(lon, lat) {
  const x = ((lon + 180) / 360) * W;
  const y = ((82 - lat) / 140) * H;
  return [Number(x.toFixed(1)), Number(y.toFixed(1))];
}

const CONTINENTS = [
  // North & Central America
  [[-168,66],[-162,70],[-140,70],[-124,70],[-110,68],[-94,69],[-80,63],[-84,54],[-78,52],[-64,60],[-55,52],[-60,46],[-67,44],[-70,41],[-76,35],[-81,30],[-80,25],[-83,29],[-90,29],[-97,26],[-96,19],[-88,21],[-84,10],[-78,8],[-82,8],[-87,13],[-93,15],[-105,20],[-110,24],[-114,31],[-120,34],[-124,42],[-125,49],[-136,58],[-150,60],[-160,57],[-166,60]],
  // Greenland
  [[-52,60],[-42,60],[-34,68],[-20,76],[-22,82],[-42,82],[-60,79],[-68,76],[-54,68]],
  // South America
  [[-78,9],[-72,11],[-62,10],[-50,2],[-35,-6],[-38,-14],[-41,-22],[-48,-26],[-54,-34],[-62,-39],[-66,-44],[-68,-54],[-73,-53],[-75,-46],[-71,-30],[-71,-18],[-81,-5],[-79,2]],
  // Europe
  [[-9,37],[-9,43],[-2,43],[-4,48],[2,51],[8,54],[10,58],[5,61],[11,65],[20,70],[30,70],[40,66],[58,68],[60,56],[48,46],[39,47],[31,46],[28,41],[24,38],[19,40],[15,38],[12,42],[8,44],[3,42],[-5,36]],
  // Great Britain
  [[-6,50],[1,51],[1,53],[-2,58],[-6,57]],
  // Africa
  [[-17,15],[-13,28],[-6,36],[10,37],[11,33],[24,32],[32,31],[36,24],[43,12],[51,12],[49,4],[41,-2],[40,-12],[35,-24],[28,-33],[18,-34],[14,-22],[12,-6],[9,4],[2,6],[-8,5],[-15,11]],
  // Madagascar
  [[44,-25],[47,-25],[50,-14],[48,-12],[44,-18]],
  // Asia
  [[27,41],[36,36],[35,31],[39,21],[44,13],[54,17],[60,22],[56,26],[49,30],[57,26],[66,25],[72,21],[77,8],[80,14],[86,21],[92,22],[97,16],[100,6],[104,1],[104,10],[109,13],[107,21],[114,22],[121,25],[122,31],[120,37],[126,38],[129,35],[130,42],[140,46],[142,54],[160,60],[178,66],[170,70],[140,73],[105,76],[74,72],[60,68],[58,56],[48,46],[40,43],[35,42]],
  // Japan
  [[130,32],[136,34],[141,38],[145,44],[141,44],[137,37],[131,34]],
  // Taiwan & Philippines
  [[120,22],[122,25],[121,25],[120,23]],
  [[120,14],[123,18],[126,7],[122,7]],
  // Indonesia
  [[95,5],[105,-6],[104,-7],[96,2]],
  [[105,-6],[115,-8],[114,-9],[106,-7]],
  [[109,1],[118,5],[118,-3],[111,-3]],
  // Papua New Guinea
  [[132,-2],[141,-3],[150,-10],[146,-9],[136,-5]],
  // Australia
  [[114,-22],[122,-17],[130,-12],[136,-12],[142,-11],[146,-18],[153,-28],[150,-37],[141,-38],[135,-34],[129,-32],[115,-34],[113,-26]],
  // New Zealand
  [[167,-46],[172,-43],[178,-37],[174,-35],[171,-41],[166,-45]],
];

function polyToPath(pts) {
  return (
    pts
      .map((p, i) => {
        const [x, y] = project(p[0], p[1]);
        return `${i === 0 ? "M" : "L"}${x} ${y}`;
      })
      .join(" ") + " Z"
  );
}

// Micro-offsets ONLY where US East Coast pins (#1 Brooklyn, #5 DC, #10 TN) sit near each other
const PIN_OFFSETS = {
  1: [4, -4],   // Brooklyn NY
  5: [3, 4],    // Washington DC
  10: [-6, 4],  // Tennessee
  6: [-2, -2],  // Gaza
  2: [3, 2],    // Riyadh
};

export function renderWorldMap(stories, regions) {
  const landPaths = CONTINENTS.map(
    (poly) => `<path d="${polyToPath(poly)}" fill="#D7D2C3" stroke="#ABA391" stroke-width="0.65"/>`
  ).join("");

  const graticules = [
    [-30, 0, 30, 60].map((lat) => {
      const [, y] = project(0, lat);
      return `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="#C6D6E2" stroke-width="0.5" stroke-dasharray="2,2"/>`;
    }),
    [-120, -60, 0, 60, 120].map((lon) => {
      const [x] = project(lon, 0);
      return `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="#C6D6E2" stroke-width="0.5" stroke-dasharray="2,2"/>`;
    }),
  ]
    .flat()
    .join("");

  const pins = stories
    .map((s) => {
      const [bx, by] = project(s.lon, s.lat);
      const [dx, dy] = PIN_OFFSETS[s.id] || [0, 0];
      const x = bx + dx;
      const y = by + dy;
      const fill = regions[s.region]?.color || "#132238";
      return `<g>
        <circle cx="${x}" cy="${y}" r="5.9" fill="${fill}" stroke="#FFFFFF" stroke-width="1.15"/>
        <text x="${x}" y="${y + 2.5}" text-anchor="middle" fill="#FFFFFF" font-family="Helvetica Neue, Arial, sans-serif" font-size="6.8" font-weight="800">${s.id}</text>
      </g>`;
    })
    .join("");

  return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto;border:1px solid #C5BEB0;border-radius:2px;">
    <rect width="${W}" height="${H}" fill="#E6EFF5"/>
    ${graticules}
    ${landPaths}
    ${pins}
  </svg>`;
}
