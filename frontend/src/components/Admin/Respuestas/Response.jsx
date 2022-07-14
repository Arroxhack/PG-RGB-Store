import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { deleteQuest, getQuestions, sendResponse } from '../../../redux/actions';
import Paginado from './Paginado';
import { useSearchParams } from 'react-router-dom'

const Response = () => {
    const dispatch = useDispatch()
    let page = useSelector(state=>state.page)
    let questions = useSelector(state=>state.questionAdmin)

    const [params, setParams] = useSearchParams()

    const pageQuery = params.get('page')

    const resetResponse = {
        id:'',
        response:''
    }

    const [response, setResponse]= useState(resetResponse)


    const porPage = 1
    const start = (pageQuery-1)*porPage
    const end = start + porPage
    const max = Math.ceil(questions.length/porPage)
    questions = questions.slice(start, end)

    useEffect(()=>{
        dispatch(getQuestions())
        params.set('page',page)
        setParams(params)
    },[page])

    const handleResponse = (index, rta)=>{
        setResponse({
            id:index,
            response:rta
        })
    }

    const sendRTA = (e)=>{
        e.preventDefault()
        dispatch(sendResponse(response))
        setResponse(resetResponse)
        setTimeout(()=>{
            dispatch(getQuestions())
          },1500)
    }

    const deleteQUEST = e=>{
        e.preventDefault()
        Swal.fire({
            icon: 'warning',
            title: 'Delete question?',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
          }).then(result=>{
            if(result.isConfirmed){
                dispatch(deleteQuest(e.target.name))
                setTimeout(()=>{
                dispatch(getQuestions())
              },1500)
            }
          })
    }

    useEffect(()=>{},[questions])
      
    return (
        <>
        {questions[0] ? 
            <div className="h-auto w-[800px] my-auto mx-auto py-8 px-10  flex flex-col items-center gap-5">
            {questions.map((q,i)=>{
                const index = i
            return (
                <div key={q.id} className='border px-5 py-3 bg-[#E2E2E2]'>
                    <Link to={`/products/${q.id}`}>
                    <h3 className='uppercase font-medium whitespace-nowrap'>{q.product}</h3>
                    </Link>
                <div className='flex flex-row gap-5'>
                <p className='text-[#9CA3AF]'>{q.user}</p>
                <p className='text-[#9CA3AF]'>{q.fechaPreg}</p>
                </div>
                <h4 className='border p-2 text-justify rounded-sm bg-secundary-100'>{q.comentario}</h4>
                <form className='flex flex-col gap-2'>
                    <label className='font-medium whitespace-nowrap'>Answer:</label>
                    <textarea name={q.id} value={response.response} onChange={e=>handleResponse(e.target.name, e.target.value)} placeholder='Answer' className='border h-52 p-2 resize-none text-justify'/>
                    <button onClick={sendRTA} className='bg-[#008000] px-4 py-1 rounded-lg uppercase text-secundary-100 font-bold'>Send</button>
                    <button name={q.id} onClick={deleteQUEST} className='bg-secundary-50 px-4 py-1 rounded-lg uppercase text-secundary-100 font-bold'>Delete</button>
                </form>
            </div>
            )
        })}
        <Paginado max={max}/>
    </div>
        :
        <h1 className='my-auto mx-auto uppercase font-bold'>There are no questions to answer 😊</h1>
        }
        </>

  )
}

export default Response