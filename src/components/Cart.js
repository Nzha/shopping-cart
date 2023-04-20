import CartItem from './CartItem';

function Cart({ cart, setCart }) {
  const totalItems = cart.reduce((a, b) => a + b.price * b.quantity, 0);
  const shipping = 4.99;

  const listCart = cart.map((item) => (
    <CartItem key={item.id} item={item} cart={cart} setCart={setCart} />
  ));

  return (
    <div>
      <div className="h-full bg-gray-100 pt-10">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">{listCart}</div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">${totalItems?.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">${shipping}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="text-lg font-bold">
                  ${(totalItems + shipping)?.toFixed(2)} USD
                </p>
              </div>
            </div>
            <button className="mt-5 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
