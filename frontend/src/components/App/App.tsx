import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import BubbleContainer from '../bubble-container';
import InvoiceTableContainer from '../invoice-table-container';
import './app.css';
import { Props } from './types';
import { endpoint } from '../../utils/endpoint';

const client = new ApolloClient({
    uri: endpoint,
});

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="App">
                    <Route exact path="/" component={BubbleContainer} />
                    <Route
                        path="/:client"
                        render={({ match }: Props) => <InvoiceTableContainer client={match.params.client} />}
                    />
                </div>
            </Router>
        </ApolloProvider>
    );
};

export default App;
