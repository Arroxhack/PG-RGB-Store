import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";
import { CartContext } from "../Cart/CartContext";
import NavBar from "../NavBar/NavBar";
import Selects from "./Selects";

function Armado({product}) {
  const [selectedCPU, setSelectedCPU] = useState([]);
  const [selectedMother, setSelectedMother] = useState([]);
  const [selectedRam, setSelectedRam] = useState([]);
  const [selectedGPU, setSelectedGPU] = useState([]);
  const [selectedHDD, setSelectedHDD] = useState([]);
  const [selectedSSD, setSelectedSSD] = useState([]);
  const [selectedSSDM2, setSelectedSSDM2] = useState([]);
  const [selectedPSUS, setSelectedPSUS] = useState([]);
  const [selectedCase, setSelectedCase] = useState([]);

  const [build,setBuild]=useState({});

  const { addProductToCart } = useContext(CartContext);
  //{CPU:{},Motherboard:{},GPU:{},Ram:{},'Power Supply':{},Case:{},SSD:{},HDD:{},'SSD M.2':{}}
  //algo asi se tendria que ver el build
  const sendCard = (e) => {
    e.preventDefault();
    addProductToCart(product);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.allProducts);

  console.log(build) 
  

  return (
    <div className="bg-primary-100">
      <NavBar />
      <div>Your pc:</div>
      <div className="">
   
        <div>
          <Selects
            name="CPU"
            handleChange={(e) => {
              let valueArray = e.target.value;
              setSelectedCPU(JSON.parse(valueArray));
              setBuild({
                ...build,
                [e.target.name]:e.target.value
              })
            }}
          />
         <div>{selectedCPU.name}</div>
          <img
            alt="image not found"
            width={100}
            src={selectedCPU.image ? selectedCPU.image[0] : "https://cdn.pixabay.com/photo/2017/07/09/20/48/cpu-2488091_960_720.png"}
          />
        </div>
        <div>
          <Selects
            name="Motherboard"
            handleChange={(e) => {
              let valueArray = e.target.value;
              setSelectedMother(JSON.parse(valueArray));
            
            }}
          />

          <div>{selectedMother.name}</div>
          <img
            alt="image not found"
            width={100}
            src={selectedMother.image ? selectedMother.image[0] : "https://kawaiistore.com.sv/wp-content/uploads/2020/05/1-41-512.png" }
          />
        </div>
        <div>
          <Selects
            name="Ram"
            handleChange={(e) => {
              let valueArray = e.target.value;
              setSelectedRam(JSON.parse(valueArray));
            }}
          />
          <div>{selectedRam.name}</div>
          <img
            alt="image not found"
            width={100}
            src={selectedRam.image ? selectedRam.image[0] : "https://d30y9cdsu7xlg0.cloudfront.net/png/32078-200.png"}
          />
        </div>

        <div>
          <Selects
            name="GPU"
            handleChange={(e) => {
              let valueArray = e.target.value;
              setSelectedGPU(JSON.parse(valueArray));
            }}
          />

          <div>{selectedGPU.name}</div>
          <img
            alt="image not found"
            width={100}
            src={selectedGPU.image ? selectedGPU.image[0] : "https://static.thenounproject.com/png/636353-200.png"}
          />
        </div>

        <div>
          <Selects
            name="HDD"
            handleChange={(e) => {
              let valueArray = e.target.value;
              setSelectedHDD(JSON.parse(valueArray));
            }}
          />

          <div>{selectedHDD.name}</div>
          <img
            alt="image not found"
            width={100}
            src={selectedHDD.image ? selectedHDD.image[0] : "https://www.pngrepo.com/download/173555/hard-drive.png"}
          />
        </div>

        <div>
          <Selects
            name="SSD"
            handleChange={(e) => {
              let valueArray = e.target.value;
              setSelectedSSD(JSON.parse(valueArray));
            }}
          />

          <div>{selectedSSD.name}</div>
          <img
            alt="image not found"
            width={100}
            src={selectedSSD.image ? selectedSSD.image[0] : "https://cdn-icons-png.flaticon.com/512/64/64199.png"}
          />
        </div>

        <div>
          <Selects
            name="SSD M.2"
            handleChange={(e) => {
              let valueArray = e.target.value;
              setSelectedSSDM2(JSON.parse(valueArray));
            }}
          />

          <div>{selectedSSDM2.name}</div>
          <img
            alt="image not found"
            width={100}
            src={selectedSSDM2.image ? selectedSSDM2.image[0] : "https://cdn1.iconfinder.com/data/icons/hardware-gliph/48/hardware-computer-electronic-ssd-m2-drive-storage-data-512.png"}
          />
        </div>

        <div>
          <Selects
            name="Power Supply"
            handleChange={(e) => {
              let valueArray = e.target.value;
              setSelectedPSUS(JSON.parse(valueArray));
            }}
          />

          <div>{selectedPSUS.name}</div>
          <img
            alt="image not found"
            width={100}
            src={selectedPSUS.image ? selectedPSUS.image[0] : "https://cdn-icons-png.flaticon.com/512/1470/1470137.png"}
          />
        </div>

        <div>
          <Selects
            name="Case"
            handleChange={(e) => {
              let valueArray = e.target.value;
              setSelectedCase(JSON.parse(valueArray));
            }}
          />
          <div>{selectedCase.name}</div>
          <img
            alt="image not found"
            width={100}
            src={selectedCase.image ? selectedCase.image[0] : "https://static.thenounproject.com/png/403047-200.png"}
          />
        </div>
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
