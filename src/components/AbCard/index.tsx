import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface PropsAbCard {
    children?: ReactNode
}

const CardEstilizado = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 48px 32px 48px 48px;
    gap: 16px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    
    height: 100%;
    box-sizing: border-box;
`

export const AbCard = ({children}: PropsAbCard) => {
    return (
        <CardEstilizado>
            {children || <h1> Titulo do Card aqui </h1>}
        </CardEstilizado>
    )
}
