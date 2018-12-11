import renderMetaTag from "./index";
import test from "tape";

test("renderMetaTag (with name)", async t => {
  const withName = { name: "with-name", content: "content-of-with-name" };
  const expectedWithName =
    '<meta name="with-name" content="content-of-with-name" />';
  t.equal(renderMetaTag(withName), expectedWithName);
  t.end();
});

test("renderMetaTag (with property)", async t => {
  const withProperty = {
    property: "with-property",
    content: "content-of-with-property"
  };
  const expectedWithProperty =
    '<meta property="with-property" content="content-of-with-property" />';
  t.equal(renderMetaTag(withProperty), expectedWithProperty);
  t.end();
});
