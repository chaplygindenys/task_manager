import React, {useContext, useReducer} from "react";

const SET_LOGIN_INPUT_VALUE = 'SET_LOGIN_INPUT_VALUE';

const LoginContext=React.createContext();
LoginContext.displayName='LoginContext';

const useLoginContext=()=>useContext(LoginContext);
const LoginContextProvider =({children})=>{
    const initState = {
        email:'test@test.com',
        password:'1234',
    };
    const reduser=(state, action)=>{
        switch (action.type){
            case SET_LOGIN_INPUT_VALUE:
                return{...state,[action.payload.key]:action.payload.value};
            default:return {...state};
        }

    };
    const [state, dispatch] = useReducer(reduser,initState)
    const setInputValue=(payload)=> dispatch({
        type:SET_LOGIN_INPUT_VALUE,
        payload,
    })
    return(
    <LoginContext.Provider value={{
        ...state,
        setInputValue,

    }}>
        {children}
    </LoginContext.Provider>
)};

export {useLoginContext, LoginContextProvider}