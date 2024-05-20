const axios = require('axios');
const { formatAddress, formatEther } = require('./utils');

const API_URL = 'https://gateway.thegraph.com/api/<API_KEY>/subgraphs/id/<SUBGRAPH_ID>';

// Define the queries
const GET_TOKENS = `
  query {
    tokens {
      id
      symbol
      name
      decimals
    }
  }
`;

const GET_TRANSACTIONS = `
  query {
    transactions(first: 5) {
      id
      blockNumber
      from
      to
      value
    }
  }
`;

// Function to fetch data from the subgraph
const fetchData = async (query) => {
  try {
    const response = await axios.post(API_URL, { query });
    const data = response.data.data;

    if (data.tokens) {
      data.tokens.forEach(token => {
        console.log(`Token ID: ${token.id}`);
        console.log(`Symbol: ${token.symbol}`);
        console.log(`Name: ${token.name}`);
        console.log(`Decimals: ${token.decimals}`);
        console.log('---------------------------');
      });
    }

    if (data.transactions) {
      data.transactions.forEach(tx => {
        console.log(`Transaction ID: ${tx.id}`);
        console.log(`Block Number: ${tx.blockNumber}`);
        console.log(`From: ${formatAddress(tx.from)}`);
        console.log(`To: ${formatAddress(tx.to)}`);
        console.log(`Value: ${formatEther(tx.value)} ETH`);
        console.log('---------------------------');
      });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Fetch tokens and transactions data
fetchData(GET_TOKENS);
fetchData(GET_TRANSACTIONS);