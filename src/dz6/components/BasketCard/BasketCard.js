import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { removeInBasket,changeCountMinus,changeCountPlus } from '../../redux/actions/productsActions'
import './BasketCard.scss'

export default function BasketCard(props) {
  const id = props.productId
  const count = props.count
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products)
  const item = products.find(product => product.id === id)

  return (
    <div className='productBasket__item'>
      <div class="productBasket__img-container" data-id={item.id}>
        <img src={item.img} alt="" class="productBasket__img"/>
      </div>
      <div class="productBasket__content" data-id={item.id}>
        <h3 class="productBasket__title">
            {item.name}
        </h3>
        <p class="productBasket__counter-container">
          <span class="productBasket__counter-title">Количество:</span>
          <span class="productBasket__counter-counter" id="counter">{count}</span>
          <button className="productBasket__btnCounter" onClick={() => dispatch(changeCountPlus(item.id,count))}>+</button>
          <button className="productBasket__btnCounter" onClick={() => dispatch(changeCountMinus(item.id,count))}>-</button>
        </p>
        <p class="productBasket__price">
            ${item.price} грн
        </p>
        <div class="productBasket__buttons">
            <button class="productBasket__btnDelete btn btn--black" id="basketDeleteItemBtn" onClick={()=> dispatch(removeInBasket(item.id))} data-id={item.id}>Убрать из корзины</button>
        </div>
      </div>  
    </div>
  )
}
