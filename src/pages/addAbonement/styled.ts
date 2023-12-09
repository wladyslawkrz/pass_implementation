import styled from "styled-components";

export const AddAbonementMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 70px);
`;

export const AddAbonementHeader = styled.h1`
  color: #000;
  font-family: Fira Sans, sans-serif;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
`;

export const AddAbonementForm = styled.div`
  width: 662px;
  height: 377px;
  border-radius: 30px;
  border: 2px solid #E1E1E1;
  background: #F6F6F6;
  padding: 35px 40px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`

export const AddAbonementInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 550px;
`;

export const AddAbonementInputLabel = styled.label`
  color: #000;
  font-family: Fira Sans, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 10px;
`;

export const AddAbonementInput = styled.input`
  border-radius: 10px;
  width: 420px;
  height: 50px;
  padding-left: 10px;
  border: 2px solid #E7E7E7;
  background: #FFF;
`;

export const AddAbonementButton = styled.button`
  width: 259px;
  height: 48px;
  border-width: 0;
  color: #FFF;
  font-family: Fira Sans, sans-serif;
  font-size: 18px;
  border-radius: 12px;
  background: #077ED3;
`;