import defaultConfig from "./config";
import createSetTitle from "./set-title";
import createAddMetaTag from "./add-meta-tag";
import createAddLink from "./add-link";
import createAddStyle from "./add-style";
import createAddScript from "./add-script";
import createToHtml from "./to-html";

export default function(opts) {
  const config = { ...defaultConfig, ...opts };
  const state = {
    count: -1 // to make first insert with index 0
  };

  return async function(ctx, next) {
    ctx.state[config.stateNamespace] = {};
    ctx.state[config.stateNamespace].title = "";
    ctx.state[config.stateNamespace].metaTags = [];
    ctx.state[config.stateNamespace].links = [];
    ctx.state[config.stateNamespace].styles = [];
    ctx.state[config.stateNamespace].scripts = [];

    const middlewareApi = {
      setTitle: createSetTitle(config, state, ctx),
      addMetaTag: createAddMetaTag(config, state, ctx),
      addLink: createAddLink(config, state, ctx),
      addStyle: createAddStyle(config, state, ctx),
      addScript: createAddScript(config, state, ctx),
      toHtml: createToHtml(config, state, ctx)
    };

    ctx[config.ctxNamespace] = middlewareApi;

    await next();
  };
}
