import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="bg-gray-800">
      <div className="flex items-center justify-around p-4 text-white">
        <h3 className="text-4xl">FakeStore</h3>
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
          <Link to="about">
            <li className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-700 hover:text-white">
              About
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
