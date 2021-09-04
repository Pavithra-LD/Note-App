import { createStore,combineReducers,applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import authReducer from '../reducers/authReducer'
import noteReducer from '../reducers/noteReducer'


const configureStore=()=>{
    const store=createStore(combineReducers({
        isLogged:authReducer,
        notes:noteReducer

    }),applyMiddleware(thunk))
    return store
}
export default configureStore