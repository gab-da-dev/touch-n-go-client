import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Redirect, Switch, Route} from "react-router-dom";
import axios from 'axios';
// import axios from 'axios';
// import Echo from 'laravel-echo';

import Navbar from './navbar';
import Body from './body';
import Store from './store';
// import Cookies from 'js-cookie';
import LoginModal from './loginModal'
import RegisternModal from './registerModal'
import Alert from './alert'
import SideBar from './sidebar'

const Index = (props) => {
    // state = {     orderForm: {         id: null,         meal: '', quantity: '1',
    //         price: '',         notes: ''     },     cart: [], totalPrice: 0,
    // meals: [],     user: {         isLoggedIn: false, isAdmin: false, username:
    // Cookies.get('username'),         token: Cookies.get('token'),   id:
    // Cookies.get('id'),     },     store: [] }
    const [storeImage, setStoreImage] = useState([]);
    const [cart, setCart] = useState([]);
    const [showProduct, setShowProduct] = useState(false);
    const [isLoggedIn, setLogin] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertMessage, setShowAlertMessage] = useState('');
    const [user, setUser] = useState([]);
    const [getStore, setStore] = useState([]);


    const [products,
        setProducts] = useState([]);
    const [modalproduct,
        setModalProduct] = useState([]);
    const [storeDetails,
        setStoreDetails] = useState([]);
    // const [show,
    //     setShow] = useState(false);
    // console.log(imageName);

    const showProductModal = (id) => {
        // open div
        setShowProduct(true);
        setModalProduct(products[id]);

    }

    const closeProductModal = () => {
        setShowProduct(false);
        setModalProduct([]);
    }

    // componentDidMount() {     // this.handleTextChange =
    // this.handleTextChange.bind(this); } componentDidUpdate() {     // Typical
    // usage (don't forget to compare props):    if (this.state.isLoggedIn) {  //
    // window.Pusher = require('pusher-js');         window.Echo = new
    // Echo({broadcaster: 'pusher', key: '20b28ddb2fe835b19efb', cluster: 'ap1',
    // forceTLS: true});         window             .Echo
    // .channel('order-complete.2') .listen('CompletedOrder', (e) => {
    // console.log(e);      alert(e);             });     } }
        
    const handleAlert = (message) => {
        setShowAlert(true);
        setShowAlertMessage(message);
        setTimeout(() => {
            setShowAlert(false)
          }, 3000);

        // 
    }

    const handleCartSubmit = (cartObj) => {
        let oldObj = cart;
        oldObj.push(cartObj)
        setCart(oldObj)
      
    }

    const handleCartDelete = (deleteId) => {
        // let oldObj = cart;
        let deleteItem = cart.filter((el, index) => deleteId != index)
        setCart(deleteItem);
      
    }

    const handleCartView = (deleteId) => {
        // let oldObj = cart;
        let deleteItem = cart.filter((el, index) => deleteId != index)
        setCart(deleteItem);
      
    }
    
    const handleModalLogin = (checkLogin) => {
        alert('modal status changed');
        setLogin(true);
        setShowLoginModal(false);
        
    }

    const checkLogin = () => {
        if(!isLoggedIn){
            (()=>{setShowLoginModal(true);})();
            return false;
        }
        return true;
    }


    const handleStoreImageUpdate = (data) => {
        // this.setState({store: data});
        console.log(data);
        setStoreImage(data);
        // alert('status changed');
    }


    const handleGetStore = (id) => {
        
        axios
                .get(`164.90.131.16/api/store/${id}`)
                .then((response) => {
                    setStore(JSON.parse(response.data[0].config));
                    setProducts(response.data[1]);
                    console.log(response.data[0]);

                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {});
    }

    // const 


    return (
        <React.Fragment>
            <BrowserRouter>
                {/* <SideBar/>  */}
                <Navbar isLoggedIn={isLoggedIn} setShowLoginModal={setShowLoginModal} setShowRegisterModal={setShowRegisterModal}/>
                <Switch>
                    <Route path="/stores/:id">
                        <Store
                            cart={cart}
                            getStore={getStore}
                            handleStoreImageUpdate={props.handleStoreImageUpdate}
                            setShowLoginModal={setShowLoginModal}
                            isLoggedIn={isLoggedIn} 
                            handleCartSubmit={handleCartSubmit} 
                            checkLogin={checkLogin}
                            handleAlert={handleAlert}
                            handleCartDelete={handleCartDelete}
                            setProducts={setProducts}
                            setStoreDetails={setStoreDetails}
                            showProductModal={showProductModal}
                            products={products}
                            modalproduct={modalproduct}
                            closeProductModal={closeProductModal}
                            handleCartView={handleCartView}
                            handleGetStore={handleGetStore}
                            showProduct={showProduct}
                            />
                    </Route>
                    <Body 
                     handleStoreImageUpdate={handleStoreImageUpdate} storeImage={storeImage} handleGetStore={handleGetStore} // onSubmitonSubmit={handleCartSubmit} // meals={this.state.meals}  onNoteChange={handleNoteChange} onQuantityChange={handleQuantityChange} onPriceChange={handlePriceChange} onMealChange={handleMealChange} onRemoveItemInCart={removeItemInCart} handleEditForm={handleEditForm} onEditSubmit={handleEditSubmit} // getMeals={getMeals} // submitCart={submitCart
                    handleCartSubmit={handleCartSubmit}  showLoginModal={showLoginModal} handleModalLogin={handleModalLogin}/>
                </Switch>
                 <LoginModal handleAlert={handleAlert} showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal} handleModalLogin={handleModalLogin} setLogin={setLogin} isLoggedIn={isLoggedIn} />
                 <RegisternModal handleAlert={handleAlert} showRegisterModal={showRegisterModal} setShowRegisterModal={setShowRegisterModal} />
                <Alert showAlert={showAlert} showAlertMessage={showAlertMessage}/>
            </BrowserRouter>
        </React.Fragment>
        ) }
        
        
        export default Index; 
        if (document.getElementById('app')) {ReactDOM.render(
            <Index/>, document.getElementById('app'));
}