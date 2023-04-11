import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

export const { classes } = jss.createStyleSheet({
  '@global': {
    body: {
      height: '100%',
      fontFamily: 'sans-serif',
      backgroundColor: '#333',
      color: 'azure',
      textAlign: 'center',
    },
  },
  Title: {
    textAlign: 'center',
    fontSize: 'xx-large',
    fontWeight: 'bold',
    color: 'mediumseagreen',
    textDecoration: 'underline',
  },
  Form: {
    display:'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 'auto',
    padding: 5,
  },
  Legend: {
    textAlign: 'left',
    fontSize: 'x-large',
    fontWeight: 'bold',
    color: 'lightseagreen',
  },
  Label: {
    fontSize: 'large',
    fontWeight: 'bold',
    color:'darkseagreen',
  },
  Input: {
    textAlign: 'inherit',
    fontSize: 'medium',
    fontWeight: 'bold',
    boxSizing: 'border-box',
    borderRadius: '.5rem',
    width: '100px',
    margin: 3,
    padding: 3,
    '&:focus': {
      outlineWidth: '2px',
      outlineColor: 'seagreen',
      outlineStyle: 'solid',
      backgroundColor: 'honeydew',
    }
  },
  Info: {
    fontSize: 'medium',
    fontWeight: 'bold',
    color:'azure',
  },
  ErrorMessage: {
    textAlign: 'center',
    fontSize: 'small',
    fontWeight: 'bold',
    color: 'violet'
  },
}).attach()