import React,{useState,useEffect} from 'react'
import {useFormik}from 'formik'
import * as yup from 'yup'
import {useDispatch} from 'react-redux'
import {startRegister} from '../Actions/userAuthAction'


const Register=(props)=>{
    const dispatch=useDispatch()

    

    const formik=useFormik({
        initialValues:{
            username:'',
            email:'',
            password:''
        },

        validationSchema:yup.object({
            username:yup.string()
            .required('Required'),
            email:yup.string()
            .email('Invalid email address').required('Required'),
            password:yup.string()
            .required('Required')
        }),

        onSubmit:values=>{
            console.log(values)
            const path=()=>{
                props.history.push('/login')
            }
            dispatch(startRegister(values,path))
        }
    })
    return(
        <div>
            <h3>Register</h3>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange} 
                    placeholder="enter username"
                /> {formik.errors.username}<br/>
                <input
                    type="text"
                    name="email"
                    value={formik.values.email}
                    placeholder="enter email"
                    onChange={formik.handleChange}
                /> {formik.errors.email}<br/>
                <input
                    type="password"
                    name="password"
                    value={formik.values.password}
                    placeholder="enter password"
                    onChange={formik.handleChange}
                /> {formik.errors.password}<br/>
                <button 
                    type="submit">
                Submit</button>
                

            </form>
        </div> 
    )
}
export default Register