"use client"

import { FilterType } from "@/types/filter-types";
import { createContext, ReactNode, useState } from "react";

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.ALL,
    setSearch: (value: string | ((prev: string) => string)) => {},
    setPage: (value: number) => {},
    setType: (value:  FilterType) => {},

})

interface ProviderProps {
    children: ReactNode;
}

export function FilterContextProvider({children}: ProviderProps){
    const [search, setSearch] = useState('');
    const [page,setPage] = useState(0); 
    const [type,setType] = useState(FilterType.ALL);

        return(
            <FilterContext.Provider value={{search, page, setPage, type, setType, setSearch}}>
                {children}
            </FilterContext.Provider>    
        )
    }