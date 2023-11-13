import React from "react"
import { KinopoiskApiGenre } from "../api/Kinopoisk"
import { useState, useEffect } from "react";
import { FilterList } from "../components/filter/FilterHelper";

export const changeName = (name: string) => {
    const result =  FilterList.map((filter) => filter.genre === name ? filter.name : false);

    return result
}


