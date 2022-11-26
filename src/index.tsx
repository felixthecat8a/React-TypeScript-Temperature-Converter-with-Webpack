import React from 'react';
import ReactDOM from 'react-dom/client';
/**********************************************************************************/
import {createUseStyles} from 'react-jss'
const useStyles = createUseStyles({
  Error: {
    textAlign: 'center',
    fontSize: 'larger',
    fontWeight: 'bolder',
    color: '#C1819E'
  },
})
const Error = () => {
  const classes = useStyles()
  return (
    <p className={classes.Error}>Please Enter A Number</p>
  )
}
/**********************************************************************************/
import styled from 'styled-jss'
const Body = styled ('body') ({
  fontFamily: 'Times New Roman, Times, serif',
  backgroundColor: '#333',
  color: 'azure',
  textAlign: 'center',
  margin: 10,
  padding: 10,
})
const Title = styled('h1') ({
  color: 'lightseagreen',
  textDecoration: 'underline',
  margin: 10,
  padding: 10,
})
/**********************************************************************************/
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())
const style = {
  Form: {
    margin: 10,
    padding: 10,
  },
  Label: {
    color:'#81c1a4'
  },
  Input: {
    padding: 5,
    textAlign: 'center',
    borderStyle: 'solid',
    borderRadius: '.5rem',
    '&:focus': {
        outlineWidth: '3px',
        outlineColor: 'seagreen',
        outlineStyle: 'solid'
    }
  }
} 
const { classes } = jss.createStyleSheet(style).attach()
/**********************************************************************************/
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
        <Title>Temperature Conversion App</Title>
        <form className={classes.Form}>
          <h3 className={classes.Label}>Enter Temperature in degrees Fahreheit: </h3>
          <input className={classes.Input} id="fahrenheit" value={fahrenheit} onChange={this.handleChangeFahrenheit} />
        </form>
        {error}
        <form className={classes.Form}>
          <h3 className={classes.Label}>Enter Temperature in degrees Celcius: </h3>
          <input className={classes.Input} id="celsius" value={celsius} onChange={this.handleChangeCelsius} />
        </form>
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