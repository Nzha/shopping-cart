import { useState, useEffect } from 'react';
import StoreItem from './StoreItem';
import Loading from './Loading';

function Store({ addToCart }) {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const data = await fetch('https://fakestoreapi.com/products');
      const items = await data.json();
      setItems(items);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const listItems = items.map((item) => (
    <StoreItem key={item.id} item={item} addToCart={addToCart} />
  ));

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-8 px-8 py-14">
        {loading && <Loading />}
        {!loading && listItems}
      </div>
    </div>
  );
}

export default Store;
