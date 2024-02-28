import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrap">
          <div className="profileContent">
            <div className="flex-c g16 p36">
              <div className="profileBox2 login">
                <div className="box">
                  <div className="profileContainer">
                    <div className="profileSubConent">
                      <span>아이디</span>
                      <input type="text" className="input" placeholder="ID" />
                    </div>
                    <div className="profileSubConent">
                      <span>비밀번호</span>
                      <input type="password" className="input" placeholder="PASSWORD" />
                    </div>
                    <div className="flex-c find mb30">
                      <p className="color-blue">아이디 찾기</p>
                      <p className="color-purple">비밀번호 찾기</p>
                    </div>
                    <div className="pfBtn mb10">
                      <div className="profileBtn">취소</div>
                      <div className="profileBtn">확인</div>
                    </div>
                    <a href="#" className="kakao-login-btn">
                      <div className="flex-c">
                        <span className="ico"></span>
                        <p>카카오톡 로그인</p>
                      </div>
                    </a>
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

export default Login;
