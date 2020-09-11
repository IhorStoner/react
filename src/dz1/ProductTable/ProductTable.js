import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

class ProductTable extends Component {

  state = {
    name:'',
    categories: '',
    price: '',
    count: '',
  }
  
  render() {
    const { product } = this.props;

    return (
      <Table.Row className="product">
        <Table.Cell>{product.name}</Table.Cell>
        <Table.Cell>{product.categories}</Table.Cell>
        <Table.Cell>{product.price}</Table.Cell>
        <Table.Cell>{product.count}</Table.Cell>
        <Table.Cell>
          <button onClick={() => this.props.onRemove(product)}>
            Удалить
          </button>
          <button onClick={this.props.changeProduct} data-id={product.id}>
            Изменить
          </button>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default ProductTable;