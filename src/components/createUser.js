import React from 'react';
import axios from 'axios';
import {useFormik} from 'formik';
import Cookies from 'js-cookie';

const CreateUser = (props) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        },
        onSubmit: values => {
            // props.handleEditSubmit(values);
            let createUserForm = new FormData();
            createUserForm.append('name', values.name);
            createUserForm.append('email', values.email);
            createUserForm.append('password', values.password);
            createUserForm.append('password_confirmation', values.password_confirmation);

            axios
                .post(`http://localhost:8000/api/register`, createUserForm)
                .then(function (response) {
                    Cookies.set('token', `${response.data.access_token}`, {expires: 7})
                    // cookie('token', response.access_token, { httpOnly: true });
                axios.post(`http://localhost:8000/api/store`,{ id:response.data.user.id }).then(function(){
                    console.log(response);
                })
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    });

    return (
        <React.Fragment>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">Register</div>

                    <div className="card-body">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group row">
                                <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Name</label>

                                <div className="col-md-6">
                                    <input
                                        id="name"
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value=""
                                        onChange={formik.handleChange}
                                        value={formik.values.price}
                                        required/>

                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                <div className="col-md-6">
                                    <input
                                        id="email"
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value=""
                                        onChange={formik.handleChange}
                                        value={formik.values.price}
                                        required/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>

                                <div className="col-md-6">
                                    <input
                                        id="password"
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        onChange={formik.handleChange}
                                        value={formik.values.price}
                                        required/>

                                </div>
                            </div>

                            <div className="form-group row">
                                <label
                                    htmlFor="password-confirm"
                                    className="col-md-4 col-form-label text-md-right">Confirm Password</label>

                                <div className="col-md-6">
                                    <input
                                        id="password-confirm"
                                        type="password"
                                        className="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.price}
                                        name="password_confirmation"
                                        required/>
                                </div>
                            </div>

                            <div className="form-group row mb-0">
                                <div className="col-md-6 offset-md-4">
                                    <button type="button" className="btn btn-primary" onClick={formik.handleSubmit}>
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default CreateUser;
