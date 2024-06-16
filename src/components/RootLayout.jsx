import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <div className="bg-gray-900 py-4">
        <nav className="container mx-auto">
          <ul className="flex justify-between items-center">
            <li>
              <Link to="/" className="text-white font-bold text-2xl">
                CarSale
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Vehicle List
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </div>
  );
};

export default RootLayout;
