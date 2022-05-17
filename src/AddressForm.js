import React from "react"

class AddressForm extends React.Component {

    state = {
        address: 'Showing Highest Ranked Parks and Trails'
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
                <h2 className="greenHead">Enter youraddress</h2><h2>to find a close Park or Trail</h2>
            </div>
            <form>
                <input className="AddressInput" type="text" name="text" onChange={this.handleChange} value={this.state.address}></input>
            </form>
        </div>
    )}
}

export default AddressForm