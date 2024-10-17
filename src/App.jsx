import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FilterProductTable from './components/FilterProductTable';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import ProductCard from './components/products/ProductCard';


function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [stockChecked, setStockChecked] = useState(false);

  // const filteredProducts = products.filter(
  //   (product) =>
  //     //Case 1:If query is in name
  //     product.name.toLowerCase().includes(query.toLowerCase()) &&
  //     //Case 2: If it has stocks
  //     (!stockChecked || product.stock > 0)
  //   );

useEffect(() => {
  // call the api
  const getProducts = async () => {
    try{
      setLoading(true);

      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json();
    
      setProducts(data);

      setLoading(false);
    } catch(error){
      console.log(error)
    }
  };

  getProducts();
  
  //run when this component is destroyed or unmount
  return () => {};
}, [])

  return (
  <FilterProductTable>
    <SearchBar query={query} setQuery={setQuery} stockChecked={stockChecked} setStockChecked={setStockChecked}/>
    
    {!loading ? (
      <div className='flex flex-wrap gap-3'>
      {products.map((product) => (
        <ProductCard 
        key={`product-${product.id}`}
        imageSrc={product.image} 
        name={product.title}>
        </ProductCard>
      ))}
    </div>
    ) : (
      <span>Loading...</span>
    )}
    </FilterProductTable>
    );
}

export default App