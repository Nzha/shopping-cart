import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const item = await data.json();
      console.log(item);
      setItem(item);
    };
    fetchItem();
  }, [id]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-8 px-8 py-10">
        {item.title}
      </div>
    </div>
  );
}

export default ItemDetails;
