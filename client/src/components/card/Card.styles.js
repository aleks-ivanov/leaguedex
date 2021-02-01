import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Overlay = styled.div`
  background: rgba(74, 83, 95, 0.75);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 15;
  display: flex;
  justify-content: flex-end;
`;

export const Lock = styled(FaLock)`
  position: absolute;
  color: #dfeeff;
  height: 24px;
  width: 24px;
  margin: 0.5rem;
`;

export const Container = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 225px;
  transition: all 0.3s ease-in-out;
  cursor: ${(props) => (props.locked ? "not-allowed" : "pointer")};

  @media screen and (min-width: 1200px) {
    height: 100%;
    min-height: 400px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

Container.Image = styled(LazyLoadImage)`
  display: block;
  object-fit: cover;
  object-position: center right;
  width: 100%;
  height: 100%;
`;

Container.Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(24, 34, 47, 88%);
  color: ${({ theme }) => theme.third};
  font-weight: 500;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
