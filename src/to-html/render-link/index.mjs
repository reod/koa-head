export default tag => {
  let html = "<link ";

  Object.keys(tag).forEach(key => {
    html += `${key}="${tag[key]}" `;
  });

  html += "/>";

  return html;
};
