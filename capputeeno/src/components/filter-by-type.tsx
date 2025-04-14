
import { styled } from "styled-components"

interface FilterItemProps {
    selected: boolean;
}

const FilterList= styled.ul`
display: flex;
align-items: center;
justify-content: center;
gap: 40px;
list-style: none;
`
const FilterItem = styled.li<FilterItemProps>`
font-family: inherit;
font-weight: ${props => props.selected ? '600' : '400'};
font-size: 12px;
line-height: 18px;
text-align: center;
text-transform: uppercase;
cursor: pointer;
color: var(--text-dark);
border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : 'none'};
`

export function FilterByType() {
    return (
        <FilterList>      
            <FilterItem selected={true}>Todos os Produtos</FilterItem>
            <FilterItem selected={false}>Camisetas</FilterItem>
            <FilterItem selected={false}>Canecas</FilterItem>
        </FilterList>
    )
}