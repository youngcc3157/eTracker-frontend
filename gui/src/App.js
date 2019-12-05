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
require('./App.css');

function App() {

  return (
    <div className="App">
    {/*<Router>
      <CustomLayout>
        <BaseRouter />
      </CustomLayout>
    </Router>*/}

    <h1> eTracker </h1>
      <Tabs>
        <div label="Emails">
          All Emails
          <div id="emailTable">
            <EmailsTable/>
          </div>
        </div>
        <div label="Applied">
          Applied Information and Content
          Applied Jobs Etc.
          <div id="AppliedDisplay">
            <AppliedTable/>
          </div>
        </div>
        <div label="Interviews">
          These are the interviews you have...
          Lorem ipsum...
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
