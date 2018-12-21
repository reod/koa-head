import test from "tape";
import koaHead from "./index.mjs"; // mjs is important here
import { createCtx, createNext } from "./../test/test-helpers";

test("middleware setup with default namespaces", async t => {
  const docHead = koaHead();
  const ctx = createCtx();
  const next = createNext();

  await docHead(ctx, next);

  t.assert(ctx.documentHead);
  t.assert(ctx.state.documentHead);
  t.end();
});

test("middleware setup with custom namespacee", async t => {
  const customCtxNmspc = "_custom_ctx";
  const customStateNmspc = "_custom_state";

  const docHead = koaHead({
    ctxNamespace: customCtxNmspc,
    stateNamespace: customStateNmspc
  });

  const ctx = createCtx();
  const next = createNext();

  await docHead(ctx, next);

  t.assert(ctx[customCtxNmspc]);
  t.assert(ctx.state[customStateNmspc]);
  t.end();
});
