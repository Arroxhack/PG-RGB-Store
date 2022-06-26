import React, { useState } from "react";
import Select from "react-select";

const EditProduct = () => {
  //#region INFORMACION DE LOS SELECT
  const customOffer = [
    { value: true, label: "Si" },
    { value: false, label: "No" },
  ];
  const customOptions = [
    { value: true, label: "Si" },
    { value: false, label: "No" },
  ];
  const brands = [
    { value: null, label: "No tiene" },
    { value: "AMD", label: "AMD" },
    { value: "INTEL", label: "INTEL" },
  ];
  const DDR = [
    { value: null, label: "No tiene" },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
  ];
  const AMD = [
    { value: null, label: "No tiene" },
    { value: "AM4", label: "AM4" },
  ];
  const INTEL = [
    { value: null, label: "No tiene" },
    { value: "LGA1200", label: "LGA1200" },
    { value: "LGA1700", label: "LGA1700" },
  ];
  const factor = [
    { value: null, label: "No tiene" },
    { value: "ATX", label: "ATX" },
    { value: "MICRO-ATX", label: "MICRO-ATX" },
  ];
  const [marca, setMarca] = useState(null);
  const [ddram, setDdram] = useState(null);
  const [factorMadre, setFactorMadre] = useState(null);
  const [offer, setOffer] = useState(false);
  const selectOption = ({ value }) => {
    setCustom(value);
  };
  const selectBrand = ({ value }) => {
    setMarca(value);
  };
  const selectDDR = ({ value }) => {
    setDdram(value);
  };
  const selectFactor = ({ value }) => {
    setFactorMadre(value);
  };
  const selectOffer = ({ value }) => {
    setOffer(value);
  };
  //#endregion

  const [custom, setCustom] = useState(false);

  const [cus, setCus] = useState({
    weight: null,
    dimensions: null,
    wattsPowerSupply: null,
    inOffer: false,
    porcentageDiscount: null,
  });

  const [peso, setPeso] = useState(null);
  const [dimensiones, setDimensiones] = useState(null);

  const selectCustom = (e) => {
    setCus((prevState) => {
      const newState = {
        ...prevState,
        [e.target.name]: e.target.value,
      };
      return newState;
    });
  };

  return (
    <div>
      <form>
        <Select
          placeholder="Caracteristicas avanzadas"
          onChange={selectOption}
          options={customOptions}
        />

        {custom ? <>
          <Select placeholder='Compatibilidad de marcas' name='brand' onChange={selectBrand} options={brands} />
      <Select placeholder='DDR' onChange={selectDDR} options={DDR}/>
      {marca !== null && <Select placeholder='Socket' options={marca==='AMD' ? AMD : INTEL}/>}
      <Select placeholder='Factor Mother' onChange={selectFactor} options={factor}/>
      <input type='number' value={cus.weight} name={'weight'} onChange={selectCustom} className='border' placeholder='Peso'/>
      <input type='string' value={cus.dimensions} name={'dimensions'} onChange={selectCustom} className='border' placeholder='Dimensiones'/>
      <input type='number' value={cus.wattsPowerSupply} name={'wattsPowerSupply'} onChange={selectCustom} className='border' placeholder='Power Watts'/>
      <Select placeholder='Oferta' onChange={selectOffer} options={customOffer}/>
      <input type='number' value={cus.porcentageDiscount} name={'porcentageDiscount'} onChange={selectCustom} className='border' placeholder='Porcentaje de descuento'/></> : <></>}

      </form>
    </div>
  );
};

export default EditProduct;
