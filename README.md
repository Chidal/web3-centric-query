# Graph Web3 Repository

## Setup

1. Clone the repository:
   ```sh
   git clone web3-centric-query-url
   cd graph-web3-repo
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Update the `API_URL` variable in `index.js` with your API key and subgraph ID:
   ```javascript
   const API_URL = 'https://gateway.thegraph.com/api/<API_KEY>/subgraphs/id/<SUBGRAPH_ID>';
   ```

4. Run the script:
   ```sh
   node index.js
   ```

## Dependencies

- `axios`: Promise based HTTP client for the browser and node.js.
- `graphql`: A reference implementation of GraphQL for JavaScript.
- `ethers`: A library for interacting with the Ethereum blockchain.

## Example Queries

This repository includes example queries to fetch token data and transaction data.

### Get Tokens

Fetches token ID, symbol, name, and decimals.

### Get Transactions

Fetches transaction ID, block number, sender, recipient, and value (formatted as Ether).


### Conclusion

This setup provides a Node.js application that queries a subgraph on The Graph using a Web3-centric approach. By using `axios` for HTTP requests and `ethers.js` for Ethereum-specific formatting.

