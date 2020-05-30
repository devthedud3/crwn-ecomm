import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const HeaderComponent = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const TitleContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const TotalContainer = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
export const DisclaimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: red;
  font-size: 20px;
  margin-bottom: 0;
`;
export const InfoContainer = styled.span`
  text-align: center;
  font-size: 20px;
  margin: 0 0 20px 0;
`;
