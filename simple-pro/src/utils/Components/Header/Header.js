import React from 'react'
import { 
    Container  ,
    styled  ,
} from '@material-ui/core';

const StyledDiv = styled ('div')({
    height: 50,
    backgroundColor: '#bebeff',
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
})

const StyledContainer = styled (Container)({
    height: 50,
    lineHeight: '50px',
})

const StyledH2 = styled ('h2')({
    color: '#272727cf',
    textAlign: 'center',
    margin: 0,
})

export default function Header() {
    return (
        <StyledDiv>
            <StyledContainer maxWidth="lg" fixed>
                <StyledH2>Simple Project Template</StyledH2>
            </StyledContainer>
        </StyledDiv>
    )
}
