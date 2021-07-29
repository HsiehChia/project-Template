import React from 'react'
import {
    Header,
    Footer,
} from '../../utils/Components'

import {
    styled,
} from '@material-ui/core';

import LoginFrame from './LoginFrame'

// import userRequest from '../../service'

const StyledContainer = styled ('div')({
    backgroundColor: '#fff',
    position: 'fixed',
    width: '100%',
    top: 50,
    left: 0,
    bottom: 40,
    overflow: 'auto',
})

export default function Login() {
    // const getUser = () => userRequest.getUser()
    // getUser()
    // loginStatus 代表登录状态，0代表logout，1代表登录，2代表注册
    const loginStatusFields = [0, 1, 2]
    return (
        <>
            <Header></Header>
            <StyledContainer>
                <LoginFrame
                    loginStatus={loginStatusFields}
                />
            </StyledContainer>
            <Footer></Footer>
        </>
    )
}
