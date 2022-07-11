import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, buildPc } from "../../redux/actions";

function Selects({ name, handleChange }) {
  let id = `${name}`;
  let label = name.charAt(0).toUpperCase() + name.slice(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.allProducts);
  //console.log(allProducts);

  return (
    <div className="">
      <label
        className="p-2 mx-0 mb-2 mt-0 block font-Open font-bold leading-none"
        htmlFor={id}
      >
        {label}
      </label>
      <select
        className="border-solid rounded p-2 mx-0 mb-2 mt-0 block text-base leading-none bg-secundary-250 cursor-pointer"
        name={id}
        id={id}
        onChange={handleChange}
      >
        <option value="">Choose your {name}</option>
        {allProducts.map((p) => p.category[0] === `${name}` ? ( <option id={p.id} value={JSON.stringify(p)}> {p.name} </option>) : null
        )}
      </select>
    </div>
  );
}

export default Selects;
