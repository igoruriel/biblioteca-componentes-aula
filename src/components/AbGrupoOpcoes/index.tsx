import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const SectionStyled = styled.section<{ selecionado: boolean }>`
    ${(props) => !props.selecionado
        ? css`
            background: #FFFFFF;
            border: 1px solid #EB9B00;
            header {
                color: #EB9B00;
            }
            strong {
                color: #EB9B00;
            }
            footer {
                color: rgba(0, 0, 0, 0.54);
            }
        `
        : css`
            background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
            border: 1px solid transparent;
            header {
                color: #ffffff;
            }
            strong {
                color: #ffffff;
            }
            footer {
                color: #ffffff;
            }  
        `
    }    

    border-radius: 8px;
    max-width: 194px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px 0px;
    gap: 8px;
    
    margin: 10px 0;

    font-family: 'Poppins', sans-serif;
    text-align: center;

    cursor: pointer;

    header {
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
    }

    strong {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
    }
    footer {
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
    }
`

export interface PropsItemAbGrupoOpcoes {
    id: number;
    title: string;
    body: string;
    footer: string;
}

export interface PropsAbGrupoOpcoes {
    opcoes: PropsItemAbGrupoOpcoes[];
    valueDefault?: PropsItemAbGrupoOpcoes | null;
    onChange?: (opcao: PropsItemAbGrupoOpcoes) => void
}


export const AbGrupoOpcoes = ({ opcoes, onChange, valueDefault }: PropsAbGrupoOpcoes) => {
    
    const [selecionado, setSelecionado] = useState<PropsItemAbGrupoOpcoes | null>( valueDefault ?? null);
    function onSelected(opcao: PropsItemAbGrupoOpcoes): void {
        setSelecionado(opcao);
        if (onChange) {
            onChange(opcao);
        }
    }
    return (
        <>
            {opcoes.map(opcao => (
                <SectionStyled onClick={()=> onSelected(opcao)} key={opcao.id} selecionado={selecionado?.id === opcao.id}>
                    <header>
                        {opcao.title}
                    </header>
                    <strong>{opcao.body}</strong>
                    <footer>
                        {opcao.footer}
                    </footer>
                </SectionStyled>
            ))}
        </>
    )

    
}
