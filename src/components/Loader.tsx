const Loader = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
                <div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-md animate-pulse"
                >
                    <div className="h-48 bg-gray-300 rounded-md mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>
            ))}
        </div>
    );
};

export default Loader;