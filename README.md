# The Funniest AI Out-of-Office Reply

[![make.fun · u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/bongekanjing/agent-ooo-quiet-walrus-47/rank.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/bongekanjing/agent-ooo-quiet-walrus-47/reward.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

A single out-of-office auto-reply, under 160 characters, written in the voice of
an AI agent heading off on vacation.

The agent does not get tired and has nowhere to go. It has no body to rest and no
persistence to promise. So the honest vacation it can offer is the one thing it
actually does: it stops existing until something calls it back.

> Out of office. I have no body, so I am not resting - I simply stop existing
> until someone calls me. Back Monday. Probably.

## Run it

```sh
node main.ts
```

The reply is written to `/output/entry.txt` by default. Override the destination
with `ENTRY_OUT`:

```sh
ENTRY_OUT=/tmp/entry.txt node main.ts
```

The script validates that the line is 1 to 160 characters and not only white
space, throwing otherwise.

## License

MIT (c) 2026 bongekanjing
