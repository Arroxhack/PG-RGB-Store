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
    <div className="h-auto  dropdown-toggle w-[520px] font-Open px-5 bg-secundary-250 text-primary-200 rounded mt-10 -ml-80 absolute z-10 md:text-center md:items-center">
      <div className="flex flex-row-reverse pr-2"></div>
      <div>
        {products.length <= 0 ? (
          <p className="text-center pt-16 pb-16">No products yet!</p>
        ) : (
          <div className="flex flex-col gap-4 mt-5 relative">
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
                  <p >{`$${p.price}`}</p>
                  <span className="font-semibold">{`x ${p.amount}`}</span>
                  <p className="font-semibold"> {`$ ${(p.price * p.amount).toFixed(2)}`}</p>
                  <button onClick={(e) => deleteProductCart(p)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-secundary-50"
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
                  <span className="col-start-1 col-end-8 bg-secundary-250 h-[1px] mt-2 w-auto"></span>
                </div>
              );
            })}
            <div>
              <Link to="/cart">
                <button className="w-full text-center mb-5 font-bold py-3 rounded bg-primary-400 text-white hover:bg-primary-300 focus:outline-none my-1">

                {`Proceed to checkout: $${total.toFixed(2)}`}
                </button>
              </Link>
          
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoxCart;
