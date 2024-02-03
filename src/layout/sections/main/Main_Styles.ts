import styled from "styled-components"
import { font } from "../../../styles/Common"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Theme } from "../../../styles/Theme"

const Main = styled.section`
    display: flex;
    min-height: 100vh;
    
    ${FlexWrapper} {
        gap: 15px;
    }

    @media ${Theme.media.mobile} {
        padding-top: 120px;
    }

    @media screen and (max-width: 1075px) {
        ${FlexWrapper} {
        flex-wrap: wrap-reverse;
        justify-content: space-around;
        align-content: center;
        }
    }
`

const MainTitle = styled.h1`
    ${font({weight: 700, Fmax: 58, Fmin: 34})}
    letter-spacing: -1px;
`

const Name = styled.h2`
    ${font({family: "'Poppins', sans-serif", weight: 700, Fmax: 58, Fmin: 34})}
    background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -1px;
    white-space: nowrap;
`

const GreetingsText = styled.h2`
    ${font({weight: 700, Fmax: 58, Fmin: 34})}
`

const GreetingsSmiley = styled.span`
    display: inline-block;
    animation-name: wave;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    @keyframes wave {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(18deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
`

export const S = {
    Main,
    MainTitle,
    Name,
    GreetingsText,
    GreetingsSmiley
}