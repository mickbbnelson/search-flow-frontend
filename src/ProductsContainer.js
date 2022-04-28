import React from 'react'
import { getProducts } from './ProductActions'
import {connect} from 'react-redux'

class Products extends React.Component {

    componentDidMount(){
        this.props.dispatchProducts()
    }

    render() {
        return(
            <div>
                {this.props.products.map((product) => <li>{product.name}</li>)}
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