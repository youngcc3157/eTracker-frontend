import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import 'antd/dist/antd.css';

//import ReactTable from 'react-table';
//import 'react-table/react-table.css';
import EmailsTable from './EmailsTable';
import CustomLayout from './containers/Layout';
import Tabs from './Tabs';
import AppliedTable from './AppliedTable';
import logo from './logo.png';
require('./App.css');

function App() {

  return (
    <div className="App">
    {/*<Router>
      <CustomLayout>
        <BaseRouter />
      </CustomLayout>
    </Router>*/}

    <div id="logoHeader"><img id="logo" src={logo} alt="eTracker" height="45" width="150"/></div>

    <div id="tabsView">
      <Tabs>
        <div label="Emails">
          All Emails
          <div id="emailTable">
            <EmailsTable/>
          </div>
        </div>
        <div label="Applied">
          Jobs Applied
          <div id="AppliedDisplay">
            <AppliedTable/>
          </div>
        </div>
        <div label="Interviews">
          Scheduled Interviews
        </div>
        <div label="On-Site">
          On-Site Interviews
        </div>
        <div label="Offers">

        </div>
      </Tabs>
      </div>
    </div>
  );
}

export default App;
