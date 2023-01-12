import * as S from './LoginPage.styled';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
//*: 전체를 다 가지고온다. S는 S라는 객체를 만들어서 가져온다는 뜻
//* as S : 전체의 이름을 S라고 하자라는 뜻

function LoginPage() {
  const id = 'alice5855@naver.com';
  const password = '1234';
  const idWarnning = '아이디 형식이 일치하지 않습니다.';
  const passwordWarnning = '비밀번호 형식이 일치하지 않습니다.'
  const idInput = useRef();
  const passwordInput = useRef(); 
  const emailRegEx = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const passwordRegEx = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
  const [idInputValue, setIdInputValue] = useState('');
  const [pWInputValue, setPWInputValue] = useState('');
  const [idString, SetidString] = useState('');
  const [passwordString,setPasswordString] = useState('');

  const idCheck = () => {
    return emailRegEx.test(idInputValue);
  };
  
  const idDoubleCheck = () => {
    if (idCheck() !== true) {
      SetidString(idWarnning);
    } else {
      SetidString('');
    }
  };

  const passwordCheck = () => {
    return passwordRegEx.test(pWInputValue);
  }

  const passwordDoubleCheck = () => {
    if (passwordCheck() !== true) {
      setPasswordString(passwordWarnning);
    } else {
      setPasswordString('');
    }
  }
  
  const clickBtn = () => {
    setIdInputValue(idInput.current.value);
    setPWInputValue(passwordInput.current.value);
    idDoubleCheck();
    passwordDoubleCheck();
    if (idInputValue === id && pWInputValue === password) {
    } else if (idInputValue === '' || passwordInput === '') {
      alert('id 또는 password가 입력되지 않았습니다.');
    } else if (idInputValue !== id) {
      
    } else if (pWInputValue !== password) {
      
    }
  };
  
  return (
    <div>
      <S.Total>
        <S.LoginTitle>Login page</S.LoginTitle>
        <S.TotalBox>
          <S.Label>ID</S.Label>
          <S.FormBox ref={idInput}></S.FormBox>
          <S.Label>Password</S.Label>
          <S.FormBox ref={passwordInput} type="password"></S.FormBox>
        </S.TotalBox>
        <div>{idString}</div>
        <div>{passwordString}</div>
        <S.LoginBtn onClick={clickBtn} >log in</S.LoginBtn>
        <Link to='/'><S.BackBtn>back</S.BackBtn></Link>
      </S.Total>
    </div>
  );
}

export default LoginPage;