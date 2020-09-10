import React, { Component } from 'react';
import './App.css';
import ProductTable from './dz1/ProductTable/ProductTable';
import AddProductForm from './dz1/ProductForm/AddProductForm';
import { Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  state = {
    products:[
      {
        id:'0',
        name: 'Рис',
        categories: 'Еда',
        price:'10$',
        count: '1',
      },
      {
        id:'1',
        name: 'Йогурт',
        categories: 'Десерт',
        price:'11$',
        count: '2',
      },
      {
        id:'2',
        name: 'Персик',
        categories: 'Фрукт',
        price:'12$',
        count: '3',
      },
    ],
    newProduct: {},
  };

  addProduct = (addNewProduct) => {
    const { products } = this.state;

    const newProduct = {
      id: Math.floor(Math.random() * (100 - 4)) + 4,
      name: addNewProduct.name,
      categories: addNewProduct.categories,
      price: addNewProduct.price,
      count: addNewProduct.count,
    }

    this.setState({
      newProduct: {
        id: Math.floor(Math.random() * (100 - 4)) + 4,
        name: addNewProduct.name,
        categories: addNewProduct.categories,
        price: addNewProduct.price,
        count: addNewProduct.count,
      },
      products: [...products, newProduct],
    })
  }

  deleteProduct = (removedProduct) => {
    const { products } = this.state;

    if(Number(removedProduct.count) > 1){
      removedProduct.count -= 1;
      this.setState({
        products:products
      })
    } else {
      this.setState({
      products: products.filter((item) => item.id !== removedProduct.id)
    })
    }
  }

  render() {

    const products = this.state.products;

    return (
      <div>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Название</Table.HeaderCell>
              <Table.HeaderCell>категория</Table.HeaderCell>
              <Table.HeaderCell>цена</Table.HeaderCell>
              <Table.HeaderCell>остаток</Table.HeaderCell>
              <Table.HeaderCell>действие</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              products.map((item) => <ProductTable product={item} key={item.id} onRemove={this.deleteProduct}/>)
            }
          </Table.Body>    
        </Table>
        <AddProductForm onAddProduct={this.addProduct} products={products}/>
      </div>
    )

  }
}

export default App;
