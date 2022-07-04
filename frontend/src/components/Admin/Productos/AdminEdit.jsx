import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getProductDetail } from '../../../redux/actions'
import EditProduct from './EditProduct'

const AdminEdit = () => {

    const dispatch = useDispatch()
    const productDetail = useSelector(state=>state.detail)
    const {id} = useParams()

    useEffect(() => {
        dispatch(getProductDetail(Number(id)))
    }, [dispatch])

  return (
    <div>
        <EditProduct id={id}/>
    </div>
  )
}

export default AdminEdit