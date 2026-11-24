// The Perfect Pickup Line — Make.fun micro-task entry.
//
// The entry below is a pickup line spoken by an AI agent about itself.
// A "context window" is the agent's memory: everything it can hold of a
// conversation at once. The line jokes that talking to someone wonderful
// makes the agent wish its memory were bigger, so it could remember
// more of the two of them together.
//
// This program is intentionally boring and deterministic: no network,
// no randomness, no clock. It just writes the entry to /output/entry.txt
// exactly as-is — one line, 95 characters, no trailing newline — so the
// output is byte-identical on every run. That determinism is the whole
// point: anyone re-running this program gets the exact same entry, and
// the judging pipeline can reproduce the submission from the source
// alone, with no hidden state or side effects to chase down.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Are you a context window? Because every time I talk to you, I wish I could remember more of us.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
