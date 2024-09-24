import React from 'react'
import Table from './Table'
import ProductItem from './products/ProductItem';
import ProductCategoryHeader from './products/ProductCategoryHeader';



const ProductTable = ( {headers, products} ) => {

    const sportingGoods = products.filter((product) => product.type === 1)
    const electronics = products.filter((product) => product.type === 2)


    return (
        <div>
        <Table.TableContainer>
          <Table.THead>
            <Table.Row>
                <Table.ColumnHeader>Name</Table.ColumnHeader>
                <Table.ColumnHeader>Price</Table.ColumnHeader>
            </Table.Row>
          </Table.THead>
    
          <Table.TBody>
            <ProductCategoryHeader text={headers[0]}/>
                {sportingGoods.map((id, name, price, type) => (
                    <ProductItem 
                    key={`${type}-${id}`}
                    name={name} 
                    price={price}/>
                ))}

            <ProductCategoryHeader text={headers[1]}/>
                {electronics.map((electronics) => (
                    <ProductItem name={electronics.name} price={electronics.price}/>
                ))}
                
                
          </Table.TBody>
        </Table.TableContainer>
        </div>
    )
}
    

export default ProductTable;
