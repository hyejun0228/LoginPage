import styled from 'styled-components';
  
//const LoginTitle = styled여기까지 쓰면 위에 import추가 된다./
//적용하고 싶은 태그를위에 적고 새로적은 이름을 밑에 태그대신 적는다.
//재활용하려면 index에 넣어주면 됨
  
export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 20vh;
  margin-top: 120px;
`;
export const LoginTitle = styled.div`
  display: flex; //기본
  align-items: center; //
  justify-content: center; //메인축 방향 정렬
  flex-direction: column; //세로로 정렬
  margin-top: 190px;
  margin-bottom: 40px;
  //vh : 화면상 차지 비율을 나타낼때 쓰이는 단위
  font-size: 30px;
`;
export const TotalBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormBox = styled.input`
  width: 240px;
  height: 36px;
  border: solid black 2px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: none;
  
  //border-radius: 20% ;
`;
export const LoginBtn = styled.button`
  margin: 10px;
  border-radius: 5px;
  padding: 5px 80px;
  transition: 0.3s;
  :hover {
    background-color: #8d72e1;
    color: white;
  }
  //가져다대면 색이 변하는거임
  background-color: #8d9eff;
  color: white;
  border: none; //테두리
  cursor: url(fishCursor.png), auto;
`;
  
export const BackBtn = styled.button`
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
  
export const Label = styled.label`
  margin: 5px;
`;
  
