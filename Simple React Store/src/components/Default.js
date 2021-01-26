import React, { Component } from 'react';

class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center pt-5">
                        <h1 className="display-3">404</h1>
                        <h1>שגיאה</h1>
                        <h2>דף לא נמצא</h2>
                        <h3>
                        לא נמצא
                            <span className="text-danger">
                                {this.props.location.pathname}
                            </span>{" "}                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;