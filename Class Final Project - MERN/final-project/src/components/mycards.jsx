import React, { Component } from 'react';
import PageHeader from './common/pageHeader';
import cardService from '../services/cardService';
import Card from './card';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

class MyCards extends Component {
    state = { 
        cards: []
     }

     async componentDidMount(){
         const { data } = await cardService.getMyCards()
         if( data.length > 0 ) return this.setState({cards: data})
     }

    handleCardDelete = async (cardId) => {
        Swal.fire({
            title: 'Are you sure you want to delete this card?',
            showCancelButton: true,
            confirmButtonText: `Delete`,
            confirmButtonColor: `red`
          }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
              let cards = [ ...this.state.cards ]
              cards = cards.filter( card => card._id !== cardId )
              this.setState({ cards })
              await cardService.deleteCard(cardId)
              toast.success('Card has been deleted!')
            }
          })
    }

    render() { 
        const { cards } = this.state;
        return ( 
            <div className="container text-center">
        <PageHeader titleText="My Cards" />
            <div className="col-12">
                <p>here you can see your business cards !</p>
                <Link className="btn btn-success mb-2" to="/create-card">Create New Card</Link>
            </div>
                    <Card data={cards} handleCardDelete={this.handleCardDelete} />
        </div>
            );
    }
}
 
export default MyCards;