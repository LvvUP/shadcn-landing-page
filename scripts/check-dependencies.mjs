import fs from "node:fs";
import process from "node:process";

const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
const sponsors = fs.readFileSync(
  "components/layout/sections/sponsors.tsx",
  "utf8",
);
const errors = [];

if (packageJson.dependencies?.["@devnomic/marquee"]) {
  errors.push("package.json: @devnomic/marquee only supports React 18 peers");
}
if (sponsors.includes("@devnomic/marquee")) {
  errors.push("sponsors.tsx: remove the React 18-only marquee import");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("dependency compatibility check passed");
