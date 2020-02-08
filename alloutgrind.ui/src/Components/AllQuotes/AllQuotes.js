import React from 'react';
import UserRequests from '../../Helpers/Data/UserRequests';
import QuotesRequests from '../../Helpers/Data/QuotesRequests';
import QuoteCard from '../QuoteCard/QuoteCard';

import './AllQuotes.scss';

class AllQuotes extends React.Component {
    state = {
        userInfo: {},
        quotes: [],
    }

    getAllQuotes = () => {
        QuotesRequests.getAllQuotes().then(res => this.setState({quotes: res}));
    }

    componentDidMount() {
        this.getAllQuotes();
        // this.props.userId this should be passed from app.js on login
        const userInfo = UserRequests.getSessionUser();
        this.setState({ userInfo: userInfo });
    }

    render() {
        const { quotes } = this.state;
        const showQuotes = quotes.map(quote => <QuoteCard key={quote.id} currentQuote={quote}
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


export default AllQuotes;