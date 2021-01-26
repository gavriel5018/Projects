import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {apiUrl} from '../../config.json';

function Favorite(props) {

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)

    const variable = {
        userFrom: props.userFrom,
        cardId: props.cardId,
        cardImage: props.card.bizImage,
        cardName: props.card.bizName,
        cardDescription: props.card.bizDescription,
        cardPhone: props.card.bizPhone,
        cardAddress: props.card.bizAddress,
        cardNumber: props.card.bizNumber
    }


    useEffect(() => {

       

        axios.post(`${apiUrl}/favorite/favoriteNumber`, variable)
            .then(response => {
                if (response.data.success) {
                    setFavoriteNumber(response.data.favoriteNumber)
                } else {
                    console.log('Failed to get favoriteNumber')
                }
            })

        axios.post(`${apiUrl}/favorite/favorited`, variable)
            .then(response => {
                if (response.data.success) {
                    setFavorited(response.data.favorited)
                } else {
                    console.log('Failed to get Favorite Info')
                }
            })

    })


    const onClickFavorite = () => {
        if(Favorited) {

            axios.post(`${apiUrl}/favorite/removeFromFavorite`, variable)
            .then(response=> {
                if(response.data.success) {
                    setFavoriteNumber(FavoriteNumber - 1 )
                    setFavorited(!Favorited)
                } else {
                    console.log(' Failed to remove from favorite')
                }
            })



        } else {
        
            axios.post(`${apiUrl}/favorite/addToFavorite`, variable)
            .then(response=> {
                if(response.data.success) {
                    setFavoriteNumber(FavoriteNumber + 1)
                    setFavorited(!Favorited)
                } else {
                    console.log(' Failed to add to Favirotes')
                }
            })
        
        }
    }

    return (
        <React.Fragment>
            <button onClick={onClickFavorite} className="btn btn-success">{Favorited ? "Remove From Favorites" : "Add to Favorites"}</button>
            <br/><b className="text-secondary">Number of users favorited this card: {FavoriteNumber}</b>
        </React.Fragment>
    )
    }

export default Favorite;