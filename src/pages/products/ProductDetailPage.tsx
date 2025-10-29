import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "@/app/store";
import { fetchProductById } from "@/modules/products";
import { ROUTES } from "@/app/routes";
import { ProductDetail } from "@/modules/products/components/ProductDetail";
import {
  selectSelectedProduct,
  selectProductsLoading,
  selectProductsError,
  selectProducts
} from "@modules/products";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const productFromState = useSelector(selectSelectedProduct);
  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);

  const product =
    products.find((product) => product?.id?.toString() === id) || productFromState || null;

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
