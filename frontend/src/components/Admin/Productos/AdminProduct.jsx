import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../../../redux/actions';
import { Link } from 'react-router-dom';
import {useTable} from 'react-table'

const AdminProduct = () => {
    const products = useSelector(state=>state.products)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getAllProducts())
    }, [dispatch])


    return (
    <div className=''>

    </div>
  )
}

export default AdminProduct