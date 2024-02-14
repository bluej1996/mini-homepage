// import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react';

class Main extends Component {
  render() {
    // const {  name,  } = this.props;

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
              <div className="box box1">
                <div className="profileImg mb20"></div>
                <p className="name mb5">닉네임</p>
                <p className="text">상태 메시지</p>
                <div className="flex-end">
                  <span className="ico"></span>
                  <span>수정하기</span>
                </div>
              </div>
              <div className="box box2">
                <p className="tit">미니홈피 게시글</p>
                <ul className="list">
                  <li className="item">
                    <div className="flex">
                      <div className="thumbnail"></div>
                      <div className="text">
                        <span className="date">2024-02-06</span>
                        <div className="btext">제목제목</div>
                        {/* <div className='stext'>내용입니다 .....</div> */}
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="flex">
                      <div className="thumbnail"></div>
                      <div className="text">
                        <span className="date">2024-02-06</span>
                        <div className="btext">제목제목</div>
                        {/* <div className='stext'>내용입니다 .....</div> */}
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="flex">
                      <div className="thumbnail"></div>
                      <div className="text">
                        <span className="date">2024-02-06</span>
                        <div className="btext">제목제목</div>
                        {/* <div className='stext'>내용입니다 .....</div> */}
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="flex">
                      <div className="thumbnail"></div>
                      <div className="text">
                        <span className="date">2024-02-06</span>
                        <div className="btext">제목제목</div>
                        {/* <div className='stext'>내용입니다 .....</div> */}
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="flex">
                      <div className="thumbnail"></div>
                      <div className="text">
                        <span className="date">2024-02-06</span>
                        <div className="btext">제목제목</div>
                        {/* <div className='stext'>내용입니다 .....</div> */}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="box box3">
                <div className="dateBox flex-sb">
                  <span className="date color-purple">date</span>
                  <span className="dateValue">2024-02-06</span>
                </div>
                <div className="dateBox flex-sb">
                  <span className="date color-purple">today</span>
                  <span className="dateValue">{name}</span>
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

Main.defaultProps = {
  name: 'test입니다',
};

export default Main;
