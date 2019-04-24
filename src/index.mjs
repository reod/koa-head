import defaultConfig from "./config";
import createSetTitle from "./set-title";
import createAddMetaTag from "./add-meta-tag";
import createAddLink from "./add-link";
import createAddStyle from "./add-style";
import createAddScript from "./add-script";
import createToHtml from "./to-html";

export default function(opts) {
  const config = { ...defaultConfig, ...opts };

  return async function(ctx, next) {
    ctx.state[config.stateNamespace] = {};
    ctx.state[config.stateNamespace].title = "";
    ctx.state[config.stateNamespace].metaTags = [];
    ctx.state[config.stateNamespace].links = [];
    ctx.state[config.stateNamespace].styles = [];
    ctx.state[config.stateNamespace].scripts = [];

    const middlewareApi = {
      setTitle: createSetTitle(config, ctx),
      addMetaTag: createAddMetaTag(config, ctx),
      addLink: createAddLink(config, ctx),
      addStyle: createAddStyle(config, ctx),
      addScript: createAddScript(config, ctx),
      toHtml: createToHtml(config, ctx)
    };

    ctx[config.ctxNamespace] = middlewareApi;

    await next();
  };
}
