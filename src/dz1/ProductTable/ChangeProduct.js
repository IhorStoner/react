import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react';

export default class ChangeProduct extends Component {
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
  }

  onChangeName = (e) => {
    const regExpName = /[A-я]{1,}/;

    if(e.target.value === '' || e.target.value.match(regExpName) === null) {
      e.target.style.borderColor = 'red';

      this.setState({
        nameValid: false,
        name: e.target.value,
      })
    } else {

      e.target.style.borderColor = 'green';

      this.setState({
        nameValid: true,
        name: e.target.value,
      })
    }
  }

  onChangeCategories = (e) => {
    const regExpCategories = /[A-я]{1,}/;

    if(e.target.value === '' || e.target.value.match(regExpCategories)  === null) {
      e.target.style.borderColor = 'red';

      this.setState({
        categoriesValid: false,
        categories: e.target.value,
      })
    } else {

      e.target.style.borderColor = 'green';

      this.setState({
        categoriesValid: true,
        categories: e.target.value,
      })
    }
  }

  onChangePrice = (e) => {
    const regExpPrice = /^\d{1,}$/;

    if(e.target.value === '' || e.target.value.match(regExpPrice) === null) {
      e.target.style.borderColor = 'red';

      this.setState({
        priceValid: false,
        price: e.target.value,
      })
    } else {

      e.target.style.borderColor = 'green';

      this.setState({
        priceValid: true,
        price: e.target.value,
      })
    }
  }

  onChangeCount = (e) => {
    const regExpCount = /^\d{1,}$/;

    if(e.target.value === '' || e.target.value.match(regExpCount) === null) {
      e.target.style.borderColor = 'red';

      this.setState({
        countValid: false,
        count: e.target.value,
      })
    } else {

      e.target.style.borderColor = 'green';

      this.setState({
        countValid: true,
        count: e.target.value,
      })
    }
  }

  checkValid = () => {
    const { nameValid,categoriesValid,priceValid,countValid } = this.state;
    const errorText = document.getElementById('errorText2');
    const {name,categories,price,count} = this.state;

    if(nameValid && categoriesValid && priceValid && countValid) {
      this.props.newProductsArr(name,categories,price,count);
      errorText.style.display = 'none';

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
    const product = this.props.product;
    
    return (
      <div>
        <form>
        <h2>Изменить товар {product.name}</h2>
          <Input className="inputAddProduct" id="name" value={name} onChange={this.onChangeName} placeholder='Название' />
          <Input className="inputAddProduct" id="categories" value={categories} onChange={this.onChangeCategories} placeholder='Категория' />
          <Input className="inputAddProduct" id="price" value={price} onChange={this.onChangePrice} placeholder='Цена' />
          <Input className="inputAddProduct" id="count" value={count} onChange={this.onChangeCount} placeholder='Количество' />
          <Button type="button" onClick={this.checkValid}>Изменить товар</Button>
          <div id="errorText2" Style='display:none'>Форма заполнена не правильно</div>
        </form>
      </div>
    )
  }
}
