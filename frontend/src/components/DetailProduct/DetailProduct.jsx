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

      <div>
        <h1>{ProductDetail.name ? ProductDetail.name : null} </h1>
        <h3>
          {ProductDetail.stock ? `${ProductDetail.stock} in stock!` : null}
        </h3>
        <h2>U$D{ProductDetail.price ? ProductDetail.price : null}</h2>
        <h4>{ProductDetail.inOffer ? ProductDetail.inOffer : null}</h4>
        <h4>
          {ProductDetail.percentageDiscount && ProductDetail.price
            ? `BUYING TODAY ${discount()} U$D!`
            : null}
        </h4>
        <img
          src={
            ProductDetail.image
              ? ProductDetail.image
              : "main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq.jpg"
          }
          width="450px"
          height="400px"
          alt="image not found"
        />
        <p>
          {ProductDetail.description
            ? truncate(ProductDetail.description, 250)
            : null}
        </p>
      </div>
      <div>
        <h3>
          {ProductDetail.socket ? `Socket: ${ProductDetail.socket}` : null}
        </h3>
        <h3>
          {ProductDetail.weight ? `Weight: ${ProductDetail.weight}` : null}
        </h3>
        <h3>
          {ProductDetail.proportions
            ? `Proportions: ${ProductDetail.proportions}`
            : null}
        </h3>
        <h3>
          {ProductDetail.wattsPowerSupply
            ? `Watts: ${ProductDetail.wattsPowerSupply}`
            : null}
        </h3>
        <h3>
          {ProductDetail.factorMother
            ? `Factor mother: ${ProductDetail.factorMother}`
            : null}
        </h3>
        <h3>{ProductDetail.ddr ? `DDR: ${ProductDetail.ddr}` : null}</h3>
        <h3>
          {ProductDetail.compatibilityBrands
            ? `Compatible with ${ProductDetail.compatibilityBrands}`
            : null}
        </h3>
      </div>
    </div>
  );
}

export default DetailProduct;
