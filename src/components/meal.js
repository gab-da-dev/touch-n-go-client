import React, { useState, useEffect } from 'react';
import {
   Link,
   Redirect,
   useParams
 } from "react-router-dom";
 import {useSpring, animated} from 'react-spring'
 import { useFormik } from 'formik';
 import axios from 'axios';

const Meal = (prop) => {
    const [meal, setMeal] = useState(0);
    const [quantity, changeQuantity] = useState(0);
    let [price, setPrice] = useState(0);
    const [notes, changeNotes] = useState(0);
    const [isSubmitted, setSubmitted] = useState(false);
    const { id } = useParams();

    useEffect(() => {
      // getStores();
      axios.get(`http://localhost:8000/api/meal/${id}`)
        .then( (response) =>  {
            // handle success
            // const response =
            console.log(response.data);
            // return
            setMeal(response.data);
            setPrice(response.data.price);
            // this.setState({meals: response.data});

        })
        .catch(function (error) {
            // handle error
            // alert('yessss')
            console.log(error);
        })
        .then(function () {
            // always executed
        });

  
    },[id]);    



  const calPrice = function(selectedQuantity, price){
    let totalMealPrice = selectedQuantity * price;
    console.log(price);
    return totalMealPrice;
}


const formik = useFormik({
initialValues: {
    id: id,
    price,
    notes: '',
    quantity: ''
},
onSubmit: values => {
    values.price = price;
    values.name = meal.name;
    values.quantity = quantity;
    values.store_id = meal.store_id;
   //  console.log(values);
    prop.handleCartSubmit(values);
    window.history.back();
},
});


  const props = useSpring({opacity: 1, from: {opacity: 0}})
// render() {
   if(isSubmitted){
      return <Redirect to="/orders" />
   }else{
    return (
        <React.Fragment>
            <animated.div style={props}>
          {/* <div className="jumbotron col-12" style={{backgroundImage: `url(http://localhost:8000/storage/${meal.imageName}`, backgroundSize: `cover`, height: `300px` }}>
         </div>  */}
         <div className="container">
             <div className="row">
                <div className="col">
                    <img src={`http://localhost:8000/storage/${meal.image_name}`}  style={{ width: '100%' }}/>
                </div>
                <div className="col">
                <form onSubmit={formik.handleSubmit}>
            <div className="row">
               <div className="col">
                  <h1 className="text-center">{meal.name}</h1>
               </div>
            </div>
            <div className="row">
               <div className="col">
                  <h6 className="text-center">Ingredients: {meal.ingredients}</h6>
               </div>
            </div>
            <div className="row">
               <div className="col">
                  <h6 className="text-center">R{calPrice(formik.values.quantity, price)}</h6>
               </div>
            </div>
            <div className="form-group">
               <label >Quantity</label>
               <select className="form-control" id="quantity" name="quantity" onChange={formik.handleChange} value={formik.values.quantity}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
               </select>
            </div>

            <div className="form-group">
               <label >Note to preparer</label>
               <textarea className="form-control" rows="3" placeholder="Example remove lettuce" name="notes" id="notes" value={formik.values.notes} onChange={formik.handleChange}/>
            </div>
            <div className="row">
               <div className="col align-self-center">
                  <button className="btn btn-success btn-block" type="submit">Add to Order</button>
               </div>
            </div>
            </form>
                </div>
             </div>
         </div>
         </animated.div>
        </React.Fragment>

     );
   }
}
// }

export default Meal;
