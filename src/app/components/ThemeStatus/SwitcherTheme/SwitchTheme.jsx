'use client';
import React from 'react';
import sun from '../../../../../public/images/header/sun-svgrepo-com.svg';
import night from '../../../../../public/images/header/night-sky-svgrepo-com.svg';
import { BtnChangeTheme, SwitcherWrapper } from './SwitchTheme.styled';
import { ThemeContext } from '../ThemeProvider';
import Image from 'next/image';

export const SwitchTheme = () => {
    return (
        <ThemeContext.Consumer>
            {({ theme, setMode }) => (
                <SwitcherWrapper>
                    <BtnChangeTheme
                        aria-label="Change theme"
                        aria-expanded="true"
                        onClick={(e) =>
                            theme === 'light'
                                ? setMode('dark')
                                : setMode('light')
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
