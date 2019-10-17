import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

class UserDetail extends React.Component {

    state = {
        user: {}
    }

    componentDidMount() {
        const userID = this.props.match.params.userID
        axios.get(`http://127.0.01:8000/users/api/${userID}`)
            .then(res => {
                this.setState({
                    user: res.data
                });
            })
    }

    render() {
        return (
            <Card title={this.state.user.email}>
                <p>{this.state.user.is_active}</p>
            </Card>
        )
    }
}

export default UserDetail