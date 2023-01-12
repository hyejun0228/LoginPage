import React from 'react';
import LogoImg from './곰.jpg'

function NotFound() {
    return (
        <div>
            <h1>찾을 수 없는 페이지입니다...!</h1>
            <img src={LogoImg} alt='logo-img'/>

        </div>
    );
}

export default NotFound;