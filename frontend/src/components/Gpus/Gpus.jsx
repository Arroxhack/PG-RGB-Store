import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from '../NavBar/NavBar'
export default function () {

const gpus = useSelector(state => state.gpus)


  return (
    <div>
        <NavBar/>
        {}

    </div>
  )
}
