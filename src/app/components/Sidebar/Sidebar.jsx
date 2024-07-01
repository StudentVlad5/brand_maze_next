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

// import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import instagram from '../../../../public/images/header/instagram.svg';
import telegram from '../../../../public/images/header/telegram.svg';
import linkedin from '../../../../public/images/header/linkedin.svg';
import tiktok from '../../../../public/images/header/tiktok.svg';

export const Sidebar = ({lang}) => {
    const location = usePathname();
    return (
        <SidebarContainer>
            <SidebarBox>
                <NavList>
                    <NavListLink
                        className={`link ${location === '/' ? 'active' : ''}`}
                        href={`/`}
                        aria-label="Home"
                    >
                        {'Home'}
                        {/* {t('Home')} */}
                    </NavListLink>
                    <NavListLink
                        className={`link ${location === '/about' ? 'active' : ''}`}
                        href={`/${lang}/about`}
                        aria-label="About"
                    >
                        {'About'}
                        {/* {t('About')} */}
                    </NavListLink>
                    <NavListLink
                        className={`link ${
                            location === '/services' ? 'active' : ''
                        }`}
                        href={`/${lang}/services`}
                        aria-label="Services"
                    >
                        {'Services'}
                        {/* {t('Services')} */}
                    </NavListLink>
                    <NavListLink
                        className={`link ${
                            location === '/projects' ? 'active' : ''
                        }`}
                        href={`/${lang}/projects`}
                        aria-label="Projects"
                    >
                        {'Projects'}
                        {/* {t('Projects')} */}
                    </NavListLink>
                    <NavListLink
                        className={`link ${
                            location === '/contact' ? 'active' : ''
                        }`}
                        href={`/${lang}/contact`}
                        aria-label="Contact"
                    >
                        {'Contact'}
                        {/* {t('Contact')} */}
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
                                <Image
                                    width="20"
                                    height="20"
                                    src={instagram}
                                    alt="link to instagram"
                                />
                            </a>
                        </SocialsListItem>
                        <SocialsListItem>
                            <a
                                href="https://t.me/brandmaze"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    width="20"
                                    height="20"
                                    src={telegram}
                                    alt="link to telegram"
                                />
                            </a>
                        </SocialsListItem>
                        <SocialsListItem>
                            <a
                                href="https://www.tiktok.com/@brand.maze?_t=8du33OG9NJN&_r=1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    width="20"
                                    height="20"
                                    src={tiktok}
                                    alt="link to tiktok"
                                />
                            </a>
                        </SocialsListItem>
                        <SocialsListItem>
                            <a
                                href="https://www.linkedin.com/company/brand-maze/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    width="20"
                                    height="20"
                                    src={linkedin}
                                    alt="link to linkedin"
                                />
                            </a>
                        </SocialsListItem>
                    </SocialsList>
                </ContactList>
            </SidebarBox>
        </SidebarContainer>
    );
};
