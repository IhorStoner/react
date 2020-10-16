import React,{ useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Card from '../Card/Card'
import './Products.scss'

const Products = ({products}) => {
  // const [ products, setProducts ] = useState([])

  return (
    <div className="container">
      <div className='products'>
        {
          products.map(item =>(
            <Card key={item.id} product={item}></Card>
          ))
        }
      </div>
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
  }
}

export default connect(mapStateToProps,null)(Products)
