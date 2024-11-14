import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: #256cb5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.div`
  width: 1500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  /* Responsivo para telas pequenas (Mobile) */
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const ContainerLogo = styled.div`
  color: red;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3em;
  font-family: "Lucida Sans", Geneva, Verdana, sans-serif;
  font-style: italic;
  margin-left: 50px;
  cursor: pointer;

  & h3 {
    color: white;
  }
`;

export const UlContainer = styled.ul`
  width: 350px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & li {
    color: white;
    font-weight: 500;
  }

  /* Responsivo para telas pequenas (Mobile) */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ContainerItem = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  padding: 6px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #4a9cd8;
  }
`;

export const UlSubitens = styled.ul`
  width: 255px;
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: absolute;
  cursor: pointer;
  top: 55px;
  left: 0;


`;

export const LinkSubitens = styled(Link)`
  padding: 10px;
  color: #333;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 7px;

  &:hover {
    color: #fff;
    background-color: #4a9cd8;
  }
`;

export const ContainerIconMenuMobile = styled.div`
  color: #fff;
  position: absolute;
  right: 50px;
  display: none;
  cursor: pointer;

  /* Responsivo para telas pequenas (Mobile) */
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

// Menu mobile

export const UlContainerMobile = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(37, 108, 181, 0.9);
  padding: 15px;
  transition: all 0.5s;

  display: flex;
  flex-direction: column;
  gap: 25px;

  & span {
  
  }
`;

export const LinkMenu = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    color: white;
    font-size: 22px;
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  color: white;
  font-size: 20px;
  transition: 0.3s ease-in-out;
  border-radius: 5px;
  cursor: pointer;
  background-color: #256cb5;

  &:hover {
    color: white;
  }
`;

export const ContainerSubItens = styled.div`
  padding-left: 20px; /* Indentação para os subitens */
  font-size: 18px;
  margin-top: 10px;
  font-weight: 500;
  color: #ddd;
`;

export const SubItens = styled(Link)`
  display: flex;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  font-size: 18px;
  color: #ddd;
  transition: 0.3s ease-in-out;
  border-radius: 5px;

  &:hover {
    background-color: #3e8cb5;
  }

  & svg {
    color: #fff; /* Ícones terão a cor branca */
  }
`;
