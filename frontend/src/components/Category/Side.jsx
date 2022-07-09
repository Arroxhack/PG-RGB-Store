import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { filterPrice, getAllCategories } from '../../redux/actions'

const Side = () => {

    const dispatch = useDispatch()
    const {categories, products} = useSelector(state=>state)

    const [params, setParams] = useSearchParams()

    const catQuery = params.get("category")
    const brandQuery=params.get("brand")
    const minQuery=params.get('min')
    const maxQuery=params.get('max')
    const searchFilter = params.get('name')

    useEffect(() => {
        dispatch(getAllCategories())
        dispatch(filterPrice(catQuery))
        dispatch(filterPrice(catQuery))
    }, [dispatch, brandQuery, catQuery, minQuery, maxQuery,searchFilter])

    const setCategory = (e)=>{
        e.preventDefault()
        params.set(e.target.name, e.target.value)
        setParams(params)
        dispatch(filterPrice(catQuery))
    }

  return (
    <div className='text-secundary-250'>
        <div>
            ORDER PRICE
        </div>
        {/* BOTONES */}
        {/* CATEGORIAS */}
        <div>
            <h3>Category</h3>
            <div className='flex flex-col items-center'>
                <button name='category' value={'all'} onClick={setCategory}>ALL</button>
                {categories && categories.map(c=>{
                    return(
                        <button name='category' value={c} key={c} onClick={setCategory}>{c}</button>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Side