import axios from 'axios';
import { PRODUCT_ENDPOINTS } from './endpoints';
import type { Product } from '../types/product';

export interface ProductRepository {
  getAll(): Promise<Product[]>;
  getById(id: string | number): Promise<Product>;
}

export const productRepository: ProductRepository = {
  async getAll() {
    const { data } = await axios.get<Product[]>(PRODUCT_ENDPOINTS.ALL);
    return data;
  },
  async getById(id) {
    const { data } = await axios.get<Product>(PRODUCT_ENDPOINTS.BY_ID(id));
    return data;
  },
};
