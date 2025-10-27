import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/app/store";
import { fetchProductById } from "@/modules/Products";
import { ROUTES } from "@/app/routes";
import { ProductDetail } from "@modules/Products/components/ProductDetail";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { productList, selectedProduct, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  const product =
    productList.find((product) => product?.id?.toString() === id) || selectedProduct || null;

  useEffect(() => {
    if (!product && id) {
      dispatch(fetchProductById(id));
    }
  }, [id, product, dispatch]);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found.</p>;

  return <ProductDetail product={product} onBack={() => navigate(ROUTES.OFFERS)} />;
}
