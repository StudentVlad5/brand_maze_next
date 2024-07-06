import Image from "next/image";
import styled from "styled-components";

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: start;

  width: 100%;
  height: 100%;

  overflow: scroll;
`;

const ItemContainer = styled.div`
  position: relative;
  display: block;

  width: 95%;
  height: auto;
  max-height: 100vh;

  margin-top: 50px;
  padding: 40px 20px;

  background-color: var(--color-background-main);
  border-radius: 20px;
  -webkit-box-shadow: 7px 4px 14px 7px var(--color-shadow);
  -moz-box-shadow: 7px 4px 14px 7px var(--color-shadow);
  box-shadow: 7px 4px 14px 7px var(--color-shadow);
`;

const HeaderSvgMobile = styled(Image)`
  fill: currentColor;
  position: absolute;
  top: 0px;
  right: -10px;
  cursor: pointer;
`;

export { BackDrop, ItemContainer, HeaderSvgMobile };
