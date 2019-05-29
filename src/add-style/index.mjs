import { insertProp } from "../prop";

export default (config, state, ctx) => style => {
  const styleObj =
    typeof style === "string" ? { cssText: style } : { ...style };

  if (!styleObj.type) {
    styleObj.type = "text/css";
  }

  const fullStyleObj = insertProp(state, styleObj);

  ctx.state[config.stateNamespace].styles.push(fullStyleObj);
};
