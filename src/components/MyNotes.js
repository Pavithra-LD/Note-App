import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {startGetNotes} from '../Actions/userAuthAction'
import Noteform from './Noteform'
import NoteList from './Notelist'

const MyNotes=(props)=>{
    const dispatch=useDispatch()
    const notes=useSelector((state)=>{
        return state.notes
    })
    useEffect(()=>{
        dispatch(startGetNotes())
    },[])

    return(
        <div>           
            <Noteform/>
            <NoteList/>
        </div>
    )
}
export default MyNotes