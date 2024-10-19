import { useState } from "react";
import { products } from "../../data/products";
import SearchBar from "../../ui/searchBar/SearchBar";
import Table from "../table/components/Table/Table";

function ProductsPage() {
  const [filteredData, setFilteredData] = useState(products);
  console.log(filteredData);

  const handleSearch = (value: string) => {
    if (value) {
      console.log(value);

      const filtered = products.filter(
        (item) =>
          item.name && item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(products);
    }
  };
  console.log(filteredData);

  return (
    <>
      <h1>Products</h1>
      <SearchBar onSearch={handleSearch} />
      <Table data={filteredData} />
    </>
  );
}
export default ProductsPage;
