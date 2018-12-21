import render from "./index";
import test from "tape";

test("render", async t => {
  const renderTitle = render({}, {});
  const expectedTitle = "<title>my page</title>";
  const title = renderTitle("my page");

  t.deepEqual(title, expectedTitle);
  t.end();
});
