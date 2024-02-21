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
                  <div className="profileSubConent">
                    <span>제목</span>
                    <input type="text" className="input" placeholder="제목" />
                  </div>
                  <div className="profileSubConent">
                    <span>내용</span>
                    <textarea name="" id="" cols="30" rows="10" className="input" placeholder="내용"></textarea>
                    {/* <input type="text" className="input" placeholder="내용" /> */}
                  </div>
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
