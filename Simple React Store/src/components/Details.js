import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id,company,img,info,price,title,inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                                </div>
                            {/* end title */}
                            {/* product info */}
                            <div className="row">
                                {/* product text */}
                                <div className="col-10 col-md-6 my-3 text-capitalize rtl text-right">
                                    <h2>{title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    יצרן: <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>מחיר : <span>₪</span>{price}</strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        מידע על המוצר:
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/* buttons */}
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>
                                                חזרה לחנות
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart disabled={inCart?true:false} onClick={()=>{
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>
                                            {inCart?'המוצר בעגלה': 'הוסף לעגלה'}
                                        </ButtonContainer>
                                    </div>
                                    </div>
                                    <div className="col-10 mx-auto col-md-6 my-3 rtl">
                                    <img src={img} alt={title} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;