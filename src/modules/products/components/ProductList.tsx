import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../index";
import type { RootState, AppDispatch } from "@app/store";
import { ROUTES } from "@/app/routes";

export function ProductList() {
    const dispatch = useDispatch<AppDispatch>();
    const { productList, loading, error } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {productList.map((product, index) => (
                <li key={product.id ?? `product-${index}`} style={{ marginBottom: "1rem" }}>
                    <img src={product.image} alt={product.title} width={40} style={{ marginRight: "0.5rem" }} />
                    <Link
                        to={ROUTES.PRODUCT_DETAIL(product.id)}
                        style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}
                    >
                        {product.title}
                    </Link>{" "}
                    (${product.price})
                </li>
            ))}
        </ul>
    );
}
