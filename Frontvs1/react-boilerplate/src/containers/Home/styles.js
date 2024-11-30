import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-image: url('/src/assets/@laBelle_logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const BackgroundContainer = styled.div`
  width: 100%; /* Altera para 100vw para evitar diferença de largura - estava 100%*/ 
  min-height: 97vh;
  background-image: url('/src/assets/@laBelle_Frente.png'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 60px; /* 150*/  
  margin-top:50px;
`;

export const ContentContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightcoral;
  padding: 10px;  
  width: 97.3%;
  position: fixed; 
  top: 0px;
  z-index: 1;
`;

export const NavItem = styled.div`
  margin: 0 15px;
  padding: 10px 20px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s;
  border-radius: 5px;

  &:hover {
    background-color: indianred;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: pink;
  text-align: center;
`;

export const SubTitle = styled.h3`
  font-size: 18px;
  color: #b0b0b0;
  text-align: center;
  margin-top: -10px;
  font-weight: 300;
  font-style: italic;
`;
