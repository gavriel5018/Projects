import React, { Component } from 'react';
import cardService from '../services/cardService';
import PageHeader from './common/pageHeader';
import AllCards from './allcards';


class BusinessCards extends Component {
    state = {
      data: [],
     }

     async componentDidMount() {
         const {data} = await cardService.getAllCards();
         if(data.length > 0) return this.setState({data})
     }

    render() { 
      const { data } = this.state;

        return ( <div className="container text-center">
            <PageHeader titleText="Business Cards" />
            <p>here you can see all business cards</p>
            <AllCards data={data} />
        </div> );
    }
}
 
export default BusinessCards;