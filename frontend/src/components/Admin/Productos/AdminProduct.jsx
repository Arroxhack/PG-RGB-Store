import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, deleteProduct, setPage } from '../../../redux/actions';
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Paginado from './Paginado';
import Search from './Search';


const AdminProduct = () => {
    let allProducts = useSelector(state=>state.products)
    const page = useSelector(state=>state.page)
    const dispatch = useDispatch()

    const porPage = 8;
    const start = ((page-1)*porPage)
    const end = start + porPage
    const max = Math.ceil(allProducts.length/porPage)
    let products = allProducts.slice(start, end)
    const [search, setSearch] = useState(null)
    const [params, setParams] = useSearchParams()

    const pageQuery = params.get('page')


    useEffect(() => {
      dispatch(getAllProducts())
    }, [dispatch, search])

    const removeProduct = (id)=>{
      Swal.fire({
      title: 'Do you delete product?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then(result=>{
      if(result.isConfirmed){
        dispatch(deleteProduct(id))
        setTimeout(()=>{
          dispatch(getAllProducts())
        },1500)
      }
    })
    }

    return (
    <div className="my-0 mx-auto">
      <div className='flex flex-row my-5 justify-end mr-7'>
        <Link to='/admin/create-product'>
        <button className='uppercase bg-primary-400 py-2 px-5 rounded-lg text-secundary-200 font-bold'>Add product</button>
        </Link>
      </div>
      <table className="relative overflow-x-auto shadow-md sm:rounded-lg w-[1300px] text-sm text-left text-primary-200">
        <thead className="text-xs text-[#9CA3AF] uppercase bg-[#374151]">
          <tr>
            <th scope='col' className='px-6 py-3'>Name</th>
            <th scope='col' className='px-6 py-3'>Stock</th>
            <th scope='col' className='px-6 py-3'>Price</th>
            <th scope='col' className='px-6 py-3'><span className='sr-only'>Edit</span></th>
            <th scope='col' className='px-6 py-3'><span className='sr-only'>Delete</span></th>
            <th scope='col' className='px-6 py-3'><span className='sr-only'>View product</span></th>
          </tr>
        </thead>
        <tbody>
          {products && products.map(p=>{
            return (
              <tr key={p.id} className="bg-secundary-100 border-b">
              <th className="px-6 py-4 font-medium whitespace-nowrap">{p.name}</th>
              <td className='px-6 py-4 text-center'>{`${p.stock} u`}</td>
              <td className='px-6 py-4 text-center'>{`$${p.price}`}</td>
              <td className='px-6 py-4 text-center'>
                <Link to={`/admin/edit/${p.id}`}>
                <button className='bg-primary px-6 py-2 rounded-lg uppercase text-secundary-100 font-bold'>Edit</button>
                </Link>
              </td>
              <td className='px-6 py-4 text-center'>
              <button onClick={e=>{e.preventDefault();removeProduct(p.id)}} className='bg-secundary-50 px-6 py-2 rounded-lg uppercase text-secundary-100 font-bold'>Delete</button>
              </td>
              <td className='px-6 py-4 text-center'>
                <Link to={`/products/${p.id}`}>
                <button className='bg-[#008000] px-6 py-2 rounded-lg uppercase text-secundary-100 font-bold'>View product</button>
                </Link>
              </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='flex justify-center mt-5'>
      <Paginado max={max}/>
      </div>
      
    </div>
  )
}

export default AdminProduct