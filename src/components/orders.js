import React, { useState, useEffect} from 'react';
import {
    useParams
  } from "react-router-dom";
  import Cookies from 'js-cookie';
  import { useFormik } from 'formik';
  import axios from 'axios';

const Orders = () => {
    const {id} = useParams();
    const [order,
        setOrder] = useState([]);
    const user_id = Cookies.get('id');
    const statusObj = {1: 'Received', 2: 'Preparing', 3: 'Completed'};
    console.log(user_id);
 
    const calPrice= (obj) => {
        let newObj = JSON.parse(obj);
        console.log('object');
        console.log(newObj);
        console.log(obj);
        let calPrice = 0;
        newObj.map((el, index)=>{
            calPrice = el.quantity * (calPrice + parseFloat(el.price));
            
        })
        
        return calPrice;
    }
    
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/userorder/${user_id}`) 
            .then((response) => {
                setOrder(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {

            });

    }, [user_id]);

    return (
        <React.Fragment>
        <table className="table">
            <thead>
                <tr>
                <th>Order #</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Status</th>
                </tr>

            </thead>
            <tbody>

                {
                order.map((el, index) =>
                {
                    if (el !== 'undefined') {
                   return <tr key={el.id}>
                        <td>#{el.id}</td>
                        <td>{el.status}</td>
                        <td>R{calPrice(el.formConfig)}</td>
                        <td>{statusObj[el.status]}</td>
                        </tr>
                    }
                }

                )
            }
                <tr>
                <td></td>
                <td></td>
                <td>{}</td>
                </tr>
            </tbody>
        </table>
        {/* <form onSubmit={formik.handleSubmit}> */}
        {/* <input type="hidden" name="order" id="order" onChange={formik.handleChange} value={formik.values.order}/> */}
        {/* <button className="btn btn-primary" type="submit">post cart</button> */}
        {/* </form> */}
    </React.Fragment>
    );
}
 
export default Orders;