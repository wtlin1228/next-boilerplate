This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## ESLint

### Extensions

The order of extensions matters. Please make sure you know that before you reorder them.

- `plugin:testing-library/react` - https://github.com/testing-library/eslint-plugin-testing-library
- `next/core-web-vitals` - Includes Next.js' base ESLint configuration along with a stricter Core Web Vitals rule-set. This is the recommended configuration for developers setting up ESLint for the first time.
- `eslint:recommended` - https://eslint.org/docs/rules/.
- `plugin:@typescript-eslint/recommended` - Linting the TypeScript codebase and turn off rules that are checked in TypeScript already.
- `plugin:prettier/recommended` - Disable rules that have conflict with `Prettier`.

### Debug

It's helpful by running `./node_modules/.bin/eslint --print-config ./.eslintrc.json` to export the overall eslint configuration.

## StyleLint

Use [Stylelint](https://stylelint.io/) to helps us avoid errors and enforce conventions in our styled components.

The configuration listed in the official document is broken since `stylelint@14`. And the `stylelint-processor-styled-components` processor is archived. So we configure `stylelint` and `styled-components@5` by following [styled-components issue#3607](https://github.com/styled-components/styled-components/issues/3607). Please update the configuration `.stylelintrc.json` as soon as there is a best practice introduced by official document.

## LintStaged

Run linters against staged git files and don't let 💩 slip into your code base!

When `lint-staged` is triggered. It will run through `prettier` -> `styleLint` -> `eslint` -> `jest`. And the configuration is as following.

```json
// package.json
{
  // ...
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "prettier --write",
      "styleLint",
      "eslint --cache",
      "jest"
    ]
  }
}
```

## Git Hook

Git hooks of this repository are setup through [Husky](https://github.com/typicode/husky).

### pre-commit

> The pre-commit hook is run first, before you even type in a commit message. It’s used to inspect the snapshot that’s about to be committed, to see if you’ve forgotten something, to make sure tests run, or to examine whatever you need to inspect in the code. Exiting non-zero from this hook aborts the commit, although you can bypass it with git commit --no-verify. You can do things like check for code style (run lint or something equivalent), check for trailing whitespace (the default hook does exactly this), or check for appropriate documentation on new methods.

Setup through `npx mrm@2 lint-staged`.

This hook will trigger `lint-staged`.

### commit-msg

> The `commit-msg` hook takes one parameter, which again is the path to a temporary file that contains the commit message written by the developer. If this script exits non-zero, Git aborts the commit process, so you can use it to validate your project state or commit message before allowing a commit to go through. In the last section of this chapter, We’ll demonstrate using this hook to check that your commit message is conformant to a required pattern.

Setup through `./node_modules/.bin/husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'`

This hook will trigger `commitlint`.

## Testing

Use `Jest` and `Testing Library` to do unit test.

- `npm run test` - Run Jest in watch mode.
- `npm run test:ci` - Run `Jest` in continuous integration (CI) mode.
- `npm run test:coverage` - Indicates that test coverage information should be collected and reported in the output.
