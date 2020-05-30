import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logotitle } from '../../assets/crwn_custom_logo.svg';

export const HeaderContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.664);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 6;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const LogoStyled = styled(Logotitle)`
  height: 70px;
  width: 120px;
`;

export const OptionsDiv = styled.div`
  width: 400px;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;

export const OptionLink = styled(Link)`
  min-width: 25%;
  width: auto;
  height: 50px;
  font-size: 13px;
  padding: 15px;
  margin-right: 10px;
  letter-spacing: 3px;
  transition: 0.3s ease-out;
  text-align: center;

  &:hover {
    transform: scale(1.1);
    color: white;
    background-color: black;
  }
`;
