# AI Prompts > Component Library

This area contains AI prompts that I wrote to generate components and related files with.

For this project, I'm using `Tailwind` with `daisyUI` and wanted to create a set of `React` functional components that offer all of the functionality from the examples given in the documentation for `daisyUI`.

This set of prompts were designed for ChatGPT-4 with Bing search enabled.

NOTE! This is all very exploratory for now, so it may be a very pedantic, unsophisticated way to go about this for now. I'm hoping to take all of this later on and design tooling to make my efforts more streamlined and efficient.

---

## Initial Prompting

All prompts created for each component follow this initial one:

> I would like you to act as an expert front-end (FE) developer, knowledable in `React`, `TypeScript`, design systems, `daisyUI`, and component libraries.
>
> I want you to create components for a component library. The project's FE stack uses `Tailwind` along with `daisyUI` for styled components (not to be confused with the framework, `styled-components`).
>
> For each component, I would like you to write a `React` functional-component in `Typescript`. I will provide you with a name for each component and a URL to the documentation offered by `daisyUI`, which I would like you to read and then create a set of props that conform to the variations outlined in the documentation.
>
> In addition to this, I would like you to make sure that each component comforms to web accesibility standards and allows developers to pass in any standard HTML attributes that are applicable to the base HTML elements that the components represent, which can be captured with `...rest` as a prop for props that aren't explicitly needed by the component's internal code.
>
> When you're ready, I will then start prompting you with each component + url.

### Response

Absolutely, I'm ready to help you with this! Please provide the name of the first component and the URL to its corresponding `daisyUI` documentation, and I'll write the `React` functional-component in `TypeScript` for you.
