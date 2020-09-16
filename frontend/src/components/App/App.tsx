import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BubbleContainer from '../BubbleContainer'
import InvoiceTableContainer from '../InvoiceTableContainer'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import './App.css';
import { Props } from "./types"
import { endpoint } from '../../utils/endpoint'

const client = new ApolloClient({
    uri: endpoint
});

const App: React.FC = () => {
  return (
      <ApolloProvider client={client}>
          <Router>
            <div className="App">
                <Route exact path="/" component={ BubbleContainer } />
                <Route path='/:client' render={( {match}: Props) => (
                    <InvoiceTableContainer client={match.params.client} /> )} />
            </div>
          </Router>
      </ApolloProvider>
  );
}

export default App;
