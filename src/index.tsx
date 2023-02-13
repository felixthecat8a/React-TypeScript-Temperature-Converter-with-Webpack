import React from 'react'
import ReactDOM from 'react-dom/client'

import { useStyles } from './styles'

interface temperatureProps {
  value: any,
  scale: string,
  onChange: (value: any) => void,
}

const scaleNames = {
  c: 'Celsius' ,
  f: 'Fahrenheit'
}

class TemperatureInput extends React.Component <temperatureProps> {
  constructor(props: any) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e:any) {this.props.onChange(e.target.value)}

  TemperatureForm = () => {
    const value = this.props.value
    const scale = this.props.scale
    const classes = useStyles()
    return (
        <form className={classes.Form}>
          <h3 className={classes.Label}>Temperature in degrees {scaleNames[scale as keyof typeof scaleNames]}: </h3>
          <input className={classes.Input} type="text" value={value} onChange={this.handleChange} />
        </form>
    )
  }

  render() {
    return (
      <this.TemperatureForm/>
    )
  }
}

class Calculator extends React.Component <{},{ value:any, scale:string }> {
  constructor(props:any) {
    super(props)
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    this.state = {value: '', scale: 'c'}
  }

  handleCelsiusChange(value:any) {this.setState({scale: 'c', value})}
  
  handleFahrenheitChange(value:any) {this.setState({scale: 'f', value})}
  
  TemperatureElement = () => {
    const scale = this.state.scale;
    const value = this.state.value;
    const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
    const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;
    const classes = useStyles()
    return (
      <div className={classes.Container}>
        <h1 className={classes.Title}>Temperature Conversion</h1>
        <TemperatureInput scale="c" value={celsius} onChange={this.handleCelsiusChange} />
        <TemperatureInput scale="f" value={fahrenheit} onChange={this.handleFahrenheitChange} />
        <h3 className={classes.ErrorMessage}>{errorComment(value)}</h3>
      </div>
    )
  }

  render() {
    return (
      <this.TemperatureElement/>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('temperature') as HTMLElement)
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
)

function toCelsius(fahrenheit:number) {
  return (fahrenheit - 32) / 1.8
}

function toFahrenheit(celsius:number) {
  return (celsius * 1.8) + 32
}

function tryConvert(value:any, convert:any) {
  const input = parseFloat(value)
  if (Number.isNaN(input)) {return ''}
  const output = convert(input).toFixed(2)
  return output.toString()
}

function errorComment(value:any) {
  if (isNaN(value)) {
    return "Please Enter A Number"
  } else { return ""}
}