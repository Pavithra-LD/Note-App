import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import {startRemove} from '../Actions/userAuthAction'

const NoteItem=(props)=>{
    const {_id,title}=props
    const dispatch=useDispatch()

    const displayNote=(id)=>{
        axios.get(`http://dct-user-auth.herokuapp.com/api/notes/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result=response.data
            alert(result.body)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

    const removeNote=(id)=>{
        dispatch(startRemove(id))
    }

    return(
        <div>
            <h3>{title}</h3>
            <button onClick={()=>{
                displayNote(_id)
            }}>Show</button>
            <button onClick={()=>{
                removeNote(_id)
            }}>Remove</button>
            
        </div>
    )
}
export default NoteItem