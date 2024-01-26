import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const ViewButton = styled.button`
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  width: 170px;
  height: 32px;
  position: relative;
  z-index: 0;

  &:hover{
      transform: scale(1.2);
      color: ${Theme.colors.links}
  }
`