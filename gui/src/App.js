import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import 'antd/dist/antd.css';

import ReactTable from 'react-table';
import 'react-table/react-table.css';
import CustomLayout from './containers/Layout';
import Tabs from './Tabs';
require('./App.css');

function App() {
  // Sample input for table in emails tab
  const sampleData = [
    {
      date: '11-03-2019',
      sender: 'noresponse@facebook.com',
      title: 'Application Response',
      body: 'Lorem Ipsum Dolce Et Decorum...'
    },
    {
      date: '11-03-2019',
      sender: 'applications@amazon.com',
      title: 'Sorry, maybe next time',
      body: 'Lorem Lorem Ipsum Ipsum...'
    },
    {
      date: '11-03-2019',
      sender: 'noreply@google.com',
      title: 'We need engineers',
      body: 'Ok OK OK OK OK OK ...'
    },
    {
      date: '11-03-2019',
      sender: 'applications@amazon.com',
      title: 'Sorry, maybe next time',
      body: 'Lorem Lorem Ipsum Ipsum...'
    },
    {
      date: '11-03-2019',
      sender: 'applications@amazon.com',
      title: 'Sorry, maybe next time',
      body: 'Lorem Lorem Ipsum Ipsum...'
    },
    {
      date: '11-03-2019',
      sender: 'applications@amazon.com',
      title: 'Sorry, maybe next time',
      body: 'Lorem Lorem Ipsum Ipsum...'
    },
    {
      date: '11-03-2019',
      sender: 'applications@amazon.com',
      title: 'Sorry, maybe next time',
      body: 'Lorem Lorem Ipsum Ipsum...'
    },
    {
      date: '11-03-2019',
      sender: 'applications@amazon.com',
      title: 'Sorry, maybe next time',
      body: 'Lorem Lorem Ipsum Ipsum...'
    },
    {
      date: '11-03-2019',
      sender: 'applications@amazon.com',
      title: 'Sorry, maybe next time',
      body: 'Lorem Lorem Ipsum Ipsum...'
    }
  ]

  const columns = [
    {
      Header: 'Date',
      accessor: 'date'
    },
    {
      Header: 'From',
      accessor: 'sender'
    },
    {
      Header: 'Title',
      accessor: 'title'
    },
    {
      Header: 'Preview',
      accessor: 'body'
    }
  ]

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
          Emails (Todo: Implement table)
          <div id="emailTable">
            <ReactTable
              data = {sampleData}
              columns = {columns}
              defaultPageSize = {4}
              pageSizeOptions = {[2, 3, 5]}
            />
          </div>
        </div>
        <div label="Applied">
          Applied Information and Content
          Applied Jobs Etc.
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
