import React, {useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import {useSpring, animated} from 'react-spring';
import {faClock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from 'react-bootstrap';

const Products = (prop) => {
    const [meal,
        setMeal] = useState(0);
    const [quantity,
        changeQuantity] = useState(0);
    let [price,
        setPrice] = useState(0);
    const [notes,
        changeNotes] = useState(0);
    const {id} = useParams();

    const props = useSpring({
        opacity: 1,
        from: {
            opacity: 0
        }
    })

    return (
        <React.Fragment>
            {/* <animated.div style={props}> */}
            {prop
                .storeProducts
                .map((el, index) => <div
                    className="card col-md-3  text-right"
                    key={index}
                    style={{
                    width: '18rem',
                    marginLeft: '20px',
                    marginBottom: '20px',
                    paddingRight: '0',
                    paddingLeft: '0'
                }}>
                    <img
                        className="card-img-top"
                        src={`http://164.90.131.16/storage/${el.image_name}`}
                        style={{
                        width: '100% !important',
                        height: '15vw',
                        objectFit: 'cover'
                    }}/>
                    <div className="card-body">
                        <h5 className="card-title text-center">{el.name}</h5>
                        <p className="card-text text-center"><FontAwesomeIcon icon={faClock}/> {"15-25 min"}</p>
                        <h6 className="text-center">R{el.price}</h6>
                        <Button
                            className="btn btn-success btn-block"
                            onClick={() => {
                            prop.showProductModal(index)
                        }}
                            id={index}>View</Button>
                    </div>
                </div>)}
        </React.Fragment>

    );
}

export default Products;
