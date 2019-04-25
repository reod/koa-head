import createAddLink from "./index";
import test from "tape";
import config from "./../config";
import { createCtxWithKoaHead } from "./../../test/test-helpers";

test("addLink", async t => {
  const ctx = await createCtxWithKoaHead();
  const addLink = createAddLink(config, ctx);
  const expectedLink = { rel: "rel", content: "rel-content" };

  addLink(expectedLink);

  t.deepEqual(ctx.state[config.stateNamespace].links, [expectedLink]);
  t.end();
});
