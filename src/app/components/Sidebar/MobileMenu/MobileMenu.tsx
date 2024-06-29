'use client'

import {
  ContactListItem,
  ContactListLink,
  SocialsList,
  SocialsListItem,
  TikTok,
} from '../Sidebar.styled';
import {
  ContactListMobile,
  HeaderSvgMobile,
  MobileBox,
  NavListMobile,
  NavListMobileItem,
} from './MobileMenu.styled';
import instagram from 'images/sprite.svg';
import telegram from 'images/sprite.svg';
import linkedin from 'images/sprite.svg';
import close from 'images/sprite.svg';
import { usePathname } from "next/navigation";
import { useTranslation } from 'react-i18next';
import { Logo } from '../../Header/Header.styled';
import { useEffect, useState } from 'react';



export const MobileMenu = () => {
 const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();
  const { t } = useTranslation();
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
      <HeaderSvgMobile width="24" height="24" onClick={toggleMenu}>
        <use href={close + '#close'}></use>
      </HeaderSvgMobile>
      <Logo>Brand maze</Logo>

      {isOpen && (
        <MobileBox>
          <NavListMobile>
            <NavListMobileItem
              className={`link ${location === '/' ? 'active' : ''}`}
              to="/"
              aria-label="Home"
              onClick={toggleMenu}
            >
              {t('Home')}
            </NavListMobileItem>
            <NavListMobileItem
              className={`link ${
                location === '/about' ? 'active' : ''
              }`}
              to="/about"
              aria-label="About"
              onClick={toggleMenu}
            >
              {t('About')}
            </NavListMobileItem>
            <NavListMobileItem
              className={`link ${
                location === '/services' ? 'active' : ''
              }`}
              to="/services"
              aria-label="Services"
              onClick={toggleMenu}
            >
              {t('Services')}
            </NavListMobileItem>
            <NavListMobileItem
              className={`link ${
                location === '/projects' ? 'active' : ''
              }`}
              to="/projects"
              aria-label="Projects"
              onClick={toggleMenu}
            >
              {t('Projects')}
            </NavListMobileItem>
            <NavListMobileItem
              className={`link ${
                location === '/contact' ? 'active' : ''
              }`}
              to="/contact"
              aria-label="Contact"
              onClick={toggleMenu}
            >
              {t('Contact')}
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
                  <svg width="20" height="20">
                    <use href={instagram + '#instagram'}></use>
                  </svg>
                </a>
              </SocialsListItem>
              <SocialsListItem>
                <a
                  href="https://t.me/brandmaze"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="link to telegram"
                >
                  <svg width="22" height="22">
                    <use href={telegram + '#telegram'}></use>
                  </svg>
                </a>
              </SocialsListItem>
              <SocialsListItem>
                <a
                  href="https://www.tiktok.com/@brand.maze?_t=8du33OG9NJN&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="link to tiktok"
                >
                  <TikTok />
                </a>
              </SocialsListItem>
              <SocialsListItem>
                <a
                  href="https://www.linkedin.com/company/brand-maze/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="link to linkedin"
                >
                  <svg width="20" height="20">
                    <use href={linkedin + '#linkedin'}></use>
                  </svg>
                </a>
              </SocialsListItem>
            </SocialsList>
          </ContactListMobile>
        </MobileBox>
      )}
    </>
  );
};
