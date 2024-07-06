'use client';
import { useEffect, useState, useContext } from 'react';
import {
    ContactForm,
    InputWrapper,
    LabelOfItem,
    InputOfItem,
    NameOfItem,
    TextareaOfItem,
    InputForFile,
    ContainerForInputForFile,
    LabelForInputForFile,
    ButtonSend,
    TextForInputForFile,
    ThanksBox,
    ThanksContent,
    HeaderSvgMobile,
} from './Contact.styled';
import { Container, Title } from '@/components/baseStyles/CommonStyle.styled';
import close from '../../../public/images/header/close.svg';
import closeDark from '../../../public/images/header/close-dark.svg';
import { ThemeContext } from '../ThemeStatus/ThemeProvider';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
    const [userFirstName, setUserFirstName] = useState(null);
    const [userLastName, setUserLastName] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [userPhone, setUserPhone] = useState(null);
    const [userMessage, setUserMessage] = useState(null);
    const [, setFile] = useState(null); //file,
    const [formSubmitted, setFormSubmitted] = useState(null);
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
        document?.querySelector('html').classList.add('js');
        setUserFirstName("");
        setUserLastName('');
        setUserEmail('');
        setUserPhone('');
        setUserMessage('');
        setFile('');
        setFormSubmitted(false);

    }, []);

    useEffect(() => {
        const stylebody = document?.getElementsByClassName('thanksMessage')[0];
        if (formSubmitted) {
            document.addEventListener('keydown', (e) => {
                if (e.code === 'Escape') {
                    setFormSubmitted(false);
                }
            });
            if (stylebody) {
                stylebody.addEventListener('click', (e) =>
                    setFormSubmitted(false),
                );
            }
        }
    }, [formSubmitted]);

    const { theme } = useContext(ThemeContext);

    const handleSubmit = () => {
        setFormSubmitted(true);
    };

    const handleChange = (e) => {
        e.preventDefault();
        switch (e.target.name) {
            case 'user-firstname':
                setUserFirstName(e.target.value);
                break;
            case 'user-lastname':
                setUserLastName(e.target.value);
                break;
            case 'user-email':
                setUserEmail(e.target.value);
                break;
            case 'user-phone':
                setUserPhone(e.target.value);
                break;
            case 'comment':
                setUserMessage(e.target.value);
                break;
            default:
                break;
        }
    };

    return (
        <Container>
            <Title>{t('Contact')}</Title>
            <ContactForm
                action="https://formsubmit.co/16ede5ee071426a3da088706f52af813"
                method="POST"
                encType="multipart/form-data"
                className="contact-form"
                name="form-contacts"
                autoComplete="on"
                onSubmit={() => {
                    handleSubmit();
                }}
            >
                <InputWrapper>
                    <LabelOfItem aria-label="Name">
                        <InputOfItem
                            type="text"
                            name="user-firstname"
                            required
                            placeholder={t('John')}
                            value={userFirstName}
                            onChange={(e) => handleChange(e)}
                        />
                        <NameOfItem>{t('First Name')}</NameOfItem>
                    </LabelOfItem>
                    <LabelOfItem aria-label="LastName">
                        <InputOfItem
                            type="text"
                            name="user-lastname"
                            required
                            placeholder={t('Watson')}
                            value={userLastName}
                            onChange={(e) => handleChange(e)}
                        />
                        <NameOfItem>{t('Last Name')}</NameOfItem>
                    </LabelOfItem>
                    <input
                        type="hidden"
                        name="_subject"
                        value="New Message!!!!!"
                    />
                    <input
                        type="hidden"
                        name="_next"
                        value="https://brand-maze-agency.vercel.app/contact"
                    />
                    <LabelOfItem aria-label="Email">
                        <InputOfItem
                            type="email"
                            name="user-email"
                            required
                            placeholder="bob@email.com"
                            value={userEmail}
                            onChange={(e) => handleChange(e)}
                        />
                        <NameOfItem>{t('Email')}</NameOfItem>
                    </LabelOfItem>
                    <LabelOfItem aria-label="Phone">
                        <InputOfItem
                            type="tel"
                            name="user-phone"
                            required
                            placeholder="+19739476185"
                            value={userPhone}
                            onChange={(e) => handleChange(e)}
                        />
                        <NameOfItem>{t('Phone number')}</NameOfItem>
                    </LabelOfItem>
                </InputWrapper>
                <LabelOfItem
                    className="comment"
                    aria-label="Comment"
                    style={{ width: '100%' }}
                >
                    <TextareaOfItem
                        name="comment"
                        placeholder={t('Write your message')}
                        value={userMessage}
                        onChange={(e) => handleChange(e)}
                    />
                    <NameOfItem>{t('Message')}</NameOfItem>
                </LabelOfItem>
                <ContainerForInputForFile>
                    <div className="input-file-container">
                        <InputForFile
                            className="input-file"
                            id="my-file"
                            type="file"
                            name="attachment"
                            accept="image/png, image/jpeg, application/pdf, .xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            onChange={(e) => {
                                if (
                                    e.target.value === '' ||
                                    e.target.value === undefined
                                ) {
                                    document.querySelectorAll(
                                        '.input-file-trigger',
                                    )[0].innerHTML = 'Add a file...';
                                    document.querySelectorAll(
                                        '.file-return',
                                    )[0].innerHTML =
                                        '(Allowed file formats - pdf doc docx odt ods. Maximum file size - 5 mb)';
                                } else {
                                    document.querySelectorAll(
                                        '.input-file-trigger',
                                    )[0].innerHTML = 'File added';
                                    document.querySelectorAll(
                                        '.file-return',
                                    )[0].innerHTML = e.target.value;
                                }
                                setFile(e.target.files[0]);
                            }}
                        />
                        <LabelForInputForFile
                            tabIndex="0"
                            htmlFor="my-file"
                            className="input-file-trigger"
                            onClick={(e) => {
                                document
                                    ?.querySelectorAll('.input-file')[0]
                                    ?.focus();
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 13 || e.key === 32) {
                                    document
                                        ?.querySelectorAll('.input-file')[0]
                                        ?.focus();
                                }
                            }}
                        >
                            {t('Add a file...')}
                        </LabelForInputForFile>
                    </div>
                    <TextForInputForFile className="file-return">
                        {t(
                            '(Allowed file formats - pdf doc docx odt ods. Maximum file size - 5 mb)',
                        )}
                    </TextForInputForFile>
                </ContainerForInputForFile>
                <ButtonSend type="submit">{t('Send message')}</ButtonSend>
                {formSubmitted && (
                    <ThanksBox className="thanksMessage">
                        <ThanksContent>
                            <h1 style={{ fontFamily: "'Inter', sans-serif" }}>
                                {t('Your message has been successfully sent')}
                            </h1>
                            <p
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: '30px',
                                }}
                            >
                                {t('We will contact you. Thank you!')}
                            </p>
                            {theme === 'light' ? (
                                <HeaderSvgMobile
                                    width="15"
                                    height="15"
                                    onClick={() => setFormSubmitted(false)}
                                    src={close}
                                    alt="close button"
                                />
                            ) : (
                                <HeaderSvgMobile
                                    width="15"
                                    height="15"
                                    onClick={() => setFormSubmitted(false)}
                                    src={closeDark}
                                    alt="close button"
                                />
                            )}
                        </ThanksContent>
                    </ThanksBox>
                )}
            </ContactForm>
        </Container>
    );
};
