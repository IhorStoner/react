function onChangeName(e) {
    const regExpName = /[A-я]{1,}/;

    this.setState({
      changeOrAdd: 'changeProduct',
    })
  
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

function onChangeCategories(e) {
    const regExpCategories = /[A-я]{1,}/;
    this.setState({
      changeOrAdd: 'changeProduct',
    })

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

  function  onChangePrice(e) {
    const regExpPrice = /^\d{1,}$/;
    this.setState({
      changeOrAdd: 'changeProduct',
    })

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

function  onChangeCount(e) {
    const regExpCount = /^\d{1,}$/;
    this.setState({
      changeOrAdd: 'changeProduct',
    })

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
 
export { onChangeName, onChangeCategories, onChangePrice, onChangeCount }  