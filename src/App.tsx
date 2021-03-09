import React from 'react';
import logo from './logo.svg';
import './App.css';
import JobPage from './JobPage';
import { ApolloProvider } from '@apollo/client';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Link, RouteComponentProps} from "react-router-dom";
type TParams = { id: number };
function App() {
    const client = new ApolloClient({
        uri: 'http://localhost:4001/graphql',
        cache: new InMemoryCache()
      });
  return (
    <ApolloProvider client={client}>
    <div className="App">
    <Router>
       <div>
         
       <Route path="/software">
              <JobPage type="software" />
            </Route>
            <Route path="/ux">
              <JobPage type="ux" />
            </Route>
       </div>
     </Router>
    </div>
    </ApolloProvider>
  );
}

export default App;
