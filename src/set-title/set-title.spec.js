import createSetTitle from "./index";
import test from "tape";
import config from "./../config";
import { createCtxWithKoaHead } from "./../../test/test-helpers";

test("setTitle", async t => {
  const ctx = await createCtxWithKoaHead();
  const setTitle = createSetTitle(config, ctx);

  setTitle("awesome title");

  t.equal(ctx.state.document.title, "awesome title");
  t.end();
});
