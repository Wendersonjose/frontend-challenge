import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";
import { styled } from "styled-components";

interface FilterItemProps {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;
`;

const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--text-dark);
  border-bottom: ${(props) => (props.selected ? "4px solid var(--orange-low)" : "none")};
`;

export function FilterByType() {
  const { type, setType } = useFilter();

  const handleFilter = (value: FilterType) => {
    setType(value);
  };

  return (
    <FilterList>
      <FilterItem
        selected={type === FilterType.ALL}
        onClick={() => handleFilter(FilterType.ALL)} // Substituído handleChangeType por handleFilter
      >
        Todos os Produtos
      </FilterItem>

      <FilterItem
        selected={type === FilterType.SHIRT}
        onClick={() => handleFilter(FilterType.SHIRT)} // Substituído handleChangeType por handleFilter
      >
        Camisetas
      </FilterItem>

      <FilterItem
        selected={type === FilterType.MUG}
        onClick={() => handleFilter(FilterType.MUG)} // Substituído handleChangeType por handleFilter
      >
        Canecas
      </FilterItem>
    </FilterList>
  );
}