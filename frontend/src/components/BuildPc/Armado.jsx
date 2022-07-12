import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";

import { CartContext, addBuildToCart } from "../Cart/CartContext";
import NavBar from "../NavBar/NavBar";
import Selects from "./Selects";

import cpu from ".//imagesBuild/cpu.svg";
import mother from ".//imagesBuild/mother.svg";
import ram from ".//imagesBuild/ram.svg";
import gpu from ".//imagesBuild/vga.svg";
import casee from ".//imagesBuild/case.svg";
import psu from ".//imagesBuild/psu.svg";
import ssd from ".//imagesBuild/ssd.svg";
import m2 from ".//imagesBuild/m2.svg";
import hdd from ".//imagesBuild/hdd.svg";
import { useNavigate } from "react-router";

function Armado() {
  const navigate = useNavigate();
  const [selectedCPU, setSelectedCPU] = useState([]);
  const [selectedMother, setSelectedMother] = useState([]);
  const [selectedRam, setSelectedRam] = useState([]);
  const [selectedGPU, setSelectedGPU] = useState([]);
  const [selectedHDD, setSelectedHDD] = useState([]);
  const [selectedSSD, setSelectedSSD] = useState([]);
  const [selectedSSDM2, setSelectedSSDM2] = useState([]);
  const [selectedPSUS, setSelectedPSUS] = useState([]);
  const [selectedCase, setSelectedCase] = useState([]);

  const [build, setBuild] = useState({
    CPU: {},
    Motherboard: {},
    Ram: {},
    GPU: {},
    HDD: {},
    SSD: {},
    "SSD M.2": {},
    "Power Supply": {},
    Case: {},
  });

  const { addArrayToCart } = useContext(CartContext);
  console.log(cpu)
  const sendCard = (e) => {
    e.preventDefault();
    const final = [
      selectedCPU,
      selectedMother,
      selectedRam,
      selectedGPU,
      selectedHDD,
      selectedSSD,
      selectedSSDM2,
      selectedPSUS,
      selectedCase,
    ].flat(99);
    localStorage.setItem("buildPc", JSON.stringify(final));
    console.log(final, "este");
    addArrayToCart(final);
    setBuild({
      CPU: {},
      Motherboard: {},
      Ram: {},
      GPU: {},
      HDD: {},
      SSD: {},
      "SSD M.2": {},
      "Power Supply": {},
      Case: {},
    });
    navigate("/cart");
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  console.log(selectedCPU)
  const allProducts = useSelector((state) => state.allProducts);

  return (
    <div>
      <NavBar />
      <div className="flex items-center bg-primary-200 justify-center py-8">
        <div className="">
          <div className="w-full absolute right-0 h-full">
            <div className="flex md:flex-row bg-primary-200 flex-col justify-end">
              <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-secundary-250 overflow-y-auto overflow-x-hidden h-screen">
                <p className="text-5xl font-black mb-10 font-Open leading-10 pt-3">
                  Choose your components
                </p>

                <div>
                  <div className="md:flex items-center mt-14 py-8 border-t border-primary-400">
                    <div className="w-1/5">
                      <img
                        src={selectedCPU.image ? selectedCPU.image[0] : cpu}
                        alt="Imagen"
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                      <div className="flex items-center justify-between w-full pt-1">
                        <Selects
                          name="CPU"
                          handleChange={(e) => {
                            let valueArray = JSON.parse(e.target.value);
                            setSelectedCPU(valueArray);
                            console.log(valueArray.id);
                            setBuild({
                              ...build,
                              [e.target.name]: valueArray,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="md:flex items-center mt-14 py-8 border-t border-primary-400">
                    <div className="w-1/5">
                      <img
                        src={selectedMother.image ? selectedMother.image[0] : mother}
                        alt="Imagen"
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                      <div className="flex items-center justify-between w-full pt-1">
                        <Selects
                          name="Motherboard"
                          handleChange={(e) => {
                            let valueArray = JSON.parse(e.target.value);
                            setSelectedMother(valueArray);
                            setBuild({
                              ...build,
                              [e.target.name]: valueArray,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="md:flex items-center mt-14 py-8 border-t border-primary-400">
                    <div className="w-1/5">
                      <img
                        src={selectedRam.image ? selectedRam.image[0] : ram}
                        alt="Imagen"
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                      <div className="flex items-center justify-between w-full pt-1">
                        <Selects
                          name="Ram"
                          handleChange={(e) => {
                            let valueArray = JSON.parse(e.target.value);
                            setSelectedRam(valueArray);
                            setBuild({
                              ...build,
                              [e.target.name]: valueArray,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="md:flex items-center mt-14 py-8 border-t border-primary-400">
                    <div className="w-1/5">
                      <img
                        src={selectedGPU.image ? selectedGPU.image[0] : gpu}
                        alt="Imagen"
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                      <div className="flex items-center justify-between w-full pt-1">
                        <Selects
                          name="GPU"
                          handleChange={(e) => {
                            let valueArray = JSON.parse(e.target.value);
                            setSelectedGPU(valueArray);
                            setBuild({
                              ...build,
                              [e.target.name]: valueArray,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="md:flex items-center mt-14 py-8 border-t border-primary-400">
                    <div className="w-1/5">
                      <img
                        src={selectedHDD.image ? selectedHDD.image[0] : hdd}
                        alt="Imagen"
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                      <div className="flex items-center justify-between w-full pt-1">
                        <Selects
                          name="HDD"
                          handleChange={(e) => {
                            let valueArray = JSON.parse(e.target.value);
                            setSelectedHDD(valueArray);
                            setBuild({
                              ...build,
                              [e.target.name]: valueArray,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="md:flex items-center mt-14 py-8 border-t border-primary-400">
                    <div className="w-1/5">
                      <img
                        src={selectedSSD.image ? selectedSSD.image[0] : ssd}
                        alt="Imagen"
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                      <div className="flex items-center justify-between w-full pt-1">
                        <Selects
                          name="SSD"
                          handleChange={(e) => {
                            let valueArray = JSON.parse(e.target.value);
                            setSelectedSSD(valueArray);
                            setBuild({
                              ...build,
                              [e.target.name]: valueArray,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="md:flex items-center mt-14 py-8 border-t border-primary-400">
                    <div className="w-1/5">
                      <img
                        src={selectedSSDM2.image ? selectedSSDM2.image[0] : m2}
                        alt="Imagen"
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                      <div className="flex items-center justify-between w-full pt-1">
                        <Selects
                          name="SSD M.2"
                          handleChange={(e) => {
                            let valueArray = JSON.parse(e.target.value);
                            setSelectedSSDM2(valueArray);
                            setBuild({
                              ...build,
                              [e.target.name]: valueArray,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="md:flex items-center mt-14 py-8 border-t border-primary-400">
                    <div className="w-1/5">
                      <img
                        src={selectedPSUS.image ? selectedPSUS.image[0] : psu}
                        alt="Imagen"
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                      <div className="flex items-center justify-between w-full pt-1">
                        <Selects
                          name="Power Supply"
                          handleChange={(e) => {
                            let valueArray = JSON.parse(e.target.value);
                            setSelectedPSUS(valueArray);
                            setBuild({
                              ...build,
                              [e.target.name]: valueArray,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="md:flex items-center mt-14 py-8 border-t border-primary-400">
                    <div className="w-1/5">
                      <img
                        src={selectedCase.image ? selectedCase.image[0] : casee}
                        alt="Imagen"
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                      <div className="flex items-center justify-between w-full pt-1">
                        <Selects
                          name="Case"
                          handleChange={(e) => {
                            let valueArray = JSON.parse(e.target.value);
                            setSelectedCase(valueArray);
                            setBuild({
                              ...build,
                              [e.target.name]: valueArray,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full font-Open h-full">
                <div className="flex flex-col md:h-screen px-14 py-20 justify-between font-Open overflow-y-auto">
                  <div>
                    <p className="text-4xl font-black mb-10 text-secundary-250 leading-9 font-Open">
                      Your pc
                    </p>

                    <div>
                      <li className="text-secundary-250 font-Open">
                        {selectedCPU.name}
                      </li>
                      <li className="text-secundary-250 font-Open">
                        {selectedMother.name}
                      </li>
                      <li className="text-secundary-250 font-Open">
                        {selectedRam.name}
                      </li>
                      <li className="text-secundary-250 font-Open">
                        {selectedGPU.name}
                      </li>
                      <li className="text-secundary-250 font-Open">
                        {selectedHDD.name}
                      </li>
                      <li className="text-secundary-250 font-Open">
                        {selectedSSD.name}
                      </li>
                      <li className="text-secundary-250 font-Open">
                        {selectedSSDM2.name}
                      </li>
                      <li className="text-secundary-250 font-Open">
                        {selectedPSUS.name}
                      </li>
                      <li className="text-secundary-250 font-Open">
                        {selectedCase.name}
                      </li>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={sendCard}
                      className="w-full text-center py-3 rounded bg-primary-400 text-white hover:bg-primary-300 focus:outline-none my-1"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Armado;
