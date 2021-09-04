import React from 'react'
import {Link,Route} from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import { useSelector,useDispatch} from 'react-redux'
import Account from './Account'
import MyNotes from './MyNotes'
import { handleAuth } from '../Actions/userAuthAction'

const Navibar=(props)=>{    
    const isLogged=useSelector((state)=>{
        return state.isLogged
    })
    const dispatch=useDispatch()
    return(
        <div>
            <Link to="/">Home</Link> |
            {isLogged ?(
                <>
                    <Link to="/account">Account</Link> |
                    <Link to="/mynotes">MyNotes</Link> |
                     <Link to="/" onClick={()=>{
                         alert('succssfully logged out')
                         localStorage.removeItem('token')
                            dispatch(handleAuth())
                     }}>Logout</Link>
                 </>

            ): (
                <>
                <Link to="/register"> Register</Link> |
                <Link to="login"> Login</Link> 
                </>
            )}
            

            
            

            <Route path="/" component={Home} exact={true}/>
            <Route path="/register" component={Register}/>
            <Route path ="/login" component={Login}/>
            <Route path="/account" component={Account}/>
            <Route path="/mynotes" component={MyNotes}/>
        </div>
    )
}
export default Navibar