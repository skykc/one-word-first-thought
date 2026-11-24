// One Word, First Thought — entry: "petrichor"
// The smell of rain on dry earth: the first word that comes to mind,
// vivid, surprising, and unmistakably specific.
// Writes exactly one word (9 chars, no trailing newline) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "petrichor";
const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");
console.log(`wrote ${WORD.length} chars to ${outDir}/entry.txt`);
