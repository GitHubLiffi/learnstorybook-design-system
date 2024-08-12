<p align="center">
  <a href="https://www.chromatic.com/">
    <img alt="Chromatic" src="https://avatars2.githubusercontent.com/u/24584319?s=200&v=4" width="60" />
  </a>
</p>

<h1 align="center">
    Storybook Demo
</h1>


## Tasks for Storybook Demo

1) Create reusable components based on [Figma design](https://www.figma.com/design/N0KxIxkd2feiy3IRG7XjfK/00.-Design-System-%5BExtracted%5D?node-id=311-4172&t=x5lUfUyISJABOWj4-0)
    - In Progress
      - Table
    - Done
      - Button
      - TextField
      - Dropdown
      - Paper 
      - Empty/Error State Messages

2) Integrate qiankun MFEs with Storybook
3) Containerisation with [Docker](https://hub.docker.com/)
4) Version Management with Storybook e.g. how to manage different versions of reusable components being used in the frontend projects
7) explore plugin to streamline Figma process
8) Explore Testing solutions - playwright with storybook?

## 🚅 Quick start

1.  **Install the dependencies.**

    ```shell
    # Navigate to the directory
    cd learnstorybook-design-system/

    # Install the dependencies
    yarn
    
    # Start storybook in port 6006
    yarn storybook
    ```
    
## 🔎 What's inside?

A quick look at the top-level files and directories included with this template.

    .
    ├── node_modules
    ├── src
    ├── .babelrc.json
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── LICENSE
    ├── package.json
    ├── rollup.config.mjs
    ├── vite.config.js
    ├── yarn.lock
    └── README.md

1.  **`node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages).

2.  **`src`**: This directory will contain all of the code related to what you will see on your application.

3.  **`.babelrc.json`**: This file tells babel which presets and plugins to use when transforming your code.

4.  **`.gitignore`**: This file tells git which files it should not track or maintain during the development process of your project.

5.  **`.prettierignore`**: This file tells prettier which files it should not format.

6.  **`.prettierrc`**: This file tells prettier which rules to use when formatting your code.

7.  **`LICENSE`**: The template is licensed under the MIT licence.

8.  **`package.json`**: Standard manifest file for Node.js projects, which typically includes project specific metadata (such as the project's name, the author among other information). It's based on this file that npm will know which packages are necessary to the project.

9.  **`rollup.config.mjs`**: This file tells rollup which plugins to use when bundling your code.

10. **`yarn.lock`**: This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(Do not change it manually).**

11. **`vite.config.js`**: This file tells [Vite](https://vitejs.dev/) which plugins to use when bundling your code.

12. **`README.md`**: A text file containing useful reference information about the project.

## Learning Storybook
- Storybook development basics at [Intro to Storybook](https://storybook.js.org/tutorials/intro-to-storybook).
  - Redux knowledge recommended
- Learn how to transform your component libraries into design systems in our [Design Systems for Developers](https://storybook.js.org/tutorials/design-systems-for-developers/) tutorial.
  - Includes more complete building deploy distribute flow but some deploy code seems outdated/not functioning
- Official documentation at [Storybook](https://storybook.js.org/).
- [Sample Storybook from govuk](https://govuk-react.github.io/govuk-react/?path=/docs/welcome--docs)
- [React Managing State Tutorials](https://react.dev/learn/managing-state)
- [Material UI Docs](https://mui.com/material-ui/getting-started/)
- Helpful link for integrating MUI with Storybook(Typescript) [here](https://storybook.js.org/recipes/@mui/material)
- Figma integration [addon](https://storybook.js.org/addons/@storybook/addon-designs)
- [React-hook-form-mui package](https://www.npmjs.com/package/react-hook-form-mui) might be useful for form validations
