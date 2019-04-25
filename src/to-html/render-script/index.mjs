export default script => {
  let html = "<script";

  Object.keys(script)
    .filter(key => key !== "jsText")
    .forEach((key, i, all) => {
      if (i === 0) {
        html += " ";
      }

      html += `${key}="${script[key]}"`;

      if (i < all.length - 1) {
        html += " ";
      }
    });

  html += ">";
  html += script.jsText;
  html += "</script>";

  return html;
};
