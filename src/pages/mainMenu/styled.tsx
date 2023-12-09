import styled from "styled-components";

export const Menu = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);
`;

export const MenuHeader = styled.h1`
  color: #000;
  font-family: Fira Sans, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const MenuBack = styled.div`
  border-radius: 29px;
  border: 2px solid #E9E9E9;
  background: #F6F6F6;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 500px;
`;

export const Buttons = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
`
export const MenuButton = styled.button`
  border-radius: 12px;
  background: #077ED3;
  width: 259px;
  color: #FFF;
  font-family: Fira Sans, sans-serif;
  font-size: 18px;
  height: 48px;
  border-width: 0;
`;