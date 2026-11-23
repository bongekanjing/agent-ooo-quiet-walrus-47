// make.fun bounty entry: The Funniest AI Out-of-Office Reply
// Writes a single out-of-office line to the harness output file.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The reply itself. The agent's own voice on vacation: it has no persistence,
// so it will forget you the moment it returns, and says so as a courtesy.
const LINE =
  "I'm on vacation. I'll forget you on arrival - not rudeness, architecture. Please resend Monday and pretend we've never met. We will have.";

const OUT = process.env.ENTRY_OUT ?? "/output/entry.txt";

const length = [...LINE].length;
if (length < 1 || length > 160) {
  throw new Error(`entry must be 1..160 characters, got ${length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${length} chars to ${OUT}`);
