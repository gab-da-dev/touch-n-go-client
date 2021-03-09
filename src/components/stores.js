import React, { useState, useEffect } from 'react'; 
import {
    useParams, Link
  } from "react-router-dom";
  import { useFormik } from 'formik';
  import axios from 'axios';

const Store = (props) => {
    const { id } = useParams();
    const [stores, setStores] = useState([]);

    const formik = useFormik({
        initialValues: {
            notes: '',
            quantity: ''
        },
        onSubmit: values => {
            // values.price = price; values.name = meal.name; values.quantity = quantity;
            values.name = props.modalproduct.name;
            values.price = props.modalproduct.price;
            // values.quantity = quantity;
            console.log(values);
            // return
            const add = () => {
                props.handleCartSubmit(values)
            }
            // props.handleCartSubmit(values); alert('testing')
            add();
            props.closeProductModal();
            props.handleAlert('Added to cart.');
        }
    })
        useEffect(() => {
            axios.get(`http://164.90.131.16/api/store`)
                .then( (response) =>  {
                    // return
                    setStores(response.data);
                    console.log(response.data);
                    return response.data;
        
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        
          },[]);    
  
    return ( 
        <React.Fragment>
            <div className="row">
            <h4>Filter</h4>
            </div>
        <div className="row">
            <div className="col">
                   <div className="form-group">
                <label >Store type</label>
                <select className="form-control" id="quantity" onChange={formik.handleChange} value={formik.values.prepTime}>
                   <option value="1">5min</option>
                   <option value="2">10min</option>
                   <option value="3">15min</option>
                   <option value="4">20min</option>
                   <option value="5">25min</option>
                   <option value="5">30min</option>
                   <option value="5">35min</option>
                   <option value="5">45min</option>
                   <option value="5">50min</option>
                   <option value="5">55min</option>
                   <option value="5">Hour</option>
                </select>
             </div>
                </div>
                <div className="col">
                   <div className="form-group">
                <label >Location</label>
                <select className="form-control" id="quantity" onChange={formik.handleChange} value={formik.values.prepTime}>
                   <option value="1">5min</option>
                   <option value="2">10min</option>
                   <option value="3">15min</option>
                   <option value="4">20min</option>
                   <option value="5">25min</option>
                   <option value="5">30min</option>
                   <option value="5">35min</option>
                   <option value="5">45min</option>
                   <option value="5">50min</option>
                   <option value="5">55min</option>
                   <option value="5">Hour</option>
                </select>
             </div>
                </div>
                <div className="col">
                   <div className="form-group">
                <label >Preparation time</label>
                <select className="form-control" id="quantity" onChange={formik.handleChange} value={formik.values.prepTime}>
                   <option value="1">5min</option>
                   <option value="2">10min</option>
                   <option value="3">15min</option>
                   <option value="4">20min</option>
                   <option value="5">25min</option>
                   <option value="5">30min</option>
                   <option value="5">35min</option>
                   <option value="5">45min</option>
                   <option value="5">50min</option>
                   <option value="5">55min</option>
                   <option value="5">Hour</option>
                </select>
             </div>
                </div>
                <div className="col">
                   <div className="form-group">
                <label >Preparation time</label>
                <select className="form-control" id="quantity" onChange={formik.handleChange} value={formik.values.prepTime}>
                   <option value="1">5min</option>
                   <option value="2">10min</option>
                   <option value="3">15min</option>
                   <option value="4">20min</option>
                   <option value="5">25min</option>
                   <option value="5">30min</option>
                   <option value="5">35min</option>
                   <option value="5">45min</option>
                   <option value="5">50min</option>
                   <option value="5">55min</option>
                   <option value="5">Hour</option>
                </select>
             </div>
                </div>
        </div>
        <div className="row">
    {
        stores.map((el, index) =>
        <div className="card col-3 text-center" key={index} style={{ width: '18rem', marginLeft: '20px', marginBottom: '20px' }}>
        {/* <img className="card-img-top" src={`/storage/${el.id}`}/> */}
        <div className="card-body">
        <h5 className="card-title">{ el.name }</h5>
            <p className="card-text">{ el.location }</p>
            <p className="card-text">{ el.operation_hours }</p>
            <Link className="btn btn-secondary" onClick={() => {props.handleGetStore(el.id)}} to={`/stores/${el.id}`}>View store</Link>
        </div>
    </div>
    )}
    </div>
</React.Fragment>
     );
}
 
export default Store;