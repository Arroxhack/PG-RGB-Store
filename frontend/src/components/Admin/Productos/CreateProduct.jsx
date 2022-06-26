import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/actions";
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
    image:'',
    category:''
  })

  //#endregion
  //#region IMAGEN
  let base64String=''

  const Uploaded = (e)=>{
    const file = document.querySelector(
      'input[type=file]')['files'][0];
    let reader = new FileReader();
    reader.onload = function () {
        formOne.image = reader.result.replace("data:","")
        .replace(/^.+,/, "");
    }
    reader.readAsDataURL(file);
  }
  console.log(formOne.image)
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
    } else if(!/^\d+$/.test(state.price)){
        ERROR.price= false
    } else {
        ERROR.price = true
    }
    //#endregion
    return ERROR;
  }
  console.log(errorOne.price)
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
  //#endregion

  return (
    <div>
      <form>
        {/* CATEGORIA */}
      <Select onChange={handleSelect} options={options}/>
      {category==='Otro' ? <input className='border' type='text' name='category' value={formOne.category}  onChange={handleFormOne} placeholder='Nueva categoría'/> : <></>}
      {/* NOMBRE */}
      <label>Nombre:</label><input className='border' type="text" name="name" value={formOne.name} onChange={handleFormOne} placeholder='Name'/>
      {/* PRECIO */}
      <label>Precio:</label><input className='border' type="number" name="price" value={formOne.price} onChange={handleFormOne} placeholder='Precio'/>
      {/* STOCK */}
      <label>Stock:</label><input className='border' type="number" name="stock" value={formOne.stock} onChange={handleFormOne} placeholder='Stock' />
      {/* DESCRIPCION */}
      <label>Descripcion:</label><input className='border' type="text" name="description" value={formOne.description} onChange={handleFormOne} placeholder='Descripcion' />
      {/* IMAGEN */}
      <input type='file' name='image' id='image' onChange={Uploaded}/>
      {/* MARCA */}
      <label>Marca:</label><input className='border' type="text" name="brand" value={formOne.brand} onChange={handleFormOne} placeholder='Marca' />
        {/* OPCIONES CUSTOM */}

      </form>
    </div>
  );
};

export default CreateProduct;
