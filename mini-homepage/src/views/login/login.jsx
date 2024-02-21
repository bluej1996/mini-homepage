import React,{ Component } from "react";

class Login extends Component {
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
                        <div className="flex-c find">
                            <p className="color-blue">아이디 찾기</p>
                            <p className="color-purple">비밀번호 찾기</p>
                        </div>
                      </div>
                    </div>
                    <div className="profileBtnContainer">
                      <div className="profileBtn">취소</div>
                      <div className="profileBtn">확인</div>
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