interface Props {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}

const SearchBar = ({ searchTerm, setSearchTerm }: Props) => {
    return (
        <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3 p-3 rounded-lg border border-gray-300 bg-white"
        />
    );
};

export default SearchBar;