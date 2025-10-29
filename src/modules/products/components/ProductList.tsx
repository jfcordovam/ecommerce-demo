import { Link } from "react-router-dom";
import { ROUTES } from "@/app/routes";
import type { Product } from "../types/product";

interface ProductListProps {
    products: Product[];
}

export function ProductList({ products }: ProductListProps) {
    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {products.map((product) => (
                <li key={product.id} style={{ marginBottom: "1rem" }}>
                    <img
                        src={product.image}
                        alt={product.title}
                        width={40}
                        style={{ marginRight: "0.5rem" }}
                    />
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
