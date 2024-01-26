import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const Photo = styled.img`
    border-radius: 50%;
    height: 95%;
    width: 95%;
    top: 10px;
    left: 10px;
    object-fit: cover;
    position: absolute;

    @media ${Theme.media.mobile} {
        width: 95%;
        height: 95%;
        top: 8px;
        left: 8px;
    }
`