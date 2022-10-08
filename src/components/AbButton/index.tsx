import React from "react"
import styled from "styled-components"

const BotaoEstilizado = styled.button`
    background: #EB9B00;
    padding: 1rem 1.5rem;
    border: 2px solid #EB9B00;
    color: #fff;
    cursor: pointer;
    font-size: 1.25rem;
    &:hover {
        background: #B87900;
        border: 2px solid #B87900;
    }
`

export const AbButton = () => {
    return (
        <BotaoEstilizado>
            Clique aqui!
        </BotaoEstilizado>
    )
}