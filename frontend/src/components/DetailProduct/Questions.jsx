import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { getQuest, postQuest } from '../../redux/actions'
import {BsArrowRight} from 'react-icons'

const Questions = ({id}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const question = useSelector(state=>state.questionDetail)
    useEffect(() => {
        dispatch(getQuest(id))
    }, [])


    let idUser = localStorage.getItem("id");
    if (idUser) {
        idUser = window.atob(localStorage.getItem('id'));
    }

    const resetState = {
        id:id,
        comentario:'',
        user:idUser
    }
    const errorReset = {
        comentario:'It cant be empty'
    }

    const [quest, setQuest] = useState(resetState)
    const [error, setError] = useState(errorReset)
    
    const validate = (state)=>{
        const ERROR = {}

        if(!state.comentario){
            ERROR.comentario = 'It cant be empty'
        }else if(!/([a-zA-Z0-9\d\w\s])+(\S)/.test(state.comentario)){
            ERROR.comentario = 'A message without text or with multiple spaces is not allowed'
        }
        return ERROR
    }

    const handleQuest = (e)=>{
        setQuest(prevState=>{
            const newState = {
                ...prevState,
                comentario:e.target.value
            }
            setError(validate(newState))
            return newState
        })
    }

    //console.log(error)

    const sendQuest=(e)=>{
        e.preventDefault()
        if(quest.user){
            dispatch(postQuest(quest))
            setQuest(resetState)
            dispatch(getQuest(id))
            dispatch(getQuest(id))
        }else{
            setQuest(resetState)
            navigate('../login')
        }
    }

    useEffect(()=>{
    },[question])
    console.log(question)


  return (
    <div className='mt-10'>
        <h2 className="w-full text-center py-3 text-secundary-250 text-xl font-PT my-2">Questions</h2>
        <form className='bg-[#E2E2E2] mb-2 w-auto'>
            <textarea value={quest.comentario} onChange={handleQuest} className='mx-10 mt-5 w-[80%] resize-none p-3'></textarea>
            <div className='flex flex-row justify-between px-10 py-5'>
            {error.comentario ? <p className='text-secundary-50'>{error.comentario}</p> : <span></span>}
            <button className='bg-primary-400 px-5 py-2 rounded-lg uppercase font-bold hover:bg-primary-300 cursor-pointer' disabled={error.comentario ? true : false} onClick={sendQuest}>Send</button>
            </div>

        </form >
        <div className='bg-secundary-300 h-auto w-auto flex flex-col gap-1'>
        {question.map(p=>{
            return(
                <div key={p.id} className='bg-primary-2 h-auto w-auto flex flex-col gap-1'>
                <div className='bg-[#E2E2E2]'>
                <h3 className='py-3 px-5'>{p.comentario}</h3>
                <p className='text-[#9CA3AF] select-none font-normal text-right px-5'>{p.fechaPreg}</p> 
                </div>
                {p.response ? <div className='border-b'>
                    <h3 className='py-3 text-secundary-250 px-5'>{p.response}</h3>
                    <p className='text-[#9CA3AF] select-none font-normal text-right px-5'>{p.fechaRta}</p>
                    </div> : 
                    <div className='border-primary border-b'>
                        <h3 className='py-3 text-secundary-250 px-5'>There is no answer yet</h3>
                        <p className='text-secundary-250 select-none font-normal text-right px-5'>{p.fechaRta}</p>
                    </div>
                    }
                </div>
            )
        })}
        </div>

    </div>
  )
}

export default Questions