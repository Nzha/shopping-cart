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

function App() {
  const [cart, setCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    return storedCart || [];
  });

  // localStorage.clear();

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
      <div className="min-h-screen bg-gray-100">
        <Nav cart={cart} />
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
    </Router>
  );
}

export default App;
