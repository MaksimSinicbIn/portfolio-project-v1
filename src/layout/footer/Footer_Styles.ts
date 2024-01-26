import styled from "styled-components"
import { Theme } from "../../styles/Theme"

const Footer = styled.footer`
    background-color: ${Theme.colors.primaryBg};
    padding: 20px 0 67px;
    
`
const FooterListsBox = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
    padding-bottom: 42px;
    z-index: 0;

    @media ${Theme.media.mobile} {
        flex-direction: column;
        justify-content: center;
        gap: 33px;
        margin-bottom: 30px;
    }

    &::before {
        content: "";
        opacity: 0.3;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
        border-bottom: 2px solid #42446e
        }
`

const ContactList = styled.ul`
    font-family: 'DM Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
    display: flex;
    gap: 33px;

    @media ${Theme.media.mobile} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const ContactItem = styled.li`
    display: flex;
`

const ContactLink = styled.a`
    color: ${Theme.colors.accent};
    text-decoration: underline;
    transition: ${Theme.animations.transition};

    &:hover{
    transform: scale(1.1);
    color: ${Theme.colors.links};
    }
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
`
const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    color: ${Theme.colors.accent};
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: ${Theme.animations.transition};
    
    &:hover{
    transform: scale(1.2, 1.2);
    color: ${Theme.colors.links};
    }
`


const Copyright = styled.small`
    background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 18px;
    font-weight: 500;
    margin: 0 auto;

    @media ${Theme.media.mobile} {
        text-align: center;
    }
`

export const S = {
    Footer,
    FooterListsBox,
    ContactList,
    ContactItem,
    ContactLink,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright
}