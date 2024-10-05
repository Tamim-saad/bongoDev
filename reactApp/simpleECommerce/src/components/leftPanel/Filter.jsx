export function Filter() {
  const categories = [
    "Laptops",
    "Gaming",
    "Accessories",
    "Peripherals",
    "Storage",
    "Components",
    "Monitors",
    "Printers",
  ];
  return (
    <div>
      <div>
        {categories.map((category) => (
          <button
            key={category}
            className="bg-gray-200 hover-bg-gray-300 test gray-800 font-semibold py-2 px-4 rounded mr-2"
          >
            {category}
          </button>
        ))}
      </div>
      <div>Clear Filters</div>
    </div>
  );
}
