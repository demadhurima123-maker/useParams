import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    let response = await axios.get("https://dummyjson.com/products");
    console.log(response);
    setProducts(response.data.products);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className="space-y-2 py-25">
        <div className="max-w-[1470px] w-full mx-auto px-[15px]">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products?.map((item) => (
              <Link key={item.id} to={`/details/${item.id}`}>
                <div
                  className="bg-white p-10 text-center border-2 border border-stone-200 mb-4 mx-2"
                  key={item.id}
                >
                  <img
                    className="w-full object-cover"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <h2>{item.title}</h2>
                  <p>{item.brand}</p>
                  <button
                    type="button"
                    className="text-center uppercase my-2 bg-stone-400 p-4 text-white"
                  >
                    view more...
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
