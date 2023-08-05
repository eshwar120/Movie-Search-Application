import { createContext, useState } from "react";


const UserContext = createContext({});

const UserContextProvider = ({ children }) => {

    const [search, setSearch] = useState("");

    const value = {
        search : search,
        updateSearch : (e) => {
            setSearch(e.target.value);
        },
        clearSearch : () => {
            setSearch("")
        }
    }

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

export {
    UserContext,
    UserContextProvider
}