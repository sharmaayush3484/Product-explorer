import type { Product } from "../types/Product";

interface Props {
    product: Product;
    onViewDetails: (product: Product) => void;
}

const ProductCard = ({ product, onViewDetails }: Props) => {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
            <img
                src={product.image}
                alt={product.title}
                className="h-52 object-contain mb-4"
            />

            <h2 className="font-semibold text-lg line-clamp-2 min-h-[60px]">
                {product.title}
            </h2>

            <p className="text-sm text-gray-500 capitalize mt-2">
                {product.category}
            </p>

            <div className="flex justify-between items-center mt-4">
                <span className="text-2xl font-bold text-blue-600">
                    ${product.price}
                </span>

                {product.rating && (
                    <span className="text-yellow-500 font-semibold">
                        ⭐ {product.rating.rate}
                    </span>
                )}
            </div>

            <button
                onClick={() => onViewDetails(product)}
                className="mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
            >
                View Details
            </button>
        </div>
    );
};

export default ProductCard;

