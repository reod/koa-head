import createAddLink from "./index";
import test from "tape";
import config from "./../config";
import { createCtxWithKoaHead, createState } from "./../../test/test-helpers";

test("addLink", async t => {
  const ctx = await createCtxWithKoaHead();
  const state = createState();
  const addLink = createAddLink(config, state, ctx);
  const expectedLink = {
    rel: "rel",
    content: "rel-content",
    _meta: { insertIndex: 0 }
  };

  addLink(expectedLink);

  t.deepEqual(ctx.state[config.stateNamespace].links, [expectedLink]);
  t.end();
});
