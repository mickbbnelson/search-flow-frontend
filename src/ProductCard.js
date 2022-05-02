export default function ProductCard(props){
    return(
        <div className="card">
            <div className="imageContainer">
                <img src={props.product.image} alt="GrassImage" width="200" height="200" className="cardImage"/>
                <button className="productBtn">+</button>
            </div>
            {/* <span>{props.product.name}</span> */}
            <div className="cardContainer">
                <h5 className="strainTitle">{props.product.name}</h5>
                <h5 className="strainInfo">${props.product.price} / {props.product.weight} grams</h5>
                <h5 className="strainInfo">{props.product.straintype}: {props.product.thc}% THC</h5>
            </div>
        </div>
    )
}