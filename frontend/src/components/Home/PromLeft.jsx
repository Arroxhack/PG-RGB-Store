
import { Link } from 'react-router-dom'
import Product from '../Product/Product'

const Promo = ({left, img, products}) => {




  return (
    <div className={left ? 'flex flex-row lg:gap-5 items-center lg:mt-10 lg:mb-10 justify-between bg-primary-200 lg:px-16 lg:py-5 rounded-xl ' 
    : 'flex flex-row-reverse lg:gap-5 items-center lg:mt-10 lg:mb-10 justify-center bg-primary-200 lg:px-16 lg:py-5 rounded-xl sm:gap-5 sm:mt-5 sm:px-10 sm:py-4'}>
       <img src={img} alt="" className='object-cover lg:h-80 lg:w-40 sm:h-40 sm:w-20' />
        {products.map(p=>{
          
            return (
              
                <Link key={p.id} to={`/products/${p.id}`}>
                <Product product={p}/>
                </Link>
            )
        })}
    </div>
  )
}

export default Promo