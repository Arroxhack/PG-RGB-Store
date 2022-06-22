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
      <div class="text-white">PRODUCT DETAIL</div>
      <div class="container mx-auto px-20">
        <div class="border bg-primary-200 bg-opacity-50 rounded-lg p-6 text-gray-100 relative z-10">
          <div class="flex flex-wrap items-center">
            <div class="w-8/12 pr-4 relative">
              <img
                class="object-cover object-top rounded-lg bg-white"
                src={
                  ProductDetail.image
                    ? ProductDetail.image
                    : "1602010489_p_setting_fff_1_90_end_600.jpg"
                }
                width="450px"
                height="400px"
                alt="image not found"
              />
              <p class="font-bold font-Open text-xl">
                {ProductDetail.name ? ProductDetail.name : "ASUS PRIME B550M-K"}{" "}
              </p>
              <p>{ProductDetail.price ? ProductDetail.price : "U$D200"}</p>
              <p>{ProductDetail.inOffer ? ProductDetail.inOffer : null}</p>
              <p>
                {ProductDetail.percentageDiscount && ProductDetail.price
                  ? `BUYING TODAY ${discount()} U$D!`
                  : " BUYING TODAY U$D180"}
              </p>
              <p>
                {ProductDetail.stock
                  ? `${ProductDetail.stock} in stock!`
                  : "2 in stock!"}
              </p>
              <p class="text-xs leading-relaxed text-gray-50">
                {ProductDetail.description ? (
                  truncate(ProductDetail.description, 250)
                ) : (
                  <p>
                    La serie ASUS Prime está diseñada por expertos para liberar
                    todo el potencial de la plataforma AMD Ryzen de tercera
                    generación. Con un diseño de energía robusto, soluciones de
                    enfriamiento integrales y opciones de ajuste inteligentes,
                    las placas base de la serie Prime B550 brindan a los
                    usuarios diarios y a los constructores de PC DIY una gama de
                    opciones de ajuste del rendimiento a través de funciones de
                    software y firmware intuitivas.
                  </p>
                )}
              </p>
              <button class="w-full block text-center relative text-white font-bold text-sm bg-teal-800 px-4 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {" "}
        MORE DETAILS
        <p>
          {ProductDetail.socket
            ? `Socket: ${ProductDetail.socket}`
            : " Socket: AM4"}
        </p>
        <p>
          {ProductDetail.weight
            ? `Weight: ${ProductDetail.weight}`
            : "Weight: 200grs"}
        </p>
        <p>
          {ProductDetail.proportions? `Proportions: ${ProductDetail.proportions}` : "Proportions: 244 mm × 244 mm "}
        </p>
        <p>
          {ProductDetail.wattsPowerSupply
            ? `Watts: ${ProductDetail.wattsPowerSupply}`
            : "200WATTS"}
        </p>
        <p>
          {ProductDetail.factorMother
            ? `Factor mother: ${ProductDetail.factorMother}`
            : "Micro-ATX"}
        </p>
        <p>{ProductDetail.ddr ? `DDR: ${ProductDetail.ddr}` : "DDR: 4"}</p>
        <p>
          {ProductDetail.compatibilityBrands
            ? `Compatible with ${ProductDetail.compatibilityBrands}`
            : "Compatible with AMD"}
        </p>
      </div>
    </div>
  );
}

export default DetailProduct;
