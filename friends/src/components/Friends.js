import React, { useState, useEffect } from 'react'

import { axiosWithAuth } from '../utils/axiosWithAuth'
import { AddFriends } from './AddFriends'


export const Friends = () => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log('You got it', res)
                setFriends(res.data)
            })
            .catch(err => {
                console.log('No.', err)
            })
    }, [])

    return (
        <div>
        {friends.map(friend => {
            return (
            <div key={friend.id} friend={friend}>
                <h2> {friend.name} </h2>
                <h3> {friend.age} </h3>
                <h4> {friend.email} </h4>
            </div>
            )
            }
        )}
        <AddFriends />
        </div>
    )

}