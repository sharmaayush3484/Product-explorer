interface Props {
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: (value: string) => void;
    sortOption: string;
    setSortOption: (value: string) => void;
}

const FilterBar = ({
    categories,
    selectedCategory,
    setSelectedCategory,
    sortOption,
    setSortOption,
}: Props) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="p-3 rounded-lg border border-gray-300 bg-white"
            >
                <option value="all">All Categories</option>

                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>

            <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="p-3 rounded-lg border border-gray-300 bg-white"
            >
                <option value="default">Default</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
            </select>
        </div>
    );
};

export default FilterBar;