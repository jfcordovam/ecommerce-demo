export const PRODUCT_ENDPOINTS = {
  ALL: 'https://fakestoreapi.com/products',
  BY_ID: (id: string | number) => `https://fakestoreapi.com/products/${id}`,
} as const;
