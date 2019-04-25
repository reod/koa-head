export default (config, ctx) => script => {
    const scriptObj =
        typeof script === "string" ? { jsText: script } : { ...script };

    if (!scriptObj.type) {
        scriptObj.type = "text/javascript";
    }

    ctx.state[config.stateNamespace].scripts.push(scriptObj);
};
