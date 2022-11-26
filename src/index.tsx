import React from 'react';
import ReactDOM from 'react-dom/client';
/*********************************************************/
import {createUseStyles} from 'react-jss'
const useStyles = createUseStyles({
  h1Title: {
    color: 'lightseagreen',
    textDecoration: 'underline',
    margin: 10,
    padding: 10,
  },
  pError: {
    textAlign: 'center',
    fontSize: 'larger',
    fontWeight: 'bolder',
    backgroundColor: '#C1819E'
  }
})

const Title = () => {
  const classes = useStyles()
  return (
    <h1 className={classes.h1Title}>Temperature Conversion App</h1>
  )
}
const Error = () => {
  const classes = useStyles()
  return (
    <p className={classes.pError}>Please Enter A Number</p>
  )
}

/*********************************************************/
import styled from 'styled-components';
const Body = styled.body`
font-family:100% 'Times New Roman', Times, serif;
background-color:#333;
color:azure;
text-align: center;
padding:10px;
margin:10px;
`;
const Label = styled.h3`
color:#81C1A4;`;
const Form = styled.form`
padding:10px;
margin:10px;
`;
const Input = styled.input`
padding:5px;
border-style:solid;
border-radius:5px;
&:focus{
  outline:3px seagreen solid;
}
`;
/***************************************************************/
class Temperature extends React.Component {
  state = { scale: 'c', temp: 0 };

  handleChangeFahrenheit = (e: { target: { value: string; }; }) => {
    this.setState({ scale: 'f', temp: e.target.value });
    console.log(e.target.value + 'f')
  }
  handleChangeCelsius = (e: { target: { value: string; }; }) => {
    this.setState({ scale: 'c', temp: e.target.value });
    console.log(e.target.value + 'c')
  }
  render() {
    const temp = this.state.temp;
    const scale = this.state.scale;
    let error;
    let fahrenheit = scale === 'c' ? (temp * 1.8) + 32 : temp;
    let celsius = scale === 'f' ? (temp - 32) / 1.8 : temp;
    if (isNaN(fahrenheit)|| isNaN(celsius)) {
      error = <Error></Error>
    }

    return (
      <Body>
        <Title></Title>
        <Form>
          <Label>Enter Temperature in degrees Fahreheit: </Label>
          <Input id="fahrenheit" value={fahrenheit} onChange={this.handleChangeFahrenheit} />
        </Form>
        {error}
        <Form >
          <Label>Enter Temperature in degrees Celcius: </Label>
          <Input id="celsius" value={celsius} onChange={this.handleChangeCelsius} />
        </Form>
      </Body>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('temperature') as HTMLElement)
root.render(
  <React.StrictMode>
    <Temperature />
  </React.StrictMode>
)
