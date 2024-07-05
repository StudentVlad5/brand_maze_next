'use client';
import {
    List,
    ListItem,
    ListItemText,
    CompList,
    CompListItem,
    ItemTitle,
    ItemNumber,
    ItemDiscr,
    ConclusionText,
    ListBoxSwaper,
    ListItemTextSwiper,
    TitleHome,
    ListBox,
    SwiperSvg,
    ListItemImg,
} from './Home.styled';
import { Container } from '@/components/baseStyles/CommonStyle.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo2 from '../../../public/images/home/logo2.svg';
import ph from '../../../public/images/home/ph.png';
import home from '@/CONST/home.json';

export const Home = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <Container>
            <TitleHome>{t('BUILDING BETTER BRANDS')}</TitleHome>
            <ListBox>
                <List>
                    <ListItem>
                        <ListItemImg src={ph} alt="" />

                        <ListItemText>{t(home.benefits[0])}</ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText>
                            {t(home.benefits[1])}
                            <span> {t('building better brands')} </span>
                        </ListItemText>

                        <SwiperSvg
                            width="240"
                            height="240"
                            src={logo2}
                            alt="logo"
                        />
                    </ListItem>
                </List>
            </ListBox>

            <ListBoxSwaper>
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
                    <SwiperSlide>
                        <SwiperSvg
                            width="240"
                            height="240"
                            src={logo2}
                            alt="logo"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <ListItemTextSwiper>
                            {t(home.benefits[0])}
                        </ListItemTextSwiper>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ListItemImg src={ph} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <ListItemTextSwiper>
                            {t(home.benefits[1])}
                            <span> {t('building better brands')} </span>
                        </ListItemTextSwiper>
                    </SwiperSlide>
                </Swiper>
            </ListBoxSwaper>

            <ConclusionText>
                <span>{t('At')} Brand Maze </span> -{' '}
                {t(
                    'we carefully implement a well-designed process that helps us achieve excellence in everything we do',
                )}
            </ConclusionText>

            <CompList>
                {home.list.map((it) => (
                    <CompListItem
                        data-aos={it.data}
                        data-aos-delay={it.delay}
                        key={it.id}
                    >
                        <ItemNumber>{it.id}</ItemNumber>
                        <ItemTitle>{t(it.title)}</ItemTitle>
                        <ItemDiscr>{t(it.description)}</ItemDiscr>
                    </CompListItem>
                ))}
            </CompList>
        </Container>
    );
};
