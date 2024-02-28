// import { Text, StyleSheet, View } from 'react-native'
import React from 'react';
import Chart from '../components/setting/chart';

const Setting = () => {
  return (
    <div className="container">
      <div className="wrap">
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
            <div className="box box2">
              <div style={{ width: 600, height: 300 }}>
                <Chart chartName="FrontEnd" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Setting;
