import createSetTitle from "./index";
import test from "tape";
import config from "./../config";
import { createCtxWithKoaHead, createState } from "./../../test/test-helpers";

test("setTitle", async t => {
  const ctx = await createCtxWithKoaHead();
  const state = createState();
  const setTitle = createSetTitle(config, state, ctx);

  setTitle("awesome title");

  t.equal(ctx.state[config.stateNamespace].title, "awesome title");
  t.end();
});
