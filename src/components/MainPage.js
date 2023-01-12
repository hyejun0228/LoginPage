import * as S from './MainPage.styled';
import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from './나는 문어.jpg'

function MainPage() {
    return (
        <S.Total>
            <h1>MAIN PAGE</h1>
            <Link to="/signuppage"><S.SignUpBtn>SIGHUP</S.SignUpBtn></Link>
            <Link to="/loginpage"><S.LoginBtn>LOGIN</S.LoginBtn></Link>
            <img src={LogoImg} alt='logo-img'/>
        </S.Total>
    );
}

export default MainPage;