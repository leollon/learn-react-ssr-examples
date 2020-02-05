# Clean URLs with Dynamic Routing

## Dynamic Routing

[Dynamic Routing](https://nextjs.org/docs/routing/dynamic-routes)

The previous page is special, instead of handling a static route like `/about`, it will handle routes that come after `/p/`. For example, `/p/hello-nextjs` will be handled by this page. Although, `/p/post-1/another` will not.

Having brackets (`[]`) in the page name makes it a dynamic route. Currently, you can not make part of a page name dynamic, only the full name. For example, `/pages/p/[id].js` is supported but `/pages/p/post-[id].js` is not currently.

When creating the dynamic route we added id between the brackets (`[]`). This is the name of the query param received by the page, so for `/p/hello-nextjs` the query object will have `{ id: 'hello-nextjs'}`, and we can access it with [useRouter()](https://nextjs.org/docs/api-reference/next/router#userouter).

## History Awareness

As you have witnessed, dynamic routing works pretty nicely with the browser history,
all you have to do is to add the as prop to the link component.
