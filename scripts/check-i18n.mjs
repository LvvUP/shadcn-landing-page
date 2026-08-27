import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const flatten = (value, prefix = "", output = {}) => {
  for (const [key, child] of Object.entries(value)) {
    const nextKey = prefix ? `${prefix}.${key}` : key;
    if (child && typeof child === "object" && !Array.isArray(child)) {
      flatten(child, nextKey, output);
    } else {
      output[nextKey] = child;
    }
  }
  return output;
};

const zh = flatten(JSON.parse(read("messages/zh-CN.json")));
const en = flatten(JSON.parse(read("messages/en-US.json")));
const errors = [];

for (const key of Object.keys(zh)) {
  if (!(key in en)) errors.push(`Missing en-US key: ${key}`);
}
for (const key of Object.keys(en)) {
  if (!(key in zh)) errors.push(`Missing zh-CN key: ${key}`);
}

const banned = {
  "components/layout/sections/team.tsx": [
    "Vue Fronted Developer",
    "Machine Learning Engineer",
    "Cloud Native Developer",
    "Fullstack Developer",
  ],
  "components/layout/sections/footer.tsx": [
    "Github</Link>",
    "Twitter</Link>",
    "Instagram</Link>",
    "FAQ</Link>",
  ],
  "components/layout/sections/contact.tsx": ["Hello I am"],
  "components/layout/sections/hero.tsx": ['alt="dashboard"'],
  "components/layout/navbar.tsx": ['alt="RadixLogo"'],
};

for (const [file, patterns] of Object.entries(banned)) {
  const source = read(file);
  for (const pattern of patterns) {
    if (source.includes(pattern)) {
      errors.push(`${file}: hardcoded copy ${pattern}`);
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`i18n check passed: ${Object.keys(zh).length} keys per locale`);
