export default function ProductCard(props){
    return(
        <div className="card">
            <img src={props.product.image} width="200" height="200" className="cardImage"/>
            {/* <span>{props.product.name}</span> */}
            <div className="cardContainer">
                <h4>{props.product.name} - ${props.product.price}</h4>
            </div>
        </div>
    )
}