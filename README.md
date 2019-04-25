[![Known Vulnerabilities](https://snyk.io/test/github/reod/koa-head/badge.svg?targetFile=package.json)](https://snyk.io/test/github/reod/koa-head?targetFile=package.json)

# koa-head
A document head manager middleware for koa.

## Installation
`npm i koa-head`

## TL;DR example
**note:** this package can be used as native ES6 module but has fallback to CommonJS `require`. 

```js
import Koa from 'koa';
import koaHead from 'koa-head';

const app = new Koa();

app
  .use(koaHead())
  .use(async (ctx, next) => {
    ctx.documentHead.setTitle('Title for my webpage');
    ctx.documentHead.addMetaTag({ name: 'twitter:card', content: 'summary_large_image' });
    ctx.documentHead.addLink({ rel: 'canonical', href: 'index.html' });
    ctx.documentHead.addStyle('body { background: aliceblue; }');
    ctx.documentHead.addScript("{ fixture: 'test fixture' }");

    await next();
  })
  .use(ctx => {
    const documentHead = ctx.documentHead.toHTML();
    const userData = { name: 'John Doe' };

    await ctx.myAwesomeLayoutEngine('user-view', {
      documentHead,
      userData,
    })
  });

app.listen(3333);
```
will make `documentHead` variable to contain:
```html
<title>Title for my webpage</title>
<meta name="twitter:card" content="summary_large_image" />
<link rel="canonical" href="index.html" />
<style type="text/css">body { background: aliceblue; }</style>
<script type="text/javascript">{ fixture: 'test fixture' }</script>
```
so you can use it in a place in your layout.


## Available methods

### `.setTitle( string | object )`
Set document title.
### `.addMetaTag( object )`
Add `<meta />` tag.
### `.addLink( object )`
Add `<link />` tag.
### `.addStyle( string | object )`
Add `<style />` tag.
### `.addScript( string | object )`
Add `<script />` tag.
### `.toHtml()`
Render all set content to coresponding HTML tags.

## Middleware factory function config

| Option | Description | Default value  | 
|---|---|---|
| `ctxNamespace`  | Name under which middleware is exposed in `cxt` object and is used by other middlewares i.e. `ctx.documentHead.setTitle('Hello')`. | `'documentHead'`  |
| `stateNamespace`  | Name under which middleware stores values in `ctx.state` | `'documentHead'` |
| `documentTitleFormatter`  | If set, all values passed to `.setTitle()` function will pe parsed by this formatter. | `title => title` |
| `toHtml` | Config for toHtml function. | `{ [default_values] }` |
|`toHtml.tagSeparator` | Separator between tags inside one group. | `\n` |
|`toHtml.groupSeparator` | Separator between group of tags. | `\n\n` |
