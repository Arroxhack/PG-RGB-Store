import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../redux/actions/index";
import Product from "../Product/Product";
import SideBar from "../SideBar/SideBar";

function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <SideBar />
      {allProducts.map((product) => {
        return (
          <Link to={`/products/${product.id}`}>
            <Product key={product.id} product={product} />
          </Link>
        );
      })}
    </div>
  );
}

export default Home;
