'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import mdCheck from '../../../public/images/serveces/check.svg';
import { Container, Title } from '@/components/baseStyles/CommonStyle.styled';
import { ButtonLink } from '@/components/baseStyles/Button.styled';
import {
    BoxSkills,
    DescriptionSkills,
    HeadingBox,
    Heading,
    HeadingSmall,
    Label,
    ListSkills,
    ListQuestions,
    ListBenefits,
    Number,
    NumberSmall,
    StepBenefits,
    Subtitle,
    SubtitleSkills,
    Text,
    TextCenter,
    TextSlider,
    TableData,
    TableHeading,
    WrapperBox,
    WrapperBoxSkills,
    WrapperText,
    DetailsWrapper,
    DetailsButton,
    DetailsList,
    DetailsItem,
} from './Services.styled';
import Image from 'next/image';
import data from '../../CONST/services.json';
export const Services = () => {
    const [showDetails, setShowDetails] = useState(null);
    const toggleDetails = () => setShowDetails((state) => !state);
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
        setShowDetails(false)
    }, []);

    return (
        <Container>
            <Title as="h1">{t('Services')}</Title>
            <WrapperBoxSkills>
                <BoxSkills>
                    <SubtitleSkills>
                        {t('Skills that we have mastered so far')}
                    </SubtitleSkills>
                    <DescriptionSkills>
                        {t(
                            'With our extensive experience and expertise, we offer a full range of services that include creating websites, Instagram accounts, TikTok pages, logos and more. We understand that each brand has its own unique history and values, which is why we approach each project individually, providing our clients with personalized solutions.',
                        )}
                    </DescriptionSkills>
                </BoxSkills>
                <ListSkills>
                    {data.listSkils.map((it) => (
                        <li key={it.id}>
                            <Label htmlFor={it.id}>
                                <span>{t(it.name)}</span>
                                <span>${it.level}%</span>
                            </Label>
                            <progress
                                id={it.id}
                                max={it.max}
                                value={it.value}
                            />
                        </li>
                    ))}
                </ListSkills>
            </WrapperBoxSkills>
            <WrapperText>
                <Subtitle>{t('Who are our customers?')}</Subtitle>
                <TextCenter>
                    {t(
                        "Whether you're a small startup, medium-sized business, or large corporation, we work with you to create a website that meets your needs and goals.",
                    )}
                    <br />
                    {t(
                        'Our services are available for a variety of industries including retail, hospitality, services, technology, arts and many more. We do our best to provide you with an effective, professional and user-friendly web presence that will help you attract customers and grow your business.',
                    )}
                </TextCenter>
                <ButtonLink
                    href="/contact"
                    aria-label="Open order form"
                    style={{ marginTop: '25px' }}
                >
                    {t('Order')}
                </ButtonLink>
            </WrapperText>
            <WrapperText>
                <Subtitle>{t('Development by Steps')}</Subtitle>
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
                    {data.sliderList.map((it) => (
                        <SwiperSlide key={it.number}>
                            <Number>{it.number}</Number>
                            <Heading>{t(it.heading)}</Heading>
                            <TextSlider>{t(it.text)}</TextSlider>
                            <DetailsWrapper>
                                {!showDetails ? (
                                    <DetailsButton
                                        type="button"
                                        aria-label="Open details"
                                        aria-expanded="false"
                                        onClick={toggleDetails}
                                    >
                                        {t('Details')}
                                    </DetailsButton>
                                ) : (
                                    <DetailsButton
                                        type="button"
                                        aria-label="Hide details"
                                        aria-expanded="false"
                                        onClick={toggleDetails}
                                    >
                                        {t('Hide')}
                                    </DetailsButton>
                                )}
                                {showDetails && (
                                    <DetailsList>
                                        {it.details.map((item, i) => {
                                            <DetailsItem key={i}>
                                                <Image
                                                    src={mdCheck}
                                                    width="15"
                                                    height="15"
                                                    alt="details"
                                                />
                                                <span>{t(item)}</span>
                                            </DetailsItem>;
                                        })}
                                    </DetailsList>
                                )}
                            </DetailsWrapper>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </WrapperText>
            <WrapperText>
                <Subtitle>{t('Technologies')}</Subtitle>
                <table>
                    <tbody>
                        {data.technologies.map((it) => (
                            <tr key={it.title}>
                                <TableHeading>{it.title}</TableHeading>
                                <TableData>{it.steck}</TableData>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </WrapperText>
            <WrapperBox>
                <Subtitle>{t('Why Brand Maze?')}</Subtitle>
                <ListBenefits>
                    {data.benefits.map((it) => (
                        <StepBenefits
                            data-aos={it.data}
                            data-aos-delay={it.delay}
                            key={it.id}
                        >
                            <HeadingBox>
                                <NumberSmall>{it.id}</NumberSmall>
                                <HeadingSmall>{t(it.title)}</HeadingSmall>
                            </HeadingBox>
                            <Text>{t(it.description)}</Text>
                        </StepBenefits>
                    ))}
                </ListBenefits>
            </WrapperBox>
            <WrapperBox>
                <Subtitle>{t('What we can also do')}</Subtitle>
                <ListQuestions>
                    {data.questions.map((it) => (
                        <li key={it.id}>
                            <Heading>{t(it.title)}</Heading>
                            <Text>{t(it.text)}</Text>
                        </li>
                    ))}
                </ListQuestions>
            </WrapperBox>
            <WrapperText>
                <Subtitle>{t('We look forward to working with you')}</Subtitle>
                <ButtonLink href="/contact" aria-label="Open order form">
                    {t('Order')}
                </ButtonLink>
            </WrapperText>
        </Container>
    );
};
