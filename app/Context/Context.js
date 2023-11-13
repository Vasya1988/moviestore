'use client';

import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext(
    {
        genreName: '',
        setGenreName: useState
    }
)

export const GlobalContextProvider = ({ children }) => {
    const [genreName, setGenreName] = useState();

    return (
        <GlobalContext.Provider value={{genreName, setGenreName}}>
            { children }
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)