
import React, { Component } from 'react'
import Button from '../utils/Button';
import Input from '../utils/Input';

export default class PersonalInfo extends Component {
    increasePage = (e) => {
        const {increasePage} = this.props;
        e.preventDefault();
        increasePage()
    }
    render() {
      
        
        return (
            <div className='personal-info'>
                <h5><i className='fa fa-user-circle-o'/>  Your Personal Information </h5>
                <div className="form-heading">
                    <form onSubmit={this.increasePage}>
                        <Input placeholder='Email' type='email' className='form-control mb-3'/>
                        <Input placeholder='Full Name' type='text' className='form-control mb-3'/>
                        <Input placeholder='Address' type='text' className='form-control mb-3'/>
                        <Button className='btn btn-primary btn-block'>Submit</Button>
                    </form>
                </div>
            </div>
        )
    }
}