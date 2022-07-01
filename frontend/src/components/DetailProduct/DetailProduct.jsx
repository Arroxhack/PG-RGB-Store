import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductDetail } from "../../redux/actions/index";
import NavBar from "../NavBar/NavBar";
import Loading from "../Loading/Loading";
import { CartContext } from "../Cart/CartContext";

function DetailProduct() {
  const dispatch = useDispatch();
  let { id } = useParams();
  id = Number(id);

  const {addProductToCart} = useContext(CartContext)

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

  const images = ProductDetail.image

  function discount() {
    let total =
      ProductDetail.price -
      ProductDetail.price * ProductDetail.percentageDiscount;
    return total;
  }

  const addCart = (e)=>{
    e.preventDefault()
    addProductToCart(ProductDetail)
  }

  return (
    <div className="md:h-screen flex flex-col">
      <div className="relative z-50 mb-11">
      <NavBar/>
      </div>
      <section className="font-Open absolute z-100 mt-40">
        {loading ? (
          <div >
            <Loading />
          </div>
        ) : (
          <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
            <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-1 ">
                <div className="aspect-w-1 aspect-h-1">
                  {images && images[0].length > 100 ? images.map(i=>{
                    return <img src={i} alt="Image not found" />
                  }) : <img 
                  alt="Image not found"
                  className="object-cover rounded-xl"
                  src={
                    ProductDetail.image
                      ? ProductDetail.image[0]
                      : "1602010489_p_setting_fff_1_90_end_600.jpg"
                  }
                  height="600px"
                  width="600px"
                />}
                  {/* <img 
                    alt="Image not found"
                    className="object-cover rounded-xl"
                    src={
                      ProductDetail.image
                        ? ProductDetail.image[0]
                        : "1602010489_p_setting_fff_1_90_end_600.jpg"
                    }
                    height="600px"
                    width="600px"
                  /> */}
                </div>

                {/* <div className="grid grid-cols-2 gap-2 lg:mt-2">
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      alt="Image not found"
                      className="object-cover rounded-xl"
                      src={
                        ProductDetail.image
                          ? ProductDetail.image[1]
                          : "1602010489_p_setting_fff_1_90_end_600.jpg"
                      }
                      height="300px"
                      width="300px"
                    />
                  </div>

                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      alt="Image not found"
                      className="object-cover rounded-xl"
                      src={
                        ProductDetail.image
                          ? ProductDetail.image[2]
                          : "1602010489_p_setting_fff_1_90_end_600.jpg"
                      }
                      height="300px"
                      width="300px"
                    />
                  </div>
                </div> */}
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
                  <legend className="mb-1 text-sm font-medium">More details</legend>
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

                  <button
                    onClick={addCart}
                    className="w-full text-center py-3 rounded bg-primary-400 text-white hover:bg-primary-300 focus:outline-none my-1"
                  >
                    Add to cart
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default DetailProduct;
