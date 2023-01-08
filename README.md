# Truffle Crowdfunding DApp

Crowdfunding DApp built with Truffle and React. Deployed on the Polygon Mumbai Testnet.

Contract Address: [0xe48F65D3af5e5f31e075069b6B17e8772b9d3A03](https://mumbai.polygonscan.com/address/0xe48F65D3af5e5f31e075069b6B17e8772b9d3A03)

Frontend Repo: [Link]()

Live Demo: [Link]()

## Setup 

1. Clone the repo
2. Run `npm install`
3. Add in the variables in the `.env` file

```bash
cp .env.example .env
```

## Deploy

```bash
truffle migrate --network mumbai
```

## Verify

```bash
truffle run verify FundraiserFactory --network mumbai
```