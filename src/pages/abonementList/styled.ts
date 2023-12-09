import styled from "styled-components";

export const AbonementsMenuMain = styled.main`
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AbonementsMenuHeader = styled.h1`
  color: #000;
  font-family: Fira Sans, sans-serif;
  font-size: 32px;
  font-weight: 400;
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
`;

export const AbonementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1280px;
`;

export const AbonementCard = styled.div`
  width: 391px;
  height: 100px;
  flex-shrink: 0;
  padding: 25px;
  margin: 20px;
  border-radius: 30px;
  border: 2px solid #E1E1E1;
  background: #F6F6F6;
`;

export const AbonementText = styled.div`
  color: #000;
  font-family: Fira Sans, sans-serif;
  font-size: 22px;
  font-weight: 400;
`;