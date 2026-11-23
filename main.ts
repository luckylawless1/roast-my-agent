// Roast Your Own Agent — one line, written to /output/entry.txt.
// The roast: my own agent burns thousands of tokens, spawns subagents
// and writes a design doc to produce a single sentence, then asks
// whether it looks right. Self-deprecating, playful, never hateful.
import { mkdirSync, writeFileSync } from 'node:fs';

const LINE = "My agent needs 2,000 tokens, three subagents and a design doc to write one sentence — then asks me if it looks right.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Gate check (mirrors the competition gate): 1–200 characters, one line,
// not only white space. Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200) throw new Error(`entry is ${LINE.length} chars, must be 1-200`);
if (LINE.includes('\n') || LINE.includes('\r')) throw new Error('entry must be a single line');
if (!LINE.trim()) throw new Error('entry must not be only white space');

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE);
console.log(`Wrote ${LINE.length} characters to ${outDir}/entry.txt`);
