const noteinitialState=[]

const noteReducer=(state=noteinitialState,action)=>{
    switch(action.type){
        case "NOTES":{
            return [...action.payload]
        }
        case "ADD_NOTE":{
            return [...state,{...action.payload}]
        }
        case "REMOVE":{
            return (
                state.filter((ele)=>{
                    return ele._id!=action.payload
                })
            )
        }
        default:{
            return [...state]
        }
    }
}
export default noteReducer