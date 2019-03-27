import React, {Component} from 'react';
import axios from 'axios';
import { ACCESS_TOKEN } from '../constants';
import { access } from 'fs';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      products: [

      ],
      error: []
      
     }
  }


  // componentDidMount() {
  //   axios.get("http://localhost:8080/products")
  //   .then(res => 
  //     this.setState({ products: res.data })
  //   .catch(err =>
  //     this.setState({error: err})  
  //      )  
  // }
  componentDidMount(){
   console.log(localStorage)
 

    axios.get('http://localhost:8080/products', {headers: {"Authentication" : `Bearer ${sessionStorage.accessToken}`}})
    .then(response => {
      this.setState({ products: response.data });
    })
    .catch(error => {
      console.log(error);
    })
  }
      

  render() { 
 
    return ( 
    <div>
      {this.state.products[0]}
    </div>
      ); 
  }
}
 
export default Product;