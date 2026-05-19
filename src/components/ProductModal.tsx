import type { Product } from "../types/Product";

interface Props {
    product: Product | null;
    onClose: () => void;
}

const ProductModal = ({ product, onClose }: Props) => {
    if (!product) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-2xl"
                >
                    ×
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-80 object-contain w-full"
                    />

                    <div>
                        <h2 className="text-2xl font-bold mb-4">
                            {product.title}
                        </h2>

                        <p className="text-gray-600 mb-4 capitalize">
                            Category: {product.category}
                        </p>

                        <p className="text-gray-700 mb-6">
                            {product.description}
                        </p>

                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-blue-600">
                                ${product.price}
                            </span>

                            {product.rating && (
                                <span className="text-yellow-500 font-semibold text-lg">
                                    ⭐ {product.rating.rate}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;