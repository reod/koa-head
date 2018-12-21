import createAddMetaTag from "./index";
import test from "tape";
import config from "./../config";
import { createCtxWithKoaHead } from "./../../test/test-helpers";

test("addMetaTag", async t => {
  const ctx = await createCtxWithKoaHead();
  const addMetaTag = createAddMetaTag(config, ctx);
  const expectedMetaTag = { name: "meta-name", content: "meta-content" };

  addMetaTag(expectedMetaTag);

  t.deepEqual(ctx.state[config.stateNamespace].metaTags, [expectedMetaTag]);
  t.end();
});
