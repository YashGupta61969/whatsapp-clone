import { createContext, useState } from "react";

export const StateContext = createContext()


// provides data all over the application

const StateProvider = ({children}) =>{

    const [chatUser, setChatUser] = useState({})

    return <StateContext.Provider value={{chatUser, setChatUser,}}>
        {children}
    </StateContext.Provider>
}

export default StateProvider