import React, { useContext } from "react";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../redux/actions";
import { CartContext } from "./CartContext";

const BoxCart = ({ onClick }) => {
  const { products, deleteProductCart } =
    useContext(CartContext);

  let total = 0;
  products.forEach((p) => (total += p.amount * p.price));

  return (
    <div className="h-auto lg:w-[520px]  px-5 bg-primary  text-primary-200 rounded mt-10 -ml-80 absolute z-10 border-2 border-primary-200">
      <div className="flex flex-row-reverse pr-2"></div>
      <div>
        {products.length <= 0 ? (
          <p className="text-center pt-16 pb-16">No hay productos ☹️</p>
        ) : (
          <div className="flex flex-col gap-4 mt-5">
            {products.map((p) => {
              return (
                <div
                  key={p.id}
                  className="grid grid-cols-[2fr_8fr_1fr_3fr_4fr_1fr] gap-1 items-center"
                >
                  {/* <img
                    src={p.image[0]}
                    alt="Imagen"
                    width="50px"
                    height="50px"
                  /> */}
                  <p>{p.name}</p>
                  <p>{`$${p.price}`}</p>
                  <span>{`x ${p.amount}`}</span>
                  <p>{`$ ${(p.price * p.amount).toFixed(2)}`}</p>
                  <button onClick={(e) => deleteProductCart(p)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <span className="col-start-1 col-end-8 bg-secundary h-[1px] mt-2 w-auto"></span>
                </div>
              );
            })}
            <div className="grid grid-cols-2 mr-10 mb-5">
              <Link to="/cart">
                <button className="bg-primary-300 px-3 py-1 rounded-md mt-2 mb-2 border border-primary-400 hover:border hover:border-primary-100">

                  Proceed to checkout
                </button>
              </Link>
              <p>{`Total: $${total.toFixed(2)}`}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoxCart;
