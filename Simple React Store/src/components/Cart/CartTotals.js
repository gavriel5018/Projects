import React from 'react';
import {Link} from 'react-router-dom'
import PayPalButton from './PayPalButton';

export default function CartTotals({value, history}) {
const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
return <React.Fragment>
    <div className="container">
        <div className="row">
            <div className="col-10 mt-2 mr-sm-5 mr-md-auto col-sm-8 text-left">
               <Link to="/">
                   <button className="btn btn-outline-danger mb-3 px-5" 
                   type="button"
                   onClick={() => clearCart()}>
                    נקה עגלה
                   </button>
               </Link>
               <h5><span className="font-weight-bold"> מחיר ביניים:</span>
               ₪ {cartSubtotal}
               </h5>
               <h5><span className="font-weight-bold"> מס:</span>
               ₪ {cartTax}
               </h5>
               <h5><span className="font-weight-bold"> סה"כ:</span>
               ₪ {cartTotal}
               </h5>
               <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
            </div>
        </div>
    </div>
</React.Fragment>
}

