import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/modules/products";
import {
  selectProducts,
  selectProductsLoading,
  selectProductsError,
} from "@/modules/products/state/selectors";
import { ProductList } from "@/modules/products";
import type { AppDispatch } from "@app/store";

function OffersPage() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Offers</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <ProductList products={products} />}
    </>
  );
}

export default OffersPage;
