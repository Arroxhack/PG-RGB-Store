import React, {useEffect,useState} from 'react'
import NavBar from '../NavBar/NavBar'
import ContainerProduct from '../ContainerProduct/ContainerProduct'
import { useSearchParams } from 'react-router-dom'
import Side from './Side'
import { useSelector } from 'react-redux'
import Footer from '../Footer/Footer'
import Loading from '../Loading/Loading'


const Category = () => {

    const {products} = useSelector(state=>state)

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
    },[])

    useEffect(() => {
    }, [products])

  return (
    <div className='bg-primary-200 '>
        <NavBar/>
        {loading? 
                <div className='flex justify-center mt-48 h-screen'>
                <Loading/>
                </div>:
                <>
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
        </>
                }

       
    </div>
  )
}

export default Category