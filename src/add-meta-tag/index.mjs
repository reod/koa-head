import { insertProp } from "../prop";

export default (config, state, ctx) => prop => {
  const fullProp = insertProp(state, prop);
  ctx.state[config.stateNamespace].metaTags.push(fullProp);
};
