import React, { useState } from 'react';
import {
    Link,
    Redirect
  } from "react-router-dom";
  import Cookies from 'js-cookie';
  import { useFormik } from 'formik';
  import axios from 'axios';
  import {faTrash, faEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Cart = (props) => {
    const [isPost, setPosted] = useState(false);

    let calPrice = (selectedQuantity, price) => {
        let totalMealPrice = selectedQuantity * price;
        return totalMealPrice.toFixed(2);
    }

    let calTotalPrice = () => {
        let totalPrice = 0;
        props.cart.map((el) => {
            totalPrice = totalPrice + (parseFloat(el.price) * el.quantity);
        })
        console.log(totalPrice);
        return totalPrice;
    }

    let saveOrder = (form) => {
        if(props.checkLogin()){
        axios.post(`http://164.90.131.16/api/order`, form,
        {
          headers: {
            Authorization: 'Bearer ' + Cookies.get('token')
          }
        })
        .then( (response) =>  {
            setPosted(true);
        //    console.log(response);
            if (!props.isLoggedIn) {
                
                return;
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }
    // else{
        
    // }
    }

    const formik = useFormik({
        initialValues: {
            order: props.cart,
        },
        onSubmit: values => {
            // check if loggedin then show modal
            console.log(values);

            props.checkLogin();
            // return;
            console.log(values); 
            let createUserForm = new FormData();
            createUserForm.append('order', values.order);
            saveOrder(values);
        }
    });

        if(isPost){
            return <Redirect to="/orders" />
        }else{
        return (
            <React.Fragment>
                <table className="table">
                    <thead>
                        <tr>
                        <th>Meal</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>

                        {
                        props.cart.map((el, index) =>
                        {
                            if (el !== 'undefined') {
                           return <tr key={el.id}>
                                <td>{el.name}</td>
                                <td>{el.quantity}</td>
                                <td>{el.price}</td>
                                <td>
                                     <Link className="btn btn-sm btn-success" to={`/cart/edit/${el.id}`} onClick={() => props.handleEditFormChange(index) }><FontAwesomeIcon icon={faEdit}/></Link>
                                     <span className="ml-2" value={index} price={el.price} id="delete" onClick={() => props.handleCartDelete(index)}><FontAwesomeIcon icon={faTrash}/></span></td>
                                </tr>
                            }
                        }

                        )
                    }
                        <tr>
                        <td>Total</td>
                        <td></td>
                        <td>{calTotalPrice()}</td>
                        </tr>
                    </tbody>
                </table>
                <form onSubmit={formik.handleSubmit}>
                <input type="hidden" name="order" id="order" onChange={formik.handleChange} value={formik.values.order}/>
                <button className="btn btn-info" type="submit">Send order</button>
                </form>
            </React.Fragment>
         );
        }
    }


export default Cart;
