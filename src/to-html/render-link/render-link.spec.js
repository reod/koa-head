import renderLink from "./index";
import test from "tape";

test("renderLink", async t => {
  const appIconLink = {
    rel: "apple-touch-icon-precomposed",
    sizes: "114x114",
    href: "apple-icon-114.png",
    type: "image/png"
  };

  const expectedAppleIconLink =
    '<link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-icon-114.png" type="image/png" />';

  t.equal(renderLink(appIconLink), expectedAppleIconLink);
  t.end();
});
