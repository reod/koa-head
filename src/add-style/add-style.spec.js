import createAddStyle from "./index";
import test from "tape";
import config from "./../config";
import { createCtxWithKoaHead, createState } from "./../../test/test-helpers";

test("addStyle (as string)", async t => {
  const ctx = await createCtxWithKoaHead();
  const state = createState();
  const addStyle = createAddStyle(config, state, ctx);
  const cssText = "body { color: red; }";
  const expectedStyle = {
    type: "text/css",
    cssText,
    _meta: { insertIndex: 0 }
  };

  addStyle("body { color: red; }");

  t.deepEqual(ctx.state[config.stateNamespace].styles, [expectedStyle]);
  t.end();
});

test("addStyle (as object)", async t => {
  const ctx = await createCtxWithKoaHead();
  const state = createState();
  const addStyle = createAddStyle(config, state, ctx);
  const cssText = "body { color: red; }";
  const media = "all and (max-width: 500px)";
  const expectedStyle = {
    media,
    cssText,
    type: "text/css",

    _meta: { insertIndex: 0 }
  };

  addStyle({ media, cssText });

  t.deepEqual(ctx.state[config.stateNamespace].styles, [expectedStyle]);
  t.end();
});
