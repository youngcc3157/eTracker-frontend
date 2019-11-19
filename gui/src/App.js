import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout';
import Tabs from './Tabs';
require('./App.css');

function App() {
  return (
    <div className="App">
    <Router>
      <CustomLayout>
        <BaseRouter />
      </CustomLayout>
    </Router>

    <h1> eTracker </h1>
      <Tabs>
        <div label="Emails">

        </div>
        <div label="Applied">

        </div>
        <div label="Interviews">

        </div>
        <div label="On-Site">

        </div>
        <div label="Offers">

        </div>
      </Tabs>
    </div>
  );
}

export default App;
