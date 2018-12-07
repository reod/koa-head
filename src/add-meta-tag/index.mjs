export default (config, ctx) => prop => {
  ctx.state[config.stateNamespace].metaTags.push(prop);
};
