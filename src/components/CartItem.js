import { useState } from 'react';

function CartItem({ item, cart, setCart }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const updateQuantity = (delta) => {
    if (quantity === 1 && delta === -1) return;
    setQuantity((prevQuantity) => prevQuantity + delta);
    const newCart = [...cart];
    const newItem = newCart.find((a) => a.id === item.id);
    newItem.quantity = quantity + delta;
    setCart(newCart);
  };

  const decrementQuantity = () => {
    updateQuantity(-1);
  };

  const incrementQuantity = () => {
    updateQuantity(1);
  };

  const deleteItem = () => {
    setCart(cart.filter((a) => a.id !== item.id));
  };

  return (
    <div className="mb-6 justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img
        src={item.image}
        alt="product"
        className="max-h-40 w-full rounded-lg sm:w-40"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
          {/* <p className="mt-1 text-xs text-gray-700">{item.description}</p> */}
        </div>
        <div className="mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6">
          <div className="flex items-center justify-end border-gray-100">
            <span
              className="cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={decrementQuantity}
            >
              {' '}
              -{' '}
            </span>
            <span className="flex h-8 w-8 items-center justify-center border bg-white text-center text-xs outline-none">
              {item.quantity}
            </span>
            <span
              className="cursor-pointer rounded-r bg-gray-100 px-3 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={incrementQuantity}
            >
              {' '}
              +{' '}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">
              ${(item.price * item.quantity)?.toFixed(2)}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
              onClick={deleteItem}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
