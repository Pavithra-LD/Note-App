const initaialState=false

const userAuthReducer=(state=initaialState,action)=>{
    switch(action.type){
        case "IS_LOGGED_IN":{
            return !state
        }
        
        default:{
            return state
        }
    }
}
export default userAuthReducer