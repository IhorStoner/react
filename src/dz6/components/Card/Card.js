import React,{ useState } from 'react'
import { addInBasket } from '../../redux/actions/productsActions';
import './Card.scss'
import { useDispatch  } from 'react-redux'
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom'

export default function Card(props) {
  const product = props.product;
  const dispatch = useDispatch();

  return (
    <div className='product shop__product'>
      <div className="product__img-container" data-id={product.id}>
        <img src={product.img} alt="" className="product__img"/>
      </div>
      <div className="product__content" data-id={product.id}>
        <h3 className="product__title">
            {product.name}
        </h3>
        <p className="product__price">
            {product.price} грн
        </p>
        <div className="product__buttons">
            <NavLink to={`/products/${product.id}`} className="btn btn--black" data-id={product.id} >Посмотреть</NavLink>
            <a title='добавить в корзину' className="btn btn--plus" id="addInBasket" onClick={() => dispatch(addInBasket(product.id))} data-id={product.id}></a>
        </div>
      </div>
    </div>
  )
}
