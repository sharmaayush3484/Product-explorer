
import { useEffect, useMemo, useState } from "react";
import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import Loader from "./components/Loader";
import EmptyState from "./components/EmptyState";
import { fetchProducts } from "./services/productService";
import type { Product } from "./types/Product";

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);

        const data = await fetchProducts();

        setProducts(data);
      } catch (error) {
        setError("Unable to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const categories = useMemo(() => {
    return [...new Set(products.map((product) => product.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let updatedProducts = [...products];

    updatedProducts = updatedProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedCategory !== "all") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (sortOption === "lowToHigh") {
      updatedProducts.sort((a, b) => a.price - b.price);
    }

    if (sortOption === "highToLow") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    return updatedProducts;
  }, [products, searchTerm, selectedCategory, sortOption]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
          Product Explorer
        </h1>

        <div className="flex flex-col lg:flex-row gap-4 justify-between mb-8">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <FilterBar
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
        </div>

        {loading && <Loader />}

        {error && (
          <div className="text-center text-red-600 text-xl py-20">
            {error}
          </div>
        )}

        {!loading && !error && filteredProducts.length === 0 && (
          <EmptyState />
        )}

        {!loading && !error && filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={setSelectedProduct}
              />
            ))}
          </div>
        )}
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default App;
