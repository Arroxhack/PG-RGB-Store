import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuest, postQuest } from '../../redux/actions'

const Questions = ({id}) => {
    const dispatch = useDispatch()
    const question = useSelector(state=>state.questionDetail)
    useEffect(() => {
        dispatch(getQuest(id))
    }, [])

    

    const resetState = {
        id:id,
        comentario:'',
        user:1
    } 

    const [quest, setQuest] = useState(resetState)

    const handleQuest = (e)=>{
        setQuest(prevState=>{
            const newState = {
                ...prevState,
                comentario:e.target.value
            }
            return newState
        })
    }

    const sendQuest=(e)=>{
        e.preventDefault()
        dispatch(postQuest(quest))
        setQuest(resetState)
    }

    console.log(quest)
  return (
    <div>
        <form>
            <textarea value={quest.comentario} onChange={handleQuest}></textarea>
            <button className='border' onClick={sendQuest}>Send</button>
        </form>
        {question.map(p=>{
            return(
                <div key={p.id}>
                <h3>{p.user}</h3>
                <h2>{p.comentario}</h2>
                {p.response ? <h2>{p.response}</h2> : <h2>Aun no hay una respuesta</h2>}
                </div>
            )
        })}
    </div>
  )
}

export default Questions