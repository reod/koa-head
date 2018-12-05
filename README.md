# koa-head
A document head manager middleware for koa.

## Installation
`npm i koa-head`

## TL;DR example
```js
import Koa from 'koa';
import koaHead from 'koa-head';

const app = new Koa();

app
  .use(koaHead())
  .use(async (ctx, next) => {
    ctx.document.setTitle('Title for my webpage');
    ctx.document.addMetaTag({ name: 'twitter:card', content: 'summary_large_image' });
    await next();
  })
  .use(ctx => {
    ctx.body = ctx.state.document;
  });

app.listen(3333);
```
will produce `json` response:
```json
{
  "title": "Title for my webpage",
  "metaTags": [
    {
      "name": "twitter:card",
      "content": "summary_large_image"
    }
  ],
  "links": [ ]
}
```

More sophisticated example can be found in [koa-head-example](https://github.com/reod/koa-head-example) repo.

## Available methods

### `.setTitle( string | object )`
Set document title.
### `.addMetaTag( object )`
Add `<meta />` tag.
### `.addLink( object )`
Add `<link />` tag.


## Middleware factory function config

| Option | Description | Default value  | 
|---|---|---|
| `ctxNamespace`  | Name under which middleware is exposed in `cxt` object and is used by other middlewares i.e. `ctx.document.setTitle('Hello')`. | `'document'`  |
| `stateNamespace`  | Name under which middleware stores values in `ctx.state` | `'document'` |
| `documentTitleFormatter`  | If set, all values passed to `.setTitle()` function will pe parsed by this formatter. | `title => title` |
