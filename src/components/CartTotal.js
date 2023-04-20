function CartTotal({ cart }) {
  const totalItems = cart.reduce((a, b) => a + b.price * b.quantity, 0);
  const shipping = 4.99;

  return (
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
  );
}

export default CartTotal;
