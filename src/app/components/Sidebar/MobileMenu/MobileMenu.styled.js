import { styled } from "styled-components";
import { NavListLink } from "../Sidebar.styled";
import Image from "next/image";

export const MobileMenuBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  transform: translateX(100%);
  transition: transform 250ms ease-in-out;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};

  &.is-expanded {
    transform: translateX(0);
  }

  @media screen and (min-width: 1281px) {
    display: none;
  }
`;

export const HeaderSvgMobile = styled(Image)`
  fill: currentColor;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const MobileBox = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: 100%;
`;

export const NavListMobile = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export const NavListMobileItem = styled(NavListLink)`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const ContactListMobile = styled.ul`
  display: block;
  bottom: 30px;

  padding: 0;
  list-style: none;
`;

export const ContactListTel = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
