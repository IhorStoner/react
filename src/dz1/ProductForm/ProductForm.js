import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react';
import { onChangeName, onChangeCategories, onChangePrice, onChangeCount } from '../validation/Validation'

export default class ProductForm extends Component {
  state = {
    id: '',
    name: '',
    categories: '',
    price: '',
    count: '',
    nameValid: false,
    categoriesValid: false,
    priceValid: false,
    countValid: false,
    formValid: false,
    addProduct: this.props.addProduct,
    title: 'Добавить товар',
    btnText: 'Добавить',
  }

  
  componentDidMount = () => {
    this.changeText()
  }
  
  changeText = () => {

    if(this.state.addProduct) {
      this.setState({
        title: 'Добавить товар',
        btnText: 'Добавить',
      })
    } else {
      this.setState({
        title: `Изменить товар ${this.props.product.name}`,
        btnText: 'Изменить',
      })
    }
  }

  changeOrAdd = () => {
    const errorText = document.getElementById('errorText2');
    const {name,categories,price,count} = this.state;

    if(this.state.addProduct) {
      this.props.onAddProduct(this.state);
      errorText.style.display = 'none';
    } else {
      this.props.newProductsArr(name,categories,price,count);
      errorText.style.display = 'none';
    }
  }

  checkValid = () => {
    const { nameValid,categoriesValid,priceValid,countValid } = this.state;
    const errorText = document.getElementById('errorText2');

    if(nameValid && categoriesValid && priceValid && countValid) {
      this.changeOrAdd()

      this.setState({
      formValid: true,
      })
    } else {
      errorText.style.display = 'block';

      this.setState({
        formValid: false,
      })
    }
  }

  render() {
    const {name,categories,price,count} = this.state;
    
    return (
      <div>
        <form>
          <h2>
            {this.state.title}
          </h2>
          <Input className="inputAddProduct" id="name" value={name} onChange={onChangeName.bind(this)} placeholder='Название' />
          <Input className="inputAddProduct" id="categories" value={categories} onChange={onChangeCategories.bind(this)} placeholder='Категория' />
          <Input className="inputAddProduct" id="price" value={price} onChange={onChangePrice.bind(this)} placeholder='Цена' />
          <Input className="inputAddProduct" id="count" value={count} onChange={onChangeCount.bind(this)} placeholder='Количество' />
          <Button type="button" onClick={this.checkValid}>
            {this.state.btnText}
          </Button>
          <div id="errorText2" Style='display:none'>Форма заполнена не правильно</div>
        </form>
      </div>
    )
  }
}
