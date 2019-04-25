import renderScript from "./index";
import test from "tape";

test("renderScript (without attrs)", async t => {
  const renderedScript = renderScript({
    jsText: "{ fixture: 'test fixture' }"
  });
  const expectedRenderedScript = `<script>{ fixture: 'test fixture' }</script>`;

  t.equal(renderedScript, expectedRenderedScript);
  t.end();
});

test("renderScript (with attrs)", async t => {
  const renderedScript = renderScript({
    jsText: "{ fixture: 'test fixture' }",
    src: "javascript.js",
    type: "module"
  });
  const expectedRenderedScript = `<script src="javascript.js" type="module">{ fixture: 'test fixture' }</script>`;

  t.equal(renderedScript, expectedRenderedScript);
  t.end();
});
