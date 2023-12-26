'use client';

import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext(
    {
        genreName: '',
        setGenreName: useState,
        searchName: '',
        setSearchName: useState,
        isCardOpen: false,
        setIsCardOpen: useState
    }
)

export const GlobalContextProvider = ({ children }) => {
    const [genreName, setGenreName] = useState();
    const [searchName, setSearchName] = useState('');
    const [isCardOpen, setIsCardOpen] = useState();
    return (
        <GlobalContext.Provider 
            value={{
                genreName, setGenreName,
                searchName, setSearchName,
                isCardOpen, setIsCardOpen
            }}
        >
            { children }
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)