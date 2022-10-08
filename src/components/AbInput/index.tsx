import React, { HTMLInputTypeAttribute } from 'react'
import styled from 'styled-components';

const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    label {
        padding: 0px 0px 0px 24px;
        color: #002F52;
    }
`

const InputStyled = styled.input`
    box-sizing: border-box;
    
    padding: 10px 24px;
    width: 100%;

    border: 1px solid #002F52;
    border-radius: 24px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #002F52;
    &:focus{
        outline: none;
    }
`

export interface PropsAbInput {
    idFor: string;
    label: string;
    inputType: HTMLInputTypeAttribute,
    placeholder: string
}

export const AbInput = ({idFor, label, inputType, placeholder}: PropsAbInput) => {
  return (
    <ContainerInput>
        <label htmlFor={idFor}>{label}</label>
        <div>
            <InputStyled id={idFor} type={inputType} placeholder={placeholder} />
        </div>
    </ContainerInput>
  )
}

