export default {
  ctxNamespace: "documentHead",
  stateNamespace: "documentHead",
  documentTitleFormatter: title => title,
  toHtml: {
    tagSeparator: "\n",
    groupSeparator: "\n\n"
  }
};
