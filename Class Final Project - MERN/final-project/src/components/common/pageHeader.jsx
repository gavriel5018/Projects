import React from 'react';

const PageHeader = ({ titleText }) => {
    return (
         <div className="container">
            <div className="row">
                <div className="col-12 mt-4">
                    <h1 className="text-center">{ titleText }</h1>
                </div>
            </div>
        </div>
 );
}
 
export default PageHeader;