import { useState, useEffect } from 'react';
import React, {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Store from './components/Store';
import ItemDetails from './components/ItemDetails';
import Cart from './components/Cart';
import AddedToCart from './components/AddedToCart';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    return storedCart || [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const newCart = [...cart];
    const product = newCart.find((a) => a.id === item.id);

    if (product) {
      product.quantity += 1;
      setCart(newCart);
    } else {
      setCart([
        ...cart,
        {
          id: item.id,
          quantity: 1,
          title: item.title,
          image: item.image,
          price: item.price,
        },
      ]);
    }
  };

  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-gray-100">
        <Nav cart={cart} />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store addToCart={addToCart} />} />
            <Route
              path="/store/:id"
              element={<ItemDetails addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
            <Route path="/added/:title" element={<AddedToCart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
