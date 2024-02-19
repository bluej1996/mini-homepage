// import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react';

export default class Setting extends Component {
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
          <div className="settingContent">
            <div className="flex-as g16 p16">
              <div className="box box1">
                <ul className="tabMenu">
                  <li>
                    <div className="tabTitle">
                      <span className="statisticsIco"></span>
                      <p>통계</p>
                    </div>
                    <ul className="tabSublist">
                      <li>
                        <a href="">팔로워통계</a>
                      </li>
                      <li>
                        <a href="">좋아요통계</a>
                      </li>
                      <li>
                        <a href="">방문자통계</a>
                      </li>
                      <li>
                        <a href="">게시글통계</a>
                      </li>
                      <li>
                        <a href="">조회수통계</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="tabTitle">
                      <span className="manageHpIco"></span>
                      <p>홈피 관리</p>
                    </div>
                    <ul className="tabSublist">
                      <li>
                        <a href="">홈피꾸미기</a>
                      </li>
                      <li>
                        <a href="">음악관리</a>
                      </li>
                      <li>
                        <a href="">친구목록</a>
                      </li>
                      <li>
                        차<a href="">단목록</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="box box2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const styles = StyleSheet.create({})
