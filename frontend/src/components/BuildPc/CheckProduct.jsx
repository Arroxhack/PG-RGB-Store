
const CheckProduct = ({product,onClick,name,value}) => {
    
    return (
      <div className='bg-primary w-56 h-96 flex flex-col items-center rounded-md gap-2 text-primary-200 hover:shadow-lg hover:shadow-primary-200 sele'>
          <div className="flex justify-center h-2/3 bg-secundary-100  rounded-t-md">
          <img src={product.image[0]} alt={`${product.name}`} className='rounded-t-md object-fill object-center '/>
          </div>
          <div className='flex flex-col items-center '>
          <h3 className='text-xl font-bold'>{`$${product.price}`}</h3>
          <p className='text-xs text-center uppercase'>{product.name}</p>
          <button onClick={onClick} name={name} value={value} className='border'> Add </button>
          </div>
      </div>  
    )
  }

  
export default CheckProduct