import type { Product } from "../types";

interface ProductDetailProps {
    product: Product;
    onBack?: () => void;
}

export function ProductDetail({ product, onBack }: ProductDetailProps) {
    return (
        <div>
            {onBack && (
                <button onClick={onBack} style={{ marginBottom: "1rem" }}>
                    ← Back to Products
                </button>
            )}
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} width={200} />
            <p>{product.description}</p>
            <p>
                <strong>Price:</strong> ${product.price}
            </p>
            <p>
                <strong>Category:</strong> {product.category}
            </p>
        </div>
    );
}
