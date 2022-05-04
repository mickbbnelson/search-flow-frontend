import './App.css';
import Products from './ProductsContainer'
import ProductSelect from './ProductSelect';
import AddressForm from './AddressForm'
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AddressForm />
      <ProductSelect />
      <Products />
    </div>
  );
}


export default App;
