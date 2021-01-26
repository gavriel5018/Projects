import React, { useEffect, useState } from 'react';
import PageHeader from './common/pageHeader';
import axios from 'axios';
import {apiUrl} from '../config.json';

function FavoritePage(){

    const variables = { userFrom: localStorage.getItem('token') }

    const [FavoritedCards, setFavoritedCards] = useState([])
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchFavoriteCards();
    })

    const fetchFavoriteCards = () => {
        axios.post(`${apiUrl}/favorite/getFavoritedCard`, variables)
        .then(response => {
            if(response.data.success) {
                setFavoritedCards(response.data.favorites)
            } else {
                console.log('failed to get favorite card')
            }
        })
    }



    const onClickRemove = (cardId) => {

        const variable = {
            cardId: cardId,
            userFrom: localStorage.getItem('token')
        }
    
        axios.post(`${apiUrl}/favorite/removeFromFavorite`, variable)
        .then(response => {
            if(response.data.success) {
                fetchFavoriteCards();
            } else {
                console.log('failed to remove from favorites')
            }
        })
    }

    return (
        <React.Fragment>
            <div className="container text-center">
            <PageHeader titleText="My Favorite Cards" />
            <input type="text" placeholder="Search For Cards..." onChange={(event) => {
            setSearchTerm(event.target.value)}}/>
                <div className="row">

            {FavoritedCards.filter((card) => {
                if(searchTerm === "") {
                    return card
                } else if (card.cardName.toLowerCase().includes(searchTerm.toLowerCase())){
                    return card
                } return null
            }).map((card, index) => {
                return  <div className="col-md-6 col-lg-4 mt-3" key={card.cardId}>
                <div className="card">
                  <img src={card.cardImage} alt={card.cardName} height="180" />
                  <div className="card-body">
                    <h5 className="card-title">{card.cardName}</h5>
                    <p className="card-text">{card.cardDescription}</p>
                    <p className="card-text border-top pt-2">
                      <b>Tel:</b> {card.cardPhone} <br/>
                      <b>Address:</b> {card.cardAddress} <br/>
                      <b>Card Number:</b> {card.cardNumber} <br/>
                      <button className="btn btn-success" onClick={() => onClickRemove(card.cardId)}>Remove From Favorites</button>
                    </p>
                  </div>
                </div>
              </div>
            })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default FavoritePage;