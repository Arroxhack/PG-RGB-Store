import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { filterPrice, orderedByPrice, getAllCategories, clean } from '../../redux/actions'
import Select from 'react-select'
import Swal from 'sweetalert2'

const Side = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state=>state.categories)
    const products = useSelector(state=>state.products)

    let productBrands = []
    products && products.forEach(p=>{
        if(!productBrands.includes(p.brand)){
          return productBrands.push(p.brand)
        }
      })
    productBrands = productBrands.sort((a,b)=>{
        if(a<b) return -1
        if(a>b) return 1
        return 0
    })
    
    const options = [{value:'LOW', label:'Lower price'},{value:'HIGH', label:'Higher price'}]

    const [price, setPrice]= useState(null)

    const [value, setValue]=useState({
        min:'',
        max:''
    })
    const [error, setError]=useState({
        min:'No puede estar vacio',
        max:'No puede estar vacio'
    })

    const validate = state=>{
        const errors = {}
        //min
        if(!/(\d)$/.test(state.min)){
            errors.min = 'No cumple con los requisitos'
        } else if(state.max && state.min > state.max){
            errors.min = 'No puede ser mayor que el máximo'
        }
        //max
        if(!/(\d)$/.test(state.max)){
            errors.max = 'No cumple con los requisitos'
        } else if(state.min && state.min > state.max){
            errors.max = 'No puede ser menor que el minimo'
        }

        return errors
    }

    const[searchParams,setSearchParams]= useSearchParams()

    const catQuery = searchParams.get("category")
    const brandQuery=searchParams.get("brand")
    const minQuery=searchParams.get('min')
    const maxQuery=searchParams.get('max')
    const searchFilter = searchParams.get('name')

    useEffect(() => {
        dispatch(filterPrice(catQuery,brandQuery,minQuery,maxQuery,searchFilter))
        dispatch(filterPrice(catQuery,brandQuery,minQuery,maxQuery,searchFilter))
    }, [dispatch, brandQuery, catQuery, minQuery, maxQuery,searchFilter])

    const handleCategory = e=>{
        e.preventDefault();
        searchParams.set([e.target.name],e.target.value)
        setSearchParams(searchParams)
        if(brandQuery){
            searchParams.delete('brand',brandQuery)
            setSearchParams(searchParams)
        }
        if(searchFilter){
            searchParams.delete('name', searchFilter)
            setSearchParams(searchParams)
        }
        dispatch(filterPrice(catQuery,brandQuery,minQuery,maxQuery))
    }

    const handleBrand = e=>{
        e.preventDefault();
        searchParams.set([e.target.name],e.target.value)
        setSearchParams(searchParams)
        dispatch(filterPrice(catQuery,brandQuery,minQuery,maxQuery));
    }

    const handleValue = (e)=>{
        setValue(prevState=>{
            const newState={
                ...prevState,
                [e.target.name]:e.target.value < 0 ? 1 : e.target.value
            }
            setError(validate(newState))
            return newState
        })
    }

    const sendValue = (e)=>{
        e.preventDefault()

        if(error.min && error.max){
            Swal.fire({
                icon:'alert',
                title:'Busqueda mal realizada',
                confirmButtonText:'ok'
            })
        }else{
            const min = value.min
            const max = value.max
    
            if(min && max){
                const valueMin = min
                const valueMax = max
                searchParams.set('min',valueMin)
                searchParams.set('max',valueMax)
                setSearchParams(searchParams)
            }else{
                const value = min ? min : max
                searchParams.set('min',value)
                setSearchParams(searchParams)
            }
            dispatch(filterPrice(catQuery,brandQuery,minQuery,maxQuery))
        }
        
        setValue({
            min:'',
            max:''
        })
    }

    const resetFilter = (e)=>{
        e.preventDefault()
        searchParams.delete(e.target.name)
        if(e.target.name==='min') searchParams.delete('max') 
        if(e.target.name==='max') searchParams.delete('min')
        if(e.target.name === 'name'){
            searchParams.set('category', 'all')
        }
        setSearchParams(searchParams)
        dispatch(filterPrice(catQuery,brandQuery,minQuery,maxQuery))
    }

    const handlePrice=({value})=>{
        setPrice(value)
        dispatch(orderedByPrice(value))
    }

  return (
    <div>
        <div>
        <Select 
        styles={{
            input: (base) => ({
            ...base,
            'option' : {background: 'bg-primary'}
        }),}} 
        options={options} onChange={handlePrice} placeholder='Order by price'/>
        </div>
        {/* BOTONES */}
        <div className='flex flex-row gap-1 justify-center pt-5 pb-5'>
        {searchFilter &&<button name='name' className='h-8 w-auto px-2 bg-primary text-primary-300 rounded uppercase font-PT font-bold hover:bg-primary-300 hover:text-primary transition' onClick={resetFilter}>{searchFilter}</button>}
        {brandQuery &&<button name='brand' className='h-8 w-auto px-2 bg-primary text-primary-300 rounded uppercase font-PT font-bold hover:bg-primary-300 hover:text-primary transition' onClick={resetFilter}>{brandQuery}</button>}
        {minQuery && <button name='min' className='h-8 w-auto px-2 bg-primary text-primary-300 rounded uppercase font-PT font-bold hover:bg-primary-300 hover:text-primary transition' onClick={resetFilter}>{minQuery}</button>}
        {maxQuery && <button name='max' className='h-8 w-auto px-2 bg-primary text-primary-300 rounded uppercase font-PT font-bold hover:bg-primary-300 hover:text-primary transition' onClick={resetFilter}>{maxQuery}</button>}
        </div>

        {/* CATEGORIAS */}
        <div className="flex flex-col pb-4">
        <h4 className="text-xl pb-4">Category</h4>
            <button className="text-left text-lg pl-8" value='all' name='category' onClick={handleCategory}>ALL</button>
            {categories && 
            categories.map(c=>{
                return(
                    <button className='text-left text-lg pl-8 hover:animate-pulse' key={c} name='category' onClick={handleCategory} value={c}>{c}</button>
                )
            })}
        </div>

        {/* MIN-MAX */}
        <div>
            <form className='flex flex-col items-center gap-3 '>
                <div className='flex flex-row gap-3 justify-center'>
                <input className='w-16 h-8 text-center rounded bg-primary-400 text-primary-200 placeholder:text-primary-100' type="number" placeholder='MIN' name='min' value={value.min} onChange={handleValue}/>
                <input className='w-16 h-8 text-center rounded bg-primary-400 text-primary-200 placeholder:text-primary-100' type="number" placeholder='MIN' name='max' value={value.max} onChange={handleValue}/>
                </div>
                <button className='h-8 w-16 bg-primary text-primary-300 rounded uppercase font-PT font-bold hover:bg-primary-300 hover:text-primary transition' onClick={sendValue}>Find</button>
            </form>
        </div>

        {/* MARCAS */}
        <div className="flex flex-col  pl-4 pt-4">
        <h4 className="text-xl pb-4">Brand</h4>
            <button className="text-left text-lg pl-8" value='all' name='brand' onClick={handleBrand}>ALL</button>
            {productBrands && 
            productBrands.map(b=>{
                return(
                    <button className='text-left text-lg pl-8 hover:animate-pulse' key={b} name='brand' onClick={handleBrand} value={b}>{b}</button>
                )
            })}
        </div>


    </div>
  )
}

export default Side