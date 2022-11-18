import React from 'react'


export default function UserDetails({user}) {
    return (
        <div>
            <p>{user.name} - {user.email}</p>
        </div>
    )
}
