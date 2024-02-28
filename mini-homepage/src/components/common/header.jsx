import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">logo</div>
      <div className="loginBox flex">
        <div className="setting flex">
          <span className="img"></span>
          <span>
            <Link to={`/setting`}>통계 및 관리</Link>
          </span>
        </div>
        {/* <div className='join flex'>
                <span className='img'></span>
                  <span>회원가입</span>
                </div> */}
        <div className="in flex ml20">
          <span className="img"></span>
          <span>
            <Link to={`/login`}>로그인</Link>
          </span>
        </div>
        <div className="out flex ml10">
          <span className="img"></span>
          <span>로그아웃</span>
        </div>
      </div>
    </div>
  );
};
export default Header;
