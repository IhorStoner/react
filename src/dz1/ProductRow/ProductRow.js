import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';

class ProductRow extends Component {

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
          <Button onClick={() => this.props.onRemove(product)}>
            Удалить
          </Button>
          <Button onClick={this.props.changeProduct} data-id={product.id}>
            Изменить
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default ProductRow;