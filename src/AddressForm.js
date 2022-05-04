import React from "react"

class AddressForm extends React.Component {

    state = {
        address: 'Shopping in Orange County'
    }

    handleChange = (e) => {
        this.setState({
            address: e.target.value
        })
    }
    
    render(){
    return (
        <div className="AddressForm">
            <div className="AddressFormText">
                <h1 className="pinkHead">Enter your delivery address</h1><h1>to check availability</h1>
            </div>
            <form>
                <input className="AddressInput" type="text" name="text" onChange={this.handleChange} value={this.state.address}></input>
            </form>
        </div>
    )}
}

export default AddressForm