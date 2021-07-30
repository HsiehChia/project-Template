import React from 'react'
import { 
    Container  ,
    styled  ,
} from '@material-ui/core';

const StyledDiv = styled ('div')({
    backgroundColor: '#f5cbab',
    height: 40,
    position: 'fixed',
    width: '100%',
    bottom: 0,
    left: 0,
})

const StyledContainer = styled (Container)({
    height: 40,
    lineHeight: '40px',
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
})

export default function Footer() {
    return (
        <StyledDiv>
            <StyledContainer>
                &copy;copyright 2021 - 2021 SimpleProjectTemplate, Inc.
            </StyledContainer>
        </StyledDiv>
    )
}
