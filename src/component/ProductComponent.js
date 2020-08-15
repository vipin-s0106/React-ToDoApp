import React, { Component } from 'react'
import axios from 'axios';
import './Product.css';


export class ProductComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             products:[],
             error:null
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3200/products')
            .then(response =>{
                this.setState({
                    products: response.data.products
                })
                console.log(response.data.products)
            })
            .catch(error =>{
                this.setState({
                    error: "Error retriving data"
                })
            })
    }
    


    render() {
        return (
            <div>
                List of Products : 
                <br />
                <br />
                {
                    this.state.products.length > 0 ?
                        this.state.products.map(product =>{
                            return (<div className="product__card">
                                <h3>Product Name : {product.name}</h3>
                                <h6>Price : {product.price}</h6>
                            </div>)
                        })
                    :
                    <h4>Error : {this.state.error}</h4>
                }
                
            </div>
        )
    }
}

export default ProductComponent
