// import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <div className='wrap'>
        <div className='header'>
            <div className='logo'>logo</div>
            <div className='loginBox flex'>
              <div className='setting flex'>
                <span className='img'></span>
                <span>통계 및 관리</span>
              </div>
              {/* <div className='join flex'>
              <span className='img'></span>
                <span>회원가입</span>
              </div> */}
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
          <div className='flex-as'>
            <div className='box box1'>
              <div className='profileImg mb20'></div>
              <p className='name mb5'>닉네임</p>
              <p className='text'>상태 메시지</p>
              <div className='flex-end'>
                <span className='ico'></span>
                <span>수정하기</span>
              </div>
            </div>
            <div className='box box2'>
              <ul className='list'>
                <li className='item'>
                  <div className='flex'>
                    <div className='thumbnail'></div>
                    <div className='text'>
                      <div className='btext'>제목제목</div>
                      <div className='stext'>내용입니다 .....</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='box box3'></div>
          </div>
        </div>
        <div className='footer'></div>
      </div>
    )
  }
}

// const styles = StyleSheet.create({})