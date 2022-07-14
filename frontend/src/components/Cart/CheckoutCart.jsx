import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import { GetUserData } from "../../redux/actions/index";
import CheckoutPaypal from "../Paypal/CheckoutPaypal";
import { CartContext } from "./CartContext";
import { useDispatch, useSelector } from "react-redux";

function CheckoutCart() {
  const {
    setPoints,
    points,
    setUsePoints,
    products,
    deleteProductCart,
    addProductToCart,
    deleteProduct,
  } = useContext(CartContext);
  const [PosiblePoints, setPosiblePoints] = useState(0);
  const [puntosAUtilizar, setPuntosAUtilizar] = useState(null);
  const dispatch = useDispatch();
  let id = localStorage.getItem("id");

  if (id) {
    id = window.atob(localStorage.getItem("id"));
  }
  useEffect(() => {
    dispatch(GetUserData(id));
  }, []);

  const isChecked = async (e, total) => {
    if (e.target.checked) {
      // SI LA COMPRA ES MAYOR A 500
      if (total > 499) {
        setPuntosAUtilizar(user.points);
        const puntosAUtilizarConst = user.points;
        // SI EL TOTAL DE LA COMPRA ES MENOR A LA CANTIDAD DE PUNTOS
        if (total < puntosAUtilizarConst) {
          let PointsUtilizados = puntosAUtilizarConst - total;
          PointsUtilizados = puntosAUtilizarConst - PointsUtilizados;
          console.log(Math.floor(PointsUtilizados));
          setPoints(Math.floor(PointsUtilizados));
          setPosiblePoints(Math.floor(PointsUtilizados));
          setUsePoints(true);
        } else {
          setPoints(Math.floor(puntosAUtilizarConst));
          setPosiblePoints(Math.floor(puntosAUtilizarConst));
          setUsePoints(true);
        }
        // SI LA CANTIDAD DE PUNTOS ES MENOR QUE 500 SE USA 50 % DE LOS PUNTOS
      } else if (total < 500 && total >= 250) {
        setPuntosAUtilizar(user.points / 2);
        const puntosAUtilizarConst = user.points / 2;
        // SI TOTAL ES MENOR A LOS PUNTOS
        if (total < puntosAUtilizarConst) {
          let PointsUtilizados = puntosAUtilizarConst - total;
          console.log("ESTO ES EL RESTO", PointsUtilizados);
          PointsUtilizados = puntosAUtilizarConst - PointsUtilizados;
          console.log(Math.floor(PointsUtilizados));
          setPoints(Math.floor(PointsUtilizados));
          setPosiblePoints(Math.floor(PointsUtilizados));
          setUsePoints(true);
        } else {
          setPoints(Math.floor(puntosAUtilizarConst));
          setPosiblePoints(Math.floor(puntosAUtilizarConst));
          setUsePoints(true);
        }
      } else if (total < 250) {
        setPuntosAUtilizar(user.points / 4);
        const puntosAUtilizarConst = user.points / 4;
        if (total < puntosAUtilizarConst) {
          let PointsUtilizados = puntosAUtilizar - total;
          console.log("ESTO ES EL RESTO", puntosAUtilizarConst);
          PointsUtilizados = puntosAUtilizarConst - PointsUtilizados;
          console.log(Math.floor(PointsUtilizados));
          setPoints(Math.floor(PointsUtilizados));
          setPosiblePoints(Math.floor(PointsUtilizados));
          setUsePoints(true);
        } else {
          console.log("ESTO ES EL RESTO", puntosAUtilizarConst);
          setPoints(Math.floor(puntosAUtilizarConst));
          setPosiblePoints(Math.floor(puntosAUtilizarConst));
          setUsePoints(true);
        }
      }
    } else {
      setUsePoints(false);
      setPoints(0);
      setPosiblePoints(0);
    }
  };


  const user = useSelector((state) => state.UserData);
  let total = 0;
  products.forEach((p) => (total += p.amount * p.price));
  function unchecked() {
    const check = document.getElementById("check");
    if (check != null) {
      check.checked = false;
    }
  }

  useEffect(() => {
    setUsePoints(false);
    setPoints(0);
    unchecked();
    setPuntosAUtilizar(0);
  }, [products]);
  return (
    <div className="bg-primary-200">
      <NavBar />
      <div className="flex items-center justify-center py-8">
        <div className="">
          <div className="w-full absolute right-0 bg-primary-200 h-full">
            <div className="flex md:flex-row bg-primary-200 flex-col justify-end">
              <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-secundary-250 overflow-y-auto overflow-x-hidden h-screen">
                <div className="flex items-center text-gray-500 hover:text-primary-300 cursor-pointer">
                  <Link to="/categories?category=all&page=1">
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-chevron-left"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="15 6 9 12 15 18" />
                      </svg>
                      <p className="text-sm pl-2 leading-none">
                        Back to products
                      </p>
                    </div>
                  </Link>
                </div>
                <p className="text-5xl font-black mb-10 font-Open leading-10 pt-3">
                  Your Cart
                </p>

                <div>
                  <div>
                    <div>
                      {products.length <= 0 ? (
                        <p className="flex items-center">No products yet!</p>
                      ) : (
                        <div>
                          {products.map((p) => {
                            return (
                              <div
                                className="md:flex items-center mt-14 py-8 border-t border-primary-400"
                                key={p.id}
                              >
                                <div className="w-1/5">
                                  <img
                                    src={p.image[0]}
                                    alt="Imagen"
                                    className="w-full h-full object-center object-cover"
                                  />
                                </div>
                                <div className="md:pl-3 md:w-3/4">
                                  <div className="flex items-center justify-between w-full pt-1">
                                    <p className="text-base font-black leading-none text-gray-800">
                                      {p.name}
                                    </p>
                                    <div className="flex justify-around m-9">
                                      <button
                                        onClick={(e) => deleteProductCart(p)}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-3 w-6"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20 12H4"
                                          />
                                        </svg>
                                      </button>
                                      <label className="w-3 font-Open">
                                        {p.amount}
                                      </label>
                                      <button
                                        onClick={(e) => addProductToCart(p)}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-3 w-6"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 4v16m8-8H4"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <p className="flex w-20 font-black leading-none">{`$ ${(
                                  p.price * p.amount
                                ).toFixed(2)}`}</p>
                                <button
                                  className="cursor-pointer"
                                  onClick={(e) => deleteProduct(p)}
                                >
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
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                  </svg>
                                </button>
                                <span className="md:flex items-center py-8 border-t border-primary-400"></span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full font-Open h-full">
                <div className="flex flex-col md:h-screen px-14 py-20 justify-between font-Open overflow-y-auto">
                  <div>
                    <p className="text-4xl font-black mb-10 text-secundary-250 leading-9 font-Open">
                      Total points: {user.points}
                      <br />
                      {total > 100 ? (
                        <p className="flex text-secundary-250 text-2xl font-Open items-center">
                          Use your points? {"     "}
                          <input
                            type="checkbox"
                            id={"check"}
                            onChange={(e) => isChecked(e, total)}
                            className="ml-2 text-2xl font-medium dark:text-gray-300"
                          />
                        </p>
                      ) : 
                      (
                        <p className="flex text-secundary-250 text-2xl font-Open items-center">
                          <br />
                          You can only use your points with a purchase of 100$ or more!
                          {setUsePoints(false)}
                          {setPoints(0)}
                          {unchecked()}
                          {/* {setPosiblePoints(0)} */}
                        </p>
                      )}
                      <br />
                      Summary
                    </p>
                    <div>
                      {products.length <= 0 ? (
                        <p className="flex text-secundary-250 font-Open items-center">
                          No products yet!
                        </p>
                      ) : (
                        <div>
                          {products.map((p) => {
                            return (
                              <li
                                className="text-secundary-250 font-Open"
                                key={p.id}
                              >
                                <p>
                                  {p.name}: {p.amount} x ${p.price}
                                </p>
                              </li>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                      <p className="text-2xl text-secundary-250 leading-normal">
                        Total
                      </p>
                      <div>
                        {points === 0 ? (
                          <p className="text-2xl  text-secundary-250 font-bold leading-normal text-right text-gray-800">
                            {`$ ${total.toFixed(2)}`}
                          </p>
                        ) : (
                          <>
                            <p className="text-2xl  text-secundary-250  leading-normal text-right text-gray-800">
                              {`$ ${0 - PosiblePoints}`}
                            </p>
                            <p className="text-2xl  text-secundary-250 font-bold leading-normal text-right text-gray-800">
                              {`$ ${total.toFixed(2)}`}
                            </p>
                            <p className="text-2xl  text-secundary-250  leading-normal text-right text-gray-800">
                              {`$ ${Math.round(
                                total.toFixed(2) - PosiblePoints.toFixed(2)
                              )}`}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="w-full text-center py-3 rounded bg-primary-400 text-white hover:bg-primary-300 focus:outline-none my-1">
                      <CheckoutPaypal />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCart;
