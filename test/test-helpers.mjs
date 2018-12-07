import koaHead from "./../src/index";

export function createCtx() {
  return {
    state: {}
  };
}

export async function createCtxWithKoaHead(koaHeadOptions) {
  const docHead = koaHead(koaHeadOptions);
  const ctx = createCtx();
  const next = createNext();

  await docHead(ctx, next);

  return ctx;
}

export function createNext() {
  return () => {};
}
