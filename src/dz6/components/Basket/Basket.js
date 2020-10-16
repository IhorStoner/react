import React from 'react'
import BasketCard from '../BasketCard/BasketCard'
import { connect } from 'react-redux'
import './Basket.scss'

const Basket = ({ products, basket }) => {

  return (
    <div>
      <div className='basket__container'>
        {
          basket.map(item => (
            <BasketCard productId={item.id} count={item.count}></BasketCard>
          ))
        }
      </div>
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
    basket: state.products.basket,
  }
}

export default connect(mapStateToProps,null)(Basket)
