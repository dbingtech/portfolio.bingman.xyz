const fs = require("fs");
const path = require("path");
const posthtml = require("posthtml");
const include = require("posthtml-include");

const htmlRoot = path.join(__dirname, "..", "app", "html");
const pagesDir = path.join(htmlRoot, "pages");
const projectRoot = path.join(__dirname, "..");

const banner =
  "<!-- Auto-generated from app/html/pages — edit the source there, not this file. -->\n";

fs.readdirSync(pagesDir)
  .filter((file) => file.endsWith(".html"))
  .forEach((file) => {
    const source = fs.readFileSync(path.join(pagesDir, file), "utf8");

    posthtml([include({ root: htmlRoot })])
      .process(source)
      .then((result) => {
        fs.writeFileSync(path.join(projectRoot, file), banner + result.html);
        console.log(`Built ${file}`);
      });
  });
