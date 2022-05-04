import './App.css';
import Products from './ProductsContainer'
import ProductSelect from './ProductSelect';
import AddressForm from './AddressForm'
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
  return (
    <div>
    <div className="App">
      <NavBar />
      <AddressForm />
      <ProductSelect />
      <Products />
      <Footer />
    </div>
    </div>
  );
}


export default App;
