"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation"; // Corrija a importação
import { CartIcon } from "./cart-icon";
import { styled } from "styled-components";

// Estilize o container diretamente (substituindo o react-bootstrap)
const Container = styled.div`
    position: relative;
    cursor: pointer;
    display: inline-block; /* Para ajustar o layout */
`;

const CartCount = styled.span`
    position: absolute;
    top: 15px; /* Ajuste a posição */
    right: -10px;
    background: red;
    color: white;
    border-radius: 50%;
    padding: 0.2em 0.5em;
    font-size: 0.8em;
`;

export function CartControl() {
    const router = useRouter();
    const { value } = useLocalStorage('cart-items', []);

    console.log("Valor do cart-items:", value, "Length:", value.length);

    const handleNavigateToCart = () => {
        router.push("/cart");
    };

    return (
        <Container onClick={handleNavigateToCart}>
            <CartIcon />
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    );
}