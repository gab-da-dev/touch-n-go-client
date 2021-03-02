import React from 'react';
 import { useFormik } from 'formik';
import axios from 'axios'


const CreateMeal = (props) => {

    const createMeal = function(data) {
        axios.post(`http://localhost:8000/api/meal`, data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        .then( (response) =>  {
           this.setState({isPost: true});
           console.log(response);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
      }

    const formik = useFormik({
        initialValues: {
            productName: '',
            price:  0,
            ingredients:  '',
            imageUpload: ''
        },
        onSubmit: values => {
            // props.handleEditSubmit(values);
            let createMealForm = new FormData();
            createMealForm.append('productName', values.productName);
            // console.log(createMealForm);
            createMealForm.append('ingredients', values.ingredients);
            createMealForm.append('price', values.price);
            createMealForm.append('imageUpload', values.imageUpload);
            // console.log(values.imageUpload);
            createMeal(createMealForm);
            // pressBtn(true);
        },
        });

    return (
        <React.Fragment>
            {/* <h1>test</h1> */}
<div className="container">
                <form onSubmit={formik.handleSubmit}>

                <div className="form-group">
                   <label>Product name</label>
                   <input className="form-control" placeholder="Example remove lettuce" id="productName"  onChange={formik.handleChange} value={formik.values.productName}/>
                </div>

                <div className="form-group">
                   <label >Ingredients</label>
                   <input className="form-control" placeholder="Example remove lettuce" id="ingredients" onChange={formik.handleChange} value={formik.values.ingredients}/>
                </div>

                <div className="form-group">
                   <label >Price</label>
                   <input className="form-control" placeholder="Example remove lettuce" id="price"  onChange={formik.handleChange} value={formik.values.price}/>
                </div>

                <div className="form-group">
                   <label >Image upload</label>
                   <input className="form-control" type="file" className="form-control-file" id="imageUpload" name="imageUpload" onChange={(event) => {
                    formik.setFieldValue("imageUpload", event.currentTarget.files[0]);
                    }}/>
                </div>

                <div className="row">
                   <div className="col align-self-center">
                      <button className="btn btn-success pull-right" type="submit">Save</button>
                   </div>
                </div>
                </form>
             </div>
        </React.Fragment>

     );
}

export default CreateMeal;
