import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'


export const AddFriends = () => {

    const [friendInfo, setFriendInfo] = useState ({
        name: "",
        age: "",
        email: ""
    });

    const handleChange = e => {
        setFriendInfo({
            ...friendInfo,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        axiosWithAuth
            .post('/api/friends', friendInfo)
            .then(res => {
                console.log(res)
                setFriendInfo({
                    ...friendInfo,
                    name: "",
                    age: "",
                    email: ""
                })
            })
            .catch(err => {
                console.log('Error!', err.response)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter a name"
                        value={friendInfo.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="age">
                    <input
                        type="text"
                        name="age"
                        id="age"
                        placeholder="Enter an age"
                        value={friendInfo.age}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="email">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter an email"
                        value={friendInfo.email}
                        onChange={handleChange}
                    />
                </label>
                <button className="add-friends-button">Add New Friend</button>
            </form>
        </div>
    )

}