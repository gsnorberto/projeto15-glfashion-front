import { getLocalStorage } from "../localStorage";
import { createContext } from "react";
import { useState } from "react";

const Context = createContext();

function AuthProvider({ children }) {
    let locStorage = getLocalStorage();
    const [userLS, setUserLS] = useState(locStorage);

    const data = {
        userLS,
        setUserLS,
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }