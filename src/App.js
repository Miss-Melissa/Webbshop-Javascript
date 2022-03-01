import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './pages/Products';
import Product from './pages/Product';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      {/* BrowerRouter enables components to use routing capabilties */}
      <BrowserRouter>
      <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
