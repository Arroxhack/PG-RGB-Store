import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductDetail } from "../../redux/actions/index";
import NavBar from "../NavBar/NavBar";
import Loading from "../Loading/Loading";
import { CartContext } from "../Cart/CartContext";
import Swal from "sweetalert2";
import Favorito from "../Favoritos/Favorito";
import CommentReview from "./CommentReview";

function DetailProduct() {
  const dispatch = useDispatch();
  let { id } = useParams();
  id = Number(id);

  const { addProductToCart } = useContext(CartContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    dispatch(getProductDetail(id));
  }, []);

  const ProductDetail = useSelector((state) => state.detail);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const images = ProductDetail.image;
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 2000,
  });

  function discount() {
    let total =
      ProductDetail.price -
      ProductDetail.price * ProductDetail.percentageDiscount;
    return total;
  }
  const sendCard = (e) => {
    e.preventDefault();
    Toast.fire({
      icon: "success",
      title: "Producto agregado al carrito",
    });
    addProductToCart(ProductDetail);
    // resetProductCart()
  };

  return (
    <div className="h-screen flex flex-col bg-primary-200">
      <div className="relative z-50 mb-11 bg-primary-200">
        <NavBar />
      </div>
      <section className="font-Open bg-primary-200 absolute z-100 mt-40">
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : (
          <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
            <div className="grid items-start grid-cols-1  md:grid-cols-2">
              <div className="grid grid-cols-2 md:grid-cols-1 ">
                <div className="aspect-w-1 aspect-h-1">
                  {images && images[0].length > 100 ? (
                    images.map((i) => {
                      return <img src={i} alt="Image not found" />;
                    })
                  ) : (
                    <img
                      alt="Image not found"
                      className="object-cover rounded-xl"
                      src={
                        ProductDetail.image
                          ? ProductDetail.image[0]
                          : "1602010489_p_setting_fff_1_90_end_600.jpg"
                      }
                      height="600px"
                      width="600px"
                    />
                  )}
                </div>
              </div>

              <div className="sticky top-0">
                <strong className="border text-primary-400 border-primary-300 rounded-full tracking-wide px-3 font-medium py-0.5 text-xs">
                  {ProductDetail.category ? ProductDetail.category[0] : null}
                </strong>

                <div className="flex justify-between text-secundary-250 mt-8">
                  <div className="max-w-[35ch] ">
                    <h1 className="text-2xl text-secundary-250 font-bold">
                      {ProductDetail.name ? ProductDetail.name : null}
                    </h1>

                    <p className="mt-0.5 text-secundary-250 text-sm">
                      {ProductDetail.stock
                        ? `${ProductDetail.stock} in stock!`
                        : null}
                    </p>
                  </div>

                  <div className="text-lg text-secundary-250 font-bold">
                    {ProductDetail.price ? `U$D ${ProductDetail.price}` : null}
                    <p>
                      {ProductDetail.inOffer ? ProductDetail.inOffer : null}
                    </p>
                    <p className="text-lg font-bold text-primary-300">
                      {ProductDetail.percentageDiscount && ProductDetail.price
                        ? `BUYING TODAY ${discount()} U$D!`
                        : null}
                    </p>
                  </div>
                </div>

                <details className="relative mt-4 group">
                  <summary className="block">
                    <div>
                      <div className="max-w-none text-secundary-250 group-open:hidden">
                        <p>
                          {ProductDetail.description
                            ? truncate(ProductDetail.description, 300)
                            : null}
                        </p>
                      </div>

                      <span className="mt-4 text-sm text-primary-400 font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                        Read More
                      </span>
                    </div>
                  </summary>

                  <div className="pb-6 text-secundary-250 max-w-none">
                    <p>
                      {ProductDetail.description
                        ? ProductDetail.description
                        : null}
                    </p>
                  </div>
                </details>

                <form className="mt-8">
                  <legend className="mb-1 text-secundary-250 text-sm font-medium">
                    More details
                  </legend>
                  <div className="text-secundary-250">
                    <p>
                      {ProductDetail.brand
                        ? `Brand: ${ProductDetail.brand}`
                        : null}
                    </p>
                    <p>
                      {ProductDetail.compatibilityBrands
                        ? `Compatible with ${ProductDetail.compatibilityBrands}`
                        : null}
                    </p>
                    <p>
                      {ProductDetail.ddr ? `DDR: ${ProductDetail.ddr}` : null}{" "}
                    </p>
                    <p>
                      {ProductDetail.socket
                        ? `Socket: ${ProductDetail.socket}`
                        : null}
                    </p>
                    <p>
                      {ProductDetail.factorMother
                        ? `Factor mother: ${ProductDetail.factorMother}`
                        : null}
                    </p>
                    <p>
                      {ProductDetail.weight
                        ? `Weight: ${ProductDetail.weight}`
                        : null}
                    </p>
                    <p>
                      {ProductDetail.dimensions
                        ? `Dimensions: ${ProductDetail.dimensions}`
                        : null}
                    </p>
                    <p>
                      {ProductDetail.wattsPowerSupply
                        ? `Watts: ${ProductDetail.wattsPowerSupply}`
                        : null}
                    </p>
                  </div>
                
                    <div className="flex w-full">
                      {/* <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"> */}
                        {/* <Favorito id={ProductDetail.id}/> */}
                      <div className="grid h-20 flex-grow place-items-center">
                        <button
                          onClick={sendCard}
                          className="w-full text-center py-3 rounded bg-primary-400 lg:hover:bg-primary-300 my-1"
                        >
                          Add to cart
                        </button>
                      {/* </div> */}
                      <div className="text-primary-200 select-none"> OR </div>
                      <div className="grid h-20 flex-grow place-items-center">
                        <NavLink
                          className="w-full text-center py-3 rounded bg-primary-400 lg:hover:bg-primary-300 my-1"
                          to="/cart"
                        >
                          <button>Go to cart</button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <CommentReview idProduct={id} />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default DetailProduct;
