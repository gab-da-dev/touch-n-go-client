import React, { useEffect } from 'react';
import {
   useParams
 } from "react-router-dom";
 import { useFormik } from 'formik';
 import axios from 'axios';
 import Cookies from 'js-cookie';


const Login = (props) => {

   let { id } = useParams();

   const formik = useFormik({
    initialValues: {
        email: '',
        password: '',
    },
    onSubmit: values => {
        props.isLoggedIn();
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

    useEffect(() => {
        // var pusher = new Pusher('20b28ddb2fe835b19efb', {
        //     authEndpoint: 'http://localhost:8000/broadcasting/auth',
        //     cluster: 'ap1',
        //     encrypted: true,
        //     headers: {
        //       Accept: 'application/json',
        //       Authorization: 'Bearer ' + Cookies.get('token'),
        //     }
        //   });
        //   var channel = pusher.subscribe('order-complete-2');
        //   // console.log(channel);
        //   channel.bind('CompletedOrder', data => {
        //     // this.setState({ chats: [...this.state.chats, data], test: '' });
        //     alert(data);
        //     console.log(data);
        //   });
        // this.handleTextChange = this.handleTextChange.bind(this);
      })

    return (
        <React.Fragment>
<div className="col-md-12">
            <div className="card">
                <div className="card-header">Login</div>

                <div className="card-body">
                    <form onSubmit={formik.handleSubmit}>
                        {/* @csrf */}

                        <div className="form-group row">
                            <label htmlFor="email" className="col-md-4 col-form-label text-md-right">Email address</label>

                            <div className="col-md-8">
                                <input id="email" type="email" className="form-control" name="email" onChange={formik.handleChange} value={formik.values.email} required  />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>

                            <div className="col-md-8">
                                <input id="password" type="password" className="form-control" name="password" required  onChange={formik.handleChange} value={formik.values.password}/>
                            </div>
                        </div>

                        <div className="form-group row mb-0">
                            <div className="col-md-8 offset-md-4">
                                <button type="submit" className="btn btn-primary btn-block">
                                    Login
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

export default Login;
