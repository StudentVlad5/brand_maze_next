'use client';
import ImageGallery from 'react-image-gallery';
import { SlideContainer, ContainerProject } from './Projects.styled';
import 'react-image-gallery/styles/css/image-gallery.css';

import { useEffect } from 'react';
import { ButtonLink } from '@/components/baseStyles/Button.styled';
import { TitleHome } from '../Home/Home.styled';
import { useTranslation } from 'react-i18next';
import images from '../../CONST/projects';

export const Project = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);

    const hendleClickProject = (e) => {
        e.preventDefault();
        images.map(it=>{
          if(e.target.alt === it.originalAlt){
            window.open(it.url, '_blank').focus();};
        })
    };

let arrayOfProjects = [];
images.map(it=> {
  arrayOfProjects.push({
      original: it.original,
      thumbnail: it.thumbnail,
      description: t(it.description),
      originalAlt: it.originalAlt,
      title: t(it.title),
  });  
})

    return (
        <ContainerProject>
            <SlideContainer>
            <TitleHome>{t('EXPLORE OUR WORKS')}</TitleHome>
                <ImageGallery
                    autoPlay={true}
                    items={arrayOfProjects}
                    lazyLoad={true}
                    description={arrayOfProjects}
                    slideDuration={700}
                    originalTitle={arrayOfProjects}
                    originalAlt={arrayOfProjects}
                    onClick={hendleClickProject}
                />
            </SlideContainer>
            <ButtonLink
                href="/contact"
                aria-label="Open order form"
                style={{ marginTop: '50px' }}
            >
                {t('Order')}
            </ButtonLink>
        </ContainerProject>
    );
};
