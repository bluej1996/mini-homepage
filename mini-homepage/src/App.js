// App 컴포넌트
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './views/main';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route exact path="/" component={Main} />
      </div>
    </Router>
  );
};

export default App;