'use client'

import Image from 'next/image';
import {
  ContactListItem,
  ContactListLink,
  SocialsList,
  SocialsListItem
} from '../Sidebar.styled';
import {
  ContactListMobile,
  HeaderSvgMobile,
  MobileBox,
  NavListMobile,
  NavListMobileItem,
} from './MobileMenu.styled';
import { usePathname } from "next/navigation";
// import { useTranslation } from 'react-i18next';
import { Logo } from '../../Header/Header.styled';
import { useEffect, useState } from 'react';

import instagram from '../../../../../public/images/header/instagram.svg';
import telegram from '../../../../../public/images/header/telegram.svg';
import linkedin from '../../../../../public/images/header/linkedin.svg';
import tiktok from '../../../../../public/images/header/tiktok.svg';
import close from '../../../../../public/images/header/close.svg';


export const MobileMenu = () => {
 const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();
  // const { t } = useTranslation();
   const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
useEffect(()=>{
  const stylebody = document.querySelector('body');
 if (isOpen) {
    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        setIsOpen(false);
      }
    });
    if(stylebody){stylebody.style.overflow = 'hidden'};
    // document.querySelector('body').style.overflow = 'hidden';
  } else {
        if(stylebody){stylebody.style.overflow = 'visible'};
    // document.querySelector('body').style.overflow = 'visible';
  }

}, [isOpen])
 
  return (
    <>
      <HeaderSvgMobile width="24" height="24" onClick={toggleMenu} src={close} alt="close button"/>
      <Logo>Brand maze</Logo>

      {isOpen && (
        <MobileBox>
          <NavListMobile>
            <NavListMobileItem
              className={`link ${location === '/' ? 'active' : ''}`}
              href="/"
              aria-label="Home"
              onClick={toggleMenu}
            >
              {'Home'}
              {/* {t('Home')} */}
            </NavListMobileItem>
            <NavListMobileItem
              className={`link ${
                location.includes('/about') ? 'active' : ''
              }`}
              href="/about"
              aria-label="About"
              onClick={toggleMenu}
            >
              {'About'}
              {/* {t('About')} */}
            </NavListMobileItem>
            <NavListMobileItem
              className={`link ${
                location.includes('/services') ? 'active' : ''
              }`}
              href="/services"
              aria-label="Services"
              onClick={toggleMenu}
            >
              {'Services'}
              {/* {t('Services')} */}
            </NavListMobileItem>
            <NavListMobileItem
              className={`link ${
                location.includes('/projects') ? 'active' : ''
              }`}
              href="/projects"
              aria-label="Projects"
              onClick={toggleMenu}
            >
              {'Projects'}
              {/* {t('Projects')} */}
            </NavListMobileItem>
            <NavListMobileItem
              className={`link ${
                location.includes('/contact') ? 'active' : ''
              }`}
              href="/contact"
              aria-label="Contact"
              onClick={toggleMenu}
            >
              {'Contact'}
              {/* {t('Contact')} */}
            </NavListMobileItem>
          </NavListMobile>
          <ContactListMobile>
            <ul>
              <li>
                <ContactListLink href="tel:+380959309876">
                  +38 095 930 98 76
                </ContactListLink>
              </li>
              <li>
                <ContactListLink href="tel:+4368181766579">
                  +43 681 817 665 79
                </ContactListLink>
              </li>
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
                  title="link to istagram"
                >
                  <Image width="20" height="20" src={instagram} alt="link to instagram"/>
                </a>
              </SocialsListItem>
              <SocialsListItem>
                <a
                  href="https://t.me/brandmaze"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="link to telegram"
                >
                  <Image width="20" height="20" src={telegram} alt="link to telegram"/>
                </a>
              </SocialsListItem>
              <SocialsListItem>
                <a
                  href="https://www.tiktok.com/@brand.maze?_t=8du33OG9NJN&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="link to tiktok"
                >
                   <Image width="20" height="20" src={tiktok} alt="link to tiktok"/>
                </a>
              </SocialsListItem>
              <SocialsListItem>
                <a
                  href="https://www.linkedin.com/company/brand-maze/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="link to linkedin"
                >
                   <Image width="20" height="20" src={linkedin} alt="link to linkedin"/>
                </a>
              </SocialsListItem>
            </SocialsList>
          </ContactListMobile>
        </MobileBox>
      )}
    </>
  );
};
