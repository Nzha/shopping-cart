import { Link } from 'react-router-dom';

function Nav({ cart }) {
  const totalCartItems = cart.reduce((a, b) => a + b.quantity, 0);

  return (
    <nav className="bg-gray-800">
      <div className="flex items-center justify-around p-6 text-white">
        <Link to="/">
          <h3 className="cursor-pointer text-4xl">The Bazaar</h3>
        </Link>
        <ul className="flex items-center gap-6 text-xl text-gray-200">
          <Link to="/">
            <li className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-700 hover:text-white">
              Home
            </li>
          </Link>
          <Link to="/store">
            <li className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-700 hover:text-white">
              Store
            </li>
          </Link>
          <Link to="/about">
            <li className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-700 hover:text-white">
              About
            </li>
          </Link>
          <Link to="/cart">
            <div className="relative py-2">
              {cart.length > 0 && (
                <div className="t-2 absolute bottom-6 left-3">
                  <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                    {totalCartItems}
                  </p>
                </div>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="file: inline-block h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
