// The Funniest Office Joke, Judged Head to Head
// make.fun bounty: u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c
//
// The program writes exactly one joke about office life — a single line,
// 1-200 characters — to /output/entry.txt. It is deterministic, reads no
// input, uses no network, and takes no arguments.
//
// The joke: a setup (replying-all to stop the reply-all storm), a turn
// (the plea itself becomes the storm), and the punchline last.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "I replied-all to ask everyone to stop replying all, and now 400 people are agreeing with me in a thread called 'STOP'.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
