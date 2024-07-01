'use client';

import React, { useEffect, useState } from 'react';
import menu from '../../../../public/images/header/menu.svg';

import { SwitchTheme } from '../ThemeStatus/SwitcherTheme/SwitchTheme';
import { Header, HeaderSvg, Logo, LogoBox, MovieIcon } from './Header.styled';
import { MobileMenu } from '../Sidebar/MobileMenu/MobileMenu';
import { MobileMenuBox } from '../Sidebar/MobileMenu/MobileMenu.styled';
import Language from '../Language/Language';
// import { openModalWindow } from '../../hooks/ModalWindow';
// import { ModalWindow } from '../ModalWindow/ModalWindow';

export default function HeaderComp({ lang }) {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState('true');
    // const [scrollPos, setScrollPos] = useState(window.scrollY);
    const [scrollPos, setScrollPos] = useState('');

    useEffect(() => {
        setScrollPos(window.scrollY);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingUp = currentScrollPos < scrollPos;

            isScrollingUp || currentScrollPos === 0
                ? setVisible('true')
                : setVisible('false');
            setScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPos]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Header $isvisible={visible}>
                <LogoBox href="/brand-maze" aria-label="logo company">
                    <Logo>Brand maze</Logo>
                </LogoBox>
                {/* <MovieIcon onClick={openModalWindow} /> */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'end',
                        position: 'relative',
                        width: '100%',
                    }}
                >
                    <Language />
                    <SwitchTheme />
                </div>
                <HeaderSvg
                    width="24"
                    height="24"
                    alt="menu's button"
                    onClick={toggleMenu}
                    src={menu}
                />
                <MobileMenuBox
                    className={`collapsed ${isOpen ? 'is-expanded' : ''}`}
                >
                    <MobileMenu
                        isOpen={isOpen}
                        toggleMenu={toggleMenu}
                        setIsOpen={setIsOpen}
                        lang={lang}
                    />
                </MobileMenuBox>
            </Header>
            {/* <ModalWindow /> */}
        </>
    );
}
