import React from 'react';


export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block rtl">
            <div className="row">

                <div className="col-10 mx-auto col-lg-2">
                    <p className="font-weight-bold">
                        מוצרים בעגלה
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="font-weight-bold">
                        שם המוצר
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="font-weight-bold">
                        מחיר 
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="font-weight-bold">
                        כמות 
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="font-weight-bold">
                        הסר מהעגלה 
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="font-weight-bold">
                        סך הכול 
                    </p>
                </div>
            </div>
        </div>
    )
}