import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsByCategory } from "../../redux/actions";
import BoxCart from "../Cart/BoxCart";
import NavBar from "../NavBar/NavBar";
import Product from "../Product/Product";

function Intel() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.productsByCategory);

  useEffect(() => {
    dispatch(getProductsByCategory('cpu'));
  }, [dispatch]);

  return (
    <div className="h-screen bg-gradient-to-t from-primary-300 to-primary ">
      <NavBar />
      <p>Now, pick your cpu!</p>
      <div>
        <BoxCart />
      </div>
      <section>
        <div className="grid grid-cols-4 w-full gap-2.5 grid-rows-none relative">
          {allProducts.map((product) => {
            if (product.brand === "Intel")
              return (
                <Link to={`/products/${product.id}`}>
                  <Product key={product.id} product={product} />
                </Link>
              );
          })}
        </div>
      </section>
    </div>
  );
}

export default Intel;
