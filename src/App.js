import { useState } from 'react';
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

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const newCart = [...cart];
    const product = newCart.find((a) => a.itemId === item.id);

    if (product) {
      product.quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { itemId: item.id, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Nav cart={cart} setCart={setCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store addToCart={addToCart} />} />
          <Route
            path="/store/:id"
            element={<ItemDetails addToCart={addToCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
