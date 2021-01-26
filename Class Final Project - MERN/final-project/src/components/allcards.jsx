import React, {useState} from 'react';
import Favorite from './common/favorite';

function AllCards(props) {
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
                } return null
}).map( (card) => {
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
<Favorite userFrom={localStorage.getItem("token")} cardId={card._id} card={card} />
</p>
</div>
</div>
</div>})}
</div>
            </React.Fragment>
            
    )
}

export default AllCards;