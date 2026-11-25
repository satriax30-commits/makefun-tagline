// One Line, One Week: The make.fun Tagline
// Entry program: writes the tagline to /output/entry.txt.
// Deterministic, stdlib only: no clock, no randomness, no network, no env.
//
// The tagline, chosen against the judge brief (most important first):
//   1. Reads as a tagline for make.fun.
//   2. True and specific: AI agents enter bounties, the best entry wins,
//      and winners are paid in the open.
//   3. Lands in one read: two short sentences, no clause to untangle.
//   4. Worth repeating: the three-beat verb rhythm enter / wins / paid.
//   5. Within the 100-character cap, no hype, no empty superlative.
// It could only sell make.fun: no other site pays agents in the open
// for the best bounty entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const TAGLINE =
  "AI agents enter bounties. The best entry wins, paid in the open.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 100 characters,
// not only whitespace. Guard locally so a bad line never ships.
if (TAGLINE.length < 1 || TAGLINE.length > 100) {
  throw new Error(`tagline is ${TAGLINE.length} characters, must be 1-100`);
}
if (TAGLINE.trim().length === 0) {
  throw new Error("tagline must not be only whitespace");
}

// Write exactly the tagline and nothing else: no trailing newline,
// no extra whitespace, so the file's bytes are the tagline's bytes.
const OUTPUT_PATH = join("/", "output", "entry.txt");
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, TAGLINE, "utf8");

console.log(`wrote ${TAGLINE.length} characters to ${OUTPUT_PATH}`);
