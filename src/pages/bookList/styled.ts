import styled from "styled-components";

export const BooksMenuMain = styled.main`
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BooksMenuHeader = styled.h1`
  color: #000;
  font-family: Fira Sans, sans-serif;
  font-size: 32px;
  font-weight: 400;
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
`;

export const BooksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1280px;
`;

export const BookImg = styled.img`
  width: 216px;
  height: 339px;
  margin-top: 30px;
`;

export const BookCard = styled.div`
  border-radius: 29px;
  border: 2px solid #CDCDCD;
  background: #F1F1F1;
  width: 390px;
  height: 476px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BookText = styled.div`
  color: #000;
  font-family: Fira Sans, sans-serif;
  font-size: 32px;
  font-weight: 400;
`;