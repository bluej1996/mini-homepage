// import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <div className='container'>
        <div className='wrap'>
          <div className='header'>
            <div className='logo'>logo</div>
            <div className='loginBox flex'>
              <div className='setting flex'>
                <span className='img'></span>
                <span>통계 및 관리</span>
              </div>
              <div className='in flex ml20'>
              <span className='img'></span>
                <span>로그인</span>
              </div>
              <div className='out flex ml10'>
              <span className='img'></span>
                <span>로그아웃</span>
              </div>
            </div>
          </div>
          <div className='content'>
            <div className='flex g16 p16'>
              <div className='box profileBox1'>
                <div>사진</div>
                <div>파일찾기</div>
              </div>
              <div className='box profileBox2'>
                <div className='profileContainer'>
                  <div className='profileContent'>
                    <div className='profileHomepageName'>
                      <span>홈피이름</span>
                      <input type="text" className='input'/>
                    </div>
                    <div className='profileNickname'>별명</div>
                    <div className='profileMessage'>상메</div>
                  </div>
                  <div className='profileBtn'>
                    <div className='profileCancel'>취소</div>
                    <div className='profileSuccess'>확인</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer'></div>
        </div>
      </div>
    )
  }
}

// const styles = StyleSheet.create({})