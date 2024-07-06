import styled, { keyframes } from "styled-components";
import { Container } from "@/components/baseStyles/CommonStyle.styled";

const scaleInCenter = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  font-style: normal;
  /* width: 90%; */
  min-height: 441px;
  overflow: hidden;
  animation: ${scaleInCenter} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    min-height: 200px;
  }
`;

const ContainerProject = styled(Container)`
   @media screen and (min-width: 1280px)  {
    margin-left: 300px;
    width: 75%;
  }
`;
export { SlideContainer, ContainerProject };
