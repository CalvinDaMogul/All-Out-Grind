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
        <Form onSubmit={ this.formSubmit }>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Artist Name</Label>
          <Col sm={10}>
            <Input type="name" id="exampleEmail" placeholder="Enter artists name" 
            value={newQuote.ArtistName}
            onChange={this.artistChange}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Song Name</Label>
          <Col sm={10}>
            <Input type="name"  id="exampleEmail" placeholder="Enter song name" 
            value={newQuote.SongName}
            onChange={this.songChange}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Quote</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" 
             value={newQuote.QuoteName}
             onChange={this.quoteChange}/>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button type="submit">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
};

};

export default AddQuote;