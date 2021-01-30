import React, { Component } from 'react';
import Button from '../utils/Button';
import Input from '../utils/Input';


class AddressInfo extends Component {
    increasePage = (e) => {
        const {increasePage} = this.props;
        e.preventDefault();
        increasePage()
    }
    render() {
        const {decreasePage} = this.props;
        return (
            <div className="address-info">
                 <h5><i className='fa fa-address-book-o'/>  Your Address Information </h5>
                 <div className="form-heading">
                    <form onSubmit={this.increasePage}>
                        <Input placeholder='Flat Name' type='text' className='form-control mb-3'/>
                        <Input placeholder='Building Name' type='text' className='form-control mb-3'/>
                        <Input placeholder='Area or Street Number' type='text' className='form-control mb-3'/>
                        <Input placeholder='City' type='text' className='form-control mb-3'/>
                        <Input placeholder='State' type='text' className='form-control mb-3'/>
                        <Input placeholder='Country' type='text' className='form-control mb-3'/>
                        <Button className='btn btn-primary btn-block'>Submit</Button>
                    </form>
                   <div className='button-div'>
                   <Button onClick={decreasePage} className='btn btn-warning full mt-3 '> <i className="fa fa-arrow-left"/>previous</Button>
                   </div>
                </div>
            </div>
        );
    }
}

export default AddressInfo;
