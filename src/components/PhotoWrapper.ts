import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const PhotoWrapper = styled.div`
    position: relative;
    flex: 0 1 400px;
    max-height: 400px;
    min-height: 400px;
    border-radius: 50%;
    animation: pulse 2s infinite;
    box-shadow: 16px 16px 24px #0a0a0a, -16px -16px 24px #282828;

    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(220, 116, 252, 0.51);
        }
        70% {
            box-shadow: 0 0 0 20px rgba(220, 116, 252, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(220, 116, 252, 0);
        }
    }

    @media ${Theme.media.mobile} {
        flex: 0 1 300px;
        max-height: 300px;
        min-height: 300px;
    }

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 50%; 
        padding: 10px; 
        background: linear-gradient(270deg, #13B0F5 -2.06%, #E70FAA 100%);
        -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude; 
    }
`