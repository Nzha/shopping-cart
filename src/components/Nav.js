import { Link } from 'react-router-dom';

function Nav({ cart }) {
  const handleClickTemp = () => {
    console.table(cart);
  };

  return (
    <nav className="bg-gray-800">
      <div className="flex items-center justify-around p-4 text-white">
        {/* <Link to="/"> */}
        <h3 className="cursor-pointer text-4xl" onClick={handleClickTemp}>
          FakeStore
        </h3>
        {/* </Link> */}
        <ul className="flex gap-6 text-xl text-gray-200">
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
            <li className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-700 hover:text-white">
              Cart
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
