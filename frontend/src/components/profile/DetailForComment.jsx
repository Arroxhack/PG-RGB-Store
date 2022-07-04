import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductDetail, PostComment } from "../../redux/actions/index";
import NavBar from "../NavBar/NavBar";
import Loading from "../Loading/Loading";
import { CartContext } from "../Cart/CartContext";
import Swal from "sweetalert2";

function DetailProduct() {
  const dispatch = useDispatch();
  let { id } = useParams();
  id = Number(id);
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
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
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const images = ProductDetail.image;

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
        title: "Commend",
        text: `Tienes que Comentar algo para continuar`,
        button: "Aceptar",
      });
    }
    dispatch(PostComment(comment, username, id));
    navigate("/profile");
  };

  return (
    <div className="md:h-screen flex flex-col">
      <div className="relative z-50 mb-11">
        <NavBar />
      </div>
      <section className="font-Open absolute z-100 mt-40">
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : (
          <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
            <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-1 ">
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
                <strong className="border border-blue-600 rounded-full tracking-wide px-3 font-medium py-0.5 text-xs bg-gray-100 text-blue-600">
                  {ProductDetail.category ? ProductDetail.category[0] : null}
                </strong>

                <div className="flex justify-between mt-8">
                  <div className="max-w-[35ch]">
                    <h1 className="text-2xl font-bold">
                      {ProductDetail.name ? ProductDetail.name : null}
                    </h1>

                    <p className="mt-0.5 text-sm">
                      {ProductDetail.stock
                        ? `${ProductDetail.stock} in stock!`
                        : null}
                    </p>
                  </div>

                  <p className="text-lg font-bold">
                    {ProductDetail.price ? `U$D ${ProductDetail.price}` : null}
                    <p>
                      {ProductDetail.inOffer ? ProductDetail.inOffer : null}
                    </p>
                    <p className="text-lg font-bold color-300">
                      {ProductDetail.percentageDiscount && ProductDetail.price
                        ? `BUYING TODAY ${discount()} U$D!`
                        : null}
                    </p>
                  </p>
                </div>

                <details className="relative mt-4 group">
                  <summary className="block">
                    <div>
                      <div className="prose max-w-none group-open:hidden">
                        <p>
                          {ProductDetail.description
                            ? truncate(ProductDetail.description, 300)
                            : null}
                        </p>
                      </div>

                      <span className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                        Read More
                      </span>
                    </div>
                  </summary>

                  <div className="pb-6 prose max-w-none">
                    <p>
                      {ProductDetail.description
                        ? ProductDetail.description
                        : null}
                    </p>
                  </div>
                </details>

                <form className="mt-8">
                  <legend className="mb-1 text-sm font-medium">
                    More details
                  </legend>
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
                </form>
              </div>
            </div>
            <p> Write here your Review of the Product:</p>
            <div class="mb-3 pt-0">
              <input
                value={comment}
                onChange={(e) => setComentario(e.target.value)}
                type="text"
                placeholder="Write here your commend"
                class="px-3 p-10 py-4 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
              />
            </div>
            <button
              onClick={(e) => HandleSubmit(e)}
              className="bg-primary-400 font-Open px-5 py-1 rounded-lg text-primary-200 uppercase font-semibold hover:bg-primary-300"
            >
              {" "}
              SEND{" "}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default DetailProduct;
