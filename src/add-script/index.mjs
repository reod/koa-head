import { insertProp } from "../prop";

export default (config, state, ctx) => script => {
  const scriptObj =
    typeof script === "string" ? { jsText: script } : { ...script };

  if (!scriptObj.type) {
    scriptObj.type = "text/javascript";
  }

  const fullScriptObj = insertProp(state, scriptObj);

  ctx.state[config.stateNamespace].scripts.push(fullScriptObj);
};
