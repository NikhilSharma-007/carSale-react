import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/vehicle"
        );
        setCars(response.data.products);
      } catch (err) {
        setError("Error fetching car data");
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          Our Vehicle Collection
        </h1>
        {error && <p className="text-red-500 text-center mb-8">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Link to={`/car/${car.id}`}>
                <img
                  src={car.thumbnail}
                  alt={car.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{car.title}</h2>
                  <p className="text-gray-600 mb-4">${car.price}</p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View Details
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarList;
