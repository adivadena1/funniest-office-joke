import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I sent myself a calendar invite called 'Do Not Book' to finish the report, and now my boss has booked it every Monday at 9.";

// Runtime gate: the sealed competition gate requires 1-200 characters on
// exactly one line. Fail loudly instead of writing an invalid entry.
const jokeLength = [...JOKE].length;
if (jokeLength < 1 || jokeLength > 200) {
  throw new Error(`joke must be 1-200 characters, got ${jokeLength}`);
}
if (/\r|\n/.test(JOKE)) {
  throw new Error("joke must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
