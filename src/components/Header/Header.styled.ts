import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  z-index: 10;
  background-color: #000000;
  color: #fff;
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */

  @media (max-width: 768px) {
    height: 60px; /* Altura menor para mobile */
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center; /* Centraliza tudo no eixo horizontal */
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    position: relative;
  }
`;

export const Logo = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 150px; /* Ajuste o tamanho da imagem */
    height: auto;
    object-fit: contain; /* Garante que a imagem mantenha proporções */
  }

  @media (max-width: 768px) {
    img {
      width: 120px; /* Tamanho menor em mobile */
    }
  }
`;


export const Nav = styled.nav`
  ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    margin: 0;

    @media (max-width: 768px) {
      flex-direction: column;
      background-color: #000;
      position: absolute;
      top: 100%;
      right: 0;
      width: 200px;
      padding: 1rem;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
      transition: transform 0.3s ease-in-out;
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: #4CAF50;
    }
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
