# oversight-demo

The components in this repo are deliberately broken on the `findings` branch, and this is a demo of a linter, not example code to copy. Each component is set up so that exactly one [Oversight](https://github.com/rachelslurs/storybook-oversight) rule fires against the Storybook components manifest. The `main` branch holds the same six components fully documented, where the linter reports nothing.

## Running the linter

```
npm install
npm run build-storybook
npx oversight storybook-static/manifests/components.json
```

`npm run lint:docs` is the demo shortcut. It reads a manifest pre-built into a branch-specific directory that is gitignored, so in a fresh clone it fails until you run the build above.
