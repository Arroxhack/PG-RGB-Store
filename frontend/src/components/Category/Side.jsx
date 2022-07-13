import React, {useEffect} from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import Select from 'react-select'
import Swal from 'sweetalert2'
import { cleanProducts, filterPrice, filterProducts, getAllCategories, orderedByPrice } from '../../redux/actions'
import loupe from '../../images/loupe.svg'

const Side = ({setLoading}) => {

    const dispatch = useDispatch()
    let {categories, products} = useSelector(state=>state)
    //#region  Marcas y categorias ordenadas alfabeticamente
    let productsBrands = []
    products && products.forEach(p=>{
        if(!productsBrands.includes(p.brand)){
            productsBrands.push(p.brand)
        }
    })
    productsBrands = productsBrands.sort((a,b)=>{
        if(a<b) return -1
        if(a>b) return 1
        return 0
    })
    categories = categories && categories.sort((a,b)=>{
        if(a<b) return -1
        if(a>b) return 1
        return 0
    })
    //#endregion
    
    //#region ESTADOS DE FILTRADO POR PRECIO
    const resetPrice = {
        min : '',
        max : ''
    }
    const errorPrice = {
        min:'This field can not be blank',
        max:'This field can not be blank'
    }

    const [price, setPrice] = useState(resetPrice)
    const [error, setError] = useState(errorPrice)

    const validate = state=>{
        const errors={}

        if(!/(\d)$/.test(state.min)){
            errors.min = 'Only numbers can be used'
        } else if(Number(state.min) > Number(state.max)){
            errors.min = "Can not be less than the minimum"
        } else if(Number(state.min) < 0){
            errors.min = "Can not be less than 0"
        }
        //max
        if(!/(\d)$/.test(state.max)){
            errors.max = 'Only numbers can be used'
        } else if(Number(state.min) > Number(state.max)){
            errors.max = "Can not be greater than the maximum"
        }else if(Number(state.max) < 1){
            errors.max = "Can not be less than 1"
        }

        return errors
    }

    const handlePrice = (e)=>{
        setPrice(prevState=>{
            const newState={
                ...prevState,
                [e.target.name]:e.target.value
            }
            
            setError(validate(newState))

            return newState
        })
    }
    //#endregion

    //#region 
    const [params, setParams] = useSearchParams()

    const catQuery = params.get("category")
    const brandQuery=params.get("brand")
    const minQuery=params.get('min')
    const maxQuery=params.get('max')
    const searchFilter = params.get('name')

    useEffect(() => {
        dispatch(getAllCategories())
        dispatch(filterProducts(catQuery, brandQuery, minQuery, maxQuery, searchFilter))
    }, [dispatch, brandQuery, catQuery, minQuery, maxQuery,searchFilter, price.min, price.max])


    //#endregion

    //#region SETEO DE FILTRADOS
    const setCategory = (e)=>{
        e.preventDefault()
        params.set([e.target.name], e.target.value)
        setParams(params)
        if(brandQuery){
            params.delete('brand',brandQuery)
            setParams(params)
        }
        if(searchFilter){
            params.delete('name', searchFilter)
            setParams(params)
        }
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
            dispatch(cleanProducts())
          }, 1000);
        dispatch(filterProducts(catQuery, brandQuery, minQuery, maxQuery, searchFilter))

    }
    
    const setBrand = (e)=>{
        e.preventDefault()
        dispatch(cleanProducts())
        params.set([e.target.name], e.target.value)
        params.set('page',1)
        setParams(params)
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
            dispatch(cleanProducts())
          }, 1000);
        dispatch(filterProducts(catQuery, brandQuery, minQuery, maxQuery, searchFilter))
    }

    const setPri = (e)=>{
        e.preventDefault()
        if(!error.min && !error.max){
            params.set('min', price.min)
            const min = params.get('min')
            params.set('max', price.max)
            const max = params.get('max')
            params.set('page',1)

            if(Number(min)<Number(max)){
                dispatch(cleanProducts())
                setLoading(true)
                setTimeout(() => {
                    setLoading(false);
                    dispatch(cleanProducts())
                  }, 1000);
                setParams(params)
                dispatch(filterProducts(catQuery, brandQuery, minQuery, maxQuery, searchFilter))
                setPrice(resetPrice)
            }else{
                Swal.fire({
                    icon:'info',
                    title: 'Bad search',
                    text: "Can not be less than the minimum",
                    confirmButtonText:'ok'
                })
            }
        }else{
            Swal.fire({
                icon:'info',
                title: 'Bad search',
                text: error.min && error.max && `${error.min}`,
                confirmButtonText:'ok'
            })
        }
    }

    const resetFilter = (e)=>{
        e.preventDefault()
        params.delete(e.target.name)
        if(e.target.name==='min') params.delete('max') 
        if(e.target.name==='max') params.delete('min')
        if(e.target.name === 'name'){
            params.set('category', 'all')
        }
        setParams(params)
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
            dispatch(cleanProducts())
          }, 1000);
        dispatch(filterPrice(catQuery,brandQuery,minQuery,maxQuery))
    }
    //#endregion
    
    //#region ORDENAMIENTO
    const options = [{value:'LOW', label:'Lower price'},{value:'HIGH', label:'Higher price'}]

    const [orden, setOrden] = useState(null)

    const handleOrden=({value})=>{
        setOrden(value)
        dispatch(orderedByPrice(value))
    }

    const colourStyles = {
        control : styles=>({...styles, backgroundColor: '#eeeeee'}),
        option : (styles,{data, isDisabled, isFocused, isSelected})=>{
            const color = '#212126'
            return{
                ...styles,
                backgroundColor: isDisabled ? '#212126' : '#eeeeee',
                color: '#212126',
                cursor : isDisabled ? '#38817A' : '#38817A',
            }
        }
    }
    //#endregion

  return (
    <div className='text-secundary-250 flex flex-col text-center items-center lg:gap-5 lg:w-[30vh] sm:w-[20vh] '>
        {products.length ? 
        <>
        <div className='mt-[2rem] flex flex-col items-center w-full'>
        <h3 className='uppercase font-PT font-bold lg:text-2xl sm:text-md'>Order by price</h3>
            <Select options={options} placeholder='Order by price' isSearchable={ false } 
           onChange={handleOrden} className='bg-secundary' styles={colourStyles}/>
        </div>
        {/* BOTONES */}
        <div className='flex flex-row gap-1 justify-center pt-5 pb-5'>
        {searchFilter &&<button name='name' className='h-8 w-auto px-2 bg-primary text-primary-300 rounded uppercase font-PT font-bold lg:hover:bg-primary-300 lg:hover:text-primary transition' onClick={resetFilter}>{searchFilter}</button>}
        {brandQuery &&<button name='brand' className='h-8 w-auto px-2 bg-primary text-primary-300 rounded uppercase font-PT font-bold lg:hover:bg-primary-300 lg:hover:text-primary transition' onClick={resetFilter}>{brandQuery}</button>}
        {minQuery && <button name='min' className='h-8 w-auto px-2 bg-primary text-primary-300 rounded uppercase font-PT font-bold lg:hover:bg-primary-300 lg:hover:text-primary transition' onClick={resetFilter}>{minQuery}</button>}
        {maxQuery && <button name='max' className='h-8 w-auto px-2 bg-primary text-primary-300 rounded uppercase font-PT font-bold lg:hover:bg-primary-300 lg:hover:text-primary transition' onClick={resetFilter}>{maxQuery}</button>}
        </div>
        {/* PRECIO */}
        <form className='lg:flex  lg:items-center lg:justify-around sm:flex sm:justify-between sm:items-center '>
            <div className='flex justify-between lg:w-3/4 sm:w-5/6'>
            <input className='border border-primary bg-primary-200 rounded-lg text-center  lg:w-[80px] sm:w-14  focus:outline-none focus:border-primary-300' type="num" name='min' value={price.min} onChange={handlePrice} placeholder='Min'/>
            <input className='border border-primary bg-primary-200 rounded-lg text-center  lg:w-[80px] sm:w-14 focus:outline-none  focus:border-primary-300' type="num" name='max' value={price.max} onChange={handlePrice} placeholder='Max'/>
            </div>
            <button className='' onClick={setPri}><img src={loupe} alt="" className='h-6 w-6 sm:ml-2' /></button>
        </form>
        {/* CATEGORIAS */}
        <div className='-mt-6'>
            <h3 className='uppercase font-PT font-bold lg:text-2xl mt-11 sm:text-lg'>Category</h3>
            <div className='flex flex-col items-start gap-1 text-lg mt-3 '>
                <button className='text-primary lg:hover:text-primary-300' name='category' value={'all'} onClick={setCategory}>ALL</button>
                {categories && categories.map(c=>{
                    return(
                        <button className='text-primary lg:hover:text-primary-300' name='category' value={c} key={c} onClick={setCategory}>{c}</button>
                    )
                })}
            </div>
        </div>
     
        
        {/* MARCAS */}
        <div>
        <h3 className='uppercase font-PT font-bold lg:text-2xl lg:mt-11 sm:text-lg sm:mt-4'>Brand</h3>
            <div className='flex flex-col items-start gap-1 text-lg mt-3'>
                <button className='text-primary lg:hover:text-primary-300' name='brand' value={'all'} onClick={resetFilter}>ALL</button>
                {productsBrands && productsBrands.map(c=>{
                    return(
                        <button className='text-primary lg:hover:text-primary-300' name='brand' value={c} key={c} onClick={setBrand}>{c}</button>
                    )
                })}
            </div>
        </div></>
        :<></>}
    </div>
  )
}

export default Side