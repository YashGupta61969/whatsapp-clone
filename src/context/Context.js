import { createContext, useState } from "react";

export const StateContext = createContext()

const StateProvider = ({children}) =>{
    const [chatUser, setChatUser] = useState({})
    return <StateContext.Provider value={{chatUser, setChatUser,}}>
        {children}
    </StateContext.Provider>
}

export default StateProvider