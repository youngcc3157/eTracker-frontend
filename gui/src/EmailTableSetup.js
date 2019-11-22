export const columns = [
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
];

/*
export const subComponent = row => {
  return (
    <div>
      {row.original.types.map((type, id) => {
        return (
          <div className='subRow' key={ id }>{ type.name }</div>
        );
      })}
    </div>
  );
}; */

export const data = [
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
];
