import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { animateScroll as scroll } from 'react-scroll';
import { Theme } from '../../styles/Theme';

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => { scroll.scrollToTop() }}>
                    <Icon iconId={"arrowGoTop"} height={"17"} width={"17"} viewBox={"0 0 16 16"} />
                </StyledGoTopBtn>
            )}
        </>
    );
};

const StyledGoTopBtn = styled.button`
    background-color: rgba(0, 0, 0, 0.30);
    color: ${Theme.colors.accent};
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    border-radius: 5px;
    transition: ${Theme.animations.transition};

    &:hover {
        color: ${Theme.colors.links};
    }
`