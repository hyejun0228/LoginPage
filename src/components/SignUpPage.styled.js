import styled from "styled-components";

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50vh;
  margin-top: 150px;
`;

export const FormBox = styled.input`
  width: 240px;
  height: 36px;
  border: solid black 2px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: none;
`;

export const BtnForm = styled.button`
  margin: 1px;
  border-radius: 5px;
  padding: 5px 80px;
  transition: 0.3s;
  :hover {
    background-color: #8d72e1;
    color: white;
  }
  background-color: #8d9eff;
  border: none;
  color: white;
  cursor: url(fishCursor.png), auto;
  margin-bottom: 20px;
`;

export const SignupBtn = styled.button`
  margin: 1px;
  border-radius: 5px;
  padding: 5px 80px;
  transition: 0.3s;
  :hover {
    background-color: #8d72e1;
    color: white;
  }
  background-color: #8d9eff;
  border: none;
  color: white;
  cursor: url(fishCursor.png), auto;
  margin-bottom: 20px;
`;

export const CancelBtn = styled.button`
  margin: 1px;
  border-radius: 5px;
  padding: 5px 80px;
  transition: 0.3s;
  :hover {
    background-color: #8d72e1;
    color: white;
  }
  background-color: #8d9eff;
  border: none;
  color: white;
  cursor: url(fishCursor.png), auto;
`;