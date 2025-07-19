import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { ViewButton } from "../../../components/ViewButton"
import { Theme } from "../../../styles/Theme"

const Projects = styled.section`
    ${FlexWrapper} {
        gap: 45px;
    }
`

const Project = styled.div`
    position: relative;
    z-index: 0;
    width: 375px;
    flex-grow: 1;
    background-color: ${Theme.colors.secondaryBg};
    border-radius: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: transform .9s ease 0s;

    animation: fadeUp 1000ms ease 0ms 1 normal;
    
    @keyframes fadeUp{
        0% {
            opacity: 0;
            -webkit-transform: translate3d(0, 100%, 0);
            -moz-transform: translate3d(0, 100%, 0);
            -ms-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
            }

        100% {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            -moz-transform: translate3d(0, 0, 0);
            -ms-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
            }
    }

    &::after {
        content: '';
        position: absolute;
        z-index: -1;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        border-radius: 20px;
        box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        transition: opacity .9s ease 0s;
        }

    &:hover {
        transform: scale(1.07);
    }

    &:hover::after {
        opacity: 1;
    }
`
const ImageWrapper = styled.div`
    position: relative;

    ${ViewButton} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: ${Theme.animations.transition};
        
        &::before {
            width: 100%;
            height: 100%;
        }
    }

    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border-radius: 20px 20px 0 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        
        opacity: 0;
        transition: ${Theme.animations.transition};
        }

    &:hover {
        &::before {
        opacity: 1;
        
        }

        ${ViewButton} {
            opacity: 1;
        }
    }

    @media ${Theme.media.tablet} {
        &::before {
        opacity: 1;
        }

        ${ViewButton} {
            opacity: 1;
        }
    }
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    border-radius: 20px 20px 0px 0px;
    object-fit: cover;
`

const ProjectLinks = styled.div`
    display: flex;
    gap: 48px;

    @media ${Theme.media.mobile} {
        gap: 30px;
    }
`

const Link = styled.a`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: ${Theme.colors.links};
    gap: 10px;
    white-space: nowrap;

    &:hover {
        text-decoration: underline;
        }
`

const Title = styled.h3`
    
`

const Description = styled.div`
    padding: 27px 28px 25px;
`

const Text = styled.p`
    margin: 17px 0 12px;
`

const StackDescription = styled.p`
    margin-bottom: 21px;
`

export const S = {
    Projects,
    Project,
    ImageWrapper,
    Image,
    ProjectLinks,
    Link,
    Title,
    Description,
    Text,
    StackDescription
}