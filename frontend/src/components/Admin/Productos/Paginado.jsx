import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getAllProducts, nextPage, prevPage, setPage } from '../../../redux/actions'

const Paginado = ({max}) => {
    let page = useSelector(state=>state.page)
    const dispatch = useDispatch()
    page = page !== 0 ? page : 1
    const [params, setParams] = useSearchParams()

    const pageQuery = params.get('page')

    useEffect(() => {
        params.set('page',page)
        setParams(params)
    }, [page])


    useEffect(()=>{
    dispatch(setPage(Number(pageQuery)))
    },[pageQuery])

    const next = (e)=>{
        e.preventDefault()
        params.set('page',page)
        setParams(params)
        dispatch(nextPage())
    }
    const prev = (e)=>{
        e.preventDefault()
        params.set('page',page)
        setParams(params)
        dispatch(prevPage())
    }
    
  return (
    <div className='flex flex-row'>
        <input disabled={page<=1?true:false} className='disabled:invisible' type="submit" value='⬅️' onClick={prev}/>
        <div>
            <input type="number" value={page} className='border w-10' />
            <span>{`to ${max}`}</span>
        </div>
        <input disabled={page>=max?true:false} className='disabled:invisible' type="submit" value='➡️' onClick={next}/>
    </div>
  )
}

export default Paginado