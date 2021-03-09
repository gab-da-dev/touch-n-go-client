import React, {useState} from 'react';
import {Modal, Button, ButtonGroup} from 'react-bootstrap';
import {useFormik} from 'formik';

const ProductModal = (props) => {
    const [quantity, setQuantity] = useState(1);
    const [id,
        setId] = useState(props.modalproduct.id);
    const calPrice = function (selectedQuantity, price) {
        // console.log(selectedQuantity);
        let totalMealPrice = selectedQuantity * price;
        // console.log(totalMealPrice); setPrice(totalMealPrice);
        return totalMealPrice;
    }

    const increaseQuantity = (quantity) => {
        let newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const decreaseQuantity = (quantity) => {
        let newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }
    // console.log(id);
    const formik = useFormik({
        initialValues: {
            notes: '',
            quantity
        },
        onSubmit: values => {
            // values.price = price; values.name = meal.name; values.quantity = quantity;
            values.name = props.modalproduct.name;
            values.price = props.modalproduct.price;
            values.quantity = quantity;
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

    return (
        <React.Fragment>

            <Modal show={props.showProduct} onHide={props.closeProductModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{props.modalproduct.name}</Modal.Title>
                </Modal.Header>
                    <img
                        src={`164.90.131.16/storage/${props.modalproduct.image_name}`}
                        alt={''}
                        style={{
                        width: '100%',
                        height: '328px'
                    }}/>
                <Modal.Body>
                    <div className="container">
                        <div className="row">
                            {/* <div className="col mb-3"> */}

                            {/* </div> */}
                        </div>
                        <div className="row">
                            {/* <div className="col">
                            <img
                        src={`164.90.131.16/storage/${props.modalproduct.image_name}`}
                        alt={''}
                        style={{
                        width: '100%'
                    }}/>
                            </div> */}
                            <div className="col">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="row">
                                        <div className="col">
                                            <h1 className="text-center">{props.modalproduct.name}</h1>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <h6 className="text-center">Ingredients: {props.modalproduct.ingredients}</h6>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <h6 className="text-center">R {calPrice(quantity, props.modalproduct.price)}
                                            </h6>
                                        </div>
                                    </div>
                                    {/* <div className="form-group">
                                        <label >Quantity</label>
                                        <select
                                            className="form-control"
                                            id="quantity"
                                            name="quantity"
                                            onChange={formik.handleChange}
                                            value={formik.values.quantity}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div> */}
                                    <div className="row">
                                        <div className="col text-center">
                                        <ButtonGroup aria-label="Basic example">
                                            <Button variant="secondary" onClick={()=> {decreaseQuantity(quantity)} }>-</Button>
                                            <Button variant="secondary" disabled>{quantity}</Button>
                                            <Button variant="secondary" onClick={()=> {increaseQuantity(quantity)}}>+</Button>
                                        </ButtonGroup>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Note to preparer</label>
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            placeholder="Example remove lettuce"
                                            name="notes"
                                            id="notes"
                                            value={formik.values.notes}
                                            onChange={formik.handleChange}/>
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
                    {/* </div> */}
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" //   onClick={handleClose
                >
                        Close
                    </Button>
                    <Button variant="primary" //   onClick={handleClose
                >
                        Save Changes
                    </Button>
                </Modal.Footer> */
            } 
            </Modal>
        </React.Fragment >)
        }

        export default ProductModal;
