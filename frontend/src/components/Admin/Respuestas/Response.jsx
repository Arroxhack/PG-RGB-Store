import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getQuestions, sendResponse } from '../../../redux/actions';

const Response = () => {
    const dispatch = useDispatch()
    const questions = useSelector(state=>state.questionAdmin)

    const [response, setResponse]= useState({
        id:null,
        response:null
    })

    useEffect(()=>{
        dispatch(getQuestions())
    },[dispatch])

    const handleResponse = (index, rta)=>{
        setResponse({
            id:index,
            response:rta
        })
    }

    const sendRTA = (e)=>{
        e.preventDefault()
        dispatch(sendResponse(response))
        dispatch(getQuestions())
        setResponse({
            id:null,
            response:null
        })
    }

    return (
    <div className="h-auto w-[800px] py-8 px-10 bg-[#374151] flex flex-col gap-5">
            {questions.map((q,i)=>{
                const index = i
            return (
                <div key={q.id} className='border px-5 py-3 bg-secundary-100'>
                <h3 className='uppercase font-medium whitespace-nowrap'>{q.product}</h3>
                <p className='text-[#9CA3AF]'>{q.user}</p>
                <h4 className='border p-2 text-justify rounded-sm'>{q.comentario}</h4>
                <form className='flex flex-col gap-2'>
                    <label className='font-medium whitespace-nowrap'>Response:</label>
                    <textarea name={q.id} value={response.response} onChange={e=>handleResponse(e.target.name, e.target.value)} placeholder='Response' className='border h-52 p-2 resize-none text-justify'/>
                    <button onClick={sendRTA} className='bg-[#008000] px-4 py-1 rounded-lg uppercase text-secundary-100 font-bold'>Send</button>
                </form>
            </div>
            )
        })}
    </div>
  )
}

export default Response