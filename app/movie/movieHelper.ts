import React from "react"
import { KinopoiskApiGenre } from "../api/Kinopoisk"
import { useState, useEffect } from "react";
import { FilterList } from "../components/filter/FilterHelper";

export const changeName = (name: string) => {
    let result: string = '';
    const getResult = FilterList.filter(filter => filter.genre === name ? result = filter.name : name
    );
    return result
}


