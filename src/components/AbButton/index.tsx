import React from "react"
import styled, { css } from "styled-components"

export interface PropsAbButton {
    titulo?: string;
    btnType?: 'primary' | 'secundary';
    onClick?: () => void;
}

const BotaoEstilizado = styled.button<PropsAbButton>`
    ${(props: PropsAbButton) =>
        props.btnType === 'primary'
            ? css`
                background: #EB9B00;
                color: #fff;
            `
            : css`
                background: #ffffff;
                color: #EB9B00;
            `
    }
    padding: 1rem 1.5rem;
    border: 2px solid #EB9B00;
    cursor: pointer;
    
    font-size: 1.25rem;
    ${(props: PropsAbButton) =>
        props.btnType === 'primary'
            ? css`
                &:hover {
                    background: #B87900;
                    border: 2px solid #B87900;
                }
            `
            : css`
                &:hover {
                    background: #ffffff;
                    border: 2px solid #B87900;
                    color: #B87900;
                }
            `
    }
    
`

export const AbButton = ({ titulo, btnType = 'secundary', onClick }: PropsAbButton) => {
    return (
        <BotaoEstilizado onClick={onClick} btnType={btnType}>
            {titulo}
        </BotaoEstilizado>
    )
}