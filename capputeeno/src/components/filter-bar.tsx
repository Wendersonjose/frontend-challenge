"use client"

import styled from "styled-components";
import { FilterByType } from "./filter-by-type";
import { FilterByPriority } from "./filter-by-priority";

interface FilterBarProps {

}

const FilterContainer = styled.div`
display: flex;
width: 100%;
align-items: flex-Start;
justify-content: space-between;
padding: 20px 160px;
`

export function FilterBar({}: FilterBarProps) {
return (
    <FilterContainer>
        <FilterByType/>
        <FilterByPriority/>
    </FilterContainer>
)

}