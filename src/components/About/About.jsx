'use client';
import { useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../ThemeStatus/ThemeProvider';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

import { Container, Title } from '@/components/baseStyles/CommonStyle.styled';
import {
    ContainerForAbout,
    ContainerForIcon,
    Img,
    ItemImgText,
    PaddingItem,
    ContainerForTeam,
    ItemWrap,
    TitleItem,
    JobItem,
    SocialsList,
    SocialsListItem,
    ContainerForAboutForMobile,
    ContainerForIconTablet,
    ImgForTeam,
    ContainerForTeamForMobile,
    ContainerForTeamForTablet,
    TitleTeam,
    ContainerForAboutItem,
    ImgForTeamColor,
    ImgWrap,
    SocialsListLink,
    TextBenefit,
} from './About.styled';

import chartbar from '../../../public/images/about/mdi_light_chart-bar.svg';
import chartpie from '../../../public/images/about/mdi_light_chart-pie.svg';
import flask from '../../../public/images/about/mdi_light_flask.svg';
import gift from '../../../public/images/about/mdi_light_gift.svg';

import envelop from '../../../public/images/about/envelop.svg';
import telegram from '../../../public/images/header/telegram.svg';
import linkedin from '../../../public/images/header/linkedin.svg';
import github from '../../../public/images/about/github.svg';

import envelopDark from '../../../public/images/about/envelop-dark.svg';
import telegramDark from '../../../public/images/header/telegram-dark.svg';
import linkedinDark from '../../../public/images/header/linkedin-dark.svg';
import githubDark from '../../../public/images/about/github-dark.svg';

import about from '@/CONST/about.json';

export const About = () => {
    const { t } = useTranslation();
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <Container>
            <Title>{t('About')}</Title>
            <ContainerForAbout>
                <ContainerForAboutItem>
                    {about?.benefits.map((it, ind) => (
                        <TextBenefit key={ind}>{t(it)}</TextBenefit>
                    ))}
                </ContainerForAboutItem>
            </ContainerForAbout>
            <ContainerForAboutForMobile>
                <Swiper
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    mousewheel={true}
                    keyboard={true}
                    loop={true}
                    loopPreventsSliding={true}
                    loopedslides={1}
                >
                    {about?.benefits.map((it, ind) => (
                        <SwiperSlide key={ind}>
                            <TextBenefit
                                style={{ padding: '20px', width: '70%' }}
                            >
                                {t(it)}
                            </TextBenefit>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </ContainerForAboutForMobile>
            <ContainerForIcon>
                <ContainerForIconTablet className="containerJustifyEnd">
                    {about?.['icon-row-1'].map((it) => (
                        <ItemImgText key={it.name}>
                            <Img
                                src={it.url}
                                alt={it.name}
                                width="45"
                                height="45"
                            />
                            <PaddingItem>{t(it.moto)}</PaddingItem>
                        </ItemImgText>
                    ))}
                </ContainerForIconTablet>
                <ContainerForIconTablet className="containerJustifyStart">
                    {about?.['icon-row-2'].map((it) => (
                        <ItemImgText key={it.name}>
                            <Img
                                src={it.url}
                                alt={it.name}
                                width="45"
                                height="45"
                            />
                            <PaddingItem>{t(it.moto)}</PaddingItem>
                        </ItemImgText>
                    ))}
                </ContainerForIconTablet>
            </ContainerForIcon>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <TitleTeam>{t('OUR PROFESSIONAL TEAM')}</TitleTeam>
            </div>
            <ContainerForTeam>
                {about?.team.map((it) => (
                    <ItemWrap
                        key={it.id}
                        data-aos="flip-up"
                        data-aos-delay="150"
                    >
                        <ImgWrap>
                            <ImgForTeam
                                src={it.img_bw}
                                alt={it.name}
                                layout="fill"
                            />
                            <ImgForTeamColor
                                src={it.img_color}
                                alt={it.name}
                                layout="fill"
                            />
                        </ImgWrap>
                        <TitleItem>{t(it.name)}</TitleItem>
                        <JobItem>{t(it.position)}</JobItem>
                        <SocialsList>
                            <SocialsListItem>
                                <SocialsListLink
                                    href={it.url_git}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {theme === 'light' ? (
                                        <Image
                                            src={github}
                                            width="20"
                                            height="20"
                                            alt="github link"
                                        />
                                    ) : (
                                        <Image
                                            src={githubDark}
                                            width="20"
                                            height="20"
                                            alt="github link"
                                        />
                                    )}
                                </SocialsListLink>
                            </SocialsListItem>
                            <SocialsListItem>
                                <SocialsListLink
                                    href={it.url_linkidn}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {theme === 'light' ? (
                                        <Image
                                            src={linkedin}
                                            width="20"
                                            height="20"
                                            alt="linkedin link"
                                        />
                                    ) : (
                                        <Image
                                            src={linkedinDark}
                                            width="20"
                                            height="20"
                                            alt="linkedin link"
                                        />
                                    )}
                                </SocialsListLink>
                            </SocialsListItem>
                            <SocialsListItem>
                                <SocialsListLink
                                    href={it.url_telegram}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {theme === 'light' ? (
                                        <Image
                                            src={telegram}
                                            width="20"
                                            height="20"
                                            alt="telegram link"
                                        />
                                    ) : (
                                        <Image
                                            src={telegramDark}
                                            width="20"
                                            height="20"
                                            alt="telegram link"
                                        />
                                    )}
                                </SocialsListLink>
                            </SocialsListItem>
                            <SocialsListItem>
                                <SocialsListLink href={it.url_mail}>
                                    {theme === 'light' ? (
                                        <Image
                                            src={envelop}
                                            width="20"
                                            height="20"
                                            alt="mail link"
                                        />
                                    ) : (
                                        <Image
                                            src={envelopDark}
                                            width="20"
                                            height="20"
                                            alt="mail link"
                                        />
                                    )}
                                </SocialsListLink>
                            </SocialsListItem>
                        </SocialsList>
                    </ItemWrap>
                ))}
            </ContainerForTeam>
            <ContainerForTeamForMobile>
                <Swiper
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    mousewheel={true}
                    keyboard={true}
                    loop={true}
                    loopPreventsSliding={true}
                    loopedslides={1}
                >
                    {about?.team.map((it) => (
                        <SwiperSlide key={it.id}>
                            <ItemWrap data-aos="flip-up" data-aos-delay="150">
                                <ImgWrap>
                                    <ImgForTeam
                                        src={it.img_bw}
                                        alt={it.name}
                                        layout="fill"
                                        priority
                                    />
                                    <ImgForTeamColor
                                        src={it.img_color}
                                        alt={it.name}
                                        layout="fill"
                                        priority
                                    />
                                </ImgWrap>
                                <TitleItem>{t(it.name)}</TitleItem>
                                <JobItem>{t(it.position)}</JobItem>
                                <SocialsList>
                                    <SocialsListItem>
                                        <SocialsListLink
                                            href={it.url_git}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {theme === 'light' ? (
                                                <Image
                                                    src={github}
                                                    width="20"
                                                    height="20"
                                                    alt="github link"
                                                />
                                            ) : (
                                                <Image
                                                    src={githubDark}
                                                    width="20"
                                                    height="20"
                                                    alt="github link"
                                                />
                                            )}
                                        </SocialsListLink>
                                    </SocialsListItem>
                                    <SocialsListItem>
                                        <SocialsListLink
                                            href={it.url_linkidn}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {theme === 'light' ? (
                                                <Image
                                                    src={linkedin}
                                                    width="20"
                                                    height="20"
                                                    alt="linkedin link"
                                                />
                                            ) : (
                                                <Image
                                                    src={linkedinDark}
                                                    width="20"
                                                    height="20"
                                                    alt="linkedin link"
                                                />
                                            )}
                                        </SocialsListLink>
                                    </SocialsListItem>
                                    <SocialsListItem>
                                        <SocialsListLink
                                            href={it.url_telegram}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {theme === 'light' ? (
                                                <Image
                                                    src={telegram}
                                                    width="20"
                                                    height="20"
                                                    alt="telegram link"
                                                />
                                            ) : (
                                                <Image
                                                    src={telegramDark}
                                                    width="20"
                                                    height="20"
                                                    alt="telegram link"
                                                />
                                            )}
                                        </SocialsListLink>
                                    </SocialsListItem>
                                    <SocialsListItem>
                                        <SocialsListLink href={it.url_mail}>
                                            {theme === 'light' ? (
                                                <Image
                                                    src={envelop}
                                                    width="20"
                                                    height="20"
                                                    alt="mail link"
                                                />
                                            ) : (
                                                <Image
                                                    src={envelopDark}
                                                    width="20"
                                                    height="20"
                                                    alt="mail link"
                                                />
                                            )}
                                        </SocialsListLink>
                                    </SocialsListItem>
                                </SocialsList>
                            </ItemWrap>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </ContainerForTeamForMobile>
            <ContainerForTeamForTablet>
                <Swiper
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    spaceBetween={50}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true }}
                    mousewheel={true}
                    keyboard={true}
                    loop={true}
                    loopPreventsSliding={true}
                    loopedslides={1}
                >
                    {about?.team.map((it) => (
                        <SwiperSlide key={it.id}>
                            <ItemWrap data-aos="flip-up" data-aos-delay="150">
                                <ImgWrap>
                                    <ImgForTeam
                                        src={it.img_bw}
                                        alt={it.name}
                                        layout="fill"
                                    />
                                    <ImgForTeamColor
                                        src={it.img_color}
                                        alt={it.name}
                                        layout="fill"
                                    />
                                </ImgWrap>
                                <TitleItem>{t(it.name)}</TitleItem>
                                <JobItem>{t(it.position)}</JobItem>
                                <SocialsList>
                                    <SocialsListItem>
                                        <SocialsListLink
                                            href={it.url_git}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {theme === 'light' ? (
                                                <Image
                                                    src={github}
                                                    width="20"
                                                    height="20"
                                                    alt="github link"
                                                />
                                            ) : (
                                                <Image
                                                    src={githubDark}
                                                    width="20"
                                                    height="20"
                                                    alt="github link"
                                                />
                                            )}
                                        </SocialsListLink>
                                    </SocialsListItem>
                                    <SocialsListItem>
                                        <SocialsListLink
                                            href={it.url_linkidn}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {theme === 'light' ? (
                                                <Image
                                                    src={linkedin}
                                                    width="20"
                                                    height="20"
                                                    alt="linkedin link"
                                                />
                                            ) : (
                                                <Image
                                                    src={linkedinDark}
                                                    width="20"
                                                    height="20"
                                                    alt="linkedin link"
                                                />
                                            )}
                                        </SocialsListLink>
                                    </SocialsListItem>
                                    <SocialsListItem>
                                        <SocialsListLink
                                            href={it.url_telegram}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {theme === 'light' ? (
                                                <Image
                                                    src={telegram}
                                                    width="20"
                                                    height="20"
                                                    alt="telegram link"
                                                />
                                            ) : (
                                                <Image
                                                    src={telegramDark}
                                                    width="20"
                                                    height="20"
                                                    alt="telegram link"
                                                />
                                            )}
                                        </SocialsListLink>
                                    </SocialsListItem>
                                    <SocialsListItem>
                                        <SocialsListLink href={it.url_mail}>
                                            {theme === 'light' ? (
                                                <Image
                                                    src={envelop}
                                                    width="20"
                                                    height="20"
                                                    alt="mail link"
                                                />
                                            ) : (
                                                <Image
                                                    src={envelopDark}
                                                    width="20"
                                                    height="20"
                                                    alt="mail link"
                                                />
                                            )}
                                        </SocialsListLink>
                                    </SocialsListItem>
                                </SocialsList>
                            </ItemWrap>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </ContainerForTeamForTablet>
        </Container>
    );
};
