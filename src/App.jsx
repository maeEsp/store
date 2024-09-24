import './App.css'
import FilterProductTable from './components/FilterProductTable'
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

const products = [
  {id:1 ,name: "Tennis", price: 99.9, type: 1},
  {id:2 ,name: "Football", price: 34.99, type: 1},
  {id:3 ,name: "Badminton", price: -100, type: 1},
  {id:4 ,name: "Basketball", price: 123.99, type: 1},
  {id:5 ,name: "Ipad", price: 99.9, type: 2},
  {id:6 ,name: "MacBook", price: 34.99, type: 2},
  {id:7 ,name: "Iphone", price: -100, type: 2},
  {id:8 ,name: "Apple Watch", price: 123.99, type: 2},
];

const headers = ["Sporting Goods", "Electronics"]

function App() {

  return <FilterProductTable>
    <SearchBar/>
    <ProductTable headers={headers} products={products}/>
  </FilterProductTable>;
  
}

export default App
