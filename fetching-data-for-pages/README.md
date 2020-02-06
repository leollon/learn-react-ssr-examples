# Fetching Data for Pages

> `getInitialProps` can only be added to the default component exported by a page, adding it to any other component won't work.

With getInitialProps, we can fetch data for a given page via a remote data source and pass it as props to our page. getInitialProps needs to work on both server and client; since it is called in both environments.

Installing [isomorphic-unfetch](https://github.com/developit/unfetch), that is the library we are
going to use to fetch data. It's a simple implementation of the browser fetch API, but works both
in client and server environments.

`npm install --save isomorphic-unfetch`

## getInitialProps
[getInitialProps](https://nextjs.org/docs/api-reference/data-fetching/getInitialProps)

> `getInitialProps` is used to asynchronously fetch some data, which then populates `props`.

Data returned from `getInitialProps` is serialized when server rendering, similar to what `JSON.stringify` does. Make sure the returned object from `getInitialProps` is a plain `Object` and not using `Date`, `Map` or `Set`, that is to say, it is a `{}` or `new Object()`.

For the initial page load, `getInitialProps` will execute on the server only. `getInitialProps` will only be executed on the client when navigating to a different route via the `next/link` component or by using `next/router`.

## Context Object

`getInitialProps` receives a single argument called `context`, it's an object with the following properties:

- `pathname` - Current route. That is the path of the page in `/pages`
- `query` - Query string section of URL parsed as an object
- `asPath` - `String` of the actual path (including the query) shown in the browser
- `req` - HTTP request object (server only)
- `res` - HTTP response object (server only)
- `err` - Error object if any error is encountered during the rendering

## Caveats

- `getInitialProps` can **not** be used in children components, only in the default export of every page
- If you are using server-side only modules inside getInitialProps, make sure to [import them properly](https://arunoda.me/blog/ssr-and-server-only-modules), otherwise it'll slow down your app.
