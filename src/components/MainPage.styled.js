import styled from 'styled-components';

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
  margin-top: 120px;
`;

export const SignUpBtn = styled.button`
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
  margin: 10px;
`;

export const LoginBtn = styled.button`
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
  margin: 10px;
`;