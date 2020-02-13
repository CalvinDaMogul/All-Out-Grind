import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import QuotesRequests from '../../Helpers/Data/QuotesRequests';

import './AddQuote.scss'

const defaultQuote = {
    ArtistName:'',
    SongName:'',
    Quote:'',
}

class AddQuote extends React.Component {
    state = {
        newQuote: defaultQuote,
};

formFieldStringState = (name, e) => {
    const tempQuote = { ...this.state.newQuote }
    tempQuote[name] = e.target.value;
      this.setState({ newQuote: tempQuote });
      console.log(tempQuote)
}

artistChange = e => this.formFieldStringState('ArtistName', e);
songChange = e => this.formFieldStringState('SongName', e);
quoteChange = e => this.formFieldStringState('Quote', e);

formSubmit = e => {
    e.preventDefault();
    const saveMe = { ...this.state.newQuote };
    QuotesRequests.addQuote(saveMe)
    .then(() => this.props.history.push('/All Quotes'))
    .catch(err => console.error('unable to save', err))
}

render() {
const { newQuote } = this.state;
    return (
      <div className="form-wrapper">
        <div className="secondary-form-wrapper">

        <Form onSubmit={ this.formSubmit }>
        <FormGroup row>
          <Label for="exampleEmail">Artist Name</Label>
          
            <Input type="name" id="exampleEmail" placeholder="Enter artists name" 
            value={newQuote.ArtistName}
            onChange={this.artistChange}/>
         
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail">Song Name</Label>
         
            <Input type="name"  id="exampleEmail" placeholder="Enter song name" 
            value={newQuote.SongName}
            onChange={this.songChange}/>
          
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText">Quote</Label>
            <Input type="textarea" name="text" id="exampleText" 
             value={newQuote.QuoteName}
             onChange={this.quoteChange}/>
          
        </FormGroup>
        <FormGroup check row>
         
            <Button type="submit" className="submitBtn">Submit</Button>
         
        </FormGroup>
      </Form>
        </div>
    </div>
    );
};

};

export default AddQuote;