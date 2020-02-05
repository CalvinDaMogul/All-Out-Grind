import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import quoteShape from '../../propz/quoteShape';
import './QuoteCard.scss';

class QuoteCard extends React.Component {
    static PropTypes = {
        quotes: quoteShape.qouteCardShape,
    }

    render() {
        const { quote } = this.props;
    }

    return (
        
    )
}