// App 컴포넌트
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/main';
import Profile from './views/profile';
import Setting from './views/setting';

import Detail from './views/writing/detail';
import Insert from './views/writing/insert';
import List from './views/writing/list';
import Modify from './views/writing/modify';

import FindId from './views/login/find_id';
import FindPw from './views/login/find_pw';
import Join from './views/login/join';
import Login from './views/login/login';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Setting />} />

          <Route path="/writing/detail" element={<Detail />} />
          <Route path="/writing/insert" element={<Insert />} />
          <Route path="/writing/list" element={<List />} />
          <Route path="/writing/modify" element={<Modify />} />

          <Route path="/login/findid" element={<FindId />} />
          <Route path="/login/findpw" element={<FindPw />} />
          <Route path="/login" element={<Join />} />
          <Route path="/join" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
