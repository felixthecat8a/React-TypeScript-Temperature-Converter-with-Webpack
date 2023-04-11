import React from 'react';
import ReactDOM from 'react-dom/client';
import { classes } from './jss_export';

const scaleNames = {
  c: 'Celsius' ,
  f: 'Fahrenheit'
};

const degrees:string = "\xB0";

interface temperatureProps {
  value: any,
  scale: string,
  onChange: (value: any) => void
};

class TemperatureInput extends React.Component <temperatureProps> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  };
  handleChange(e:any) {this.props.onChange(e.target.value)};

  render() {
    const value = this.props.value;
    const scale = this.props.scale;
    return (
      <>
        <label className={classes.Label}>{scaleNames[scale as keyof typeof scaleNames]}:
        <input className={classes.Input} type="text" value={value} onChange={this.handleChange}/>
        {degrees}{scaleNames[scale as keyof typeof scaleNames].charAt(0)}</label><br/>
      </>
    );
  }
}

class Calculator extends React.Component <{},{ value: any, scale: string }> {
  constructor(props:any) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {value: '', scale: 'c'};
  };

  handleCelsiusChange(value:any) {this.setState({scale: 'c', value})};
  
  handleFahrenheitChange(value:any) {this.setState({scale: 'f', value})};
  
  render() {
    const scale = this.state.scale;
    const value = this.state.value;
    const celsius = scale === 'f' ? this.convert(value, this.toCelsius) : value;
    const fahrenheit = scale === 'c' ? this.convert(value, this.toFahrenheit) : value;

    const errorMessage = (!Number.isNaN(parseFloat(value))||!value)? "" : "Please Enter A Number.";

    return (
      <>
        <h1 className={classes.Title}>Temperature Conversion App</h1>
        <form className={classes.Form}>
          <fieldset>
            <legend className={classes.Legend}>Converter</legend>
            <TemperatureInput scale="c" value={celsius} onChange={this.handleCelsiusChange} />
            <br />
            <TemperatureInput scale="f" value={fahrenheit} onChange={this.handleFahrenheitChange} />
            <br />
            <p  className={classes.Info}>Enter the temperature one box, and the conversion<br /> will appear in the other box automatically.</p>
          </fieldset>
          <p className={classes.ErrorMessage}>{errorMessage}</p>
        </form>
      </>
    );
  };

  convert(value:any, toUnit:any) {
    const input = parseFloat(value);
    if (Number.isNaN(input)) {return ''};
    const output = toUnit(input).toFixed(2);
    return output.toString();
  };
    
  toCelsius(fahrenheit: number) {
    return (fahrenheit - 32) / 1.8;
  };
  
  toFahrenheit(celsius: number) {
    return (celsius * 1.8) + 32;
  };

};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);
