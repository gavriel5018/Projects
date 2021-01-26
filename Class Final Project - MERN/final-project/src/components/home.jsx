import React, { Component } from 'react';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
        <img src="/images/header.jpg" alt="" className="img-header"/>
        <div className="bg-white py-5">
    <div className="container py-5">
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 order-2 order-lg-1">
          <h2 className="font-weight-light">Generate Your Own Business Card</h2>
          <p className="font-italic text-muted mb-4">Every successful business owner has started by generating their business card on our site.</p>
        </div>
        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="images/main1.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/></div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-5 px-5 mx-auto"><img src="images/main2.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/></div>
        <div className="col-lg-6 text-right">
          <h2 className="font-weight-light">Search And Interact With Other Business Cards and their Owners</h2>
          <p className="font-italic text-muted mb-4">Making some contacts and getting some ideas for your own business is important. Dont miss out.</p>
        </div>
      </div>
    </div>
  </div>

  <div className="bg-white py-5">
      <div className="container py-5">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 order-2 order-lg-1">
            <h2 className="font-weight-light">Promote Your Business Today!</h2>
            <p className="font-italic text-muted mb-4">Get your business more popular on search engines and social media.</p>
          </div>
          <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="images/main3.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/></div>
        </div>
      </div>
    </div>
        </React.Fragment>
         );
    }
}
 
export default Home;