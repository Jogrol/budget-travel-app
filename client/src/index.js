import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import ggl from 'graphql-tag'

const client = new ApolloClient({
  uri: "https://eu1.prisma.sh/public-nebulacarp-301/my-app/dev"
});


const request = ggl`
{
    expenses{
      description
      ammount
    }
  }
`;

client.query({
  query: request
}).then(res => console.log(res))



ReactDOM.render(
        <App />
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
