import React from 'react';
import PropTypes from 'prop-types';


import quoteShape from '../../propz/quoteShape';
import './QuoteCard.scss';

class QuoteCard extends React.Component {
    static PropTypes = {
        quotes: quoteShape.qouteCardShape,
    }

    render() {
        const { quote } = this.props;
        return (
            <div className="Blog">
            <div className="container">
        <h2 className="Name-title">{quote.artistName}</h2>
         <p className="Name-title">{quote.songName}</p>
        <p className="Name-title">{quote.quote}</p>
            </div>
            </div>
            );
        
        }
    }

    export default QuoteCard;