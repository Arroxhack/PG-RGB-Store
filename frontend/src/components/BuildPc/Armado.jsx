import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";
import { CartContext } from "../Cart/CartContext";
import NavBar from "../NavBar/NavBar";
import Selects from "./Selects";

function Armado() {
  const [selectedCPU, setSelectedCPU] = useState([]);
  const [selectedMother, setSelectedMother] = useState([]);
  const [selectedRam, setSelectedRam] = useState([]);
  const [selectedGPU, setSelectedGPU] = useState([]);
  const [selectedHDD, setSelectedHDD] = useState([]);
  const [selectedSSD, setSelectedSSD] = useState([]);
  const [selectedSSDM2, setSelectedSSDM2] = useState([]);
  const [selectedPSUS, setSelectedPSUS] = useState([]);
  const [selectedCase, setSelectedCase] = useState([]);

  const [build,setBuild] = useState({
    "CPU": {},
     "Motherboard": {},
     "Ram": {},
     "GPU": {},
     "HDD": {},
     "SSD": {},
     "SSD M.2": {},
     "Power Supply":{},
     "Case": {},
   });

  const {addProductToCart, products, addProductsToCart} = useContext(CartContext);
  //verificar vacios 

  const sendCard = (e) => {
    e.preventDefault();
    let buildTotal = Object.values(build)
    console.log(buildTotal)
    for(let property in buildTotal){
      // console.log(property, buildTotal[property])
      addProductsToCart(buildTotal[property])
    }
    // addProductsToCart(buildTotal) // [{id:8, name: "ryzen"},{{id:8, name: "amd"}]
    console.log("productosFinal: ", products)
  };
  const dispatch = useDispatch();
// {
//   brand: "MSI"
//   category: ['Motherboard']
//   compatibilityBrands: "Intel"
//   ddr: 5
//   description: "Lightning Fast Game experience: PCIe 5.0 slots, Lightning Gen 4 x4 M.2, USB 3.2 Gen 2x2. Enhanced Power Design: Direct 18+1+1 phases power, dual 8-pin CPU power connectors, Core Boost, Memory Boost. "
//   dimensions: "304 mm x 243 mm"
//   factorMother: "ATX"
//   id: 4
//   image: (4) ['https://m.media-amazon.com/images/I/91g60mjR-8L._AC_SL1500_.jpg', 'https://http2.mlstatic.com/D_NQ_NP_712404-MLA48086467283_112021-O.webp', 'https://http2.mlstatic.com/D_NQ_NP_991506-MLA48086467284_112021-O.webp', 'https://http2.mlstatic.com/D_Q_NP_732851-MLA48086467282_112021-R.webp']
//   inOffer: false
//   name: "MOTHERBOARD MSI Z690 Force WiFi"
//   percentageDiscount: 0
//   price: 329.99
//   socket: "LGA1700"
//   stock: 2
//   wattsPowerSupply: null
//   weight: null
// }

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.allProducts);

  // console.log("build: ", build) 

  //console.log(products)

  return (
    <div className="bg-primary-100">
      <NavBar />
      <div>Your pc:</div>
      <div className="">
   
        <div>
          <Selects
            name="CPU"
            handleChange={(e) => {
              let valueArray = JSON.parse(e.target.value)
              setSelectedCPU(valueArray);
              setBuild({
                ...build,
                [e.target.name]:valueArray
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
              let valueArray = JSON.parse(e.target.value)
              setSelectedMother(valueArray);
              setBuild({
                ...build,
                [e.target.name]:valueArray
              })
            
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
              let valueArray = JSON.parse(e.target.value)
              setSelectedRam(valueArray);
              setBuild({
                ...build,
                [e.target.name]:valueArray
              })
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
              let valueArray = JSON.parse(e.target.value)
              setSelectedGPU(valueArray);
              setBuild({
                ...build,
                [e.target.name]:valueArray
              })
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
              let valueArray = JSON.parse(e.target.value)
              setSelectedHDD(valueArray);
              setBuild({
                ...build,
                [e.target.name]:valueArray
              })
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
              let valueArray = JSON.parse(e.target.value)
              setSelectedSSD(valueArray);
              setBuild({
                ...build,
                [e.target.name]:valueArray
              })
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
              let valueArray = JSON.parse(e.target.value)
              setSelectedSSDM2(valueArray);
              setBuild({
                ...build,
                [e.target.name]:valueArray
              })
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
              let valueArray = JSON.parse(e.target.value)
              setSelectedPSUS(valueArray);
              setBuild({
                ...build,
                [e.target.name]:valueArray
              })
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
              let valueArray = JSON.parse(e.target.value)
              setSelectedCase(valueArray);
              setBuild({
                ...build,
                [e.target.name]:valueArray
              })
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
