import * as S from './SignUpPage.styled';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function SignUpPage() {
  const idWarnning = '아이디 형식이 일치하지 않습니다.';
  const passwordWarnning = '비밀번호 형식이 일치하지 않습니다.'
  const idInput = useRef();
  const passwordInput = useRef();
  const secondPasswordInput = useRef();
  const emailRegEx = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const passwordRegEx = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
  const [idInputValue, setIdInputValue] = useState('');
  const [pWInputValue, setPWInputValue] = useState('');
  const [secondPWInputValue, setsecondPWInputValue] = useState('');
  const [idString, setidString] = useState('');
  const [passwordString,setPasswordString] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  //const [phoneNumberValue, setPhoneNumberValue] = useState('');

  const idCheck = () => {
    return emailRegEx.test(idInputValue);
  };

  const idDoubleCheck = () => {
    if (idCheck() !== true) {
      setidString(idWarnning);
    } else {
      setidString('');
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
    console.log(idInputValue);
    if (idInputValue === '' || passwordInput === '') {
      alert('id 또는 password가 입력되지 않았습니다.');
    }
  };

  const passwordInputCheck = () => {
    setPWInputValue(passwordInput.current.value);
    setsecondPWInputValue(secondPasswordInput.current.value);
    if (pWInputValue !== secondPWInputValue) {
      alert('비밀번호가 일치하지 않습니다.');
    }
  }

  const phoneNumberEvent = (e) => {
    let Number = e.target.value;
    setPhoneNumber(Number.replace(/[^0-9]/g, '')
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`));
    console.log(phoneNumber); 
  }

  return (
    <div>
      <S.Total>
        <h1>SIGNUP PAGE</h1>
        <label>id</label>
        <S.FormBox ref={idInput}></S.FormBox>
        <div>{idString}</div>
        <label>password</label>
        <S.FormBox ref={passwordInput} type="password"></S.FormBox>
        <div>{passwordString}</div>
        <label>password 재확인</label>
        <S.FormBox type='password'></S.FormBox>
        <S.BtnForm onClick={passwordInputCheck}>비밀번호 일치여부 확인</S.BtnForm>
        <label>Student-number</label>
        <S.FormBox type='text' maxLength='10'></S.FormBox>
        <label>Phone-number</label>
        <S.FormBox type='text' onChange={phoneNumberEvent} value={phoneNumber}></S.FormBox>
        <S.SignupBtn onClick={clickBtn}>signup</S.SignupBtn>
        <Link to='/'><S.CancelBtn>cancel</S.CancelBtn></Link>
      </S.Total>
    </div>
  );
}
//<S.BtnForm onClick={phonenumberCheck}>전화번호 형식 변환</S.BtnForm>

export default SignUpPage;