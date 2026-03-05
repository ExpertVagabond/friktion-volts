<div align="center">

# Friktion Volts

**DeFi structured products frontend and SDK for Solana**

[![Solana](https://img.shields.io/badge/Solana-14F195?logo=solana&logoColor=white)](https://solana.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

*Revived fork of [Friktion Labs/frontend](https://github.com/Friktion-Labs/frontend) for the Solana Graveyard Hackathon*

</div>

---

## Overview

Friktion was a DeFi protocol on Solana offering structured products ("Volts") for automated yield strategies. This repository contains the full frontend application and SDK integration that powered [friktion.fi](https://friktion.fi).

> **Status: REVIVED** -- Open-sourced UI with SDK integration, ready for exploration and forking.

## Volts (Structured Products)

| Volt | Strategy | Description |
|------|----------|-------------|
| **Volt 01** | Covered Calls | Generate yield by selling OTM call options |
| **Volt 02** | Cash-Secured Puts | Earn premium by selling OTM put options |
| **Volt 03** | Crab Strategy | Delta-neutral volatility harvesting |
| **Volt 04** | Basis Yield | Funding rate arbitrage between spot and perps |
| **Volt 05** | Capital Protection | Principal-protected structured notes |

## Features

- **Volt Dashboard** -- deposit, withdraw, and monitor positions across all Volt types
- **Portfolio View** -- aggregate portfolio performance and PnL tracking
- **SDK Integration** -- @friktion-labs/friktion-sdk for programmatic access
- **Analytics** -- real-time epoch data, APY calculations, TVL metrics
- **Multi-wallet** -- Phantom, Solflare, Glow, and other Solana wallets

## Quick Start

```bash
# Clone
git clone https://github.com/ExpertVagabond/friktion-volts.git
cd friktion-volts

# Install dependencies
yarn

# Optional: install gulp CLI
yarn global add gulp-cli

# Start development server
yarn start
```

Open http://localhost:3000 in your browser.

## SDK

The Friktion SDK enables programmatic interaction with Volt smart contracts:

```typescript
import { FriktionSDK } from "@friktion-labs/friktion-sdk";
import { Connection } from "@solana/web3.js";

const connection = new Connection("https://api.mainnet-beta.solana.com");
const sdk = new FriktionSDK({ connection });

// Get all Volt 01 (Covered Call) products
const volts = await sdk.getAllVoltsByType(1);
```

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Framework | React + CRACO |
| Language | TypeScript |
| Styling | Less (Ant Design) |
| State | React Contexts |
| Blockchain | Solana Web3.js |
| SDK | @friktion-labs/friktion-sdk |
| Testing | Cypress (E2E) |

## Resources

- [SDK on npm](https://www.npmjs.com/package/@friktion-labs/friktion-sdk)
- [Integration Docs](https://docs.friktion.fi/integration/overview)
- [Contribution Guidelines](contribution.md)

## Original Project

This is a preserved fork of the Friktion Labs frontend. Friktion was one of the largest DeFi protocols on Solana before sunsetting operations. Teams like Investin, Snowflake, and Ultimate integrated with its SDK.

## License

[Apache License 2.0](LICENSE)
