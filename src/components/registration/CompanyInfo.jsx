import React, { Component } from 'react'
import Input from '../utils/Input';
import Button from '../utils/Button';

export default class CompanyInfo extends Component {
    render() {
        const {decreasePage} = this.props;
        return (
            <div className='company-info'>
                 <h5><i className='fa fa-building'/>  Your Company Information </h5>
                <div className="form-heading">
                    <form onSubmit={this.props.increaseIndex} >
                        <Input placeholder='Company Name' type='text' className='form-control mb-3'/>
                        <Input placeholder='Company Address' type='text' className='form-control mb-3'/>
                        <Input placeholder='Company Phone Number' type='text' className='form-control mb-3'/>
                        <Button className='btn btn-primary btn-block'>Submit</Button>
                    </form>
                    <div className='button-div'>
                   <Button onClick={decreasePage} className='btn btn-warning full mt-3 '> <i className="fa fa-arrow-left"/>previous</Button>
                   </div>
                </div>
            </div>
        )
    }
}
