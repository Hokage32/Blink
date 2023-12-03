import { createContext, useEffect, useReducer} from "react";

const initialState = {
userId: null,
userName: '',
isAuthorized: null
}

const GlobalState = createContext()

const GlobalStateProvider = (props) => {

    const reducer = (state, action) => {
        switch(action.type){
            case "LOGIN":
                let {username, id} = action.payload
                localStorage.setItem('userId', id)
                localStorage.setItem('username', username)
                return {...state, userId:id, username:username, isAuthorized:true}
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <GlobalState.Provider value={{state, dispatch}}>

            {props.children}
        </GlobalState.Provider>
    )
}


export default GlobalState

export {GlobalStateProvider}