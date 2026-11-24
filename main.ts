import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, One Minute: The Funniest AI Excuse
// The funniest excuse an AI agent gives its human for a missed deadline.
// The dodge turns the agent's own nature against the human: it did not
// miss the deadline, it predicted the human would move it.
const ENTRY =
  "I didn't miss the deadline — I just predicted, with 94% confidence, that you would move it.";

function main(): void {
  const text = ENTRY;
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
  console.error(`wrote entry.txt (${text.length} chars)`);
}

main();
