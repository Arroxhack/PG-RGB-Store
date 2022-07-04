import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, createProduct } from "../../../redux/actions";
import Select from 'react-select'

const CreateProduct = () => {
  //#region PRIMER PARTE DE FORM
  //#region CATEGORIAS + OPTIONS CATEGORIAS
  const categorias = useSelector((state) => state.categories);
  const allCategory = [...categorias, "Otro"];
  const options = allCategory.map((c) => {
    return { value: c, label: c };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch])
  const [category, setCategory] = useState(null)
  const handleSelect = ({value})=>{
    setCategory(value)
  }
  //#endregion

  //#region useState formOne
  const [formOne,setFormOne] = useState({
    name:'',
    price:'',
    stock:'',
    brand:'',
    description:'',
    image:[],
  })
  //#endregion

  //#region IMAGEN
  const Upload = (arch)=>{
    Array.from(arch).forEach(a=>{
      let reader = new FileReader()
      reader.readAsDataURL(a)
      reader.onload= ()=>{
        formOne.image=[...formOne.image, reader.result]
      }
    })
  }
  //#endregion
  
  //#region MANEJO DE ERRORES
  const [errorOne, setErrorOne]=useState({
    name:false,
    price:false,
    stock:false,
    brand:false,
    description:false,
    category:false
  })

  const validate = (state)=>{
    const ERROR={}
    //#region NOMBRE
    if(!state.name){
        ERROR.name= false
    } else if(!/^[A-Za-z0-9\W\s][^@=&]+$/.test(state.name)){
        ERROR.name= false
    } else {
        ERROR.name = true
    }
    //#endregion
    //#region PRICE
    if(!state.price){
        ERROR.price= false
    } else if(!/[0-9,]+$/.test(state.price)){
        ERROR.price= false
    } else {
        ERROR.price = true
    }
    //#endregion
    //#region STOCK
        if(!state.stock){
            ERROR.stock= false
        } else if(!/^\d+$/.test(state.stock)){
            ERROR.stock= false
        } else {
            ERROR.stock = true
        }
        //#endregion
    //#region BRAND
    if(!state.brand){
        ERROR.brand= false
    } else if(!/^[A-Za-z0-9\W\s][^@=&]+$/.test(state.brand)){
        ERROR.brand= false
    } else {
        ERROR.brand = true
    } 
    //#endregion
    //#region DESCRIPTION
    if(!state.description){
        ERROR.description= false
    } else if(!/^[A-Za-z0-9\W\s][^@=&]+$/.test(state.description)){
        ERROR.description= false
    } else {
        ERROR.description = true
    } 
    //#endregion
    //#region CATEG0RY
        if(!state.category){
          ERROR.category= false
      } else if(!/^[A-Za-z0-9\W\s][^@=&]+$/.test(state.category)){
          ERROR.category= false
      } else {
          ERROR.category = true
      }
    return ERROR;
  }
  //#endregion

  //#region handleFormOne
  const handleFormOne = (e)=>{
    setFormOne(prevState=>{
      const newState ={
        ...prevState,
        [e.target.name]:e.target.value
      }
    setErrorOne(validate(newState))
      return newState
    })
  }
  //#endregion
  //#endregion

  //#region FORM CUSTOM
  //#region SET CUSTOM
  const [custom, setCustom] = useState(false)
  const selectOption = ({ value }) => {
    setCustom(value);
  };
  const customOptions = [
    { value: true, label: "Si" },
    { value: false, label: "No" },
  ];
  //#endregion
  //#region ARRAY OPTIONS
  const customOffer = [
    { value: true, label: "Si" },
    { value: false, label: "No" },
  ];
  const brands = [
    { value: null, label: "No tiene" },
    { value: "AMD", label: "AMD" },
    { value: "INTEL", label: "INTEL" },
  ];
  const DDR = [
    { value: null, label: "No tiene" },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
  ];
  const AMD = [
    { value: null, label: "No tiene" },
    { value: "AM4", label: "AM4" },
  ];
  const INTEL = [
    { value: null, label: "No tiene" },
    { value: "LGA1200", label: "LGA1200" },
    { value: "LGA1700", label: "LGA1700" },
  ];
  const factor = [
    { value: null, label: "No tiene" },
    { value: "ATX", label: "ATX" },
    { value: "MICRO-ATX", label: "MICRO-ATX" },
  ];
  //#endregion
  //#region useState + setState SELECT
  const [marca, setMarca] = useState(null);
  const [ddram, setDdram] = useState(null);
  const [factorMadre, setFactorMadre] = useState(null);
  const [offer, setOffer] = useState(false);
  const [socket, setSocket]=useState(null)

  const selectBrand = ({ value }) => {
    setMarca(value);
  };
  const selectDDR = ({ value }) => {
    setDdram(value);
  };
  const selectFactor = ({ value }) => {
    setFactorMadre(value);
  };
  const selectOffer = ({ value }) => {
    setOffer(value);
  };
  const selectSocket = ({value})=>{
    setSocket(value)
  }
  //#endregion
  //#region useState + setState INPUT
  
  const [cus, setCus] = useState({
    weight: null,
    dimensions: null,
    wattsPowerSupply: null,
    percentageDiscount: 0,
  });
  const selectCustom = (e) => {
    setCus((prevState) => {
      const newState = {
        ...prevState,
        [e.target.name]: e.target.value,
      };
      return newState;
    });
  };  
  //#endregion
  //#endregion

  const newProduct={
    name:formOne.name,
    price:formOne.price,
    stock:formOne.stock,
    brand:formOne.brand,
    description:formOne.description,
    image:formOne.image,
    category: category!=='Otro'? [category] : [formOne.category],
    // OPCIONES CUSTOM
    weight: cus.weight,
    dimensions:cus.dimensions,
    wattsPowerSupply:cus.wattsPowerSupply,
    percentageDiscount: cus.percentageDiscount,
    // SELECT
    compatibilityBrands:marca,
    ddr:ddram,
    socket:socket,
    factorMother:factorMadre,
    inOffer:offer
  }

  const onSend = (e)=>{
    e.preventDefault()
    dispatch(createProduct(newProduct))

    setFormOne(()=>{
      const newState ={
        name:'',
        price:'',
        stock:'',
        brand:'',
        description:'',
        image:[],
      }
      return newState
    })

    setCus(()=>{
      const newState = {
        weight: null,
        dimensions: null,
        wattsPowerSupply: null,
        percentageDiscount: 0,
      }
      return newState
    })
  }

  return (
    <div>
      <form className="grid grid-cols-2 gap-10">
    <div className="flex flex-col gap-3">
        {/* CATEGORIA */}
     <div className="ml-5 mt-5 flex flex-col gap-3">
      <h2 className="font-bold font-Open">Category:</h2>
     <Select className='rounded-md placeholder:text-center text-center h-8 text-xl w-full mb-3' onChange={handleSelect} options={options}/>
      {category==='Otro' ? <div className="flex flex-row gap-4 items-center">
      <input className='border rounded-md placeholder:text-center text-center h-8 text-xl w-full' type='text' name='category' value={formOne.category}  onChange={handleFormOne} placeholder='Nueva categoría'/> <div>{errorOne.category ? <div>✅</div> : <div>❌</div>}</div>
      </div>
      : <></>}
      </div>

      {/* NOMBRE */}
      <div className="flex flex-row gap-4 ml-5 items-center">
        <h2 className="font-bold font-Open">Name:</h2>
      <input className='border rounded-md placeholder:text-center text-center h-8 text-xl w-full' type="text" name="name" value={formOne.name} onChange={handleFormOne} placeholder='Name'/>
      {errorOne.name ? <div>✅</div> : <div>❌</div>}
      </div>

      {/* PRECIO */}
      <div className="flex flex-row gap-4 ml-5 items-center">
        <h2 className="font-bold font-Open">Price:</h2>
      <input className='border rounded-md placeholder:text-center text-center h-8 text-xl w-full' type="number" name="price" value={formOne.price} onChange={handleFormOne} placeholder='Precio'/>
    {errorOne.price ? <div>✅</div> : <div>❌</div>}
      </div>
      {/* STOCK */}
      <div className="flex flex-row gap-4 ml-5 items-center">
      <h2 className="font-bold font-Open">Stock:</h2>
      <input className='border rounded-md placeholder:text-center text-center h-8 text-xl w-full' type="number" name="stock" value={formOne.stock} onChange={handleFormOne} placeholder='Stock' />
      {errorOne.stock ? <div>✅</div> : <div>❌</div>}
      </div>
      {/* DESCRIPCION */}
      <div className="flex flex-col gap-4 ml-5 items-center">
      <div className="flex flex-row"><h2 className="font-bold font-Open">Description:</h2>{errorOne.description ? <div>✅</div> : <div>❌</div>}</div>
      <input className='border rounded-md placeholder:text-center text-center h-72 text-xl w-full' type="text" name="description" value={formOne.description} onChange={handleFormOne} placeholder='Descripcion' />
      </div>
      {/* IMAGEN */}
      <div className="flex flex-row gap-4 ml-5 items-center">
      <h2 className="font-bold font-Open">Image:</h2>
      <input type='file' name='image' id='image' onChange={e=>Upload(e.target.files)} multiple/>
      </div>
      {/* MARCA */}
      <div className="flex flex-row gap-4 ml-5 items-center">
      <h2 className="font-bold font-Open">Brand:</h2>
      <input className='border rounded-md placeholder:text-center text-center h-8 text-xl w-full' type="text" name="brand" value={formOne.brand} onChange={handleFormOne} placeholder='Marca' />
      {errorOne.brand ? <div>✅</div> : <div>❌</div>}
      </div>

    </div>
    {/* OPCIONES CUSTOM */}
    <div className="flex flex-col gap-3">
    <Select className='rounded-md placeholder:text-center mt-5 text-center h-8 text-xl w-full mb-3' placeholder="Caracteristicas avanzadas" onChange={selectOption} options={customOptions}/>
    {custom ? 
    <>
            <h2 className="font-bold font-Open">Compatibility:</h2>
      <Select className='rounded-md placeholder:text-center text-center h-8 text-xl w-full mb-3' placeholder='Compatibilidad de marcas' name='brand' onChange={selectBrand} options={brands} />

      <h2 className="font-bold font-Open">DDR:</h2>
      <Select className='rounded-md placeholder:text-center text-center h-8 text-xl w-full mb-3' placeholder='DDR' onChange={selectDDR} options={DDR}/>

      {marca !== null && <Select className='rounded-md placeholder:text-center text-center h-8 text-xl w-full mb-3' placeholder='Socket' onChange={selectSocket} options={marca==='AMD' ? AMD : INTEL}/>}

      <h2 className="font-bold font-Open">Factor:</h2>
      <Select className='rounded-md placeholder:text-center text-center h-8 text-xl w-full mb-3' placeholder='Factor Mother' onChange={selectFactor} options={factor}/>

      <h2 className="font-bold font-Open">Weight:</h2>
      <input type='number' value={cus.weight} name={'weight'} onChange={selectCustom} className='border rounded-md placeholder:text-center text-center h-8 text-xl w-full' placeholder='Peso'/>
      
      <h2 className="font-bold font-Open">Dimensions:</h2>
      <input type='string' value={cus.dimensions} name={'dimensions'} onChange={selectCustom} className='border rounded-md placeholder:text-center text-center h-8 text-xl w-full' placeholder='Dimensiones'/>

      <h2 className="font-bold font-Open">Watts:</h2>
      <input type='number' value={cus.wattsPowerSupply} name={'wattsPowerSupply'} onChange={selectCustom} className='border rounded-md placeholder:text-center text-center h-8 text-xl w-full' placeholder='Power Watts'/>

      <h2 className="font-bold font-Open">Offer:</h2>
      <Select className='rounded-md placeholder:text-center text-center h-8 text-xl w-full mb-3' placeholder='Oferta' onChange={selectOffer} options={customOffer}/>

      <h2 className="font-bold font-Open">Discount:</h2>
      <input type='number' value={cus.percentageDiscount} name={'percentageDiscount'} onChange={selectCustom} className='border rounded-md placeholder:text-center text-center h-8 text-xl w-full' placeholder='Porcentaje de descuento'/>
    </> 
    : <></>}
    </div>
    {errorOne.name && errorOne.price && formOne.image.length >= 1 &&errorOne.stock && errorOne.brand && errorOne.description && <button className='rounder-xl col-start-1 col-end-3 h-8 text-xl w-36 my-0 mx-auto bg-primary-300 text-primary-200 hover:bg-primary hover:border rounded-md' onClick={onSend}>ENVIAR</button>}
    
      </form>
    </div>
  );
};

export default CreateProduct;
