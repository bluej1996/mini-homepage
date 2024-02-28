// import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    // const {  name,  } = this.props;
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');

    return (
      <div className="container">
        <div className="wrap">
          <div className="header">
            <div className="logo">logo</div>
            <div className="loginBox flex">
              <div className="setting flex">
                <span className="img"></span>
                <span><Link to={`/setting`}>통계 및 관리</Link></span>
              </div>
              {/* <div className='join flex'>
              <span className='img'></span>
                <span>회원가입</span>
              </div> */}
              <div className="in flex ml20">
                <span className="img"></span>
                <span><Link to={`/login`}>로그인</Link></span>
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
                  <span><Link to={`/profile`}>수정하기</Link></span>
                </div>
              </div>
              <div className="box box2">
                <div className='flex-sb'>
                  <p className="tit">미니홈피 게시글</p>
                  <ul className='flex viewBox'>
                    <li className='view1 '></li>
                    <li className='view2'></li>
                    <li className='view3'></li>
                  </ul>
                </div>
                <ul className="list">
                  <li className="item" >
                    <Link to={`/writing/detail`}>
                    <div className="flex" >
                      <div className="thumbnail"></div>
                      <div className="text">
                        <span className="date">2024-02-06</span>
                        <div className="btext">제목제목</div>
                        {/* <div className='stext'>내용입니다 .....</div> */}
                      </div>
                    </div>
                    </Link>
                  </li>
                  <li className="item" >
                    <Link to={`/writing/detail`}>
                    <div className="flex" >
                      <div className="thumbnail"></div>
                      <div className="text">
                        <span className="date">2024-02-06</span>
                        <div className="btext">제목제목</div>
                        {/* <div className='stext'>내용입니다 .....</div> */}
                      </div>
                    </div>
                    </Link>
                  </li>
                  <li className="item" >
                    <Link to={`/writing/detail`}>
                    <div className="flex" >
                      <div className="thumbnail"></div>
                      <div className="text">
                        <span className="date">2024-02-06</span>
                        <div className="btext">제목제목</div>
                        {/* <div className='stext'>내용입니다 .....</div> */}
                      </div>
                    </div>
                    </Link>
                  </li>
                  <li className="item" >
                    <Link to={`/writing/detail`}>
                    <div className="flex" >
                      <div className="thumbnail"></div>
                      <div className="text">
                        <span className="date">2024-02-06</span>
                        <div className="btext">제목제목</div>
                        {/* <div className='stext'>내용입니다 .....</div> */}
                      </div>
                    </div>
                    </Link>
                  </li>
                  <li className="item" >
                    <Link to={`/writing/detail`}>
                    <div className="flex" >
                      <div className="thumbnail"></div>
                      <div className="text">
                        <span className="date">2024-02-06</span>
                        <div className="btext">제목제목</div>
                        {/* <div className='stext'>내용입니다 .....</div> */}
                      </div>
                    </div>
                    </Link>
                  </li>
                  <li className="item" >
                    <Link to={`/writing/detail`}>
                    <div className="flex" >
                      <div className="thumbnail"></div>
                      <div className="text">
                        <span className="date">2024-02-06</span>
                        <div className="btext">제목제목</div>
                        {/* <div className='stext'>내용입니다 .....</div> */}
                      </div>
                    </div>
                    </Link>
                  </li>
                  <li className="item" >
                    <Link to={`/writing/detail`}>
                    <div className="flex" >
                      <div className="thumbnail"></div>
                      <div className="text">
                        <span className="date">2024-02-06</span>
                        <div className="btext">제목제목</div>
                        {/* <div className='stext'>내용입니다 .....</div> */}
                      </div>
                    </div>
                    </Link>
                  </li>
                  <li className="item" >
                    <Link to={`/writing/detail`}>
                    <div className="flex" >
                      <div className="thumbnail"></div>
                      <div className="text">
                        <span className="date">2024-02-06</span>
                        <div className="btext">제목제목</div>
                        {/* <div className='stext'>내용입니다 .....</div> */}
                      </div>
                    </div>
                    </Link>
                  </li>

                </ul>
              </div>
              <div className="box box3">
                <div className="dateBox flex-sb">
                  <span className="date color-purple">date</span>
                  <span className="dateValue">
                  {today.getFullYear()} - {month} - {today.getDate()}
                  </span>
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
