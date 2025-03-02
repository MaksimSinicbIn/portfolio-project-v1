import styled, { css } from "styled-components"
import { Theme } from "../../../styles/Theme"
import { Link } from "react-scroll"

// Menu

const MenuItem = styled.li`
    display: flex;
`

const NavLink = styled(Link)`
    text-align: center;
    font-family: 'DM Sans', sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    color: ${Theme.colors.accent};
    transition: ${Theme.animations.transition};

    &:hover, &.active {
    transform: scale(1.1);
    color: ${Theme.colors.links};
    }

    @media (max-width: 767px) {
            font-size: 35px;
    }
`

// MobileMenu

const MobileMenu = styled.nav`
    
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(31, 31, 32, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: .5s ease-in-out;

    ul {
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: .5s ease-in-out;
    }

    ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);

        & ul {
            gap: 40px;
        }
    `}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${Theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}

        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${Theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${Theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`

// DesktopMenu

const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 35px;
        justify-content: center;
    }
`

export const S = {
    NavLink,
    MenuItem,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu
}