export default tag => {
  let html = "<meta ";

  Object.keys(tag).forEach(key => {
    html += `${key}="${tag[key]}" `;
  });

  html += "/>";

  return html;
};
