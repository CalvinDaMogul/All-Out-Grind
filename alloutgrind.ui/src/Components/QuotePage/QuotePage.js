import React from 'react';
import UserRequests from '../../Helpers/Data/UserRequests';
import QuotesRequests from '../../Helpers/Data/QuotesRequests';
import QuoteCard from '../QuoteCard/QuoteCard';

import './QuotePage.scss';

class QuotePage extends React.Component {
    state = {
        userInfo: {},
        quotes: [],
    }

    // getAllQuotes = () => {
        // QuotesRequests.getAllQuotes().then(res => this.setState({quotes: res}));
        
    // }
    
    getUsersQuotes =() => {
        QuotesRequests.getUsersQuotes(this.state.userInfo.id).then(res => this.setState({quotes: res}));
    }

    componentDidMount() {
        // this.props.userId this should be passed from app.js on login
        const userInfo = UserRequests.getSessionUser();
        this.setState({ userInfo: userInfo },this.getUsersQuotes);
    }

    render() {
        const { quotes } = this.state;
        const showQuotes = quotes.map(quote => <QuoteCard key={quote.id} location={this.props.location} currentQuote={quote}
        />);

        return( 
            <div className="Quote">
                <div className="card-wrapper">
                    {showQuotes}
                </div>
            </div>
        );
        }
    }


export default QuotePage;