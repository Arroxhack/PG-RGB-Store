import React, { useState } from "react";
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
  //{CPU:{},Motherboard:{},GPU:{},Ram:{},'Power Supply':{},Case:{},SSD:{},HDD:{},'SSD M.2':{}}
  //algo asi se tendria que ver el build

  return (
    <div className="bg-primary-100">
      <NavBar />
      <div>
        {/* <Brands /> */}
        <pre>
          Your pc:<br/>
          <code>
            {selectedCPU} <br/>
            {selectedMother} <br/>
            {selectedRam} <br/>
            {selectedGPU} <br/>
            {selectedHDD} <br/>
            {selectedSSD} <br/>
            {selectedSSDM2} <br/>
            {selectedPSUS}<br/>
            {selectedCase}<br/>
          </code>
        </pre>
        <Selects
          name="CPU"
          handleChange={(e) => {
            setSelectedCPU(e.target.value);
          }}
        />

        <Selects
          name="Motherboard"
          handleChange={(e) => {
            setSelectedMother(e.target.value);
          }}
        />

        <Selects
          name="Ram"
          handleChange={(e) => {
            setSelectedRam(e.target.value);
          }}
        />
        <Selects
          name="GPU"
          handleChange={(e) => {
            setSelectedGPU(e.target.value);
          }}
        />
        <Selects
          name="HDD"
          handleChange={(e) => {
            setSelectedHDD(e.target.value);
          }}
        />
        <Selects
          name="SSD"
          handleChange={(e) => {
            setSelectedSSD(e.target.value);
          }}
        />
        <Selects
          name="SSD M.2"
          handleChange={(e) => {
            setSelectedSSDM2(e.target.value);
          }}
        />
        <Selects
          name="Power Supply"
          handleChange={(e) => {
            setSelectedPSUS(e.target.value);
          }}
        />
        <Selects
          name="Case"
          handleChange={(e) => {
            setSelectedCase(e.target.value);
          }}
        />
      </div>
      <button>Add to cart!</button>
    </div>
  );
}

export default Armado;
