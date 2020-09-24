import React, {useState, createContext} from 'react';

export const AppContext = createContext({})

export const AppContextProvider = ({children}) => {

    const [sidebarOpen, setSidebarOpen] = useState(true);
    return (
        <AppContext.Provider
            value={{
                sidebarOpen, 
                setSidebarOpen
            }}
        >
            {children}
        </AppContext.Provider>
    )
}


