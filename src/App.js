import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import NaviBar from './components/NaviBar'
import {startGetUser} from './Actions/userAuthAction'

const App=(props)=>{
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(startGetUser())
  })

  return(
    <div>
      <h1>User Auth</h1>
      <NaviBar/>
    </div>
  )
}
export default App