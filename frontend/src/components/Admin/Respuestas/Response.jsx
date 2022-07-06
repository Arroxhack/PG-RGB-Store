import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";

const Response = () => {

    return (
    <div className="h-auto w-[800px] py-8 px-10 bg-[#374151]">
        <div className='border px-5 py-3 bg-secundary-100'>
            <h3 className='uppercase font-medium whitespace-nowrap'>Producto</h3>
            <p className='text-[#9CA3AF]'>Fulanito de tal</p>
            <h4 className='border p-2 text-justify rounded-sm'>Este producto se puede pagar por paypal?</h4>
            <form className='flex flex-col gap-2'>
                <label className='font-medium whitespace-nowrap'>Response:</label>
                <textarea placeholder='Response' className='border h-52 p-2 resize-none text-justify'/>
                <button className='bg-[#008000] px-4 py-1 rounded-lg uppercase text-secundary-100 font-bold'>Send</button>
            </form>
        </div>
        
    </div>
  )
}

export default Response