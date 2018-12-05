const defaultConfig = {
  ctxNamespace: 'document',
  stateNamespace: 'document',
  documentTitleFormatter: title => title,
};

export default function(opts) {
  const config = { ...defaultConfig, ...opts };

  return async function(ctx, next) {
    ctx.state[config.stateNamespace] = {};
    ctx.state[config.stateNamespace].title = '';
    ctx.state[config.stateNamespace].metaTags = [];
    ctx.state[config.stateNamespace].links = [];

    const middlewareApi = {
      setTitle: (title) => {
        const documentTitle = typeof title === 'string'
          ? title
          : config.documentTitleFormatter(title);

        ctx.state[config.stateNamespace].title = documentTitle;
      },

      addMetaTag: (prop) => {
        ctx.state[config.stateNamespace].metaTags.push(prop);
      },

      addLink: (prop) => {
        ctx.state[config.stateNamespace].links.push(prop);
      }
    };

    ctx[config.ctxNamespace] = middlewareApi;

    await next();
  };
};
