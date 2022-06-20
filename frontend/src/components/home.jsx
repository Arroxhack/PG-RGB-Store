import React from "react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllComponents} from "../redux/actions/index"

function home() {

const dispatch = useDispatch(); 
const allComponents = useSelector(state => state.allComponents);

useEffect(() => {
  dispatch(getAllComponents())
}, [dispatch])



  return(
    <div>Hola Soy Tino</div> 
  ); 
}

export default home;
