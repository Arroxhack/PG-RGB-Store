import React, { useContext } from 'react'
import { CartContext } from './CartContext';

function Done() {
    const { products} = useContext(CartContext);

    let total = 0;
  products.forEach((p) => (total += p.amount * p.price));


  return (
    <section className='font-Open'>
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs tracking-widest font-medium  mb-1">Congrats, your purchase has been successfully!</h2>
        <h1 className="sm:text-3xl text-2xl font-medium mb-4 text-gray-900">Thanks for buying with us!</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here is the summary of your order:</p>
        <div  className="lg:w-2/3 mx-auto leading-relaxed text-base">
                          {products.map((p) => {
                            return (
                              <div  className="container mx-auto" key={p.id}>
                                <p>{p.name}</p>
                                <p>$ {p.price} x {p.amount}</p>
                                <p className="text-base font-black leading-none">{`$${(
                                  p.price * p.amount
                                ).toFixed(2)}`}</p>
                                 
                              </div>
                            );
                          })}
                        </div>
                        <p className="text-2xl leading-normal text-gray-800">
                        Total
                      </p>
                      <div>
                        <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                          {`$ ${total.toFixed(2)}`}
                        </p>
                      </div>
      </div>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We sent a copy to your mail! </p>
      <a className="w-full text-center py-3 rounded bg-primary-400 text-white hover:bg-primary-300 focus:outline-none my-1"
            rel="noopener noreferrer"
            href="http://localhost:3000/"
            
          >
            Back to homepage
          </a>
      </div>
      
  </section>
  )
}

export default Done
