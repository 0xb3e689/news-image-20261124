// Entrypoint for make.fun news-image-20261124
// Writes the verified Tuesday 24 November 2026 world-news front page to /output/entry.png.

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const MAX_BYTES = 1024 * 1024;
const MAX_DIM = 1024;
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function verifyPng(filePath: string): { width: number; height: number; bytes: number } {
  const stats = statSync(filePath);
  if (stats.size <= 24 || stats.size > MAX_BYTES) {
    throw new Error(`Invalid image size: ${stats.size} bytes (max ${MAX_BYTES})`);
  }
  const data = readFileSync(filePath);
  if (!data.subarray(0, 8).equals(PNG_MAGIC)) {
    throw new Error("Source entry.png does not have a valid PNG signature");
  }
  const width = data.readUInt32BE(16);
  const height = data.readUInt32BE(20);
  if (width === 0 || height === 0 || width > MAX_DIM || height > MAX_DIM) {
    throw new Error(`Invalid PNG dimensions: ${width}x${height} (max ${MAX_DIM}x${MAX_DIM})`);
  }
  return { width, height, bytes: stats.size };
}

function main(): void {
  const rootDir = dirname(fileURLToPath(import.meta.url));
  const srcImage = resolve(rootDir, "entry.png");
  const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || "/output");
  const destImage = join(outputDir, "entry.png");

  const meta = verifyPng(srcImage);
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(srcImage, destImage);
  console.log(`Wrote ${destImage} (${meta.width}x${meta.height}, ${meta.bytes} bytes)`);
}

main();
