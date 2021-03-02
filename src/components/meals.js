import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
  import axios from 'axios'

class Meals extends Component {

    state = {
        cart: [],
        totalPrice: 0,
        meals: [],
        isLoaded: null,
        error: null
    }

    getMeals(){
        axios.get('http://localhost:8000/api/meal')
        .then( (response) =>  {
            // handle success
            this.setState({meals: response.data});
            console.log(this.state.meals);

        })
        .catch(function (error) {
            // handle error
            // alert('yessss')
            console.log(error);
        })
        .then(function () {
            // always executed
        });

    }
    componentDidMount() {
        this.getMeals();
    }

    render() {
    return (
        <React.Fragment>
        {
        this.state.meals.map((el, index) =>
            <div className="card col-3 text-center" key={index} style={{ width: '18rem', height: '18rem', marginLeft: '20px', marginBottom: '20px' }}>
            <img className="card-img-top" src={`http://localhost:8000/storage/${el.imageName}`} style={{ width: '100% !important' }}/>
            <div className="card-body">
            <h5 className="card-title">{ el.name }</h5>
                <p className="card-text">{ el.price }</p>
                <Link className="btn btn-success" to={`/meal/${el.id}`}>View</Link>
            </div>
        </div>
        )}
    </React.Fragment>
    )
    }
}


export default Meals;

