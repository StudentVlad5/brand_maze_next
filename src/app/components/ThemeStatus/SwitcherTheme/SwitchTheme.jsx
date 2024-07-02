'use client';
import React from 'react';
import sun from '@/images/header/sun-svgrepo-com.svg';
import night from '@/images/header/night-sky-svgrepo-com.svg';
import { BtnChangeTheme, SwitcherWrapper } from './SwitchTheme.styled';
import { ThemeContext } from '../ThemeProvider';
import Image from 'next/image';

export const SwitchTheme = () => {
    return (
        <ThemeContext.Consumer>
            {({ theme, setTheme }) => (
                <SwitcherWrapper>
                    <BtnChangeTheme
                        aria-label="Change theme"
                        aria-expanded="true"
                        onClick={(e) =>
                            theme === 'light'
                                ? setTheme('dark')
                                : setTheme('light')
                        }
                    >
                        {theme === 'light' ? (
                            <Image
                                width={25}
                                height={25}
                                alt="light theme"
                                src={sun}
                            />
                        ) : (
                            <Image
                                width={25}
                                height={25}
                                alt="dark theme"
                                src={night}
                            />
                        )}
                    </BtnChangeTheme>
                </SwitcherWrapper>
            )}
        </ThemeContext.Consumer>
    );
};
