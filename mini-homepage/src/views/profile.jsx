// import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react';

export default class Profile extends Component {
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
            <div className="flex g16 p36">
              <div className="profileBox1">
                <div className="box">
                  <div className="profilePicture">사진</div>
                  <div className="profileEditIconWrap">
                    <i className="profileEditIcon"></i>
                  </div>
                </div>
              </div>
              <div className="profileBox2">
                <div className="box">
                  <div className="profileContainer">
                    <div className="profileSubConent">
                      <span>사이트 제목</span>
                      <input type="text" className="input" placeholder="아이슈의 미니홈피" />
                    </div>
                    <div className="profileSubConent">
                      <span>별명</span>
                      <input type="text" className="input" placeholder="아이슈" />
                    </div>
                    <div className="profileSubConent">
                      <span>상태 메세지</span>
                      <input type="text" className="input" placeholder="믿어 의심치 않아" />
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

// const styles = StyleSheet.create({})
