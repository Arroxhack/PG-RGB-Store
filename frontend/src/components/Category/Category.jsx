import React, {useEffect} from 'react'
import NavBar from '../NavBar/NavBar'
import ContainerProduct from '../ContainerProduct/ContainerProduct'
import { useSearchParams } from 'react-router-dom'
import Side from './Side'
import { useSelector } from 'react-redux'
import Footer from '../Footer/Footer'


const Category = () => {

    const {products} = useSelector(state=>state)

    useEffect(() => {

    }, [products])

  return (
    <div className='bg-primary-200 '>
        <NavBar/>
        <div className='flex flex-row gap-5 w-full justify-center mt-5'>
            <div>
                <Side/>
            </div>
            <div>
                <ContainerProduct />
            </div>
        </div>
        <div className='mt-24'>
            <Footer/>
        </div>
    </div>
  )
}

export default Category