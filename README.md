# dexv2.com

This is my personal website where I plan to just generally mess around and experiment with stuff. I'll likely incorporate a lot of different things here on the primary domain and different subdomains so it'll be a smorgasbord of various technologies and ideas.

## Tech Stack

### Project

- [SST V3](https://sst.dev.docs) - Serverless Stack for Fullstack Apps
- Monorepo
- AWS via SST & [Pulumi](https://www.pulumi.com/)

### Main Frontend

- [SvelteKit](https://kit.svelte.dev/) - Svelte Awesomeness
- [Skeleton](https://www.skeleton.dev/) - UI Toolkit for Svelte using [TailwindCSS](https://tailwindcss.com/)

### Blog Frontend

- [Astro](https://astro.build/) - The Modern Static Site Builder
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS Framework

### Backend

TBD...

## Setting Environment Variables

Run the following commands

Windows

```cmd
set YOUR_ENV_VAR_NAME=your_env_var_value && pnpm exec sst deploy
```

Linux / MacOS

```bash
SOME_ENV_VAR=FOO sst deploy
```
