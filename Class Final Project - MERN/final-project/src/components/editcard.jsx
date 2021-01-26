import React from 'react';
import PageHeader from './common/pageHeader';
import Joi from 'joi-browser';
import Form from './common/form';
import cardService from '../services/cardService';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';


class EditCard extends Form {

    state = {
        data: {  
            bizName: "",
            bizDescription: "", 
            bizAddress: "",
            bizPhone: "",
            bizImage: "",
          },
        errors: {}
    }

    schema = {
        _id: Joi.string(),
        bizName: Joi.string().min(2).max(255).required(),
        bizDescription: Joi.string().min(2).max(1024).required(),
        bizAddress: Joi.string().min(2).max(400).required(),
        bizPhone: Joi.string().min(9).max(10).required().regex(/^0[2-9]\d{7,8}$/),
        bizImage: Joi.string().min(11).max(1024).uri().allow("")
      }
    
      doSubmit = async () => {
        const { data } = this.state;
        await cardService.editCard(data);
        toast.success('card details has beed updated successfully')
        this.props.history.replace('/my-cards')
      }

      async componentDidMount() {
          const cardid = this.props.match.params.id;
          const { data } = await cardService.getCard(cardid);
        this.setState({data: this.mapToViewModel(data)})
      }
      mapToViewModel(card) {
       return {
           _id: card._id,
           bizName: card.bizName,
           bizDescription: card.bizDescription, 
           bizAddress: card.bizAddress,
           bizPhone: card.bizPhone,
           bizImage: card.bizImage,
       };
      } 
    

    render() {
        return (
<div className="container">
            <PageHeader titleText="Create Card Form" />
        <div className="row">
            <div className="col-12">
                <p className="text-center">Easily create a card for your business </p>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <form onSubmit={this.handleSubmit} autoComplete="Off" method="POST">
                    { this.renderInput("bizName", "Business Name","","Business Name" ) }
                    { this.renderInput("bizDescription", "Business Description", "", "Business Description" ) }
                    { this.renderInput("bizAddress", "Business Address", "", "Business Address") }
                    { this.renderInput("bizPhone", "Business Phone", "", "Business Phone") }
                    { this.renderInput("bizImage", "Business Image", "", "Business Image") }
                    { this.renderButton("Done") }
                     <Link to='/my-cards' className='ml-3 btn btn-secondary'>Cancel</Link>
                </form>
            </div>
        </div>
    </div>
        );
    }
}

export default EditCard;