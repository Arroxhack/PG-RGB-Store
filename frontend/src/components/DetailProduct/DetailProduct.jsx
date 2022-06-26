import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductDetail } from "../../redux/actions/index";
import NavBar from "../NavBar/NavBar";
import Loading from '../Loading/Loading'

function DetailProduct() {
  const dispatch = useDispatch();
  let { id } = useParams();
  id = Number(id);

  const [loading, setLoading]= useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },500)
    dispatch(getProductDetail(id))
  }, []);

  const ProductDetail = useSelector((state) => state.detail);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  function discount() {
    let total =
      ProductDetail.price -
      ProductDetail.price * ProductDetail.percentageDiscount;
    return total;
  }

  return (
    <div> 
      <NavBar/>
      
      
    <section class="font-Open ">
    {loading?(
       <div className="h-screen"><Loading/></div>
    ) :
     ( <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
        <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
          <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
            <div class="aspect-w-1 aspect-h-1">
              <img 
                alt="Image not found"
                class="object-cover rounded-xl"
                src={
                  ProductDetail.image
                    ? ProductDetail.image[0]
                    : "1602010489_p_setting_fff_1_90_end_600.jpg"
                }
                height='400px'
                width='400px'
              />
            </div>

            <div class="grid grid-cols-2 gap-2 lg:mt-2">

              <div class="aspect-w-1 aspect-h-1">
                <img
                  alt="Image not found"
                  class="object-cover rounded-xl"
                  src={
                    ProductDetail.image
                      ? ProductDetail.image[1]
                      : "1602010489_p_setting_fff_1_90_end_600.jpg"
                  }
                  height='300px'
                  width='300px'
                />
              </div>

              <div class="aspect-w-1 aspect-h-1">
                <img
                  alt="Image not found"
                  class="object-cover rounded-xl"
                  src={
                    ProductDetail.image
                      ? ProductDetail.image[2]
                      : "1602010489_p_setting_fff_1_90_end_600.jpg"
                  }
                  height='300px'
                  width='300px'
                />
              </div>
            </div>
          </div>

          <div class="sticky top-0">
            <strong class="border border-blue-600 rounded-full tracking-wide px-3 font-medium py-0.5 text-xs bg-gray-100 text-blue-600">
              {ProductDetail.category ? ProductDetail.category[0] : null}
            </strong>

            <div class="flex justify-between mt-8">
              <div class="max-w-[35ch]">
                <h1 class="text-2xl font-bold">
                  {ProductDetail.name ? ProductDetail.name : null}
                </h1>

                <p class="mt-0.5 text-sm">
                  {ProductDetail.stock
                    ? `${ProductDetail.stock} in stock!`
                    : null}
                </p>
              </div>

              <p class="text-lg font-bold">
                {ProductDetail.price ? `U$D ${ProductDetail.price}` : null}
                <p>{ProductDetail.inOffer ? ProductDetail.inOffer : null}</p>
                <p class="text-lg font-bold color-300">
                  {ProductDetail.percentageDiscount && ProductDetail.price
                    ? `BUYING TODAY ${discount()} U$D!`
                    : null}
                </p>
              </p>
            </div>

            <details class="relative mt-4 group">
              <summary class="block">
                <div>
                  <div class="prose max-w-none group-open:hidden">
                    <p>
                      {ProductDetail.description
                        ? truncate(ProductDetail.description, 300)
                        : null}
                    </p>
                  </div>

                  <span class="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                    Read More
                  </span>
                </div>
              </summary>

              <div class="pb-6 prose max-w-none">
                <p>
                  {ProductDetail.description ? ProductDetail.description : null}
                </p>
              </div>
            </details>

            <form class="mt-8">
              <legend class="mb-1 text-sm font-medium">More details</legend>
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
              <p>{ProductDetail.ddr ? `DDR: ${ProductDetail.ddr}` : null} </p>
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
              

              <div class="flex mt-8">
                <div>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value="1"
                    class="w-12 py-3 text-xs text-center border-200 rounded no-spinners"
                  />
                </div>

                <button
                  type="submit"
                  class="block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500"
                >
                  Add to Cart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>) }
    </section>
    </div>
  );
}

export default DetailProduct;
