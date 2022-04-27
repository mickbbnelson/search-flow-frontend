import React from 'react'

class Products extends React.Component {

    componentDidMount(){
        fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {console.log(data)})
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}

export default Products