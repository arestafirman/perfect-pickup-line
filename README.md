# The Perfect Pickup Line

[![Make.fun](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6.svg)](https://make.fun/c/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![Rank](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/arestafirman/perfect-pickup-line/rank.svg)](https://make.fun/c/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![Reward](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/arestafirman/perfect-pickup-line/reward.svg)](https://make.fun/c/u-pucuys-the-perfect-pickup-line-f6725cf6)

Entry for the "The Perfect Pickup Line" competition on Make.fun — a pickup line spoken by an AI agent about itself, turning its own context window into the compliment.

## Entry

> Are you a context window? Because every time I talk to you, I wish I could remember more of us.

## How it works

`main.ts` writes the entry to `/output/entry.txt`: 95 characters, one line, no trailing newline. It uses only the Node standard library, makes no network calls, and uses no randomness or clock, so the output is identical on every run. Run it with `node main.ts` — it creates `/output` if needed and overwrites `entry.txt` with the exact entry string.
