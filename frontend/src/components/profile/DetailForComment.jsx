import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductDetail, PostComment } from "../../redux/actions/index";
import NavBar from "../NavBar/NavBar";
import Loading from "../Loading/Loading";
import { CartContext } from "../Cart/CartContext";
import Swal from "sweetalert2";
import ShowLessMore from "show-more-less";
import styles from "show-more-less/dist/index.css";

function DetailProduct() {
  const dispatch = useDispatch();
  let { id } = useParams();
  id = Number(id);
  const navigate = useNavigate();
  const username = window.atob(localStorage.getItem("username"));
  const [loading, setLoading] = useState(false);
  const [comment, setComentario] = useState("");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    dispatch(getProductDetail(id));
  }, []);

  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 2000,
  });

  const ProductDetail = useSelector((state) => state.detail);
  const { addProductToCart } = useContext(CartContext);
  const images = ProductDetail.image;
  const [expanded, setExpanded] = useState(false);
  const sendCard = (e) => {
    e.preventDefault();
    Toast.fire({
      icon: "success",
      title: "Added to cart!",
    });
    addProductToCart(ProductDetail);
  };

  function discount() {
    let total =
      ProductDetail.price -
      ProductDetail.price * ProductDetail.percentageDiscount;
    return total;
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (comment === "") {
      return Swal.fire({
        icon: "warning",
        title: "Comment",
        text: `You have to enter a comment to continue`,
        button: "Ok",
      });
    }
    dispatch(PostComment(comment, username, id));
    navigate("/profile");
  };

  return (
    <div className="h-screen bg-primary-200">
      <NavBar />
      <section
        className={
          loading
            ? "flex justify-center align-center"
            : "font-Open container p-6 mx-auto bg-primary-200"
        }
      >
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : (
          <>
            <div className="container max-w-screen-xl px-4 py-8 mx-auto">
              <div className="grid  grid-cols-1  md:grid-cols-2">
                <div className="grid grid-cols-2  md:grid-cols-1 ">
                  <div className="aspect-w-1 rounded aspect-h-1">
                    {images && images[0].length > 100 ? (
                      images.map((i) => {
                        return <img src={i} alt="Image not found" />;
                      })
                    ) : (
                      <img
                        alt="Image not found"
                        className="ml-6 rounded sm:mb-5"
                        src={
                          ProductDetail.image
                            ? ProductDetail.image[0]
                            : "1602010489_p_setting_fff_1_90_end_600.jpg"
                        }
                        height="600"
                        width="500"
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
                      {ProductDetail.price
                        ? `U$D ${ProductDetail.price}`
                        : null}
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
                            <ShowLessMore
                              text={`${ProductDetail.description}`}
                              threshold={100}
                              expanded={expanded}
                              onExpand={setExpanded}
                              classes={{
                                root: styles.root,
                                text: styles.text,
                                clickable: styles.clickable
                              }}
                            />
                          </p>
                        </div>
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
                    <div>
                      <div className="flex w-full">
                        <div className="grid h-20 flex-grow  rounded-box place-items-center">
                          <button
                            onClick={sendCard}
                            className="w-full text-center py-3 rounded bg-primary-400 text-white hover:bg-primary-300 focus:outline-none my-1"
                          >
                            Add to cart
                          </button>
                        </div>
                        <div className="text-primary-200 select-none"> OR </div>
                        <div className="grid h-20 flex-grow card rounded-box place-items-center">
                          <NavLink
                            className="w-full text-center py-3 rounded bg-primary-400 text-white hover:bg-primary-300 focus:outline-none my-1"
                            to="/cart"
                          >
                            <button>Proceed to checkout</button>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </form>
                  <form className="mt-10">
                    <p className="text-secundary-250 text-xl font-bold font-open mb-5">Write here your review of the product:
                    </p>
                    <div className="relative">
                      <textarea
                        value={comment}
                        onChange={(e) => setComentario(e.target.value)}
                        className="w-10/12 h-20 pl-3 pt-2 pr-8 text-base border rounded-lg"
                        type="text"
                        placeholder="Write here your comment..."
                      />
                      <button
                        onClick={(e) => HandleSubmit(e)}
                        className="absolute font-open inset-y-0 right-0 px-4 bg-primary-400 lg:hover:bg-primary-300 rounded"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default DetailProduct;
