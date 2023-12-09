import styled from "styled-components";

export const AuthPage = styled.main`
display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);
`

export const AuthForm = styled.div`
  width: 600px;
  height: 375px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 2px solid #E1E1E1;
  background: #F6F6F6;
  padding: 35px 40px;
  
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column; 
`

export const AuthHeader = styled.h1`
  color: #000;
  font-family: Fira Sans, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const AuthInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 520px;
`;

export const AuthInputLabel = styled.label`
  color: #000;
  font-family: Fira Sans, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 10px;
`;

export const AuthInput = styled.input`
  border-radius: 10px;
  width: 420px;
  height: 50px;
  padding-left: 10px;
  border: 2px solid #E7E7E7;
  background: #FFF;
`;

export const AuthButton = styled.button`
  width: 259px;
  height: 48px;
  border-width: 0;
  color: #FFF;
  font-family: Fira Sans, sans-serif;
  font-size: 18px;
  border-radius: 12px;
  background: #077ED3;
`;