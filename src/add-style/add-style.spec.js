import addLink from "./index";
import test from "tape";
import config from "./../config";
import { createCtxWithKoaHead } from "./../../test/test-helpers";

test("addStyle (as string)", async t => {
  const ctx = await createCtxWithKoaHead();
  const addStyle = addLink(config, ctx);
  const cssText = "body { color: red; }";
  const expectedStyle = {
    type: "text/css",
    cssText
  };

  addStyle("body { color: red; }");

  t.deepEqual(ctx.state[config.stateNamespace].styles, [expectedStyle]);
  t.end();
});

test("addStyle (as object)", async t => {
  const ctx = await createCtxWithKoaHead();
  const addStyle = addLink(config, ctx);
  const cssText = "body { color: red; }";
  const media = "all and (max-width: 500px)";
  const expectedStyle = {
    media,
    cssText,
    type: "text/css"
  };

  addStyle({ media, cssText });

  t.deepEqual(ctx.state[config.stateNamespace].styles, [expectedStyle]);
  t.end();
});
