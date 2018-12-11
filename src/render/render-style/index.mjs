export default style => {
  let html = "<style";

  Object.keys(style)
    .filter(key => key !== "cssText")
    .forEach((key, i, all) => {
      if (i === 0) {
        html += " ";
      }

      html += `${key}="${style[key]}"`;

      if (i < all.length - 1) {
        html += " ";
      }
    });

  html += ">";
  html += style.cssText;
  html += "</style>";

  return html;
};
