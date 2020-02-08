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
            <div className="Blog">
            <div className="container">
        <h2 className="Name-title">{currentQuote.artistName}</h2>
         <p className="Name-title">{currentQuote.songName}</p>
        <p className="Name-title">{currentQuote.quote}</p>
            </div>
            </div>
            );
        
        }
    }

    export default QuoteCard;