export const ROUTES = {
  HOME: '/',
  OFFERS: '/offers',
  PRODUCT_DETAIL: (id: string | number = ':id') => `/products/${id}`,
} as const;
