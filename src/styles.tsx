import {createUseStyles} from 'react-jss'
export const useStyles = createUseStyles({
  Container: {
    height: '100%',
    fontFamily: 'sans-serif',
    backgroundColor: '#333',
    color: 'azure',
    textAlign: 'center',
  },
  Title: {
    textAlign: 'center',
    color: 'lightseagreen',
    textDecoration: 'underline',
    margin: 10,
    padding: 10,
  },
  Form: {
    textAlign: 'center',
    margin: 10,
    padding: 10,
  },
  Label: {
    color:'#81c1a4'
  },
  Input: {
    padding: 5,
    fontSize: 'medium',
    fontWeight: 'bold',
    textAlign: 'center',
    borderStyle: 'solid',
    borderRadius: '.5rem',
    '&:focus': {
        outlineWidth: '3px',
        outlineColor: 'seagreen',
        outlineStyle: 'solid'
    }
  },
  ErrorMessage: {
    textAlign: 'center',
    fontSize: 'larger',
    fontWeight: 'bolder',
    color: 'violet'
  },
})