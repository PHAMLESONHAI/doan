import Api from "./components/Api/Api";
import Cardview from "./components/Cardview/Cardview";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/products";

function App() {
  return (
    <div className="App">
      <Header /> 
      <Products /> 
      <Api />
      <Footer />
      {/* <Cardview /> */}
    </div>
  );
}

export default App;
