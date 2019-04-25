import createAddScript from "./index";
import test from "tape";
import config from "./../config";
import { createCtxWithKoaHead } from "./../../test/test-helpers";

test("addScript (as string)", async t => {
    const ctx = await createCtxWithKoaHead();
    const addScript = createAddScript(config, ctx);
    const jsText = "console.log('test log')";
    const expectedScript = {
        type: "text/javascript",
        jsText
    };

    addScript("console.log('test log')");

    t.deepEqual(ctx.state[config.stateNamespace].scripts, [expectedScript]);
    t.end();
});

test("addScript (as object)", async t => {
    const ctx = await createCtxWithKoaHead();
    const addScript = createAddScript(config, ctx);
    const jsText = "console.log('test log')";
    const fixtureObj = "{ 'fixture': 'test fixture' }";
    const expectedScript = {
        fixtureObj,
        jsText,
        type: "text/javascript"
    };

    addScript({ fixtureObj, jsText });

    t.deepEqual(ctx.state[config.stateNamespace].scripts, [expectedScript]);
    t.end();
});
