export default (config, ctx) => style => {
  const styleObj =
    typeof style === "string" ? { cssText: style } : { ...style };

  if (!styleObj.type) {
    styleObj.type = "text/css";
  }

  ctx.state[config.stateNamespace].styles.push(styleObj);
};
