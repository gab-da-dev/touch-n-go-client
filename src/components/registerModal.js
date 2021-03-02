import React from 'react';
import {Modal} from 'react-bootstrap';
import { useFormik } from 'formik';
 import axios from 'axios';
 import Cookies from 'js-cookie';
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const RegisterModal = (props) => {
    // const [show, setShow] = useState(false); const handleClose = () =>
    // setShow(false); const handleShow = () => setShow(true);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            
            let createUserForm = new FormData();
            createUserForm.append('email', values.email);
            createUserForm.append('password', values.password);
            login(createUserForm);
            
        },
        });

    let login = (form) => {
        axios.post(`http://localhost:8000/api/login`, form)
        .then( (res) =>  {
            Cookies.set('username', `${res.data.user.name}`, {expires: 7})
            Cookies.set('token', `${res.data.access_token}`, {expires: 7})
            Cookies.set('id', `${res.data.user.id}`, {expires: 7})

            props.setLogin(true);
            props.setShowLoginModal(false);
            props.handleAlert('Successfully Logged in!');
        //     setPosted(true);
        // //    console.log(response);
        //     if (props.isLoggedIn) {
            console.log(res);

        //     }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

    }

    
    return (
        <React.Fragment>

            <Modal show={props.showRegisterModal} onHide={props.setShowRegisterModal} centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row">
                            <div className="col mb-3">
                            </div>
                            </div>
                            <div className="col">
                            <form onSubmit={formik.handleSubmit}>
                        {/* @csrf */}
                        <div className="form-group row">
                        <h1 className="col text-center">touch&go</h1>
                            {/* <label htmlFor="email" className="col-form-label text-center"> It's quick and easy.</label> */}
                        </div>
                        <div className="form-group row">
                        <p className="col text-center">Sign up for a free account.</p>
                            {/* <label htmlFor="email" className="col-form-label text-center"> It's quick and easy.</label> */}
                        </div>
                        <div className="form-group row">
                            {/* <label htmlFor="email" className="col-form-label text-center">Email address</label> */}

                            {/* <div className="col-md-8"> */}
                                <input id="email" type="email" placeholder="email" className="form-control" name="email" onChange={formik.handleChange} value={formik.values.email} required  />
                            {/* </div> */}
                        </div>

                        <div className="form-group row">
                            {/* <label htmlFor="password" className="col-form-label text-center">Password</label> */}

                            {/* <div className="col-md-8"> */}
                                <input id="password" type="password" placeholder="password"  className="form-control" name="password" required  onChange={formik.handleChange} value={formik.values.password}/>
                            {/* </div> */}
                        </div>
                        <hr/>
                        <div className="form-group row mb-0">
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-info btn-block">
                                    Register New Account
                                </button>
                            </div>
                        </div>
                    </form>
                            </div>
                        </div>
                    {/* </div> */}
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" //   onClick={handleClose
                >
                        Close
                    </Button>
                    <Button variant="primary" //   onClick={handleClose
                >
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </React.Fragment>

    )
                        }
                    
export default RegisterModal;
