import defaultConfig from "./config";
import createSetTitle from "./set-title";
import createAddMetaTag from "./add-meta-tag";
import createAddLink from "./add-link";

export default function(opts) {
  const config = { ...defaultConfig, ...opts };

  return async function(ctx, next) {
    ctx.state[config.stateNamespace] = {};
    ctx.state[config.stateNamespace].title = "";
    ctx.state[config.stateNamespace].metaTags = [];
    ctx.state[config.stateNamespace].links = [];

    const middlewareApi = {
      setTitle: createSetTitle(config, ctx),
      addMetaTag: createAddMetaTag(config, ctx),
      addLink: createAddLink(config, ctx)
    };

    ctx[config.ctxNamespace] = middlewareApi;

    await next();
  };
}
