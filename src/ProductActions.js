export function getProducts() {
    return (dispatch) => {
        fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => dispatch({type: 'GET_PRODUCTS', payload: data}))
    }
}

// 