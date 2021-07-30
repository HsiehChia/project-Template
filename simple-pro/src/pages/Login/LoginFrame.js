import React from 'react'
import { 
    styled,
    TextField,
} from '@material-ui/core'

const StyledContainer = styled ('div')({
    height: '100%',
    width: '100%',
    minHeight: 340,
    position: 'relative',
    background: 'linear-gradient(to left bottom, #ff8a2d, #8b8bff)',
})

const StyledLoginFrame = styled ('div')({
    height: 300,
    width: 500,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -250,
    marginTop: -150,
    borderRadius: 5,
    backgroundColor: 'rgb(255 246 246 / 36%)',
})

const StyledLoginFrameHeader = styled ('div')({
    position: 'absolute',
    width: '100%',
    height: 50,
    lineHeight: '50px',
    textAlign: 'center',
    color: '#222',
})

const StyledLoginFrameFieldsContainer = styled ('div')({
    position: 'absolute',
    top: 50,
    width: '100%',
    height: '200px',
    backgroundColor: '#ffffff8a',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

const StyledLoginFrameFields = styled ('div')({
    height: 40,
    width: '70%',
    margin: '8px auto',
    // backgroundColor: '#aaa',
})

const StyledLoginFrameFieldLabel = styled ('div')({
    float: 'left',
    height: 40,
    width: 100,
    lineHeight: '40px',
    fontSize: '14px',
})

const StyledLoginFrameFieldTextField = styled (TextField)({
    float: 'left',
    height: 40,
    lineHeight: '40px',
})

export default function LoginFrame() {
    return (
        <StyledContainer>
            <StyledLoginFrame>
                <StyledLoginFrameHeader>Login Page Title</StyledLoginFrameHeader>
                <StyledLoginFrameFieldsContainer>
                    <StyledLoginFrameFields>
                        <StyledLoginFrameFieldLabel>请输入用户名：</StyledLoginFrameFieldLabel>
                        <TextField
                            required
                            label="username"
                        />
                    </StyledLoginFrameFields>
                    <StyledLoginFrameFields>
                        <StyledLoginFrameFieldLabel>请输入密码：</StyledLoginFrameFieldLabel>
                        <StyledLoginFrameFieldTextField
                            required
                            label="password"
                            type="password"
                        />
                    </StyledLoginFrameFields>
                </StyledLoginFrameFieldsContainer>
            </StyledLoginFrame>
        </StyledContainer>
    )
}
