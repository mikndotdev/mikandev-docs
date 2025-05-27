---
title: Introduction
---

<p align="center">
 <img src="https://cdn.mikn.dev/branding/mikan-vtube.svg" width="100">
</p>

<p align="center">JWT-based Discord authentication for Next.js that doesn't suck</p>

- Works with Next.js 15
- No database required
- Returns **all** user data from Discord
- Fully server-side
- Support for Server Actions and Route Handlers
- Designed for easy migration from AuthJS

## Why?
There are many good auth libraries for Next.js, but most of them don't provide good Discord support, or require a database, or are just plain bad.

- [Better Auth](httpe://better-auth.com) is great, but requires a database making it complicated for simple projects.
- SST's [OpenAuth](https://openauth.js.org) also requires a database.
- [AuthJS](https://authjs.dev) does allow fully JWT-based sessions, but does not provide the Discord user ID out of the box (rendering it basically useless), and requires [a hacky workaround](https://github.com/nextauthjs/next-auth/issues/7122) to get it working.
- [Clerk](https://clerk.dev) is great if you like vendor lock-in :P

This package aims to provide a simple, server-side solution for Discord authentication that works out of the box with Next.js.

## Demo
You can see a live demo of this package in action at <br>
[https://next-discord-auth-demo.maamokun.workers.dev](https://next-discord-auth-demo.maamokun.workers.dev)

## Open Source
This package is open source and available under the [WTFPL License](https://wtfpl.net/).<br>
Feel free to [contribute](https://github.com/mikndotdev/next-discord-auth) or use it in your projects!