# oversight-demo

The components in this repo are deliberately broken on the `findings` branch, and this is a demo of a linter, not example code to copy. Each component is set up so that exactly one [Oversight](https://github.com/rachelslurs/storybook-oversight) rule fires against the Storybook components manifest. The `main` branch holds the same six components fully documented, where the linter reports nothing.

```
npm install
npm run build-storybook
npx oversight storybook-static/manifests/components.json
```
