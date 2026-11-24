// Composes the 1024x1024 world-news front page for Tuesday 24 November 2026
// and renders entry.png via headless Google Chrome.

import { execFileSync } from "node:child_process";
import { mkdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { renderIllustration } from "./illustrations.mjs";
import {
  BRIEF_STORIES,
  DATE_CHECK_EXCLUDED,
  HERO_STORIES,
  MEDIUM_STORIES,
  NUMBERS_KPI,
  REGIONS,
  UTC_TIMELINE,
} from "./stories.mjs";
import { renderWorldMap } from "./worldmap.mjs";

const STATUS_STYLE = {
  OFFICIAL: { bg: "#1E4B7A", fg: "#FFFFFF" },
  CONFIRMED: { bg: "#1F6E47", fg: "#FFFFFF" },
  REPORTED: { bg: "#1A6B77", fg: "#FFFFFF" },
  CLAIM: { bg: "#B25E12", fg: "#FFFFFF" },
};

function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function statusPill(status) {
  const st = STATUS_STYLE[status] || STATUS_STYLE.REPORTED;
  return `<span class="status-pill" style="background:${st.bg};color:${st.fg};">${esc(status)}</span>`;
}

function buildHtml() {
  const allStories = [...HERO_STORIES, ...MEDIUM_STORIES, ...BRIEF_STORIES];
  if (allStories.length !== 40) {
    throw new Error(`Expected 40 stories, got ${allStories.length}`);
  }
  const regionCounts = {};
  for (const s of allStories) {
    regionCounts[s.region] = (regionCounts[s.region] || 0) + 1;
  }

  const regionPills = Object.entries(REGIONS)
    .map(
      ([code, r]) =>
        `<span class="reg-pill" style="background:${r.color};">${esc(r.label)} <b>${regionCounts[code] || 0}</b></span>`
    )
    .join("");

  const utcItems = UTC_TIMELINE.map(
    (u) => `<span class="utc-item"><b>${esc(u.time)}</b> ${esc(u.text)}</span>`
  ).join('<span class="utc-sep">·</span>');

  const heroCards = HERO_STORIES.map((s) => {
    const rc = REGIONS[s.region].color;
    return `<article class="hero-card">
      <div class="hero-art">
        ${renderIllustration(s.art, true)}
        <span class="num-badge" style="background:${rc};">${s.id}</span>
      </div>
      <div class="hero-body">
        <div class="meta-row">
          <span class="kicker" style="color:${rc};">${esc(s.location)} · ${esc(s.beat)}</span>
          ${statusPill(s.status)}
        </div>
        <h2 class="hero-hl">${esc(s.headline)}</h2>
        <p class="hero-sum">${esc(s.summary)}</p>
        <div class="src-line">${esc(s.sources)}</div>
      </div>
    </article>`;
  }).join("");

  const kpiRows = NUMBERS_KPI.map(
    (k) => `<div class="kpi-row">
      <div class="kpi-val" style="color:${k.accent};">${esc(k.value)}</div>
      <div class="kpi-lbl">${esc(k.label)}</div>
    </div>`
  ).join("");

  const medCards = MEDIUM_STORIES.map((s) => {
    const rc = REGIONS[s.region].color;
    return `<article class="med-card">
      <div class="med-art">
        ${renderIllustration(s.art, false)}
        <span class="num-badge sm" style="background:${rc};">${s.id}</span>
      </div>
      <div class="med-body">
        <div class="meta-row">
          <span class="kicker sm" style="color:${rc};">${esc(s.location)}</span>
          ${statusPill(s.status)}
        </div>
        <h3 class="med-hl">${esc(s.headline)}</h3>
        <p class="med-sum">${esc(s.summary)}</p>
        <div class="src-line sm">${esc(s.sources)}</div>
      </div>
    </article>`;
  }).join("");

  const leftBriefs = BRIEF_STORIES.slice(0, 14);
  const rightBriefs = BRIEF_STORIES.slice(14);

  const renderBriefTable = (list) =>
    list
      .map((b) => {
        const rc = REGIONS[b.region].color;
        return `<li class="brief-row">
          <span class="brief-num" style="background:${rc};">${b.id}</span>
          <span class="brief-text"><b>${esc(b.place)}</b> ${esc(b.text)}</span>
          <span class="brief-src">${esc(b.src)}</span>
        </li>`;
      })
      .join("");

  const mapSvg = renderWorldMap([...HERO_STORIES, ...MEDIUM_STORIES], REGIONS);

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<title>Tuesday 24 November 2026 — The World in One Day</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 1024px;
    height: 1024px;
    overflow: hidden;
    background: #FAF7F0;
    color: #132238;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .page {
    width: 1024px;
    height: 1024px;
    display: flex;
    flex-direction: column;
    background: #FAF7F0;
  }
  .top-bar {
    height: 20px;
    background: #132238;
    color: #F4EFE6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.7px;
    text-transform: uppercase;
  }
  .content {
    flex: 1;
    padding: 4px 8px 5px 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .masthead {
    text-align: center;
    border-bottom: 2px solid #132238;
    padding-bottom: 3px;
  }
  .masthead h1 {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 47px;
    line-height: 0.96;
    font-weight: 900;
    letter-spacing: -0.9px;
    color: #101B2B;
  }
  .subdeck {
    margin-top: 2px;
    font-family: Georgia, "Times New Roman", serif;
    font-style: italic;
    font-size: 12.2px;
    font-weight: 700;
    color: #9E1F24;
  }
  .bars {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .region-bar {
    display: flex;
    gap: 4px;
  }
  .reg-pill {
    flex: 1;
    text-align: center;
    color: #FFFFFF;
    font-size: 8.6px;
    font-weight: 800;
    letter-spacing: 0.45px;
    padding: 2.5px 4px;
    border-radius: 2px;
  }
  .reg-pill b {
    font-weight: 900;
    margin-left: 2px;
    background: rgba(255,255,255,0.22);
    padding: 0 3px;
    border-radius: 2px;
  }
  .utc-bar {
    background: #1B2C44;
    color: #E8EDF4;
    padding: 2.8px 7px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 8.2px;
    white-space: nowrap;
  }
  .utc-tag {
    background: #B8292F;
    color: #FFFFFF;
    font-weight: 900;
    padding: 1px 5px;
    border-radius: 2px;
    margin-right: 4px;
    font-size: 7.9px;
    letter-spacing: 0.4px;
  }
  .utc-item b { color: #F5C242; font-weight: 800; }
  .utc-sep { color: #7E92AD; margin: 0 1.5px; }

  /* Tier 1: 3 Heroes + Numbers Sidebar */
  .tier1 {
    display: grid;
    grid-template-columns: 266px 266px 266px 192px;
    gap: 6px;
    height: 222px;
  }
  .hero-card {
    background: #FFFFFF;
    border: 1px solid #CFC8B8;
    border-radius: 3px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .hero-art {
    position: relative;
    width: 266px;
    height: 96px;
    flex-shrink: 0;
  }
  .hero-art svg { display: block; width: 266px; height: 96px; }
  .num-badge {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    color: #FFFFFF;
    font-size: 9.5px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #FFFFFF;
  }
  .num-badge.sm {
    width: 15px;
    height: 15px;
    font-size: 8.5px;
    top: 3px;
    left: 4px;
    right: auto;
  }
  .hero-body {
    padding: 5px 7px 4px 7px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .meta-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    margin-bottom: 2px;
  }
  .kicker {
    font-size: 8.2px;
    font-weight: 900;
    letter-spacing: 0.35px;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .kicker.sm { font-size: 7.4px; }
  .status-pill {
    font-size: 6.7px;
    font-weight: 800;
    letter-spacing: 0.3px;
    padding: 1px 4px;
    border-radius: 2px;
    flex-shrink: 0;
  }
  .hero-hl {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 14.8px;
    line-height: 1.12;
    font-weight: 900;
    color: #0F1A2A;
    margin-bottom: 3px;
  }
  .hero-sum {
    font-size: 9.5px;
    line-height: 1.24;
    color: #2B3645;
    flex: 1;
  }
  .src-line {
    font-size: 7.8px;
    color: #606C7C;
    font-weight: 600;
    margin-top: 2px;
  }
  .src-line.sm { font-size: 7.2px; }

  .numbers-box {
    background: #132238;
    color: #F8FAFC;
    border-radius: 3px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .numbers-hdr {
    background: #B8292F;
    color: #FFFFFF;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 0.6px;
    padding: 3.5px 7px;
    text-transform: uppercase;
  }
  .numbers-list {
    flex: 1;
    padding: 4px 7px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .kpi-row {
    border-bottom: 1px solid rgba(255,255,255,0.12);
    padding-bottom: 2px;
  }
  .kpi-row:last-child { border-bottom: none; padding-bottom: 0; }
  .kpi-val {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 14px;
    font-weight: 900;
    line-height: 1.05;
    margin-bottom: 1.5px;
  }
  .kpi-lbl {
    font-size: 7.7px;
    line-height: 1.15;
    color: #D7E0EC;
  }

  /* Tier 2: 10 Medium Editorial Cards (2x5) */
  .tier2 {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 152px 152px;
    gap: 5px;
  }
  .med-card {
    background: #FFFFFF;
    border: 1px solid #CFC8B8;
    border-radius: 3px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .med-art {
    position: relative;
    width: 100%;
    height: 62px;
    flex-shrink: 0;
  }
  .med-art svg { display: block; width: 100%; height: 62px; }
  .med-body {
    padding: 4px 5.5px 3px 5.5px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .med-hl {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 11.4px;
    line-height: 1.12;
    font-weight: 900;
    color: #0F1A2A;
    margin-bottom: 2px;
  }
  .med-sum {
    font-size: 8.6px;
    line-height: 1.19;
    color: #2D3848;
    flex: 1;
  }

  /* Tier 3: Map + Crisp 1-Line Tabular Briefs */
  .tier3 {
    display: grid;
    grid-template-columns: 294px minmax(0, 1fr);
    gap: 6px;
    flex: 1;
    min-height: 0;
  }
  .map-panel, .briefs-panel {
    background: #FFFFFF;
    border: 1px solid #CFC8B8;
    border-radius: 3px;
    padding: 5px 6px;
    display: flex;
    flex-direction: column;
    min-width: 0;
    overflow: hidden;
  }
  .sec-hdr {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    border-bottom: 1.5px solid #132238;
    padding-bottom: 2px;
    margin-bottom: 4px;
  }
  .sec-title {
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 0.55px;
    text-transform: uppercase;
    color: #132238;
  }
  .sec-sub {
    font-size: 7.7px;
    color: #5C6978;
    font-weight: 700;
  }
  .mkt-strip {
    margin-top: 5px;
    background: #F4EFE4;
    border: 1px solid #D7CFBE;
    border-radius: 2px;
    padding: 4.5px 6px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
  }
  .mkt-hdr {
    font-size: 7.7px;
    font-weight: 900;
    letter-spacing: 0.4px;
    color: #132238;
    border-bottom: 1px solid #D4CCBA;
    padding-bottom: 2px;
  }
  .mkt-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3px 10px;
  }
  .mkt-row {
    display: flex;
    justify-content: space-between;
    font-size: 8.2px;
    color: #1E293B;
  }
  .mkt-row b { font-weight: 900; }
  .up { color: #166534; }
  .dn { color: #9E1F24; }

  .brief-cols {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 8px;
    flex: 1;
    min-width: 0;
  }
  .brief-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
  }
  .brief-row {
    display: flex;
    align-items: baseline;
    gap: 3.5px;
    font-size: 7.95px;
    line-height: 1.15;
    color: #1B2738;
    border-bottom: 1px dotted #E6E0D3;
    padding-bottom: 1.5px;
    min-width: 0;
  }
  .brief-row:last-child { border-bottom: none; padding-bottom: 0; }
  .brief-num {
    flex-shrink: 0;
    width: 14px;
    height: 12.5px;
    border-radius: 2px;
    color: #FFFFFF;
    font-size: 7.2px;
    font-weight: 900;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .brief-text {
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .brief-text b { color: #0F1A2A; font-weight: 800; margin-right: 2px; }
  .brief-src {
    flex-shrink: 0;
    font-size: 6.9px;
    color: #64748B;
    font-weight: 700;
  }

  /* Date Check & Footer */
  .date-check {
    border: 1.5px solid #A12628;
    background: #FFFDF9;
    border-radius: 3px;
    padding: 4px 7px;
    display: flex;
    align-items: flex-start;
    gap: 7px;
  }
  .dc-tag {
    background: #A12628;
    color: #FFFFFF;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 0.4px;
    padding: 2px 5px;
    border-radius: 2px;
    flex-shrink: 0;
    margin-top: 1px;
  }
  .dc-text {
    font-size: 7.55px;
    line-height: 1.25;
    color: #242F3E;
  }
  .dc-text b { color: #101B2B; }
  .dc-ex { color: #8B1E22; font-weight: 800; }

  .footer-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 7.2px;
    color: #556272;
    padding: 0 2px;
  }
  .footer-bar b { color: #132238; }
</style>
</head>
<body>
<div class="page">
  <header class="top-bar">
    <span>THE WORLD IN ONE DAY</span>
    <span>40 STORIES · 7 REGIONS · EVERY ONE DATED TUESDAY 24 NOVEMBER 2026 (UTC)</span>
  </header>

  <main class="content">
    <section class="masthead">
      <h1>Tuesday 24 November 2026</h1>
      <div class="subdeck">China names first foreign astronaut for Tiangong · Asian chip stocks surge up to 9% · Iran claims Hormuz mine hits as oil stays low</div>
    </section>

    <section class="bars">
      <div class="region-bar">${regionPills}</div>
      <div class="utc-bar">
        <span class="utc-tag">UTC 24 NOV</span>
        ${utcItems}
      </div>
    </section>

    <section class="tier1">
      ${heroCards}
      <aside class="numbers-box">
        <div class="numbers-hdr">THE DAY IN NUMBERS</div>
        <div class="numbers-list">${kpiRows}</div>
      </aside>
    </section>

    <section class="tier2">
      ${medCards}
    </section>

    <section class="tier3">
      <div class="map-panel">
        <div class="sec-hdr">
          <span class="sec-title">WHERE IT HAPPENED</span>
          <span class="sec-sub">pins = stories 1–13</span>
        </div>
        ${mapSvg}
        <div class="mkt-strip">
          <div class="mkt-hdr">MARKETS &amp; DATA · TUESDAY 24 NOV</div>
          <div class="mkt-grid">
            <div class="mkt-row"><span>Taiwan Taiex</span><b class="up">+9.0%</b></div>
            <div class="mkt-row"><span>Brent Crude</span><b class="dn">~$89–92</b></div>
            <div class="mkt-row"><span>Seoul KOSPI</span><b class="up">+6.5%</b></div>
            <div class="mkt-row"><span>China Cobalt</span><b class="up">3M High</b></div>
            <div class="mkt-row"><span>Tokyo Nikkei</span><b class="up">+4.0%</b></div>
            <div class="mkt-row"><span>SG Q3 Exports</span><b class="up">+45.8%</b></div>
          </div>
        </div>
      </div>

      <div class="briefs-panel">
        <div class="sec-hdr">
          <span class="sec-title">ALSO ON TUESDAY 24 NOVEMBER — 27 MORE STORIES</span>
          <span class="sec-sub">stories 14–40</span>
        </div>
        <div class="brief-cols">
          <ul class="brief-list">${renderBriefTable(leftBriefs)}</ul>
          <ul class="brief-list">${renderBriefTable(rightBriefs)}</ul>
        </div>
      </div>
    </section>

    <section class="date-check">
      <span class="dc-tag">DATE CHECK</span>
      <div class="dc-text">
        <b>Every story on this page happened or was first reported on Tuesday 24 November 2026 (UTC / local 24 Nov).</b>
        <span class="dc-ex">Left out as earlier days' news:</span> ${esc(DATE_CHECK_EXCLUDED)}
      </div>
    </section>

    <footer class="footer-bar">
      <span><b>HOW SURE:</b> OFFICIAL = on record · CONFIRMED = 2+ wires · REPORTED = named outlet · CLAIM = contested / one side's account</span>
      <span>Scenes are drawn illustrations, not photographs.</span>
    </footer>
  </main>
</div>
</body>
</html>`;
}

function render() {
  const srcDir = dirname(fileURLToPath(import.meta.url));
  const repoDir = resolve(srcDir, "..");
  const workDir = resolve(repoDir, "../../run/news-20261124");
  mkdirSync(workDir, { recursive: true });

  const htmlPath = resolve(workDir, "frontpage-20261124.html");
  const outPng = resolve(repoDir, "entry.png");
  writeFileSync(htmlPath, buildHtml(), "utf8");

  const chromeBin = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  execFileSync(
    chromeBin,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      "--window-size=1024,1024",
      `--screenshot=${outPng}`,
      `file://${htmlPath}`,
    ],
    { stdio: "inherit" }
  );

  const bytes = statSync(outPng).size;
  console.log(`Rendered ${outPng} (${bytes} bytes)`);
}

render();
