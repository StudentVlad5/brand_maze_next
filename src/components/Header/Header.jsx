'use client';

import React, { useContext, useEffect, useState } from 'react';
import menu from '../../../public/images/header/menu.svg';
import menuDark from '../../../public/images/header/menu-dark.svg';

import { SwitchTheme } from '../ThemeStatus/SwitcherTheme/SwitchTheme';
import { Header, HeaderSvg, Logo, LogoBox, MovieIcon } from './Header.styled';
import { MobileMenu } from '../Sidebar/MobileMenu/MobileMenu';
import { MobileMenuBox } from '../Sidebar/MobileMenu/MobileMenu.styled';
import Language from '../Language/Language';
import Image from 'next/image';
import { ThemeContext } from '../ThemeStatus/ThemeProvider';

// import { openModalWindow } from '../../hooks/ModalWindow';
// import { ModalWindow } from '../ModalWindow/ModalWindow';

export default function HeaderComp({ lang, setLanguage }) {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState('true');
    // const [scrollPos, setScrollPos] = useState(window.scrollY);
    const [scrollPos, setScrollPos] = useState('');
const { theme } = useContext(ThemeContext);

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
                <LogoBox
                    href="/brand-maze-agency.vercel.app/"
                    aria-label="logo company"
                >
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
                    <Language language={lang} setLanguage={setLanguage} />
                    <SwitchTheme />
                </div>
                <HeaderSvg
                    type="button"
                    title="menu"
                    aria-label="menu"
                    onClick={toggleMenu}
                >
                    {theme === 'light' ? (
                        <Image
                            className="svgMenu"
                            width="24"
                            height="24"
                            alt="menu's button"
                            src={menu}
                        />
                    ) : (
                        <Image
                            className="svgMenu"
                            width="24"
                            height="24"
                            alt="menu's button"
                            src={menuDark}
                        />
                    )}
                </HeaderSvg>
                <MobileMenuBox
                    className={`collapsed ${isOpen ? 'is-expanded' : ''}`}
                >
                    <MobileMenu
                        isOpen={isOpen}
                        toggleMenu={toggleMenu}
                        setIsOpen={setIsOpen}
                        theme={theme}
                    />
                </MobileMenuBox>
            </Header>
            {/* <ModalWindow /> */}
        </>
    );
}
