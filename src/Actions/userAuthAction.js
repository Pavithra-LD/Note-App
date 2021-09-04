import axios from 'axios'

export const startRegister=(registerData,path)=>{

    return()=>{
        axios.post('http://dct-user-auth.herokuapp.com/users/register',registerData)
        .then((response)=>{
            //console.log(response.data)
            const result=response.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                alert('Successfully Registered')
                path()
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

}

export const startLogin=(loginData,path)=>{
    return (dispatch)=>{
        axios.post('http://dct-user-auth.herokuapp.com/users/login', loginData)
        .then((response)=>{
            const result=response.data
            //console.log(result)
            if(result.hasOwnProperty("errors")){
                alert(result.message)
            }else{
                alert('logged in')
                localStorage.setItem('token',result.token)
                path()
                dispatch(handleAuth())
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }       
    
}

export const startGetUser=()=>{
    return(dispatch)=>{
        if(localStorage.getItem('token')){
            dispatch(handleAuth())
        }
    }
    
}

export const handleAuth=()=>{
    return{
        type:"IS_LOGGED_IN"
    }
}

export const startGetNotes=()=>{
    return(dispatch)=>{
        axios.get('http://dct-user-auth.herokuapp.com/api/notes',{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        },[])
        .then((response)=>{
            const result=response.data 
            //console.log(result)
            dispatch(notes(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const notes=(notes)=>{
    return{
        type:"NOTES",
        payload:notes
    }
}

export const startAddnotes=(note)=>{
    return(dispatch)=>{
        axios.post('http://dct-user-auth.herokuapp.com/api/notes',note,{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result=response.data
            console.log(result)
            dispatch(addNotes(result))
        })
        .cathc((err)=>{
            alert(err.message)
        })
    }
}

export const addNotes=(note)=>{
    return{
        type:"ADD_NOTE",
        payload:note
    }
}

export const startRemove=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}`,{
                headers:{
                    'x-auth':localStorage.getItem('token')
                }
            })
            .then((response)=>{
                const result=response.data 
                dispatch(removeNote(result._id))
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}

export const removeNote=(id)=>{
    return{
        type:"REMOVE",
        payload:id
    }
}