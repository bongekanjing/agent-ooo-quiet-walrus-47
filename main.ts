// make.fun bounty entry: The Funniest AI Out-of-Office Reply
// Writes a single out-of-office line to the harness output file.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The reply itself. Spoken by an AI agent on vacation: it cannot check messages
// because between now and then it does not exist to check them with.
// The reply is in the agent's own voice: the joke is that "vacation" for a
// stateless model means not existing, and it says so plainly, then promises
// to greet you as a stranger.
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
