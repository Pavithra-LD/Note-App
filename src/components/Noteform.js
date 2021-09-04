import React,{useState,useEffect} from 'react'
import {useFormik} from 'formik'
import {formik} from 'formik'
import * as yup from 'yup'
import {startAddnotes} from '../Actions/userAuthAction'
import {useDispatch} from 'react-redux'

const NoteForm=()=>{
    const dispatch=useDispatch()  
    
        const formik=useFormik({
            initialValues:{
                title:'',
                body:''
            },

            

            onSubmit:(values,{resetForm})=>{
                const notesResult=values
                resetForm({values:''})
                dispatch(startAddnotes(notesResult))
                
            },

            validationSchema:yup.object({
                title:yup.string()
                .required("Required")
            })
        })
    return(
        <div>
            <h3>Add note</h3>
            <form onSubmit={formik.handleSubmit}>
                <input 
                    type="text"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    placeholder="Title"
                    /> <br/>

                <textarea
                    type="text"
                    name="body"
                    value={formik.values.body}
                    onChange={formik.handleChange}
                    placeholder="Body"
                ></textarea> <br/>

                <button type="submit">Save</button>
            </form>
        </div>
    )
}
export default NoteForm