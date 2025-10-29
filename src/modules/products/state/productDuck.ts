import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from '@reduxjs/toolkit';
import type { Product } from '../types/product';
import { productRepository } from '../api/repository';

export interface ProductsState {
  list: Product[];
  selected?: Product;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  list: [],
  selected: undefined,
  loading: false,
  error: null,
};

// Thunk: fetch all products
export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchAll',
  async () => {
    return await productRepository.getAll();
  }
); 

// Thunk: fetch single product by ID
export const fetchProductById = createAsyncThunk(
  'products/fetchById',
  async (id: string | number) => {
    return await productRepository.getById(id);
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearProducts(state) {
      state.list = [];
      state.selected = undefined;
      state.error = null;
    },
    clearSelectedProduct(state) {
      state.selected = undefined;
    },
  },
  extraReducers: (builder) => {
    // Fetch all products
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.list = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error loading products';
      });

    // Fetch single product
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.selected = undefined;
      })
      .addCase(
        fetchProductById.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.loading = false;
          state.selected = action.payload;

          // if not in list, add it
          const exists = state.list.some(
            (p) => p.id === action.payload.id
          );
          if (!exists) {
            state.list.push(action.payload);
          }
        }
      )
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error loading product';
      });
  },
});

export const { clearProducts, clearSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;
