import styled from "styled-components";
import { Theme } from "../../styles/Theme";

const Header = styled.header`
    background-color: ${Theme.colors.primaryBg};
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;

    @media ${Theme.media.tablet} {
        display: block;
    }
`

export const S = {
    Header
}