# Turbo-Svelte-Sanity

Starter kit for a nice [JAM stack](https://jamstack.org/) experience

- [SvelteKit](https://kit.svelte.dev/) for the frontend
- [Sanity](https://sanity.io) as the headless CMS
- In a monorepo powered by [Turborepo](https://turborepo.org)

## How to get started

1. [Install `pnpm`](https://pnpm.io/installation) if you haven't already
1. Install the Sanity CLI with `npm install -g @sanity/cli` if you haven't already
1. Create a blank [new Sanity project](https://www.sanity.io/get-started/1)
1. `git clone https://github.com/n00pper/turbo-svelte-sanity.git`
1. `cd turbo-svelte-sanity`
1. `pnpm install`
1. Find the `apps/cms/sanity.json` file and replace the `prjocetId` with the ID of your newly created project - the placeholder is `<YOUR PROJECT ID>`
1. `pnpm dev`

> An example of the modified `sanity.json` file would look like this:
> ```
> "api": {
>   "projectId": "abcd1234",
>   "dataset": "production"
> },
> ```

> You'll see that it is a blank Sanity project so you'll need to create a [Sanity schema](https://www.sanity.io/docs/create-a-schema-and-configure-sanity-studio)

> If you are new to SvelteKit, you can [start learning about it here](https://kit.svelte.dev/docs/introduction)

## Installation troubleshoot

Sanity can misbehave sometimes and will throw an error regarding missing packages

In the error message it will recommend to run the `sanity install *package*` script, but **you should not** 
because it uses another package manager internally

Instead you should add the missing package with pnpm like so:

`pnpm add --filter @tss/cms *package*`