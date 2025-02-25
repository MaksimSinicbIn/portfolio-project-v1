import React from 'react';
import { S } from './../HeaderMenu_Styles'

const items = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "About",
        href: "about"
    },
    {
        title: "Skills",
        href: "skills"
    },
    {
        title: "Projects",
        href: "projects"
    },
    {
        title: "Contact",
        href: "contact"
    },
]

export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.NavLink
                        // href="#"
                        activeClass="active"
                        to={item.href}
                        smooth={true}
                        spy={true}
                        duration={500}
                        offset={-23}
                    >
                        {item.title}
                    </S.NavLink>
                </S.MenuItem>
            })}
        </ul>
    );
};