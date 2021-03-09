import React, {useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import {useFormik} from 'formik';
import axios from 'axios';
import Products from './products'
import ProductModal from './productModal'
import Cart from './cart'

const Store = (props) => {
    const {id} = useParams();
    const x = 0;
    // props.handleGetStore(id)

    // get product from products


    
        // useEffect(() => {
        //     props.handleGetStore(id)

        // }, [x, id, props]);

        return (
            <React.Fragment>
                {/* <div className="container"> */}
                <div
                    className="jumbotron"
                    style={{
                    backgroundImage: `url(http://164.90.131.16/storage/${props.getStore.imageUpload})`,
                    backgroundSize: `cover`,
                    height: `300px`
                }}></div>
                <div className="container">
                    <div className="row">
                        <h1>{props.getStore.name}</h1>

                    </div>
                    <div className="row">
                        <p>{props.getStore.description}</p>
                    </div>
                    <div className="row">
                        <h5>Hours: {props.getStore.operation_hours}</h5>
                    </div>
                    <div className="row">
                        <h5>Meals on offer</h5>
                    </div>
                    {/* </div> */}
                    {/* <div className="container"> */}
                    <div className="row">
                        <div className=" col-md-8 col-sm-12">
                            <div className="row">
                                <Products showProductModal={props.showProductModal} storeProducts={props.products}/>
                            </div>
                        </div>
                        <div className=" col-md-4  col-sm-12">
                            <div className="row">
                                <Cart
                                    checkLogin={props.checkLogin}
                                    setShowLoginModal={props.setShowLoginModal}
                                    isLoggedIn={props.isLoggedIn}
                                    showLoginModal={props.showLoginModal}
                                    cart={props.cart}
                                    handleCartDelete={props.handleCartDelete}/> {/* <Product storeProducts={stores}/> */}
                            </div>
                        </div>
                    </div>
                </div>
                <ProductModal
                    handleAlert={props.handleAlert}
                    handleCartSubmit={props.handleCartSubmit}
                    modalproduct={props.modalproduct}
                    closeProductModal={props.closeProductModal}
                    showProduct={props.showProduct}
                    />
            </React.Fragment>
        );
    }

    export default Store;