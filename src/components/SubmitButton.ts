import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const SubmitButton = styled.button`
  max-width: 450px;
  width: 100%;
  font-family: 'Dm Sans',sans-serif;
  font-weight: 500;
  font-size: 20px;
  background-color: ${Theme.colors.primaryBg};
  border: 1px solid ${Theme.colors.borderColor};
  border-radius: 8px;
  color: ${Theme.colors.accent};
  padding: 16px 20px;
  text-align: center;
  transition: ${Theme.animations.transition};
  &:hover{
    color: ${Theme.colors.links};
    background-color: #101010
  }
  
  &:focus-visible {
    outline: 1px solid ${Theme.colors.borderColor};
    }
`