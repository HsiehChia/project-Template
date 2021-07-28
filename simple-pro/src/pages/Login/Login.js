import React from 'react'
import userRequest from '../../service'

export default function Login() {
    const getUser = () => userRequest.getUser()
    getUser()
    return (
        <div>
            Login
        </div>
    )
}
