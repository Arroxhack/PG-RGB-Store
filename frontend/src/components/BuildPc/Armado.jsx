import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";
import { CartContext } from "../Cart/CartContext";
import NavBar from "../NavBar/NavBar";
import Selects from "./Selects";

function Armado() {
  const [selectedCPU, setSelectedCPU] = useState();
  const [selectedMother, setSelectedMother] = useState();
  const [selectedRam, setSelectedRam] = useState();
  const [selectedGPU, setSelectedGPU] = useState();
  const [selectedHDD, setSelectedHDD] = useState();
  const [selectedSSD, setSelectedSSD] = useState();
  const [selectedSSDM2, setSelectedSSDM2] = useState();
  const [selectedPSUS, setSelectedPSUS] = useState();
  const [selectedCase, setSelectedCase] = useState();
  const { addProductToCart } = useContext(CartContext);
  //{CPU:{},Motherboard:{},GPU:{},Ram:{},'Power Supply':{},Case:{},SSD:{},HDD:{},'SSD M.2':{}}
  //algo asi se tendria que ver el build
  const sendCard = (e) => {
    e.preventDefault();
    addProductToCart();
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.allProducts);
  console.log(selectedCPU)
  return (
    <div className="bg-primary-100">
      <NavBar />
      <div>
        {/* <Brands /> */}
        <div>
          Your pc:
          <br />
        </div>
        <Selects
          name="CPU"
          handleChange={(e) => {
            setSelectedCPU(e.target.value);
          }}
        />
        <div> {selectedCPU} </div>
        <img
          alt="image not found"
          src={allProducts.map((p) =>
            p === { selectedCPU } ? p.image[0] : null
          )}
        />
        <br />
        <Selects
          name="Motherboard"
          handleChange={(e) => {
            setSelectedMother(e.target.value);
          }}
        />
        {selectedMother} <br />
        <Selects
          name="Ram"
          handleChange={(e) => {
            setSelectedRam(e.target.value);
          }}
        />
        {selectedRam} <br />
        <Selects
          name="GPU"
          handleChange={(e) => {
            setSelectedGPU(e.target.value);
          }}
        />
        {selectedGPU} <br />
        <Selects
          name="HDD"
          handleChange={(e) => {
            setSelectedHDD(e.target.value);
          }}
        />
        {selectedHDD} <br />
        <Selects
          name="SSD"
          handleChange={(e) => {
            setSelectedSSD(e.target.value);
          }}
        />
        {selectedSSD} <br />
        <Selects
          name="SSD M.2"
          handleChange={(e) => {
            setSelectedSSDM2(e.target.value);
          }}
        />
        {selectedSSDM2} <br />
        <Selects
          name="Power Supply"
          handleChange={(e) => {
            setSelectedPSUS(e.target.value);
          }}
        />
        {selectedPSUS}
        <br />
        <Selects
          name="Case"
          handleChange={(e) => {
            setSelectedCase(e.target.value);
          }}
        />
        {selectedCase}
        <br />
      </div>
      <button
        onClick={sendCard}
        className="w-full text-center py-3 rounded bg-primary-400 text-white hover:bg-primary-300 focus:outline-none my-1"
      >
        Add to cart
      </button>
    </div>
  );
}

export default Armado;
