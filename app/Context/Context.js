'use client';

import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext(
    {
        genreName: '',
        setGenreName: useState,
        searchName: '',
        setSearchName: useState
    }
)

export const GlobalContextProvider = ({ children }) => {
    const [genreName, setGenreName] = useState();
    const [searchName, setSearchName] = useState('')
    return (
        <GlobalContext.Provider 
            value={{
                genreName, setGenreName,
                searchName, setSearchName
            }}
        >
            { children }
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)