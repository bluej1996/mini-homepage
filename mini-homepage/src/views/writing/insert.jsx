import React, { Component } from 'react';

class Insert extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrap">
          <div className="content">
            <div className="flex-as g16 p16">
              <div className="box detail">
                <div className="detailContainer">
                  <div className="profileSubConent">
                    <span>제목</span>
                    <input type="text" className="input" placeholder="제목" />
                  </div>
                  <div className="profileSubConent">
                    <span>내용</span>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="input"
                      placeholder="내용"
                    ></textarea>
                    {/* <input type="text" className="input" placeholder="내용" /> */}
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
export default Insert;
