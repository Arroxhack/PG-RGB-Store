import React, {useEffect} from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { filterPrice, filterProducts, getAllCategories } from '../../redux/actions'

const Side = () => {

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
        } else if(state.max && state.min > state.max){
            errors.min = "Can not be less than the minimum"
        }
        //max
        if(!/(\d)$/.test(state.max)){
            errors.max = 'Only numbers can be used'
        } else if(state.min && state.min > state.max){
            errors.max = "Can not be greater than the maximum"
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
        dispatch(filterProducts(catQuery, brandQuery, minQuery, maxQuery, searchFilter))
    }
    
    const setBrand = (e)=>{
        e.preventDefault()
        params.set([e.target.name], e.target.value)
        setParams(params)
        dispatch(filterProducts(catQuery, brandQuery, minQuery, maxQuery, searchFilter))
    }

    const setPri = (e)=>{
        e.preventDefault()
        if(!error.min && !error.max){
            params.set('min', price.min)
            const min = params.get('min')
            params.set('max', price.max)
            const max = params.get('max')
            console.log(min>max)
            if(min<max){
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
        dispatch(filterPrice(catQuery,brandQuery,minQuery,maxQuery))
    }
    //#endregion
    
  return (
    <div className='text-secundary-250 flex flex-col text-center gap-5 w-[30vh]'>
        <div>
            ORDER PRICE
        </div>
        {/* BOTONES */}
        <div className='flex flex-row gap-1 justify-center pt-5 pb-5'>
        {searchFilter &&<button name='name' className='h-8 w-auto px-2 bg-primary text-primary-300 rounded uppercase font-PT font-bold hover:bg-primary-300 hover:text-primary transition' onClick={resetFilter}>{searchFilter}</button>}
        {brandQuery &&<button name='brand' className='h-8 w-auto px-2 bg-primary text-primary-300 rounded uppercase font-PT font-bold hover:bg-primary-300 hover:text-primary transition' onClick={resetFilter}>{brandQuery}</button>}
        {minQuery && <button name='min' className='h-8 w-auto px-2 bg-primary text-primary-300 rounded uppercase font-PT font-bold hover:bg-primary-300 hover:text-primary transition' onClick={resetFilter}>{minQuery}</button>}
        {maxQuery && <button name='max' className='h-8 w-auto px-2 bg-primary text-primary-300 rounded uppercase font-PT font-bold hover:bg-primary-300 hover:text-primary transition' onClick={resetFilter}>{maxQuery}</button>}
        </div>
        {/* CATEGORIAS */}
        <div>
            <h3 className='uppercase font-PT font-bold text-2xl'>Category</h3>
            <div className='flex flex-col items-center gap-1 text-lg'>
                <button className='text-primary hover:text-primary-300' name='category' value={'all'} onClick={setCategory}>ALL</button>
                {categories && categories.map(c=>{
                    return(
                        <button className='text-primary hover:text-primary-300' name='category' value={c} key={c} onClick={setCategory}>{c}</button>
                    )
                })}
            </div>
        </div>
        {/* PRECIO */}
        <form className='flex flex-col items-center gap-2'>
            <div className='flex gap-2'>
            <input className='border border-primary bg-primary-200 rounded-lg text-center py-2 w-[80px] focus:outline-none focus:border-primary-300' type="num" name='min' value={price.min} onChange={handlePrice} placeholder='Min'/>
            <input className='border border-primary bg-primary-200 rounded-lg text-center py-2 w-[80px] focus:outline-none  focus:border-primary-300' type="num" name='max' value={price.max} onChange={handlePrice} placeholder='Max'/>
            </div>
            <button className='px-5 rounded-2xl py-1 bg-primary-300 hover:bg-primary text-primary-200 uppercase font-bold' onClick={setPri}>Find</button>
        </form>
        {/* MARCAS */}
        <div>
        <h3 className='uppercase font-PT font-bold text-2xl'>Brand</h3>
            <div className='flex flex-col items-center gap-1 text-lg'>
                <button className='text-primary hover:text-primary-300' name='brand' value={'all'} onClick={resetFilter}>ALL</button>
                {productsBrands && productsBrands.map(c=>{
                    return(
                        <button className='text-primary hover:text-primary-300' name='brand' value={c} key={c} onClick={setBrand}>{c}</button>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Side