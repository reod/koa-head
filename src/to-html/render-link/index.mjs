import { getCleanProp } from "../../prop";

export default link => {
  const cleanLink = getCleanProp(link);
  let html = "<link ";

  Object.keys(cleanLink).forEach(key => {
    html += `${key}="${cleanLink[key]}" `;
  });

  html += "/>";

  return html;
};
