import React from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom';
import BubbleContainer from './components/BubbleContainer'
import InvoiceTableContainer from './components/InvoiceTableContainer'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import './App.css';

const client = new ApolloClient({
    uri: "http://localhost:4000"
});

interface MatchParams {
    client: string;
}

interface Props extends RouteComponentProps<MatchParams> {
}

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
