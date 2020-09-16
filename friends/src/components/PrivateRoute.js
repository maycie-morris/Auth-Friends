import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

// requires token to access

export const PrivateRoute = ({ component: Component, otherProps, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => {
                if(localStorage.getItem('token')) {
                    return <Component />
                } else {
                    return <Redirect to="/login" />
                }
            }}
        />
    )
}