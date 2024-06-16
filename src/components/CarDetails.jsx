import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setCar(response.data);
      } catch (err) {
        setError("Error fetching car details");
        console.error(err);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12">
        {error && <p className="text-red-500 text-center mb-8">{error}</p>}
        {car ? (
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img
                  src={car.thumbnail}
                  alt={car.title}
                  className="w-full rounded-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
                <h1 className="text-4xl font-bold mb-4">{car.title}</h1>
                <p className="text-gray-600 mb-4">{car.description}</p>
                <p className="text-2xl font-bold mb-4">Price: ${car.price}</p>
                <div className="mb-4">
                  <h2 className="text-xl font-bold mb-2">Additional Details</h2>
                  <p className="text-gray-600">Brand: {car.brand}</p>
                  <p className="text-gray-600">Category: {car.category}</p>
                  <p className="text-gray-600">Rating: {car.rating}</p>
                  <p className="text-gray-600">Stock: {car.stock}</p>
                </div>
                <div className="flex justify-between">
                  <Link
                    to="/"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Back to Vehicle List
                  </Link>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    disabled={car.stock === 0}
                  >
                    {car.stock === 0 ? "Out of Stock" : "Buy Now"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default CarDetails;
