import { keyframes, styled } from "styled-components";
import Image from 'next/image';
import mdPlayCircleOutline from "../../../../public/images/header/circle_play_icon.svg";

const fadeInTopAnimation = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Header = styled.header`
  color: ${(props) => props.theme.black};
  background-color: transparent;
  position: fixed;
  display: flex;
  width: 100%;

  @media screen and (max-width: 1279.9px) {
    width: 100%;
    height: 45px;
    opacity: ${({ $isvisible }) => ($isvisible === "true" ? 1 : 0)};
    transition: opacity 0.3s, transform 0.3s;
    z-index: 500;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const Logo = styled.p`
  color: ${(props) => props.theme.black};
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-transform: uppercase;
  text-decoration: none;
  animation: ${fadeInTopAnimation} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  position: absolute;
  font-size: 25px;
  letter-spacing: -1.2px;

  cursor: pointer;
  text-decoration: none;
  margin-top: 20px;
  margin-left: 20px;

  @media screen and (min-width: 1280px) {
    position: fixed;
    font-size: 45px;
    letter-spacing: -3.2px;
    /* margin-top: 0;
    margin-left: 0; */
  }
`;

export const LogoBox = styled.a`
  text-decoration: none;
  cursor: pointer;
  z-index: 999;
`;

export const HeaderSvg = styled(Image)`
  fill: currentColor;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  animation: ${fadeInTopAnimation} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
export const MovieIcon = styled(mdPlayCircleOutline)`
  position: absolute;
  left: 170px;
  top: 22px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  z-index: 500;

  @media screen and (min-width: 768px) {
    left: 180px;
    top: 20px;
    width: 30px;
    height: 30px;
  }
  @media screen and (min-width: 1280px) {
    left: 300px;
    top: 25px;
    width: 40px;
    height: 40px;
  }
`;
