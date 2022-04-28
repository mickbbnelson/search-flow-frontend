import React from 'react'
import { getProducts } from './ProductActions'
import {connect} from 'react-redux'
import ProductCard from './ProductCard'

class Products extends React.Component {

    componentDidMount(){
        this.props.dispatchProducts()
    }

    render() {
        return(
            <div>
                {this.props.products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        products: state
    }
}

function mapDispatchToProps(dispatch){
    return {
      dispatchProducts: () => dispatch(getProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);