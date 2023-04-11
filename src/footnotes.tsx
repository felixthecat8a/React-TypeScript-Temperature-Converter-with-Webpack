import React from 'react';
import styled from 'styled-jss';

const Footer = styled('footer') ({
    textAlign: 'center',
    color: 'azure',
});
const H5 = styled('h5') ({
    margin: 5,
    padding: 5,
});
const Img = styled('img') ({
    padding: 2,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 'auto',
    height: '50px',
})
const Name = styled('span') ({
    color: 'mediumseagreen',
    fontWeight: 'bold',
    '&:hover': {
        textShadow: {
            x: 0,
            y: 0,
            blur: '1em',
            color: '#3366CCEE'
        }
    }
})
const A = styled('a') ({
    textDecoration: 'none',
})
const Abbr = styled('abbr') ({
    textDecoration: 'none',
})
const ReactLogo = styled('span') ({
    color: '#61DBFB',
    fontWeight: 'bold',
})
const TS = styled('span') ({
    color: '#3178C6',
    fontWeight: 'bold',
})
const JSS = styled('span') ({
    color: '#F0DB4F',
    fontWeight: 'bold',
})
const Web = styled('span') ({
    color: '#8ED5FA',
    fontWeight: 'bold',
})
const Pack = styled('span') ({
    color: '#1C78C0',
    fontWeight: 'bold',
})

export class Footnotes extends React.Component { render(): JSX.Element {
    return (
        <Footer>
            <H5>&#x1F408;by <A href="http://github.com/felixthecat8a" target="_blank">
                <Name>FelixTheCat8a</Name>
            </A>&#128008;</H5>
            <H5>with <ReactLogo>React</ReactLogo>, <TS>TypeScript</TS> & <Abbr title="JavaScript Style Sheets"><JSS>JSS</JSS></Abbr></H5>
            <Img src="./img/React_icon.png" alt="React"/><Img src="./img/TypeScript_icon.png" alt="TypeScript"/><Img src="./img/JSS_icon.png" alt="JSS"/>
            <H5>also, with <JSS>Styled-JSS</JSS> & <Web class="web">Web</Web><Pack>pack</Pack></H5>
            <Img src="./img/Styled_JSS_icon.png" alt="Styled-JSS"/><Img src="./img/Webpack_icon.png" alt="NodeJS"/>
        </Footer>
    );
}}