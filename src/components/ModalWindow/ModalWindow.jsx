'use client';
import { useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';

import { ThemeContext } from '../ThemeStatus/ThemeProvider';
import { BackDrop, ItemContainer, HeaderSvgMobile } from './ModalWindow.styled';
import close from '../../../public/images/header/close.svg';
import closeDark from '../../../public/images/header/close-dark.svg';

import ReactPlayer from 'react-player';
// import video from '../../../public/images/video/IMG_4810.MOV';
import { useState, useContext } from 'react';

export const ModalWindow = () => {
    const [isPlaying, setPlaying] = useState(false);
    const { theme } = useContext(ThemeContext);
    const searchParams = useSearchParams();
    const modal = searchParams.get('modal');
    const pathname = usePathname();
    console.log('pathname', pathname);

    function closeModal(e) {
        e.preventDefault();
        setPlaying(false);
        router.back;
        // closeModalWindow(e);
    }

    return (
        <>
            {modal && (
                <BackDrop onClick={closeModal}>
                    <ItemContainer onClick={(e) => e.stopPropagation()}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'start',
                                margin: '20px 0',
                            }}
                        >
                            <ReactPlayer
                                url="images/video/IMG_4810.MOV"
                                playing={isPlaying}
                                controls
                                width="90%"
                                height="90%"
                                onPlay={() => setPlaying(true)}
                                onPause={() => setPlaying(false)}
                            />
                            <Link href={pathname}>
                                {theme === 'light' ? (
                                    <HeaderSvgMobile
                                        width="15"
                                        height="15"
                                        src={close}
                                        alt="close button"
                                    />
                                ) : (
                                    <HeaderSvgMobile
                                        width="15"
                                        height="15"
                                        src={closeDark}
                                        alt="close button"
                                    />
                                )}
                            </Link>
                        </div>
                    </ItemContainer>
                </BackDrop>
            )}
        </>
    );
};
