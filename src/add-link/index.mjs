export default (config, ctx) => prop => {
  ctx.state[config.stateNamespace].links.push(prop);
};
