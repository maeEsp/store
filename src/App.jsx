import './App.css'
import FilterProductTable from './components/FilterProductTable';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import { useState } from 'react';

const products = [
  //Sporting Goods
  { id: 1, name: "Tennis", price: 99.9, type: 1, stock:100 },
  { id: 2, name: "Badminton", price: 59.9, type: 1, stock:12 },
  { id: 3, name: "Basketball", price: -100, type: 1, stock:0 },

  //Electronics
  { id: 4, name: "IPod Touch", price: 99.9, type: 2, stock:100 },
  { id: 5, name: "IPhone 5", price: 399.9, type: 2, stock:0 },
  { id: 6, name: "Nexus 7", price: 199.9, type: 2, stock:100 },
];

const headers = ["Sporting Goods","Electronics"]

function App() {
  const [query, setQuery] = useState("");
  const [stockChecked, setStockChecked] = useState(false);

  const filteredProducts = products.filter((product) => 
    product.name.toLowerCase().includes(query.toLowerCase()) &&
    (!stockChecked || product.stock > 0)
  );

  return (
  <FilterProductTable>
    <SearchBar query={query} setQuery={setQuery} stockChecked={stockChecked} setStockChecked={setStockChecked} />
    <ProductTable headers={headers} products={filteredProducts} />
  </FilterProductTable>);
  
}

export default App