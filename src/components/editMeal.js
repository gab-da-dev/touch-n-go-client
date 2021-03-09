import React, {useState, useEffect} from 'react';
import {useParams, Redirect} from "react-router-dom";
import {useFormik} from 'formik';
import axios from 'axios'

const EditMeal = (props) => {
    const [meal,
        setMeal] = useState([]);
    const [btnStatus,
        pressBtn] = useState(false);
    let {id} = useParams();

    // const getMeal = () => {
    //     axios
    //         .get(`http://164.90.131.16/api/meal/${id}`)
    //         .then((response) => {
    //             // handle success const response =
    //             console.log(response.data);
    //             // return
    //             setMeal(response.data);

    //             // this.setState({meals: response.data});

    //         })
    //         .catch(function (error) {
    //             // handle error alert('yessss')
    //             console.log(error);
    //         })
    //         .then(function () {
    //             // always executed
    //         });
    // }

    useEffect(() => {
        axios
        .get(`http://164.90.131.16/api/meal/${id}`)
        .then((response) => {
            // handle success const response =
            console.log(response.data);
            // return
            setMeal(response.data);

            // this.setState({meals: response.data});

        })
        .catch(function (error) {
            // handle error alert('yessss')
            console.log(error);
        })
        .then(function () {
            // always executed
        });

    }, [id]);

    const mealObj = props
        .cart
        .filter(obj => obj.id === id);
    let x = mealObj;

    const calPrice = function (selectedQuantity, price) {
        let totalMealPrice = selectedQuantity * price;
        return totalMealPrice.toFixed(2);
    }

    const formik = useFormik({
        initialValues: {
            id: id,
            price: x[0].price,
            notes: x[0].notes,
            quantity: x[0].quantity
        },
        onSubmit: values => {
            // values.price = price;
            values.name = meal.name;
            console.log(values);
            // prop.onSubmit(values);
            props.handleEditSubmit(values);
            pressBtn(true);
        }
    });

    if (btnStatus) {
        return <Redirect to="/cart"/>
    } else {
        return (

            <React.Fragment>
                <div
                    className="jumbotron"
                    style={{
                    backgroundImage: `url(/img/${meal.imageName})`,
                    backgroundSize: `cover`
                }}></div>
                <div className="container">
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
                                <h6 className="text-center">R{calPrice(formik.values.quantity, meal.price)}</h6>
                            </div>
                        </div>
                        <div className="form-group">
                            <label >Quantity</label>
                            <select
                                className="form-control"
                                id="quantity"
                                onChange={formik.handleChange}
                                value={formik.values.quantity}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label >Note to chef</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                placeholder="Example remove lettuce"
                                id="notes"
                                onChange={formik.handleChange}
                                value={formik.values.notes}/>
                        </div>

                        <div className="row">
                            <div className="col align-self-center">
                                <button className="btn btn-success" type="submit">Save changes</button>
                            </div>
                        </div>
                    </form>

                </div>

            </React.Fragment>

        );
    }

}

export default EditMeal;
