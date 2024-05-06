<!-- markdownlint-disable-next-line -->
<p align="center">
  <a href="https://octaui.com/" rel="noopener" target="_blank"><img height="133" src="https://media.publit.io/file/octaui-logo.webp" alt="Octa UI Logo"></a>
</p>

<h1 align="center">Octa UI</h1>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="License">
</p>

<!-- <h1 align="center">Octa UI</h1> -->

Octa UI 🐙 is an open-source, sleek, lightning-fast React UI library, meticulously designed for modern web development using TypeScript and Tailwind CSS.

## Features ✨

- **Sleek Design:** Beautifully crafted components following modern design principles.
- **Performance:** Optimized for speed and performance to ensure a seamless user experience.
- **Accessibility:** Built with accessibility in mind to make your applications usable by all users.
- **Customizable:** Easily customizable components to fit the unique requirements of your projects.

## Installation 🛠️

Install the package in your project directory with:

```bash
npm i octa-ui
```

Add the styles to your project:

```javascript
import "octa-ui/dist/style.css";
```

## Documentation ✍️

Visit [https://octaui.com/](https://octaui.com/) to view the full documentation.

## Example 🦑

Here's an example showcasing the usage of Octa UI components:

```jsx
import React from "react";
import { Button, Input } from "octa-ui";
import "octa-ui/dist/style.css";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold mt-6">Sign in to Example</h1>
      <p className="text-[#656565] mt-1 text-sm">
        Welcome back! Please sign in to continue
      </p>
      <div className="flex flex-row items-center space-x-2 mt-7">
        <Button variant={"outline"} className="w-[165px]">
          <img src="/svg/google.svg" alt="Google" className="h-5 w-5 mr-2" />
          <span>Google</span>
        </Button>

        <Button variant={"outline"} className="w-[165px]">
          <img
            src="/svg/github-dark.svg"
            alt="Github"
            className="h-5 w-5 mr-2 "
          />
          <span>GitHub</span>
        </Button>
      </div>
      <div className="flex flex-row items-center space-x-3 mt-5 mb-6">
        <hr className="w-[150px]" />
        <span className="text-[#a7a7a7] text-sm">or</span>
        <hr className="w-[150px]" />
      </div>
      <Input label="Email" className="w-[340px]" />
      <Button variant={"materialSecondary"} className="mt-5 w-[340px]">
        Continue
      </Button>
    </div>
  );
};

export default SignIn;
```

This example demonstrates a sign-in form using OctaUI's `Button` and `Input` components. Make sure to include the necessary imports and OctaUI styles in your project for the components to work correctly.


## Contributing Guidelines 🤝

We welcome contributions from the community to improve Octa UI! If you'd like to contribute, please follow these guidelines:

1. **Fork the repository:** Create your own fork of the repository and make changes in your fork.
2. **Create a new branch:** Create a new branch for your changes, e.g., `feature/my-feature`.
3. **Make changes:** Make your desired changes to the codebase.
4. **Test your changes:** Test your changes thoroughly to ensure they work as expected.
5. **Submit a pull request:** Once your changes are ready, submit a pull request to the main repository for review.


## License ⚖️

Octa UI is released under the MIT License. See [LICENSE](/LICENSE.txt) for more details.
