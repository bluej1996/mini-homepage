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
          <div className="content">
            <div className="flex-as g16 p16">
              <div className="box box1"></div>
              <div className="box box2"></div>
            </div>
          </div>
          <div className="footer"></div>
        </div>
      </div>
    );
  }
}

// const styles = StyleSheet.create({})
