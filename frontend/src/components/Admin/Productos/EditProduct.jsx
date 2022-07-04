import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductDetail,
  clean,
  getAllCategories,
  createProduct,
  editProduct,
} from "../../../redux/actions";
import Select from "react-select";

const EditProduct = ({id}) => {
  //#region DISPATCH Y BUSQUEDA DE PRODUCTOS
  let product = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  console.log(id, 'ACA MIRAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
  useEffect(() => {
    dispatch(getProductDetail(Number(id)));
    dispatch(clean())
  }, [dispatch]);

  //#endregion

  //#region FORM
  //#region CATEGORIAS + OPTIONS CATEGORIAS
  const categorias = useSelector((state) => state.categories);
  const allCategory = [...categorias, "Otro"];
  const options = allCategory.map((c) => {
    return { value: c, label: c };
  });
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  const [category, setCategory] = useState(null);
  const handleSelect = ({ value }) => {
    setCategory(value);
  };
  //#endregion

  //#region useState formOne
  const [formOne, setFormOne] = useState({
    id: "",
    name: "",
    price: "",
    stock: "",
    brand: "",
    description: "",
    image: [],
    category: "",
  });
  //#endregion

  //#region handleFormOne
  const handleFormOne = (e) => {
    setFormOne((prevState) => {
      const newState = {
        ...prevState,
        [e.target.name]: e.target.value,
      };
      setErrorOne(validate(newState));
      return newState;
    });
  };
  //#endregion
  //#endregion

  //#region IMAGEN
  const Upload = (arch) => {
    Array.from(arch).forEach((a) => {
      let reader = new FileReader();
      reader.readAsDataURL(a);
      reader.onload = () => {
        formOne.image = [...formOne.image, reader.result];
      };
    });
  };
  //#endregion
  //#region handleProduct + setSelect

  const handleProduct = ({ value }) => {
    dispatch(getProductDetail(value));
    dispatch(clean());
  };
  useEffect(() => {
    const cat = product.category;
    setCategory(cat);
    setFormOne((prevState) => {
      const newState = {
        ...prevState,
        id: product.id,
        name: product.name,
        price: product.price,
        stock: product.stock,
        brand: product.brand,
        description: product.description,
        image: product.image,
      };
      return newState;
    });
  }, [product]);

  //#endregion

  //#region MANEJO DE ERRORES
  const [errorOne, setErrorOne] = useState({
    name: false,
    price: false,
    stock: false,
    brand: false,
    description: false,
    category: false,
  });
  useEffect(() => {
    setErrorOne(() => {
      const newState = {
        name: product.name ? true : false,
        price: product.price ? true : false,
        stock: product.stock ? true : false,
        brand: product.brand ? true : false,
        description: product.description ? true : false,
        category: product.category ? true : false,
      };
      return newState;
    });
  }, [product]);

  const validate = (state) => {
    const ERROR = {};
    //#region NOMBRE
    if (!state.name) {
      ERROR.name = false;
    } else if (!/^[A-Za-z0-9\W\s][^@=&]+$/.test(state.name)) {
      ERROR.name = false;
    } else {
      ERROR.name = true;
    }
    //#endregion
    //#region PRICE
    if (!state.price) {
      ERROR.price = false;
    } else if (!/[0-9,]+$/.test(state.price)) {
      ERROR.price = false;
    } else {
      ERROR.price = true;
    }
    //#endregion
    //#region STOCK
    if (!state.stock) {
      ERROR.stock = false;
    } else if (!/^\d+$/.test(state.stock)) {
      ERROR.stock = false;
    } else {
      ERROR.stock = true;
    }
    //#endregion
    //#region BRAND
    if (!state.brand) {
      ERROR.brand = false;
    } else if (!/^[A-Za-z0-9\W\s][^@=&]+$/.test(state.brand)) {
      ERROR.brand = false;
    } else {
      ERROR.brand = true;
    }
    //#endregion
    //#region DESCRIPTION
    if (!state.description) {
      ERROR.description = false;
    } else if (!/^[A-Za-z0-9\W\s][^@=&]+$/.test(state.description)) {
      ERROR.description = false;
    } else {
      ERROR.description = true;
    }
    //#endregion
    //#region CATEG0RY
    if (!state.category) {
      ERROR.category = false;
    } else if (!/^[A-Za-z0-9\W\s][^@=&]+$/.test(state.category)) {
      ERROR.category = false;
    } else {
      ERROR.category = true;
    }
    return ERROR;
  };
  //#endregion

  //#endregion

  //#region FORM CUSTOM

  //#region ARRAY OPTIONS
  const customOffer = [
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
  //#endregion
  //#region useState + setState SELECT
  const [marca, setMarca] = useState(null);
  const [ddram, setDdram] = useState(null);
  const [factorMadre, setFactorMadre] = useState(null);
  const [offer, setOffer] = useState(false);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setMarca(product.compatibilityBrands);
    setDdram(product.ddr);
    setSocket(product.socket);
    setFactorMadre(product.factorMother);
    setOffer(product.inOffer);
  }, [product]);
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
  const selectSocket = ({ value }) => {
    setSocket(value);
  };
  //#endregion
  //#region useState + setState INPUT

  const [cus, setCus] = useState({
    weight: null,
    dimensions: null,
    wattsPowerSupply: null,
    percentageDiscount: null,
    inOffer: null,
  });

  useEffect(() => {
    setCus(() => {
      const newState = {
        weight: product.weight,
        dimensions: product.dimensions,
        wattsPowerSupply: product.wattsPowerSupply,
        percentageDiscount: product.percentageDiscount,
        inOffer: product.inOffer,
      };
      return newState;
    });
  }, [product]);
  const selectCustom = (e) => {
    setCus((prevState) => {
      const newState = {
        ...prevState,
        [e.target.name]: e.target.value,
      };
      return newState;
    });
  };
  //#endregion
  //#endregion

  const newProduct = {
    id: formOne.id,
    name: formOne.name,
    price: formOne.price,
    stock: formOne.stock,
    brand: formOne.brand,
    description: formOne.description,
    image: formOne.image,
    category: category !== "Otro" ? [category] : [formOne.category],
    // OPCIONES CUSTOM
    weight: cus.weight,
    dimensions: cus.dimensions,
    wattsPowerSupply: cus.wattsPowerSupply,
    percentageDiscount: cus.percentageDiscount,
    // SELECT
    compatibilityBrands: marca,
    ddr: ddram,
    socket: socket,
    factorMother: factorMadre,
    inOffer: offer,
  };

  const onSend = (e) => {
    e.preventDefault();
    dispatch(editProduct(newProduct));
    dispatch(clean());
  };

  return (
    <div>
      {product.id && (
        <form className="flex flex-col items-center gap-8 mb-10 mt-10">
          <div className="flex flex-col pl-10 gap-5">
            <div>
              {/* CATEGORIA */}
              <h2 className="ml-10 font-bold font-Open">{`Category: ${product.category}`}</h2>
              <div className="ml-5 flex flex-col gap-3">
                <Select
                  className="rounded-md placeholder:text-center text-center h-8 text-xl w-full mb-3"
                  onChange={handleSelect}
                  options={options}
                  defaultValue={{
                    value: product.category[0],
                    label: product.category[0],
                  }}
                />
                {category === "Otro" ? (
                  <div className="flex flex-row gap-4 items-center">
                    <input
                      className="border rounded-md placeholder:text-center text-center h-8 text-xl w-full"
                      type="text"
                      name="category"
                      value={formOne.category}
                      onChange={handleFormOne}
                      placeholder="Nueva categoría"
                    />
                    <div>
                      {errorOne.category ? <div>✅</div> : <div>❌</div>}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div>
              {/* NOMBRE */}
              <h2 className="ml-10 font-bold font-Open">{`Name: ${product.name}`}</h2>
              <div className="flex flex-row gap-4 ml-5 items-center">
                <input
                  className="border rounded-md placeholder:text-center text-center h-8 text-xl w-full"
                  type="text"
                  name="name"
                  value={formOne.name}
                  onChange={handleFormOne}
                  placeholder="Name"
                />
                {errorOne.name ? <div>✅</div> : <div>❌</div>}
              </div>
            </div>

            <div>
              {/* PRECIO */}
              <h2 className="ml-10 font-bold font-Open">{`Price: $${product.price}`}</h2>
              <div className="flex flex-row gap-4 ml-5 items-center">
                <input
                  className="border rounded-md placeholder:text-center text-center h-8 text-xl w-full"
                  type="number"
                  name="price"
                  value={formOne.price}
                  onChange={handleFormOne}
                  placeholder="Precio"
                />
                {errorOne.price ? <div>✅</div> : <div>❌</div>}
              </div>
            </div>

            <div>
              {/* STOCK */}
              <h2 className="ml-10 font-bold font-Open">{`Stock: ${product.stock}`}</h2>
              <div className="flex flex-row gap-4 ml-5 items-center">
                <input
                  className="border rounded-md placeholder:text-center text-center h-8 text-xl w-full"
                  type="number"
                  name="stock"
                  value={formOne.stock}
                  onChange={handleFormOne}
                  placeholder="Stock"
                />
                {errorOne.stock ? <div>✅</div> : <div>❌</div>}
              </div>
            </div>

            <div>
              {/* DESCRIPCION */}
              <h2 className="ml-10 font-bold font-Open">{`Description:`}</h2>
              <div className="flex flex-row gap-4 ml-5 items-center">
                <textarea
                  className="border rounded-md placeholder:text-center resize-y h-48 text-xl w-full"
                  name="description"
                  value={formOne.description}
                  onChange={handleFormOne}
                  placeholder="Descripcion"
                />
                {errorOne.description ? <div>✅</div> : <div>❌</div>}
              </div>
            </div>

            <div>
              {/* IMAGEN */}
              <h2 className="ml-10 font-bold font-Open">{`Image:`}</h2>
              <div className="flex flex-row ml-10 gap-5 my-3">
                {product.image.map((i) => {
                  return (
                    <img
                      key={i}
                      src={i}
                      alt="image not found"
                      className="h-36 w-24"
                    />
                  );
                })}
              </div>
              <div className="flex flex-row gap-4 ml-5 items-center">
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={(e) => Upload(e.target.files)}
                  multiple
                />
              </div>
            </div>

            <div>
              {/* MARCA */}
              <h2 className="ml-10 font-bold font-Open">{`Brand: ${product.brand}`}</h2>
              <div className="flex flex-row gap-4 ml-5 items-center">
                <input
                  className="border rounded-md placeholder:text-center text-center h-8 text-xl w-full"
                  type="text"
                  name="brand"
                  value={formOne.brand}
                  onChange={handleFormOne}
                  placeholder="Marca"
                />
                {errorOne.brand ? <div>✅</div> : <div>❌</div>}
              </div>
            </div>

            {/* OPCIONES CUSTOM */}
            <div>
              <h2 className="ml-10 font-bold font-Open">{`Compatibilty brand: ${product.compatibilityBrands}`}</h2>
              <Select
                className="rounded-md placeholder:text-center text-center h-8 text-xl w-full mb-3"
                placeholder="Compatibilidad de marcas"
                name="brand"
                onChange={selectBrand}
                options={brands}
                defaultValue={{
                  value: product.compatibilityBrands,
                  label: product.compatibilityBrands,
                }}
              />
            </div>

            <div>
              <h2 className="ml-10 font-bold font-Open">{`DDR: ${product.ddr}`}</h2>
              <Select
                className="rounded-md placeholder:text-center text-center h-8 text-xl w-full mb-3"
                placeholder="DDR"
                onChange={selectDDR}
                options={DDR}
                defaultValue={{ value: product.ddr, label: product.ddr }}
              />
            </div>

              {marca !== null && (
                <div>
                  <h2 className="ml-10 font-bold font-Open">{`Socket: ${product.socket}`}</h2>
                <Select
                  defaultValue={{
                    value: product.socket,
                    label: product.socket,
                  }}
                  className="rounded-md placeholder:text-center text-center h-8 text-xl w-full mb-3"
                  placeholder="Socket"
                  onChange={selectSocket}
                  options={marca === "AMD" ? AMD : INTEL}
                />
                </div>
              )}
              <h2 className="ml-10 font-bold font-Open">{`Factor: ${product.factorMother}`}</h2>
              <Select
                defaultValue={{
                  value: product.factorMother,
                  label: product.factorMother,
                }}
                className="rounded-md placeholder:text-center text-center h-8 text-xl w-full mb-3"
                placeholder="Factor Mother"
                onChange={selectFactor}
                options={factor}
              />

            <div>
              <h2 className="ml-10 font-bold font-Open">{`Weight: ${product.weight}`}</h2>
              <input
                type="number"
                value={cus.weight}
                name={"weight"}
                onChange={selectCustom}
                className="border rounded-md placeholder:text-center text-center h-8 text-xl w-full"
                placeholder="Peso"
              />
            </div>

            <div>
              <h2 className="ml-10 font-bold font-Open">{`Dimensions: ${product.dimensions}`}</h2>
              <input
                type="string"
                value={cus.dimensions}
                name={"dimensions"}
                onChange={selectCustom}
                className="border rounded-md placeholder:text-center text-center h-8 text-xl w-full"
                placeholder="Dimensiones"
              />
            </div>

            <div>
              <h2 className="ml-10 font-bold font-Open">{`Watts: ${product.wattsPowerSupply}`}</h2>
              <input
                type="number"
                value={cus.wattsPowerSupply}
                name={"wattsPowerSupply"}
                onChange={selectCustom}
                className="border rounded-md placeholder:text-center text-center h-8 text-xl w-full"
                placeholder="Power Watts"
              />
            </div>

            <div>
              <h2 className="ml-10 font-bold font-Open">{`Offer: ${product.inOffer}`}</h2>
              <Select
                defaultValue={{
                  value: product.inOffer,
                  label: product.inOffer,
                }}
                className="rounded-md placeholder:text-center text-center h-8 text-xl w-full mb-3"
                placeholder="Oferta"
                onChange={selectOffer}
                options={customOffer}
              />
            </div>

            <div>
              <h2 className="ml-10 font-bold font-Open">{`Discount: ${product.percentageDiscount}%`}</h2>
              <input
                type="number"
                value={cus.percentageDiscount}
                name={"percentageDiscount"}
                onChange={selectCustom}
                className="border rounded-md placeholder:text-center text-center h-8 text-xl w-full"
                placeholder="Porcentaje de descuento"
              />
            </div>
          </div>

          {errorOne.name &&
            errorOne.price &&
            formOne.image.length >= 1 &&
            errorOne.stock &&
            errorOne.brand &&
            errorOne.description && (
              <button
                className="rounder-xl col-start-1 col-end-3 h-8 text-xl w-36 bg-primary-300 text-primary-200 hover:bg-primary hover:border rounded-md"
                onClick={onSend}
              >
                ENVIAR
              </button>
            )}
        </form>
      )}
    </div>
  );
};

export default EditProduct;
