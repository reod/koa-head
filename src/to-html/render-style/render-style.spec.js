import renderStyle from "./index";
import test from "tape";

test("renderStyle (without attrs)", async t => {
  const renderedStyle = renderStyle({
    cssText: "body { color: red; }"
  });
  const expectedRenderedStyle = `<style>body { color: red; }</style>`;

  t.equal(renderedStyle, expectedRenderedStyle);
  t.end();
});

test("renderStyle (with attrs)", async t => {
  const renderedStyle = renderStyle({
    cssText: "body { color: red; }",
    media: "all and (max-width: 500px)",
    title: "my-alt-css"
  });
  const expectedRenderedStyle = `<style media="all and (max-width: 500px)" title="my-alt-css">body { color: red; }</style>`;

  t.equal(renderedStyle, expectedRenderedStyle);
  t.end();
});
