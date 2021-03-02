import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, useLocation} from "react-router-dom";

import Meal from './meal';
import Meals from './meals';
import Store from './store';
import Stores from './stores';
import CreateUser from './createUser';
import Cart from './cart';
import EditMeal from './editMeal';
import Login from './auth/login';
import Register from './auth/register';
// import createMeal from './auth/createMeal';
import CreateMeal from './createMeal';
import Orders from './orders';


// import { useTransition, animated } from 'react-spring'

const Body = (props) => {
  


    const [cart, setCart] = useState([{id:"3",price:"54",notes:"",quantity:0,name:"Dinner",store_id:11}]);

    //   render() { const location = useLocation() const transitions =
    // useTransition(location, location => location.pathname, {   from: { opacity:
    // 0, transform: 'translate3d(100%,0,0)' },   enter: { opacity: 1, transform:
    // 'translate3d(0%,0,0)' },   leave: { opacity: 0, transform:
    // 'translate3d(-50%,0,0)' }, })

    return (
        <React.Fragment>
            
            <div className="py-4 container">
                <div className="justify-content-center col-12">
                
                    <Route exact path="/stores">
                        <Stores handleGetStore={props.handleGetStore}/>
                    </Route>
                    <Route path="/stores/:id">
                        <Store
                            cart={props.cart}
                            storeDetails={props.storeDetails}
                            handleStoreImageUpdate={props.handleStoreImageUpdate}
                            handleCartSubmit={props.handleCartSubmit}
                            setShowLoginModal={props.setShowLoginModal}
                            checkLogin={props.checkLogin}
                             />
                    </Route>
                    <Route path="/meals">
                        <Meals 
                        //  meals={props.meals}
                     // key={props.meals.length}
                    
                        />
                    </Route>
                    <Route path="/meal/:id">
                        <Meal
                            meals={props.meals}
                            cart={props.cart}
                            onQuantityChange={props.onQuantityChange}
                            onNoteChange={props.onNoteChange}
                            orderForm={props.orderForm}
                            onPriceChange={props.onPriceChange}
                            onMealChange={props.onMealChange}
                            onSubmit={props.onSubmit}
                            handleCartSubmit={props.handleCartSubmit}/>

                    </Route>
                    <Route path="/create-meal">
                        <CreateMeal/>
                    </Route>
                    <Route path="/create-user">
                        <CreateUser/>
                    </Route>
                    {/* <Route exact path="/cart">
                        <Cart
                            cart={props.cart}
                            ontotalPriceChange={props.ontotalPriceChange}
                            totalPrice={props.totalPrice}
                            onRemoveItemInCart={props.onRemoveItemInCart}
                            handleEdit={props.handleEdit}
                            handleEditFormChange={props.handleEditForm}
                            isLoggedIn={props.isLoggedIn}
                            submitCart={props.submitCart}/>
                    </Route> */}
                    <Route path="/cart/edit/:id">
                        <EditMeal
                            cart={props.cart}
                            meals={props.meals}
                            onNoteChange={props.onNoteChange}
                            onPriceChange={props.onPriceChange}
                            onMealChange={props.onMealChange}
                            orderForm={props.orderForm}
                            onQuantityChange={props.onQuantityChange}
                            handleEditSubmit={props.onEditSubmit}/>
                    </Route>
                    <Route path="/login">
                        <Login isLoggedIn={props.isLoggedIn}/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/orders">
                        <Orders/>
                    </Route>
                </div>
            </div>
        </React.Fragment>

    );
}
// }

export default Body;
