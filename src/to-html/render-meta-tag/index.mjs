import { getCleanProp } from "../../prop";

export default tag => {
  const cleanTag = getCleanProp(tag);
  let html = "<meta ";

  Object.keys(cleanTag).forEach(key => {
    html += `${key}="${cleanTag[key]}" `;
  });

  html += "/>";

  return html;
};
