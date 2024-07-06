'use client';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import menu from '../../../public/images/header/menu.svg';
import menuDark from '../../../public/images/header/menu-dark.svg';
import startMovie from '../../../public/images/video/cinema-star-svgrepo-com.svg';
import startMovieDark from '../../../public/images/video/cinema-star-svgrepo-com-dark.svg';

import { SwitchTheme } from '../ThemeStatus/SwitcherTheme/SwitchTheme';
import { Header, HeaderSvg, Logo, LogoBox, MovieIcon } from './Header.styled';
import { MobileMenu } from '../Sidebar/MobileMenu/MobileMenu';
import { MobileMenuBox } from '../Sidebar/MobileMenu/MobileMenu.styled';
import Language from '../Language/Language';
import Image from 'next/image';
import { ThemeContext } from '../ThemeStatus/ThemeProvider';

export default function HeaderComp({ lang, setLanguage }) {
    const [isOpen, setIsOpen] = useState(null);
    const [visible, setVisible] = useState(null);
    const [scrollPos, setScrollPos] = useState(null);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        setScrollPos(window.scrollY);
        setIsOpen(false);
        setVisible('true');
        setScrollPos('');
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
                <Link href="?modal=true">
                    <MovieIcon>
                        {theme === 'light' ? (
                            <Image
                                className="svgMenu"
                                width="35"
                                height="35"
                                alt="menu's button"
                                src={startMovie}
                            />
                        ) : (
                            <Image
                                className="svgMenu"
                                width="35"
                                height="35"
                                alt="menu's button"
                                src={startMovieDark}
                            />
                        )}
                    </MovieIcon>
                </Link>
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
