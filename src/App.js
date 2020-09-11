import React, { Component } from 'react';
import './App.css';
import ProductTable from './dz1/ProductTable/ProductTable';
import AddProductForm from './dz1/ProductForm/AddProductForm';
import { Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import ChangeProduct from './dz1/ProductTable/ChangeProduct'

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
    isChangeProduct: false,
    changeItem: {},
  };

  addProduct = (addNewProduct) => {
    const { products } = this.state;

    const newProduct = {
      id: String(Math.floor(Math.random() * (100 - 4)) + 4),
      name: addNewProduct.name,
      categories: addNewProduct.categories,
      price: addNewProduct.price,
      count: addNewProduct.count,
    }

    this.setState({
      newProduct: {
        id: String(Math.floor(Math.random() * (100 - 4)) + 4),
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

  changeProduct = (e) => {
    const productId = e.target.getAttribute('data-id');
    const selectedProduct = this.state.products.find((product)=> productId === product.id);

    this.setState({
      isChangeProduct: true,
      changeItem: selectedProduct,
    })
  }

  newProductsArr = (name,categories,price,count) => {
    const products = this.state.products;
    const selectedProduct = this.state.changeItem;

    const newProduct = {
      id: selectedProduct.id,
      name: name,
      categories: categories,
      price: price,
      count: count,
    }
    
    const indexProduct = products.indexOf(selectedProduct);

    products.splice(indexProduct,1,newProduct)

    this.setState({
      products: products,
      isChangeProduct: false,
    })
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
              products.map((item) => <ProductTable product={item} key={item.id} changeProduct={this.changeProduct} onRemove={this.deleteProduct}/>)
            }
          </Table.Body>    
        </Table>
        <AddProductForm onAddProduct={this.addProduct} products={products}/>
        {
          this.state.isChangeProduct ? <ChangeProduct product={this.state.changeItem} newProductsArr = {this.newProductsArr}></ChangeProduct> : null
        }
      </div>
    )

  }
}

export default App;
