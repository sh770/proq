import Alert from 'react-bootstrap/Alert';

const MessageBox = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <Alert variant={props.variant  || 'info'}>{props.children}</Alert>
  )
}

export default MessageBox