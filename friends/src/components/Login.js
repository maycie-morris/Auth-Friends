import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import { axiosWithAuth } from '../utils/axiosWithAuth'

export const Login = () => {

    let history = useHistory()

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    // const [isLoading, setIsLoading] = useState(false)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(true)
    //     }, 1000)
    // }, [])

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', credentials)
            .then((res) => {
                localStorage.setItem('token', res.data.payload)
                history.push('/protected')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="username">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={ credentials.username }
                        onChange={ handleChange }
                    />
                </label>
                <label htmlFor="password">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={ credentials.password }
                        onChange={ handleChange }
                    />
                </label>
                <button className="login-button" type="submit">Login</button>
            </form>
        </div>
    )

}