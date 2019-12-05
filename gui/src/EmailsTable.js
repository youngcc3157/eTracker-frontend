import React, { Component } from 'react';
import ReactTable from 'react-table';
import { columns, data } from './EmailTableSetup';
import 'react-table/react-table.css';


class EmailsTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ReactTable data = { data }
        columns={ columns }
        // SubComponent={ subComponent }
        defaultPageSize = {10}
        pageSizeOptions = {[5, 10, 15]} />
    );
  }
}

export default EmailsTable;
