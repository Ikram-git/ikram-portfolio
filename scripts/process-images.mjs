import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";

const root = process.cwd();
const pub = path.join(root, "public");

async function portrait() {
  const src = "C:/Users/DELL/Documents/1763140191731.png";
  if (!fs.existsSync(src)) {
    console.log("portrait source missing, skipping");
    return;
  }
  const meta = await sharp(src).metadata();
  console.log("portrait source:", meta.width, "x", meta.height);

  // Can't change the pose, but a 4:5 editorial crop (face larger, sides
  // trimmed) reads far less like a square ID photo. Lift off the flat grey,
  // sharpen, export crisp for retina.
  const out = path.join(pub, "ikram.jpg");
  await sharp(src)
    .resize(1000, 1250, { fit: "cover", position: "north" }) // 4:5 portrait
    .normalise() // auto contrast — pulls the grey background/subject apart
    .modulate({ brightness: 1.05, saturation: 1.05 })
    .sharpen({ sigma: 1.1 })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(out);
  console.log("wrote", out, fs.statSync(out).size, "bytes");
}

async function optimizeShots() {
  const dir = path.join(pub, "work");
  if (!fs.existsSync(dir)) return;
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".png"))) {
    const p = path.join(dir, file);
    const buf = await sharp(p)
      .resize(1280, 800, { fit: "cover", position: "top" })
      .png({ compressionLevel: 9, quality: 80, palette: true })
      .toBuffer();
    fs.writeFileSync(p, buf);
    console.log("optimized", file, fs.statSync(p).size, "bytes");
  }
}

await portrait();
await optimizeShots();
