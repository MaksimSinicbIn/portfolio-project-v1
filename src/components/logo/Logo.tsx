/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Icon } from '../icon/Icon';
import { animateScroll as scroll } from 'react-scroll';

export const Logo: React.FC = () => {
    return (
        <a onClick={()=>{scroll.scrollToTop()}}>
            <Icon height='55' width='55' viewBox="0 0 1024 1024" iconId={'logo'}/>
        </a>
    );
};