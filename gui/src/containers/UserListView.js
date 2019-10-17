import React from 'react';
import axios from 'axios';

import Users from '../components/User'

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

class UserList extends React.Component {

    state = {
        users: []
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/users/api/`)
            .then(res => {
                this.setState({
                    users: res.data
                });
            })
    }

    render() {
        return (
            <Users data={this.state.users} />
        )
    }
}

export default UserList