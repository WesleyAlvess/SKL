import React, { useState } from "react";

// Style
import {
  NavContainer,
  UlContainer,
  Nav,
  UlSubitens,
  ContainerItem,
  ContainerLogo,
  ContainerIconMenuMobile,
  UlContainerMobile,
  ContainerItens,
  ContainerSubItens,
  SubItens,
} from "./Navbar.style";

// Icons Lucinda
import { Activity } from "lucide-react";
import { SquareChevronRight } from "lucide-react";

// Utils Menu
import Menus from "../../utils";

const Navbar = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(null);

  // Menu Mobile
  // Função para abrir o menu mobile
  const toggleMenuMobile = () => {
    setIsMenuMobileOpen(!isMenuMobileOpen);
  };

  // Função para abrir o submenu mobile
  const toggleSubMenuMobile = (index) => {
    setSubMenuOpen(subMenuOpen === index ? null : index); // Alterna o estado do submenu
  }

  // Menu Desktop

  // Função para abrir o submenu
  const handleMouseEnter = (index) => {
    // Limpar o timeout anterior, se houver
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setOpenMenuIndex(index); // Abre o menu ao passar o mouse
  };

  // Função para fechar o submenu com delay de 500ms
  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setOpenMenuIndex(null); // Fecha o menu após o tempo
    }, 500);
    setTimeoutId(id); // Guarda o id para limpar o timeout posteriormente
  };

  // Função para fechar o submenu ao clicar em um subitem
  const handleSubItemClick = () => {
    setOpenMenuIndex(null);
  };

  // Função para limpar o timeout ao passar o mouse sobre o submenu
  const handleMouseEnterSubmenu = () => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Cancela o timeout se o mouse entrar no submenu
    }
  };

  // Função para fechar o submenu ao sair do submenu
  const handleMouseLeaveSubmenu = () => {
    const id = setTimeout(() => {
      setOpenMenuIndex(null); // Fecha o menu após o tempo
    }, 500);
    setTimeoutId(id); // Guarda o id para limpar o timeout posteriormente
  };

  return (
    <NavContainer>
      <Nav>
        <ContainerLogo>
          <Activity />
          <h3>SKL</h3>
        </ContainerLogo>
        <ContainerIconMenuMobile onClick={toggleMenuMobile}>
          <SquareChevronRight />
        </ContainerIconMenuMobile>
        <UlContainer>
          {/* Menu items */}
          {Menus.map((item, index) => (
            <ContainerItem
              key={item.title}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.title} {item.icon && <item.icon />}
              {item.subMenu && openMenuIndex === index && (
                <UlSubitens
                  onMouseEnter={handleMouseEnterSubmenu}
                  onMouseLeave={handleMouseLeaveSubmenu}
                >
                  {item.subMenu.map((subItem) => (
                    <li key={subItem.title} onClick={handleSubItemClick}>
                      {subItem.icon && <subItem.icon />}
                      {subItem.title}
                    </li>
                  ))}
                </UlSubitens>
              )}
            </ContainerItem>
          ))}
        </UlContainer>

        {/* Menu mobile */}
        {isMenuMobileOpen && (
          <UlContainerMobile>
            {Menus.map((item, index) => (
              <ContainerItens 
              key={item.title}
              onClick={() => toggleSubMenuMobile(index)}
              >
                <span>{item.title}{item.icon && <item.icon />}</span>
                {item.subMenu && subMenuOpen == index && (
                  <ContainerSubItens>
                    {item.subMenu.map((subItm) => (
                      <SubItens key={subItm.title}>
                        {subItm.icon && <subItm.icon />}
                        {subItm.title}
                      </SubItens>
                    ))}
                  </ContainerSubItens>
                )}
              </ContainerItens>
            ))}
          </UlContainerMobile>
        )}
      </Nav>
    </NavContainer>
  );
};

export default Navbar;
