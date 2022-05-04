function NavBar() {
    return(
        <nav className="NavBar">
            <div className="NavLinks">
                <ul>
                    <li><a href="">Shop All</a></li>
                    <li><a href="">Deals</a></li>
                    <li><a href="">Brands</a></li>
                    <li><a href="">Refer Friends</a></li>
                </ul>
            </div>
            <div className="NavGen">
                <button>Login</button>
                <a href=""></a>
                <i class='fa fa-shopping-cart'></i>
            </div>
        </nav>
    )
}

export default NavBar