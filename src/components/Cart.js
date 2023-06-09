import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

function Cart({ cart, setCart }) {
  const listCart = cart.map((item) => (
    <CartItem key={item.id} item={item} cart={cart} setCart={setCart} />
  ));

  return (
    <div>
      <div className="h-full bg-gray-100 pt-10">
        {!cart.length ? (
          <div className="text-center ">
            <h1 className="mb-3 text-2xl font-bold">Your Cart is empty.</h1>
            <Link to="/store">
              <p className="text-red-500 underline">Continue shopping</p>
            </Link>
          </div>
        ) : (
          <>
            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div className="rounded-lg md:w-2/3">{listCart}</div>
              <CartTotal cart={cart} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
