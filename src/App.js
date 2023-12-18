import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import Error from "./components/404/Error";
import Api from "./components/Api/Api";
import Blog from "./components/Blog/Blog";
import Blogs from "./components/Blogs/Blogs";
import Cardview from "./components/Cardview/Cardview";
import Contact from "./components/Contact/Contact";
import Detail from "./components/Detail/Detail";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/products";
import Products1 from "./components/Products1/Products1";

function App() {
  return (
    <div className="App">
      {/* <Header />  */}
      {/* <Products />  */}
      {/* <Api /> */}
      {/* <Blog /> */}
      {/* <Blogs /> */}
      {/* <Contact /> */}
      {/* <Error /> */}
      {/* <Footer /> */}
      {/* <Cardview /> */}
      {/* <Detail /> */}
      {/* <Products1 /> */}
    <BrowserRouter>
    <Routes>
      <Route path ='/' element ={<Products />}></Route>
      <Route path ='/Product' element ={<Products1 />}></Route>
      <Route path ='/Detail' element ={<Detail />}></Route>
      <Route path ='/Blog' element ={<Blog />}></Route>
      <Route path ='/Blogs' element ={<Blogs />}></Route>
      <Route path ='/404' element ={<Error />}></Route>
      <Route path ='/Contact' element ={<Contact />}></Route>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
