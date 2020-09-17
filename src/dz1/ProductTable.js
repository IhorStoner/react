import React, { Component } from 'react';
import ProductRow from './ProductRow/ProductRow';
import { Table, Button } from 'semantic-ui-react';
import ProductForm from './ProductForm/ProductForm';

class ProductTable extends Component {

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
    addProduct: true,
    visibleForm: false,
    visibleChangeForm: false,
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
      addProduct: false,
      isChangeProduct: true,
      changeItem: selectedProduct,
      visibleForm: false,
      visibleChangeForm: true,
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

  addForm = () => {
    this.setState({
      addProduct: true,
      visibleForm: true,
      visibleChangeForm: false,
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
              products.map((item) => <ProductRow product={item} key={item.id} changeProduct={this.changeProduct} onRemove={this.deleteProduct}/>)
            }
          </Table.Body>    
        </Table>
        <Button onClick={this.addForm}>Добавить товар</Button>
        {this.state.visibleForm ? 
        <ProductForm product={this.state.changeItem} onAddProduct={this.addProduct} addProduct={this.state.addProduct} newProductsArr={this.newProductsArr}></ProductForm>
        : null
        }
        {this.state.visibleChangeForm ? 
        <ProductForm product={this.state.changeItem} onAddProduct={this.addProduct} addProduct={this.state.addProduct} newProductsArr={this.newProductsArr}></ProductForm>
        : null
        }
      </div>
    )

  }
}

export default ProductTable;