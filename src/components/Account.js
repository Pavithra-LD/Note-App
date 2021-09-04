import axios from 'axios'
import React,{useState,useEffect} from 'react'

const Account=(props)=>{
    const [user,setUser]=useState({})

    useEffect(()=>{
        axios.get('http://dct-user-auth.herokuapp.com/users/account',{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
            .then((response)=>{
                const result=response.data
                //console.log(result)
                setUser(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
        
    },[])
    return(
        <div>
            <h2>User Acount</h2>
            <h3>User Name -{user.username}</h3>
            <h3>User Email-{user.email} </h3>
        </div>
    )
}
export default Account