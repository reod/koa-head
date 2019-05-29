import createAddMetaTag from "./index";
import test from "tape";
import config from "./../config";
import { createCtxWithKoaHead, createState } from "./../../test/test-helpers";

test("addMetaTag", async t => {
  const ctx = await createCtxWithKoaHead();
  const state = createState();
  const addMetaTag = createAddMetaTag(config, state, ctx);
  const expectedMetaTag = {
    name: "meta-name",
    content: "meta-content",
    _meta: { insertIndex: 0 }
  };

  addMetaTag(expectedMetaTag);

  t.deepEqual(ctx.state[config.stateNamespace].metaTags, [expectedMetaTag]);
  t.end();
});
