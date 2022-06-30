import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetail, getAllProducts, clean, deleteProduct} from '../../../redux/actions'
import Select from 'react-select'
import Swal from 'sweetalert2'

const DeleteProduct = () => {
  let product = useSelector(state=>state.detail)
  const allProducts = useSelector(state=>state.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  const option = allProducts.map(p=>{
    return {value:p.id, label:p.name}
  })

  const handleProduct = ({value})=>{
    dispatch(getProductDetail(value))
    dispatch(clean())
  }

  const onClick = (e)=>{
    e.preventDefault()
    Swal.fire({
      title: 'Do you delete product?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then(result=>{
      if(result.isConfirmed){
        dispatch(deleteProduct(product.id))
      }
    })
  }

  return (
    <div>
      <Select className='w-[600px] text-center' onChange={handleProduct} options={option}/>
      {product.id && <button onClick={onClick}>Delete product</button>}
    </div>
  )
}

export default DeleteProduct