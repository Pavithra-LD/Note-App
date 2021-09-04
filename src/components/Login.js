import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import {useDispatch} from 'react-redux'
import {startLogin} from '../Actions/userAuthAction'

const Login=(props)=>{
    const dispatch=useDispatch()
    const path=()=>{
        props.history.push('/')
    }
    const formik=useFormik({
        initialValues:{
            email:'',
            password:''
        },

        onSubmit:values=>{
            console.log(values)
            dispatch(startLogin(values,path))
        }
    })

    return(
        <div>
            <h3>Login</h3>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="enter email"
                /> <br/>
                <input
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="enter password"
                /><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Login