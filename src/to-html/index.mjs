import renderTitle from "./render-title";
import renderMetaTag from "./render-meta-tag";
import renderLink from "./render-link";
import renderStyle from "./render-style";
import renderScript from "./render-script";

export default (config, ctx) => () => {
  const renderFunctions = new Map([
    ["title", renderTitle(config, ctx)],
    ["metaTags", renderGroup(renderMetaTag, config)],
    ["links", renderGroup(renderLink, config)],
    ["styles", renderGroup(renderStyle, config)],
    ["scripts", renderGroup(renderScript, config)]
  ]);

  let headHtml = "";
  const documentHead = ctx.state[config.stateNamespace];

  Object.keys(documentHead).forEach(headPart => {
    if (!renderFunctions.has(headPart)) {
      return;
    }

    const renderFunction = renderFunctions.get(headPart);

    headHtml += renderFunction(documentHead[headPart]);
    headHtml += config.toHtml.groupSeparator;
  });

  return headHtml;
};

function renderGroup(renderItem, config) {
  return items =>
    items.reduce((html, item) => {
      html += renderItem(item);
      html += config.toHtml.tagSeparator;

      return html;
    }, "");
}
