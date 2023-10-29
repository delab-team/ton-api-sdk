<h1 align="center">
  <a href="https://github.com/delab-team/ton-api-sdk">
    Ton-Api-SDK
  </a>
</h1>

<p align="center">
  <a href="LICENSE">
    <img src="https://camo.githubusercontent.com/75c3e724ce69f6c3d1e997e9066547e00cb9000aaf566eadc8a52ab76c7d07f8/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f64656c61622d7465616d2f636f6e6e6563743f7374796c653d666f722d7468652d6261646765" alt="license mit" />
  </a>
  <a href="TYPESCRIPT">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
  </a>
  <a href="NPM">
    <img src="https://img.shields.io/npm/v/@delab-team/ton-api-sdk" height="28px" />
  </a>
</p>

<p align="center">
  Ton-Api-SDK is a library for interacting with the Ton blockchain API. It provides a set of tools and features to help developers build applications and services that utilize the Ton blockchain efficiently.
</p>

## API Doc: <a href="https://docs.tonconsole.com/tonapi/api-v2">TON Api</a>

## Install

-   **as local project package**

```jsx
yarn add @delab-team/ton-api-sdk
```

## Example

```jsx
    const tonApi = new TonApi('AFXRKLZM2YCJ67AAAAAE4XDRSACSYEOYKQKOSUVUKMXNMP2AKUTWJ2UVBPTTQZWRGZMLALY', 'mainnet');
    const blockchain = tonApi.Blockchain
```
