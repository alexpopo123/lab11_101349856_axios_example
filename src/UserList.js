import axios from 'axios'
import React, { Component } from 'react'
import UserDetails from './UserDetails'

export default class UserList extends Component {

constructor(props){
    super(props)
    this.state = {
        users: []
    }
}

    componentDidMount = () => {
        this.getUsers()
    }
    getUsers = () => {
        const USER_URL = `https://jsonplaceholder.typicode.com/users`
        axios.get(USER_URL)
            .then(res => {
                console.log(res.data)
                this.setState({...this.state, users: res.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    getUserByID = (event, uid) => {
        event.preventDefault()
        const USER_URL = `https://jsonplaceholder.typicode.com/users/${uid}`
        axios.get(USER_URL)
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <>
                <h2>UserList</h2>
                {
                    this.state.users.map(user => (
                        <>
                        <UserDetails key={user.id}user = {user}/>
                        <button onClick={(event) => this.getUserByID(event, user.id)}>VIEW</button>
                        <button onClick={(event) => this.getUserByID(event, user.id)}>Update</button>
                        <button onClick={(event) => this.getUserByID(event, user.id)}>Delete</button>
                        </>
                    ))
                }
                
            </>
        )
    }
}
