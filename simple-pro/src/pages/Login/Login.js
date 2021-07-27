import React from 'react'
import base from '../../service'

export default function Login() {
    const getUser = base.getUser
    console.log(getUser())
    return (
        <div>
            Login
        </div>
    )
}
