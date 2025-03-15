---
title: 'Monorepo Plugin Example for SSF'
summary: 'Adding an opinionated monorepo plugin example for the scripting framework'
date: 'Mar 14 2025'
draft: false
tags:
  - Open Source
  - SSF
  - Web
  - LOS
---

## Monorepo Plugin Example for SSF

Last week I published an example plugin project that included an example of using [esbuild](https://esbuild.github.io/) to bundle the plugin code. This week I wanted to take that a step further and provide an example of how to setup a monorepo for a plugin project using [PNPM Workspaces](https://pnpm.io/workspaces).

## TLDR

- [x] New monorepo plugin example available on [GitHub](https://github.com/dex2dot0/tsweb-plugin-monorepo)
- [x] Example project available on [StackBlitz](https://stackblitz.com/~/github.com/dex2dot0/tsweb-plugin-monorepo)
- [x] Monorepo setup with PNPM Workspaces
- [x] Plugin bundling capabilities
- [x] Multiple bundling options (unminifed and minified with source maps)
- [x] Shared logic using the power of PNPM Workspaces (DRY)

**Note** If you go the StackBlitz route, you will have to create a fork of the project. You can sign up for free and use a cloud dev machine for a set number of hours per month. This is a great option if you just want to play around for a while without having to setup everything on your local machine, or if you say maybe you find yourself in one of those situations where your work station is locked down like Fort Knox and you can't install anything. ☜(꒡⌓꒡)

## Monorepo Overview

A monorepo is a codebase that contains multiple projects within the same directory/project root. This is a fairly common pattern in the software development ecosystem and is used by many large companies such as Google, Facebook, and Microsoft. The main advantage of a monorepo is that it allows you to share code between projects and can help manage dependencies more easily. The efficacy of monorepos is often the subject of much debate and there are many pros and cons to consider when deciding whether to use a monorepo or not.

I am not looking to debate here on what the best approach is, nor is this project an endorsement of one method over another. I think this approach has its merits and will likely be a useful base regardless of what decision you make for your project.

![You Do You](./do_you.gif)

## Benefits

### Shared Logic

Likely the biggest benefit, the project outlines methods to share code between plugins in the monorepo. This can be useful for shared utilities, types, functions, etc. that are used across multiple plugins. Esbuild takes care of bundling the shared code into the plugin bundles. This helps avoid the need for publishing shared code to NPM and managing multiple versions of the same code.

### Dependency Management

PNPM Workspaces is a powerful tool that allows you to manage dependencies across multiple projects in a monorepo. This can be useful for managing dependencies that are shared across multiple projects. This includes not only the code your write but also the dependencies that your code relies on.

### Code Organization

Having all of your projects in a single repository can make it easier to manage your codebase. You can easily navigate between projects and see how they are related to each other. This can be especially useful for larger projects with many moving parts.

## Tree Shaking

Esbuild is a powerful tool that can help you reduce the size of your bundles by removing unused code. This can be especially useful for large projects with many dependencies. Esbuild can help you keep your bundles small and fast. Coupled with minification and source maps, you have a powerful customizable toolset to help you optimize your code. The smaller your bundles, the faster your code will load and the better your user experience will be.

## Gotchas

### PNPM Workspaces

PNPM Workspaces is an amazing tool, but it can be a bit tricky to set up. You need to make sure that your `package.json` files are set up correctly and that your projects are organized in the right way. It takes some time to get used to the workflow, but once you get the hang of it, it can be a powerful tool for managing your codebase.

### Split Bundles

This project targets plugins that are likely larger and more complex than something you might want to bundle in to a single file. You can certainly update the esbuild configuration to bundle everything into a single file, but that may not be the best approach for larger projects and is not what this example is targeted towards.

## Getting Started

1. Clone the repository
2. Run `pnpm install` to install the dependencies
   **note** notice how PNPM identifies the different workspaces and installs the dependencies for each project
3. Run `pnpm run build` to build the plugin (development unminified)
4. Run `pnpm run build:min` to build the plugin (production minified with source maps)

After running the build commands, you should see the plugin bundles in the `dist` directory. You can then upload these assets as your plugin code.
