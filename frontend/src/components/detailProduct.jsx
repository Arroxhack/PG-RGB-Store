import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductDetail } from "../redux/actions/index";

function DetailProduct() {
  const ProductDetail = {
    name: "AMD Ryzen™ 5 5600G",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRZ2bq6_q9DR_WLscnpT_acWQEcohqH08K_CLnWmfjDGWlcgKyLNrd1HUudnExVFSk2KJe8ATFKfJk8Mh0pcp7kWbbq-dx_",
    price: 164,
    stock: 2,
    description:
      " Features best-in-class graphics performance in a desktop processor for smooth 1080p gaming, no graphics card required. 6 Cores and 12 processing threads, bundled with the AMD Wraith Stealth cooler. 4.4 GHz Max Boost, unlocked for overclocking, 19 MB cache, DDR4-3200 support.",
    compatibilityBrands: "AMD",
    socket: "AM4",
    inOffer: true,
    percentageDiscount: 0.2, //20%
  };
  
  //   const dispatch = useDispatch();
  //   const { id } = useParams();

  //   useEffect(() => {
  //     dispatch(getProductDetail(id));
  //   }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  function discount() {
    let total = (ProductDetail.price - (ProductDetail.price * ProductDetail.percentageDiscount));
    return total
  };

  return (
    <div>
      <div>PRODUCT DETAILS</div>
      <div>
        <h1>{ProductDetail.name ? ProductDetail.name : null} </h1>
        <h3>{ProductDetail.stock ? `${ProductDetail.stock} in stock!` : null}</h3>
        <h2>U$D{ProductDetail.price ? ProductDetail.price : null}</h2>
        <h4>{ProductDetail.inOffer ? ProductDetail.inOffer : null}</h4>
        <h4>{ProductDetail.percentageDiscount && ProductDetail.price ? `BUYING TODAY ${discount()} U$D!` : null}</h4>
        <img
          src={ProductDetail.image ? ProductDetail.image : "main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq.jpg"}
          width="450px"
          height="400px"
          alt="image not found"
        />
        <p>{ProductDetail.description ? truncate(ProductDetail.description, 250) : null}</p>
      </div>
      <div>
        <h3>{ProductDetail.socket ? `Socket: ${ProductDetail.socket}` : null}</h3>
        <h3>{ProductDetail.weight ? `Weight: ${ProductDetail.weight}` : null}</h3>
        <h3>{ProductDetail.proportions ?  `Proportions: ${ProductDetail.proportions}` : null}</h3>
        <h3>{ProductDetail.wattsPowerSupply ? `Watts: ${ProductDetail.wattsPowerSupply}` : null}</h3>
        <h3>{ProductDetail.factorMother ? `Factor mother: ${ProductDetail.factorMother}` : null}</h3>
        <h3>{ProductDetail.ddr ? `DDR: ${ProductDetail.ddr}` : null}</h3>
        <h3>{ProductDetail.compatibilityBrands ? `Compatible with ${ProductDetail.compatibilityBrands}` : null}</h3>
      </div>
    </div>
  );
}

export default DetailProduct;