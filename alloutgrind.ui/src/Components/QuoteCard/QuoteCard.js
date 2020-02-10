import React from 'react';
import PropTypes from 'prop-types';


import QuoteShape from '../../Helpers/propz/quoteShape';
import './QuoteCard.scss';

class QuoteCard extends React.Component {
    state = {
        quote: {},
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
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 className="card-title">{currentQuote.artistName}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{currentQuote.songName}</h6>
              <p class="card-text">{currentQuote.quote}</p>
              <a href="#" class="card-link"></a>
              <a href="#" class="card-link"></a>
            </div>
          </div>
            );
        
        }
    }

    export default QuoteCard;