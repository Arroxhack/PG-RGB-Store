import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { nextPageProduct, prevPageProduct, setPageProduct } from '../../redux/actions'

const Paginado = ({max}) => {
    let page = useSelector(state=>state.pageContainer)
    const dispatch = useDispatch()

    page = page !== 0 ? page : 1
    const [params, setParams] = useSearchParams()

    const pageQuery = params.get('page')

    useEffect(() => {
        // params.set('page',page)
        // setParams(params)
        dispatch(setPageProduct(Number(pageQuery)))
    }, [pageQuery])

    const next = (e)=>{
        e.preventDefault()
        console.log('vamos')
        params.set('page',page)
        setParams(params)
        dispatch(nextPageProduct())
    }
    const prev = (e)=>{
        e.preventDefault()
        params.set('page',page)
        setParams(params)
        dispatch(prevPageProduct())
    }

    useEffect(()=>{
        if(page!==1){
        params.set('page',page)
        setParams(params)
        }
    },[page])

    useEffect(()=>{
        return()=>{
        dispatch(setPageProduct(1))
        }
    },[])
    
  return (
    <div className='flex flex-row gap-5 items-center'>
        <button disabled={page<=1?true:false} className='disabled:invisible bg-primary-400 py-1 px-5 uppercase font-medium rounded-lg hover:bg-primary-300' type="submit" onClick={prev}>Prev</button>
        <div>
            <p className='text-secundary-250 text-center'>{`${page} to ${max}`}</p>
        </div>
        <button disabled={page>=max?true:false} className='disabled:invisible bg-primary-400 py-1 px-5 uppercase font-medium rounded-lg hover:bg-primary-300' type="submit" onClick={next}>next</button>
    </div>
  )
}

export default Paginado