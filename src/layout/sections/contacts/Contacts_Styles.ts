import styled from "styled-components"
import { Theme } from "../../../styles/Theme"

const Contacts = styled.section`
    
`

const Form = styled.form`
    max-width: 700px;
    width: 100%;
    border-radius: 20px;
    background-color: ${Theme.colors.secondaryBg};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 24px;
    margin: 0 auto;
    

    textarea {
        resize: none;
        height: 150px;
    }
`

const Field = styled.input`
    width: 100%;
    font-family: 'Poppins',sans-serif;
    font-size: 16px;
    background-color: ${Theme.colors.primaryBg};
    border: 1px solid ${Theme.colors.borderColor};
    padding: 16px 20px;
    border-radius: 8px;
    color: ${Theme.colors.font};

    &::placeholder {
        color: ${Theme.colors.placeholderColor};
        text-transform: capitalize;
    }
    

    &:focus-visible {
        outline: 1px solid ${Theme.colors.borderColor};
    }
`

const FieldLabel = styled.label`
    font-family: 'Poppins',sans-serif;
    font-size: 16px;
    color: ${Theme.colors.accent};
    align-self: flex-start;
    cursor: pointer;
`

const FieldSection = styled.div`
    max-width: 450px;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
`

export const S = {
    Contacts,
    Form,
    Field,
    FieldLabel,
    FieldSection
}