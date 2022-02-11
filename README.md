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

## Git Hook

Git hooks of this repository are setup through [Husky](https://github.com/typicode/husky).
