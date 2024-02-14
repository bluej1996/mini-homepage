import React, { Component } from 'react';

class Insert extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrap">
          <div className="header">
            <div className="logo">logo</div>
            <div className="loginBox flex">
              <div className="setting flex">
                <span className="img"></span>
                <span>통계 및 관리</span>
              </div>
              {/* <div className='join flex'>
              <span className='img'></span>
                <span>회원가입</span>
              </div> */}
              <div className="in flex ml20">
                <span className="img"></span>
                <span>로그인</span>
              </div>
              <div className="out flex ml10">
                <span className="img"></span>
                <span>로그아웃</span>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="flex-as g16 p16">
              <div className="box detail">
                <div className="detailContainer">
                  <h1 className="title">제목제목</h1>
                  <p className="contents">
                    내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당내용입니당
                  </p>
                  <span className="img"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer"></div>
        </div>
      </div>
    );
  }
}
export default Insert;
