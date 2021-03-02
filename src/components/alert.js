import React from 'react';
import {Toast} from 'react-bootstrap';

const Alert = (props) => {
    // const [show, setShow] = useState(false); const handleClose = () =>
    // setShow(false); const handleShow = () => setShow(true);

    return (
        <React.Fragment>

            <Toast
                show={props.showAlert}
                delay={3000}
                autohide
                style={{
                position: 'absolute',
                top: '450px',
                right: '60px',
                width: '215px',
                backgroundColor: 'lightsteelblue',
                color: '#fff'
            }}>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt=""/>
                    <strong className="mr-auto">Touch & Go</strong>
                    {/* <small>11 mins ago</small> */}
                </Toast.Header>
                <Toast.Body>{props.showAlertMessage}</Toast.Body>
            </Toast>
        </React.Fragment>

    )
}

export default Alert;
