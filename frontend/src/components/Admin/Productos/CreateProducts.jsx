import React,{useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllCategories, createProduct} from '../../../redux/actions/index'
import Select from 'react-select'

const CreateProducts = () => {
  const categorias = useSelector(state=>state.categories)
  const dispatch = useDispatch()
  const allCategory = [...categorias, 'Otro']
  const options = allCategory.map(c=>{
    return {value:c, label:c}
  })


  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch])

  const [input,setInput] = useState({
    name:'',
    price:'',
    stock:'',
    brand:'',
    description:'',
    image:[],
    category:''
  })
  const [category, setCategory] = useState('')
  const handleSelect = ({value})=>{
    setCategory(value)
  }

  const handleInput = (e)=>{
    setInput(prevState=>{
      const newState ={
        ...prevState,
        [e.target.name]:e.target.value
      }
      return newState
    })
  }
  
  const newProduct={
    name:input.name,
    price:input.price,
    stock:input.stock,
    brand:input.brand,
    description:input.description,
    image:[input.image],
    category: category!=='Otro'? [category] : [input.category]
  }

  const onSend = (e)=>{
    e.preventDefault()
    dispatch(createProduct(newProduct))
  }

  return (
    <div>
      <h1>Crear un producto</h1>
      <form>
        {/* CATEGORIA */}
        <Select onChange={handleSelect} options={options}/>
      {category==='Otro' ? <input className='border' type='text' name='category' value={input.category}  onChange={handleInput} placeholder='Nueva categoría'/> : <></>}
        {/* NOMBRE DEL PRODUCTO */}
        <div>
        <label>Nombre:</label><input className='border' type="text" name="name" value={input.name} onChange={handleInput} placeholder='Nombre' />
        </div>
        {/* PRECIO DEL PRODUCTO */}
        <div>
        <label>Precio:</label><input className='border' type="number" name="price" value={input.price} onChange={handleInput} placeholder='Precio' />
        </div>
        {/* Stock */}
        <div>
        <label>Stock:</label><input className='border' type="number" name="stock" value={input.stock} onChange={handleInput} placeholder='Stock' />
        </div>
        {/* DESCRIPCION */}
        <div>
        <label>Descripcion:</label><input className='border' type="text" name="description" value={input.description} onChange={handleInput} placeholder='Descripcion' />
        </div>
        {/* IMAGEN */}
        <div>
        <label>Imagen:</label><input className='border' type="text" name="image" value={input.image} onChange={handleInput} placeholder='Imagen' />
        </div>
        {/* MARCA */}
        <div>
        <label>Marca:</label><input className='border' type="text" name="brand" value={input.brand} onChange={handleInput} placeholder='Marca' />
        </div>
        <button onClick={onSend}>Enviar</button>
      </form>
    </div>
  )
}

export default CreateProducts