import render from "./index";
import test from "tape";
import config from "./../config";
import { createCtxWithKoaHead } from "./../../test/test-helpers";

test("render", async t => {
  const ctx = await createCtxWithKoaHead();
  ctx[config.ctxNamespace].setTitle("sample title");
  ctx[config.ctxNamespace].addMetaTag({
    name: "viewport",
    content: "width=device-width"
  });
  ctx[config.ctxNamespace].addLink({
    href: "style.css",
    rel: "stylesheet"
  });
  ctx[config.ctxNamespace].addStyle("body { color: black }");
  const renderHead = render(config, ctx);
  const expectedHeadHtml = `<title>sample title</title>

<meta name="viewport" content="width=device-width" />


<link href="style.css" rel="stylesheet" />


<style type="text/css">body { color: black }</style>


`;

  const headHtml = renderHead();

  t.equal(headHtml, expectedHeadHtml);
  t.end();
});
