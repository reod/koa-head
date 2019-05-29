export const insertProp = (state, prop) => {
  state.count = state.count + 1;
  const _meta = { insertIndex: state.count };

  return { ...prop, _meta };
};

export const getCleanProp = prop => {
  const fullProp = { ...prop };
  delete fullProp._meta;

  return fullProp;
};
