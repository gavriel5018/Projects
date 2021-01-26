import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Card(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const data = props.data;

  return ( 
    <React.Fragment>
      <input type="text" placeholder="Search For Cards..." onChange={(event) => {
            setSearchTerm(event.target.value)}}/>
            <div className="row">
              {data.length > 0 && data.filter((card) => {
                if(searchTerm === "") {
                  return card
                } else if (card.bizName.toLowerCase().includes(searchTerm.toLowerCase())){
                  return card
                }
              return null}).map((card) => {
                return <div className="col-md-6 col-lg-4 mt-3" key={card._id}>
                <div className="card">
                  <img src={ card.bizImage } alt={ card.bizName } height="180" />
                  <div className="card-body">
                    <h5 className="card-title">{ card.bizName }</h5>
                    <p className="card-text">{ card.bizDescription }</p>
                    <p className="card-text border-top pt-2">
                      <b>Tel:</b> { card.bizPhone } <br/>
                      <b>Address:</b> { card.bizAddress } <br/>
                      <b>Card Number:</b> { card.bizNumber } <br/>
                    </p>
                    <Link to={`/my-cards/edit/${card._id}`} className="btn btn-success mr-2">Edit</Link>
                    <button onClick={ () => { props.handleCardDelete(card._id) } } className="btn btn-success">Delete</button>
                  </div>
                </div>
              </div>
              })}
            </div>
    </React.Fragment>
   )
}

export default Card;