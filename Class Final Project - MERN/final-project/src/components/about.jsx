import React, { Component } from 'react';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-6">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                        <img src="images/aboutus.jpg" className="img-fluid" alt="About Us" />
                                        <div className="img-overlay bg-dark"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-lg-6 col-md-6 col-6">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                        <img src="images/aboutus2.jpg" className="img-fluid" alt="About Us" />
                                        <div className="img-overlay bg-dark"></div>
                                    </div>
                                </div>
        
                                <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                        <img src="images/aboutus3.jpg" className="img-fluid" alt="About Us" />
                                        <div className="img-overlay bg-dark"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2 text-left">
                    <div className="section-title ml-lg-5">
                        <h2>About Us</h2>
                        <h4 className="title mb-4">
                            Our Job, <br />
                            Is To Make Your Life Easy.
                        </h4>
                        <p className="text-muted">Final Projects was founded in 2015 by an israeli by the name of Gabriel Rebayev,
                        some of the most successful businesses has used Final Projects to promote their business online since then.</p>
                        <p className="text-muted">We are all about promoting starting business and help them grow,
                        If you want your business to get more recognition, you should choose us for that job.</p>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default About;