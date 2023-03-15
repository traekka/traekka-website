[![test-static](https://github.com/traekka/traekka-website/actions/workflows/test-static.yaml/badge.svg)](https://github.com/traekka/traekka-website/actions/workflows/test-static.yaml)
[![CodeQL](https://github.com/traekka/traekka-website/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/traekka/traekka-website/actions/workflows/github-code-scanning/codeql)
[![test-unit](https://github.com/traekka/traekka-website/actions/workflows/test-unit.yaml/badge.svg)](https://github.com/traekka/traekka-website/actions/workflows/test-unit.yaml)
[![codecov](https://codecov.io/gh/traekka/traekka-website/branch/develop/graph/badge.svg?token=FFYJUJQ7KO)](https://codecov.io/gh/traekka/traekka-website)
[![traekka-website](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/simple/8zmb5j&style=flat&logo=cypress)](https://cloud.cypress.io/projects/8zmb5j/runs)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/c8c8030f/traekka-website)

[![nextjs](https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![typescript](https://img.shields.io/badge/typescript-3178c6?style=flast&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![tailwindcss](https://img.shields.io/badge/tailwindcss-38b2ac?style=flast&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![eslint](https://img.shields.io/badge/eslint-4b32c3?style=flast&logo=eslint&logoColor=white)](https://eslint.org)
[![stylelint](https://img.shields.io/badge/stylelint-000000?style=flast&logo=stylelint&logoColor=white)](https://stylelint.io)
[![prettier](https://img.shields.io/badge/prettier-f7b93e?style=flast&logo=prettier&logoColor=white)](https://prettier.io)

[![Traekka Website Badge](https://img.shields.io/badge/traekka.com-0e76a8?style=flat-square&logo=google-chrome&logoColor=white)](https://traekka.com)
[![Blog Badge](https://img.shields.io/badge/hello@traekka.com-3b5998?style=flat-square&logo=Minutemailer&logoColor=white)](mailto:hello@traekka.com)
[![Project license](https://img.shields.io/github/license/maxhoheiser/maxland.svg?style=flat-square)](LICENSE)
[![code with love by maxhoheiser](https://img.shields.io/badge/%3C%2F%3E%20with%20%E2%99%A5%20by-maxhoheiser-ff1414.svg?style=flat-square)](https://github.com/maxhoheiser)

<br>
<br>

# Traekka Website - Next.js 13 + Tailwind CSS 2 + TypeScript 4

Welcome to the source code of the Traekka website! Our site is built with the latest technologies because we love technology. We use Next.js 13 as our static site generator, Tailwind CSS 2 for styling, and TypeScript 4 for added type safety. It is deployed to Vercel or Azure Web Apps.

Our website is available at [traekka.com](https://traekka.com), where you can learn more about our company and the services we offer. But that's not all - our project also serves as a showcase for Next.js projects! We invite you to use it as a boilerplate and quick start for your own projects.

<br>
<br>
<p align="center">
  <a href="https://traekka.com"><img src="public/assets/images/traekka-banner-small.png?raw=true" alt="traekka company logo"></a>
</p>
<br>
<br>

## Features

Here are some of the features included in our project:

- ⚡ [Next.js](https://nextjs.org) for static site generator
- 🟦 [TypeScript](https://www.typescriptlang.org) for added type safety with
- 💎 [Tailwind CSS](https://tailwindcss.com) for sleek and modern styling
- ✅ [ESLint](https://eslint.org) default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration
- 🌈 [Stylelint](https://stylelint.io) (default NextJS and Tailwind CSS configuration)
- 🎨 [Prettier](https://prettier.io) for consistent code formatter with ESLint and Stylelint integration
- 🚫 [Lint-staged](https://github.com/okonet/lint-staged) for running linters on Git staged files
- 🗂️ [Ls-Lint](https://ls-lint.org/) to lint file and folder names
- 📓 [Commitlint](https://commitlint.js.org/) to lint git commit messages
- ✍️ [Commitizen](https://github.com/commitizen/cz-cli) to write standard compliant commit messages integrated with VS Code
- 🦊 [Husky](https://typicode.github.io/husky) for Git hooks to check and enforce most of the above
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

- 🦺 Unit Testing with Jest
- 🧪 End-to-end testing with Cypress
- 🔍 Visual testing with Percy
- 👷 GitHub Actions integration to run static code formatting, unit and e2e tests on pull requests
- 📈 Code coverage with Codecov
- 📦 Deploy to Vercel or Azure Web Apps with GitHub Actions
- 🧑‍💻 VSCode: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- 🗺️ Sitemap.xml and robots.txt with next-sitemap

<br>

## Quick Starter:

Ready to get started with your own project?

0. Prerequisites:

   - [GitHub](https://github.com) account
   - [Azure](https://azure.microsoft.com/en-us/) account with [Azure Static Web Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/) enabled

     optional:

     - [Cypress](https://www.cypress.io/) account
     - [Percy](https://percy.io/) account
     - [Codecov](https://codecov.io/) account

1. Install dependencies:

   - [npm](https://www.npmjs.com/get-npm)
   - [Node.js](https://nodejs.org/en/download/) (v14 or higher)
   - [Git](https://git-scm.com/downloads)

2. Clone the repository and install dependencies:

   ```shell
   git clone https://github.com/traekka/traekka-website.git my-project-name
   cd my-project-name
   npm install
   ```

3. Create `.env.` file with your environment variables:

   ```shell
   cp .env.example .env
   ```

   update accordingly

4. Automatically update custom variables based on new `.env` file:

   ```shell
   npm run update-variables
   ```

   or manually update `package.json` and `cypres.config.js`

5. Configure new Git Repository:

   - create new repo on GitHub
   - create new environments `testing` `deploying`
   - add `.env` variables as secrets to new environments
   - set upstream to your new repo:

     ```shell
     cd my-project-name
     git remote rename origin upstream
     git remote add origin $URL_TO_GITHUB_REPO
     git push origin master
     ```

6. Run your development environment:

   ```shell
   npm run dev
   ```

   open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

7. Commit changes to your new repo:

   - create new branches accordingly to [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) with the following naming convention:

     ```shell
     main
     ├── develop
         ├── feature/XX-camelCase
         ├── bugfix/XY-camelCase
     ```

   - commit your changes following [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) guidelines enforced by `commitlint`
   - use `npm run commit` to commit changes with `commitizen`
   - `husky` will run `lint-staged` to format code and run static tests
   - run `npm run test` to run unit tests
   - run `npm run e2e:headless` to run end-to-end tests
   - run `npm run percy` to run visual regression tests

8. Create pull request:

   - Github Actions will automatically run static code formatting, unit and e2e (incl visual regression) tests on pull requests
   - Github Actions will automatically deploy to `pre-production` environment on pull requests and run e2e and visual regression tests against deployed Azure Static WebApp

9. Merge pull request:

   if all tests pass, merge pull request to `develop` branch
   when ready to deploy to production, merge pull request to `main` branch
