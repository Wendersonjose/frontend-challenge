import { styled } from "styled-components"
import { ArrowIcon } from "./Arrow-icon"
import { useState } from "react"

interface FilterByPriorityProps {

}

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button{
        border: none;
        background: transparent;    
        cursor: pointer;
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        text-align: center;
        color: var(--text-dark);

        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    `

    const PriorityFilter = styled.ul`
    position: absolute;
    width: 250px;
    background: var(--white);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 12px 16px;
    top: 50%;

    list-style: none;

    
    `


export function FilterByPriority(props: FilterByPriorityProps) {
    const [isOpen, setIsOpen,] = useState(false)

    const handleOpen = () => setIsOpen(prev => !prev)

    return(
        <FilterContainer>
            <button onClick={handleOpen}>
                Organizar por
                <ArrowIcon/>
            </button>

            {isOpen && (
                <PriorityFilter>
                    
                        <li>Novidades</li>
                        <li>Preço: Maior - menor</li>
                        <li>Preço: Menor - maior</li>
                        <li>Mais vendidos</li>
                   
                </PriorityFilter>
            )}

        </FilterContainer>
    )
}