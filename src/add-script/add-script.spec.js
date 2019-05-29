import createAddScript from "./index";
import test from "tape";
import config from "./../config";
import { createCtxWithKoaHead, createState } from "./../../test/test-helpers";

test("addScript (as string)", async t => {
  const ctx = await createCtxWithKoaHead();
  const state = createState();
  const addScript = createAddScript(config, state, ctx);
  const jsText = "console.log('test log')";
  const expectedScript = {
    type: "text/javascript",
    jsText,
    _meta: { insertIndex: 0 }
  };

  addScript("console.log('test log')");

  t.deepEqual(ctx.state[config.stateNamespace].scripts, [expectedScript]);
  t.end();
});

test("addScript (as object)", async t => {
  const ctx = await createCtxWithKoaHead();
  const state = createState();
  const addScript = createAddScript(config, state, ctx);
  const jsText = "console.log('test log')";
  const fixtureObj = "{ 'fixture': 'test fixture' }";
  const expectedScript = {
    fixtureObj,
    jsText,
    type: "text/javascript",
    _meta: { insertIndex: 0 }
  };

  addScript({ fixtureObj, jsText });

  t.deepEqual(ctx.state[config.stateNamespace].scripts, [expectedScript]);
  t.end();
});
