import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './InfoProduct.scss'
import { addInBasket } from '../../redux/actions/productsActions';
import { useDispatch  } from 'react-redux'

export default function InfoProduct() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { products } = useSelector(state => state.products)
  const item = products.find(product => {
      return product.id === Number(productId)
    }
  );
  
  return (
    <div className='productContainer'>
      <div className='product-info'>
        <div class="product-info__img">
          <img src={item.img} alt="product img"/>
        </div>
        <div class="product-info__info">
          <div class="product-info__link-container">
            <a class="product-info__link product-info__link--active" id="descriptions">Описание</a>
            {/* <a class="product-info__link" id="reviews">Отзывы</a> */}
          </div>
          <div class="product-info__price-container">
            <button title='добавить в корзину' class="btn btn--plus" data-id={item.id} id='addInBasket' onClick={() => dispatch(addInBasket(item.id))}></button>
            <p class="product-info__price">{item.price} грн</p>
          </div>
          <div class="product-info__title-container">
            <h2 class="product-info__title">{item.name}</h2>
            <p class="product-info__description">{item.descriptions}</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}
