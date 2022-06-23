import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductDetail } from "../../redux/actions/index";

function DetailProduct() {
  const dispatch = useDispatch();
  let { id } = useParams();
  id = Number(id);

  useEffect(() => {
    dispatch(getProductDetail(id));
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
      <div>PRODUCT DETAIL</div>
      <div className="">
        <div className="grid grid-cols-[1fr_2fr_2fr]">
          <div className="">
            <div className="">
              <img
                className="[grid-column:1/2]"
                src={
                  ProductDetail.image
                    ? ProductDetail.image
                    : "1602010489_p_setting_fff_1_90_end_600.jpg"
                }
                width="450px"
                height="400px"
                alt="image not found"
              />
              <p className=" [grid-column:2/3]">
                {ProductDetail.name ? ProductDetail.name : null}
              </p>
              <p>{ProductDetail.price ? ProductDetail.price : null}</p>
              <p>{ProductDetail.inOffer ? ProductDetail.inOffer : null}</p>
              <p>
                {ProductDetail.percentageDiscount && ProductDetail.price
                  ? `BUYING TODAY ${discount()} U$D!`
                  : null}
              </p>
              <p>
                {ProductDetail.stock
                  ? `${ProductDetail.stock} in stock!`
                  : null}
              </p>
              <p className="text-xs leading-relaxed text-gray-50">
                {ProductDetail.description
                  ? truncate(ProductDetail.description, 250)
                  : null}
              </p>
              <button className="w-full block text-center relative text-white font-bold text-sm bg-teal-800 px-4 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {" "}
        MORE DETAILS
        <p>{ProductDetail.socket ? `Socket: ${ProductDetail.socket}` : null}</p>
        <p>{ProductDetail.weight ? `Weight: ${ProductDetail.weight}` : null}</p>
        <p>
          {ProductDetail.proportions
            ? `Proportions: ${ProductDetail.proportions}`
            : null}
        </p>
        <p>
          {ProductDetail.wattsPowerSupply
            ? `Watts: ${ProductDetail.wattsPowerSupply}`
            : null}
        </p>
        <p>
          {ProductDetail.factorMother
            ? `Factor mother: ${ProductDetail.factorMother}`
            : null}
        </p>
        <p>{ProductDetail.ddr ? `DDR: ${ProductDetail.ddr}` : null}</p>
        <p>
          {ProductDetail.compatibilityBrands
            ? `Compatible with ${ProductDetail.compatibilityBrands}`
            : null}
        </p>
      </div>
    </div>
  );
}

export default DetailProduct;
