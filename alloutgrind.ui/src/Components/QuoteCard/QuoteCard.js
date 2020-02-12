import React from 'react';
import PropTypes from 'prop-types';
import QuotesRequests from '../../Helpers/Data/QuotesRequests';


import QuoteShape from '../../Helpers/propz/quoteShape';
import './QuoteCard.scss';

class QuoteCard extends React.Component {
    state = {
        quote: {},
    }
  
    addQuoteToUser =() => {
      const user = JSON.parse(sessionStorage.getItem('userInfo'));
      const quoteId = this.props.currentQuote.id;

      const quoteObj = { 
        quoteId: quoteId,
        userId: user.id
      }

      QuotesRequests.addQuoteToUser(quoteObj, user.id).catch((error) => console.error(error))
  }
    render() {
        const { currentQuote } = this.props;
        return (
        //   <div className="Quote">
        //     <div className="container">
        // <h2 className="Name-title">{currentQuote.artistName}</h2>
        //  <p className="Name-title">{currentQuote.songName}</p>
        // <p className="Name-title">{currentQuote.quote}</p>
        //     </div>
        //     </div>
            <div className="card">
            <div className="card-body">
              <h5 className="card-title">{currentQuote.artistName}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{currentQuote.songName}</h6>
              <p className="card-text">{currentQuote.quote}</p>
              <button className="btn btn-primary" onClick={this.addQuoteToUser}>test</button>
            </div>
          </div>
            );
        
        }
    }

    export default QuoteCard;