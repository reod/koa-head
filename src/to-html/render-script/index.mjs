import { getCleanProp } from "../../prop";

export default script => {
  const cleanScript = getCleanProp(script);
  let html = "<script";

  Object.keys(cleanScript)
    .filter(key => key !== "jsText")
    .forEach((key, i, all) => {
      if (i === 0) {
        html += " ";
      }

      html += `${key}="${cleanScript[key]}"`;

      if (i < all.length - 1) {
        html += " ";
      }
    });

  html += ">";
  html += cleanScript.jsText;
  html += "</script>";

  return html;
};
