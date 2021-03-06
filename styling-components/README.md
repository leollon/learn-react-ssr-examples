# Styling Components

For a React app, there are many different techniques that we can use to style it, and those can be categorized into two broad methods:

1. Traditional CSS-file-based styling (including SASS, PostCSS etc)
2. [CSS in Js](https://github.com/MicheleBertoli/css-in-js) styling

Consequently, there are a bunch of practical issues to consider with traditional CSS-file-based styling (especially with SSR), so we suggest avoiding this method when styling for Next.js.

Instead we recommend CSS in JS, which you can use to style individual components rather than importing CSS files.

Next.js comes preloaded with a CSS in JS framework called [styled-jsx](https://github.com/zeit/styled-jsx), specifically designed to make your life easier. It allows you to write familiar CSS rules for your components; rules will have no impact on anything other than the components (not even child components).

That means, your CSS rules are scoped.

## Styles should go inside template strings

Styled jsx works as a babel plugin. It will parse all of the CSS and apply it in the build process. (With that our styles get applied without any overhead time)

It also supports having constraints inside styled-jsx. In the future, you will be able to use any dynamic variable inside styled-jsx. That is why CSS needs to go inside of a template string. (`{``}`)

## No Effect for Nested Component

In that case, you need to style the child component directly.

Otherwise, you could use [global selectors](https://github.com/zeit/styled-jsx#one-off-global-selectors).

## Global Styles

Sometimes, we do need to change styles inside of a child component.

Global Styles Work
Yep that worked well. It worked, because our styles applied globally.

While this feature can be incredibly handy, we always recommend trying to write scoped styles (without the global prop).

Still, this is a great solution over normal style tags. With styled-jsx all necessary prefixing and CSS validation is done inside a babel plugin, so there is no additional runtime overhead.

## What Next

We have just scratched the surface with styled-jsx here, and there is a lot more that you can do. Refer to the [styled-jsx](https://github.com/zeit/styled-jsx) GitHub repo for more info.

There are a number of [other styling solutions](https://nextjs.org/docs/basic-features/built-in-css-support#css-in-js) for Next.js that are
pretty good, so have a look at them too.
