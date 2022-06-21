import React from "react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../redux/actions/index";
import Product from "../Product/Product";
import SideBar from "./SideBar/SideBar";


function home() {

const dispatch = useDispatch(); 
const allProducts = useSelector(state => state.allProducts);

useEffect(() => {
  dispatch(getAllProducts())
}, [dispatch])

  return(
    <div>
      <SideBar/>
      {allProducts.map(product => {
        return(
          <Product
            key={product.id}
            product={product}
          /> 
        )
      })}
    </div> 
  ); 
}

export default home;
