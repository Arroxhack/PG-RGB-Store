import React, {useEffect} from 'react'
import NavBar from '../NavBar/NavBar'
import ContainerProduct from '../ContainerProduct/ContainerProduct'
import { useSearchParams } from 'react-router-dom'
import Side from './Side'


const Category = () => {

    const [params, setParams] = useSearchParams()

    useEffect(() => {
        params.set('category','all')
        setParams(params)
    }, [])

  return (
    <div className='bg-primary-200'>
        <NavBar/>
        <div className='flex flex-row gap-5'>
            <div>
                <Side/>
            </div>
            <div>
                <ContainerProduct />
            </div>
        </div>
    </div>
  )
}

export default Category