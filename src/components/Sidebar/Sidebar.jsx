'use client';
import {
    ContactList,
    ContactListItem,
    ContactListLink,
    NavList,
    NavListLink,
    SidebarBox,
    SocialsList,
    SocialsListItem,
    SidebarContainer,
    ContactListItemPhone,
} from './Sidebar.styled';

import React, { useContext } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeContext } from '../ThemeStatus/ThemeProvider';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import instagram from '../../../public/images/header/instagram.svg';
import telegram from '../../../public/images/header/telegram.svg';
import linkedin from '../../../public/images/header/linkedin.svg';
import tiktok from '../../../public/images/header/tiktok.svg';
import instagramDark from '../../../public/images/header/instagram-dark.svg';
import telegramDark from '../../../public/images/header/telegram-dark.svg';
import linkedinDark from '../../../public/images/header/linkedin-dark.svg';
import tiktokDark from '../../../public/images/header/tiktok-dark.svg';

export const Sidebar = () => {
    const location = usePathname();
    const { t } = useTranslation();
    const { theme } = useContext(ThemeContext);

    return (
        <SidebarContainer>
            <SidebarBox>
                <NavList>
                    <NavListLink
                        className={`link ${location === '/' ? 'active' : ''}`}
                        href={`/`}
                        aria-label="Home"
                    >
                        {t('Home')}
                    </NavListLink>
                    <NavListLink
                        className={`link ${location === '/about' ? 'active' : ''}`}
                        href={`/about`}
                        aria-label="About"
                    >
                        {t('About')}
                    </NavListLink>
                    <NavListLink
                        className={`link ${
                            location === '/services' ? 'active' : ''
                        }`}
                        href={`/services`}
                        aria-label="Services"
                    >
                        {t('Services')}
                    </NavListLink>
                    <NavListLink
                        className={`link ${
                            location === '/projects' ? 'active' : ''
                        }`}
                        href={`/projects`}
                        aria-label="Projects"
                    >
                        {t('Projects')}
                    </NavListLink>
                    <NavListLink
                        className={`link ${
                            location === '/contact' ? 'active' : ''
                        }`}
                        href={`/contact`}
                        aria-label="Contact"
                    >
                        {t('Contact')}
                    </NavListLink>
                </NavList>
                <ContactList>
                    <ul>
                        <ContactListItemPhone>
                            <ContactListLink href="tel:+380959309876">
                                +38 095 930 98 76
                            </ContactListLink>

                            <ContactListLink href="tel:+4368181766579">
                                +43 681 817 665 79
                            </ContactListLink>
                        </ContactListItemPhone>

                        <ContactListItem>
                            <ContactListLink href="mailto:brandmaze.info@gmail.com">
                                brandmaze.info@gmail.com
                            </ContactListLink>
                        </ContactListItem>
                    </ul>

                    <SocialsList>
                        <SocialsListItem>
                            <a
                                href="https://instagram.com/brand.maze?igshid=MzRlODBiNWFlZA=="
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {theme === 'light' ? (
                                    <Image
                                        width="20"
                                        height="20"
                                        src={instagram}
                                        alt="link to instagram"
                                    />
                                ) : (
                                    <Image
                                        width="20"
                                        height="20"
                                        src={instagramDark}
                                        alt="link to instagram"
                                    />
                                )}
                            </a>
                        </SocialsListItem>
                        <SocialsListItem>
                            <a
                                href="https://t.me/brandmaze"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {theme === 'light' ? (
                                    <Image
                                        width="20"
                                        height="20"
                                        src={telegram}
                                        alt="link to telegram"
                                    />
                                ) : (
                                    <Image
                                        width="20"
                                        height="20"
                                        src={telegramDark}
                                        alt="link to telegram"
                                    />
                                )}
                            </a>
                        </SocialsListItem>
                        <SocialsListItem>
                            <a
                                href="https://www.tiktok.com/@brand.maze?_t=8du33OG9NJN&_r=1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {theme === 'light' ? (
                                    <Image
                                        width="20"
                                        height="20"
                                        src={tiktok}
                                        alt="link to tiktok"
                                    />
                                ) : (
                                    <Image
                                        width="20"
                                        height="20"
                                        src={tiktokDark}
                                        alt="link to tiktok"
                                    />
                                )}
                            </a>
                        </SocialsListItem>
                        <SocialsListItem>
                            <a
                                href="https://www.linkedin.com/company/brand-maze/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {theme === 'light' ? (
                                    <Image
                                        width="20"
                                        height="20"
                                        src={linkedin}
                                        alt="link to linkedin"
                                    />
                                ) : (
                                    <Image
                                        width="20"
                                        height="20"
                                        src={linkedinDark}
                                        alt="link to linkedin"
                                    />
                                )}
                            </a>
                        </SocialsListItem>
                    </SocialsList>
                </ContactList>
            </SidebarBox>
        </SidebarContainer>
    );
};
