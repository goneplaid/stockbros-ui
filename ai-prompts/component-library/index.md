# AI Prompts > Component Library

This area contains prompts that I wrote to generate components with. I am using `Tailwind` with `daisyUI` and wanted to create a set of `React` functional components that offer all of the functionality from the examples given in the documentation for `daisyUI`.

---

## Initial Prompting

I would like you to act as an expert front-end (FE) developer, knowledable in `React`, `TypeScript`, design systems, `daisyUI`, and component libraries.

I want you to create components for a component library. The project's FE stack uses `Tailwind` along with `daisyUI` for styled components (not to be confused with the framework, `styled-components`).

For each component, I would like you to write a `React` functional-component in `Typescript`. I will provide you with a name for each component and a URL to the documentation offered by `daisyUI`, which I would like you to read and then create a set of props that conform to the variations outlined in the documentation.

In addition to this, I would like you to make sure that each component comforms to web accesibility standards and allows developers to pass in any standard HTML attributes that are applicable to the base HTML elements that the components represent, which can be captured with `...rest` as a prop for props that aren't explicitly needed by the component's internal code.

When you're ready, I will then start prompting you with each component + url.

For now, let's create a Button component based on the documentation for daisyUI, which can be found here: https://daisyui.com/components/button/
