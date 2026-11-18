import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const [prod, setProd] = useState(null);
  const { id } = useParams();
  console.log(id);

  const detailProduct = async () => {
    let response = await axios.get(`https://dummyjson.com/products/${id}`);
    setProd(response.data);
  };

  useEffect(() => {
    detailProduct();
  }, [id]);

  if (!prod) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <>
      <div className="space-y-2 py-25">
        <div className="mx-auto">
          <div className="flex min-h-screen justify-center items-center">
            <div className="bg-stone-100 p-12 shadow-lg text-center max-w-[700px]">
              <div className="flex flex-col items-center">
                <img
                  className="object-cover"
                  src={prod.thumbnail}
                  alt={prod.title}
                />
                <h2 className="text-3xl font-bold text-center my-2 text-rose-500 uppercase">
                  {prod.title}
                </h2>
                <h3 className="mb-4 font-semibold text-2xl text-center text-rose-600 uppercase tracking-normal">
                  {prod.category}
                </h3>
                <p className="my-2 text-stone-300 text-xl">
                  {prod.description}
                </p>
                <p className="my-2 text-yellow-400 text-xl font-semibold">
                  {prod.rating}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
