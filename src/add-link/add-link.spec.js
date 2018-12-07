import addLink from "./index";
import test from "tape";
import config from "./../config";
import { createCtxWithKoaHead } from "./../../test/test-helpers";

test("addMetaTag", async t => {
  const ctx = await createCtxWithKoaHead();
  const addMetaTag = addLink(config, ctx);
  const expectedLink = { rel: "rel", content: "rel-content" };

  addMetaTag(expectedLink);

  t.deepEqual(ctx.state.document.links, [expectedLink]);
  t.end();
});
