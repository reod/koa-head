import { getCleanProp } from "../../prop";

export default style => {
  const cleanStyle = getCleanProp(style);
  let html = "<style";

  Object.keys(cleanStyle)
    .filter(key => key !== "cssText")
    .forEach((key, i, all) => {
      if (i === 0) {
        html += " ";
      }

      html += `${key}="${cleanStyle[key]}"`;

      if (i < all.length - 1) {
        html += " ";
      }
    });

  html += ">";
  html += cleanStyle.cssText;
  html += "</style>";

  return html;
};
