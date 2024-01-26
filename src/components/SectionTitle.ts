import styled from "styled-components";
import { Theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
    ${font({family: "'Poppins', sans-serif", weight: 700, Fmax: 48, Fmin: 34})};
    text-align: center;
    margin-bottom: 90px;
    
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 80px;
        height: 2px;
        background-image: ${Theme.images.backgroundImg};
        
        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);

        @media ${Theme.media.mobile} {
            bottom: -24px;
        }
    }
`