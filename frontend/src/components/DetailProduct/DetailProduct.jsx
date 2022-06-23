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
    <div className="">
      <div className="flex flex-col items-center justify-center h-screen ">
        <div className="bg-primary-100 flex w-4/5 h-2/3 justify-evenly items-center">
          <div className="max-h-screen">
            <img
              className=""
              src={
                ProductDetail.image
                  ? ProductDetail.image
                  : "1602010489_p_setting_fff_1_90_end_600.jpg"
              }
              width="150px"
              height="150px"
              alt="image not found"
            />
            <img
              className=""
              src={
                ProductDetail.image
                  ? ProductDetail.image
                  : "1602010489_p_setting_fff_1_90_end_600.jpg"
              }
              width="150px"
              height="150px"
              alt="image not found"
            />
            <img
              className=""
              src={
                ProductDetail.image
                  ? ProductDetail.image
                  : "1602010489_p_setting_fff_1_90_end_600.jpg"
              }
              width="150px"
              height="150px"
              alt="image not found"
            />
          </div>
          <div>
            <img
              className=""
              src={
                ProductDetail.image
                  ? ProductDetail.image
                  : "1602010489_p_setting_fff_1_90_end_600.jpg"
              }
              width="450px"
              height="400px"
              alt="image not found"
            />
          </div>

          <div className="w-1/4 flex flex-col justify-around ">
            <div className="mb-12">
              <p className="text-7x5">
                {ProductDetail.name ? ProductDetail.name : null}
              </p>
              <p>{ProductDetail.price ? `U$D ${ProductDetail.price}` : null}</p>
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
            </div>
            <div>
              <p className="text-xs leading-relaxed text-gray-50">
                {ProductDetail.description
                  ? truncate(ProductDetail.description, 250)
                  : null}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
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
