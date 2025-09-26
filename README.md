# 💰 LicenseChain DeFi SDK

[![npm version](https://badge.fury.io/js/@licensechain%2Fdefi-sdk.svg)](https://badge.fury.io/js/@licensechain%2Fdefi-sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

> **Decentralized Finance integration for LicenseChain** - Create, manage, and trade software licenses using DeFi protocols including lending, borrowing, staking, and yield farming.

## 🌟 Features

### 🏦 **DeFi Protocol Integration**
- **Aave** - Lending and borrowing against licenses
- **Compound** - License-based collateral management
- **Uniswap** - License token trading and liquidity
- **SushiSwap** - Cross-chain license trading
- **Curve** - Stable license token pools
- **Yearn** - Automated license yield farming

### 💎 **License as Collateral**
- **License Collateralization** - Use licenses as collateral for loans
- **Dynamic Pricing** - Real-time license valuation
- **Liquidation Protection** - Automated liquidation prevention
- **Collateral Optimization** - Maximize borrowing power

### 🌾 **Yield Farming**
- **License Staking** - Stake licenses to earn rewards
- **Liquidity Mining** - Provide liquidity for license tokens
- **Governance Tokens** - Earn governance rights through licensing
- **Auto-compounding** - Automated yield optimization

### 🔄 **Cross-Chain DeFi**
- **Multi-Chain Lending** - Borrow on one chain, collateral on another
- **Cross-Chain Swaps** - Trade licenses across chains
- **Bridge Integration** - Seamless cross-chain license transfers
- **Unified DeFi** - Single interface for all DeFi operations

## 🚀 Quick Start

### Installation

```bash
npm install @licensechain/defi-sdk
# or
yarn add @licensechain/defi-sdk
# or
pnpm add @licensechain/defi-sdk
```

### Basic Usage

```typescript
import { LicenseChainDeFi } from '@licensechain/defi-sdk';

// Initialize the SDK
const defiSDK = new LicenseChainDeFi({
  network: 'ethereum', // or 'polygon', 'bsc', 'avalanche'
  privateKey: process.env.PRIVATE_KEY,
  rpcUrl: process.env.RPC_URL,
  protocols: ['aave', 'compound', 'uniswap'] // Enable specific protocols
});

// Deploy license contract with DeFi integration
const contract = await defiSDK.deployDeFiLicenseContract({
  name: 'DeFi Software License',
  symbol: 'DSL',
  baseURI: 'https://api.myapp.com/licenses/',
  maxSupply: 10000,
  protocols: ['aave', 'compound', 'uniswap']
});

// Create a license
const license = await contract.mintLicense({
  to: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
  tokenId: 1,
  metadata: {
    software: 'MyApp Pro',
    version: '2.0.0',
    features: ['premium', 'unlimited'],
    value: '1000' // USD value for collateral
  }
});

// Use license as collateral for lending
const lendingResult = await defiSDK.useLicenseAsCollateral({
  protocol: 'aave',
  licenseId: 1,
  asset: 'USDC',
  amount: '500'
});

// Borrow against license
const borrowResult = await defiSDK.borrowAgainstLicense({
  protocol: 'aave',
  licenseId: 1,
  asset: 'USDC',
  amount: '250'
});
```

## 📚 API Reference

### LicenseChainDeFi

#### Constructor Options

```typescript
interface DeFiConfig {
  network: 'ethereum' | 'polygon' | 'bsc' | 'avalanche' | 'arbitrum';
  privateKey?: string;
  walletProvider?: any;
  rpcUrl?: string;
  protocols?: ProtocolType[];
  gasPrice?: string;
  gasLimit?: number;
}

type ProtocolType = 'aave' | 'compound' | 'uniswap' | 'sushiswap' | 'curve' | 'yearn';
```

#### Methods

##### `deployDeFiLicenseContract(options)`
Deploy a license contract with DeFi integration.

```typescript
interface DeFiDeployOptions {
  name: string;
  symbol: string;
  baseURI: string;
  maxSupply?: number;
  protocols: ProtocolType[];
  oracleAddress?: string;
  priceFeedAddress?: string;
}

const contract = await defiSDK.deployDeFiLicenseContract({
  name: 'DeFi Software License',
  symbol: 'DSL',
  baseURI: 'https://api.myapp.com/licenses/',
  maxSupply: 10000,
  protocols: ['aave', 'compound', 'uniswap'],
  oracleAddress: '0x...', // Chainlink oracle
  priceFeedAddress: '0x...' // Price feed contract
});
```

##### `useLicenseAsCollateral(options)`
Use a license as collateral for lending.

```typescript
interface CollateralOptions {
  protocol: ProtocolType;
  licenseId: number;
  asset: string;
  amount: string;
  duration?: number; // days
}

const result = await defiSDK.useLicenseAsCollateral({
  protocol: 'aave',
  licenseId: 1,
  asset: 'USDC',
  amount: '500',
  duration: 30
});
```

##### `borrowAgainstLicense(options)`
Borrow assets using license as collateral.

```typescript
interface BorrowOptions {
  protocol: ProtocolType;
  licenseId: number;
  asset: string;
  amount: string;
  interestRate?: 'stable' | 'variable';
}

const result = await defiSDK.borrowAgainstLicense({
  protocol: 'aave',
  licenseId: 1,
  asset: 'USDC',
  amount: '250',
  interestRate: 'stable'
});
```

### DeFi Protocols

#### Aave Integration

```typescript
// Supply license as collateral
const aaveResult = await defiSDK.aave.supplyCollateral({
  licenseId: 1,
  asset: 'USDC',
  amount: '500'
});

// Borrow against license
const borrowResult = await defiSDK.aave.borrow({
  licenseId: 1,
  asset: 'USDC',
  amount: '250',
  interestRate: 'stable'
});

// Repay loan
const repayResult = await defiSDK.aave.repay({
  licenseId: 1,
  asset: 'USDC',
  amount: '250'
});

// Withdraw collateral
const withdrawResult = await defiSDK.aave.withdrawCollateral({
  licenseId: 1,
  asset: 'USDC',
  amount: '500'
});
```

#### Compound Integration

```typescript
// Supply license to Compound
const compoundResult = await defiSDK.compound.supply({
  licenseId: 1,
  asset: 'USDC',
  amount: '500'
});

// Borrow from Compound
const borrowResult = await defiSDK.compound.borrow({
  licenseId: 1,
  asset: 'USDC',
  amount: '250'
});

// Get borrowing power
const borrowingPower = await defiSDK.compound.getBorrowingPower(1);
```

#### Uniswap Integration

```typescript
// Add license to liquidity pool
const liquidityResult = await defiSDK.uniswap.addLiquidity({
  licenseId: 1,
  tokenA: 'USDC',
  tokenB: 'WETH',
  amountA: '1000',
  amountB: '0.5'
});

// Swap license tokens
const swapResult = await defiSDK.uniswap.swap({
  licenseId: 1,
  tokenIn: 'USDC',
  tokenOut: 'WETH',
  amountIn: '100',
  slippage: 0.5 // 0.5%
});

// Remove liquidity
const removeResult = await defiSDK.uniswap.removeLiquidity({
  licenseId: 1,
  tokenA: 'USDC',
  tokenB: 'WETH',
  liquidity: '100'
});
```

## 🔧 Advanced Features

### Yield Farming

```typescript
// Stake license for rewards
const stakeResult = await defiSDK.stakeLicense({
  protocol: 'yearn',
  licenseId: 1,
  duration: 30, // days
  autoCompound: true
});

// Get staking rewards
const rewards = await defiSDK.getStakingRewards(1);

// Claim rewards
const claimResult = await defiSDK.claimRewards(1);
```

### Liquidity Mining

```typescript
// Provide liquidity for license tokens
const liquidityResult = await defiSDK.provideLiquidity({
  protocol: 'sushiswap',
  licenseId: 1,
  tokenA: 'USDC',
  tokenB: 'WETH',
  amountA: '1000',
  amountB: '0.5'
});

// Get liquidity mining rewards
const miningRewards = await defiSDK.getLiquidityMiningRewards(1);
```

### Cross-Chain DeFi

```typescript
// Lend on Ethereum, collateral on Polygon
const crossChainResult = await defiSDK.crossChainLending({
  lendingChain: 'ethereum',
  collateralChain: 'polygon',
  licenseId: 1,
  asset: 'USDC',
  amount: '500'
});

// Bridge license for DeFi
const bridgeResult = await defiSDK.bridgeLicenseForDeFi({
  fromChain: 'ethereum',
  toChain: 'polygon',
  licenseId: 1,
  protocol: 'aave'
});
```

### Automated Strategies

```typescript
// Auto-compound yield
const autoCompoundResult = await defiSDK.enableAutoCompound({
  licenseId: 1,
  protocol: 'yearn',
  compoundFrequency: 'daily'
});

// Rebalance portfolio
const rebalanceResult = await defiSDK.rebalancePortfolio({
  licenseId: 1,
  targetAllocation: {
    'USDC': 40,
    'WETH': 30,
    'WBTC': 20,
    'DAI': 10
  }
});
```

## 🌐 Protocol Configuration

### Supported Protocols

| Protocol | Network | Features | TVL |
|----------|---------|----------|-----|
| Aave | Ethereum, Polygon, Avalanche | Lending, Borrowing, Collateral | $15B+ |
| Compound | Ethereum, Polygon | Lending, Borrowing, Governance | $8B+ |
| Uniswap | Ethereum, Polygon, Arbitrum | Trading, Liquidity, AMM | $5B+ |
| SushiSwap | Ethereum, Polygon, BSC | Cross-chain, Liquidity | $2B+ |
| Curve | Ethereum, Polygon | Stable swaps, Low slippage | $3B+ |
| Yearn | Ethereum, Polygon | Yield farming, Vaults | $1B+ |

### Custom Protocol

```typescript
const defiSDK = new LicenseChainDeFi({
  network: 'ethereum',
  privateKey: process.env.PRIVATE_KEY,
  protocols: ['custom'],
  customProtocols: {
    custom: {
      address: '0x...',
      abi: [...],
      functions: {
        supply: 'supplyCollateral',
        borrow: 'borrow',
        repay: 'repay'
      }
    }
  }
});
```

## 🔒 Security Best Practices

### Risk Management

```typescript
// Set liquidation threshold
await defiSDK.setLiquidationThreshold({
  licenseId: 1,
  threshold: 0.8 // 80% of collateral value
});

// Enable liquidation protection
await defiSDK.enableLiquidationProtection({
  licenseId: 1,
  maxSlippage: 0.05 // 5%
});

// Monitor health factor
const healthFactor = await defiSDK.getHealthFactor(1);
if (healthFactor < 1.5) {
  console.warn('License is at risk of liquidation');
}
```

### Oracle Integration

```typescript
// Set price oracle for license valuation
await defiSDK.setPriceOracle({
  licenseId: 1,
  oracle: 'chainlink',
  priceFeed: '0x...'
});

// Get real-time license value
const licenseValue = await defiSDK.getLicenseValue(1);
console.log('License value:', licenseValue); // USD
```

## 📊 Error Handling

```typescript
import { LicenseChainError, ErrorCodes } from '@licensechain/defi-sdk';

try {
  const result = await defiSDK.useLicenseAsCollateral(options);
} catch (error) {
  if (error instanceof LicenseChainError) {
    switch (error.code) {
      case ErrorCodes.INSUFFICIENT_COLLATERAL:
        console.error('Insufficient collateral value');
        break;
      case ErrorCodes.LIQUIDATION_RISK:
        console.error('License at risk of liquidation');
        break;
      case ErrorCodes.PROTOCOL_ERROR:
        console.error('DeFi protocol error:', error.details);
        break;
      case ErrorCodes.ORACLE_ERROR:
        console.error('Price oracle error:', error.details);
        break;
      default:
        console.error('Unknown error:', error.message);
    }
  }
}
```

## 🧪 Testing

```typescript
import { LicenseChainDeFi } from '@licensechain/defi-sdk';

describe('LicenseChain DeFi SDK', () => {
  let defiSDK: LicenseChainDeFi;
  let contract: DeFiLicenseContract;

  beforeEach(async () => {
    defiSDK = new LicenseChainDeFi({
      network: 'ethereum',
      privateKey: process.env.TEST_PRIVATE_KEY,
      protocols: ['aave', 'compound']
    });

    contract = await defiSDK.deployDeFiLicenseContract({
      name: 'Test DeFi License',
      symbol: 'TDL',
      baseURI: 'https://test.com/',
      protocols: ['aave', 'compound']
    });
  });

  it('should use license as collateral', async () => {
    const result = await defiSDK.useLicenseAsCollateral({
      protocol: 'aave',
      licenseId: 1,
      asset: 'USDC',
      amount: '500'
    });

    expect(result.success).toBe(true);
    expect(result.collateralValue).toBe('500');
  });
});
```

## 📦 Package Scripts

```json
{
  "scripts": {
    "build": "tsc",
    "test": "jest",
    "test:coverage": "jest --coverage",
    "lint": "eslint src/**/*.ts",
    "lint:fix": "eslint src/**/*.ts --fix",
    "deploy:ethereum": "ts-node scripts/deploy-ethereum.ts",
    "deploy:polygon": "ts-node scripts/deploy-polygon.ts",
    "strategy:yield": "ts-node scripts/yield-strategy.ts"
  }
}
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

```bash
git clone https://github.com/LicenseChain/LicenseChain-DeFi-SDK.git
cd LicenseChain-DeFi-SDK
npm install
npm run build
npm test
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Documentation](https://docs.licensechain.com/defi-sdk)
- [GitHub Repository](https://github.com/LicenseChain/LicenseChain-DeFi-SDK)
- [NPM Package](https://www.npmjs.com/package/@licensechain/defi-sdk)
- [Discord Community](https://discord.gg/licensechain)
- [Twitter](https://twitter.com/licensechain)

## 🆘 Support

- 📧 Email: support@licensechain.com
- 💬 Discord: [LicenseChain Community](https://discord.gg/licensechain)
- 📖 Documentation: [docs.licensechain.com](https://docs.licensechain.com)
- 🐛 Issues: [GitHub Issues](https://github.com/LicenseChain/LicenseChain-DeFi-SDK/issues)

---

**Built with ❤️ by the LicenseChain Team**
