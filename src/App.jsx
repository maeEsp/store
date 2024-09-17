import './App.css'
import FilterProductTable from './components/FilterProductTable'
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

function App() {

  return <FilterProductTable>
    <SearchBar/>
    <ProductTable/>
  </FilterProductTable>;
  
}

export default App
