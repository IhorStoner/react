import React from 'react'
import { NavLink, BrowserRouter, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Shop.scss'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Basket from './components/Basket/Basket'
import InfoProduct from './components/InfoProduct/InfoProduct'

export default function Shop() {
  const { basket } = useSelector(state => state.products)

  const basketCounter = () => {
    let counter = 0;
    basket.forEach(product => {
      counter += Number(product.count)
    })
    return counter
  }
  
  return (
    <div>
      <BrowserRouter>
        <header className='header'>
          <div className='container'>
            <div className='header__content'>
              <nav className='nav'>
                <NavLink className='nav__link' to='/'>Главная</NavLink>
                <NavLink className='nav__link' to='/products'>Товары</NavLink>
              </nav>
              <div className="basket">
                <NavLink to='/basket'>
                  <button className="basket__btn basket__btn--margin" id="basketBtn"></button>
                </NavLink>
                <span className="basket__counter" id="basketCounter">{basketCounter()}</span>
              </div>
            </div>
          </div>
        </header>
        <Switch>
          <Route path='/' exact>
            <Home></Home>
          </Route>
          <Route path='/products'>
            <Products></Products>
          </Route>
          <Route path='/basket'>
            <Basket></Basket>
          </Route>
          <Route path='/products/:productId'>
            <InfoProduct>Info</InfoProduct>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
