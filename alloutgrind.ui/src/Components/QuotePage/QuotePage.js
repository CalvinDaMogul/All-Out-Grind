import React from 'react';

import QuotesRequests from '../../Helpers/Data/QuotesRequests';
import QuoteCard from '../QuoteCard/QuoteCard';

import './QuotePage.scss';

class QuotePage extends React.Component {
    state = {
        quotes: [],
    }

    getAllQuotes = () => {
        QuotesRequests.getAllQuotes().then(res => this.setState({quotes: res}));
    }

    componentDidMount() {
        this.getAllQuotes();
    }

    render() {
        const { quotes } = this.state;
        const showQuotes = quotes.map(quotes => <QuoteCard key={quotes.id}
        />);

        return( 
            <div className="Quote">
                {showQuotes}
                <div className="QuotePage">

                </div>
            </div>
        );
        }
    }


export default QuotePage;