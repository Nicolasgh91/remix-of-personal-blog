import sharp from "sharp";
import { readFileSync } from "fs";

const tasks = [
  {
    input: "src/assets/article 04/think-bigger.png",
    output: "src/assets/article 04/think-bigger.webp",
    width: 1200,
    quality: 80,
  },
  {
    input: "src/assets/article-005/predictive-analytics-hero.jpg",
    output: "src/assets/article-005/predictive-analytics-hero.webp",
    width: 1200,
    quality: 80,
  },
  {
    input: "src/assets/article-006/first-party-data-hero.jpg",
    output: "src/assets/article-006/first-party-data-hero.webp",
    width: 1200,
    quality: 80,
  },
];

for (const { input, output, width, quality } of tasks) {
  await sharp(input)
    .resize(width, null, { withoutEnlargement: true })
    .webp({ quality })
    .toFile(output);
  const stats = readFileSync(output);
  console.log(`${output} -> ${(stats.length / 1024).toFixed(1)} KiB`);
}
