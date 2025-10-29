import type { RootState } from '@app/store';

export const selectProducts = (state: RootState) => state.products.list;
export const selectSelectedProduct = (state: RootState) =>
  state.products.selected;
export const selectProductsLoading = (state: RootState) =>
  state.products.loading;
export const selectProductsError = (state: RootState) => state.products.error;
