import { LicenseChainDeFi } from '@licensechain/defi-sdk';

/**
 * Basic usage example for LicenseChain DeFi SDK
 */
async function basicUsageExample() {
  // Initialize the SDK
  const defiSDK = new LicenseChainDeFi({
    network: 'ethereum', // or 'polygon', 'bsc', 'avalanche'
    privateKey: process.env.PRIVATE_KEY!,
    rpcUrl: process.env.RPC_URL,
    protocols: ['aave', 'compound', 'uniswap']
  });

  try {
    // Deploy license contract with DeFi integration
    console.log('Deploying DeFi license contract...');
    const contract = await defiSDK.deployDeFiLicenseContract({
      name: 'DeFi Software License',
      symbol: 'DSL',
      baseURI: 'https://api.myapp.com/licenses/',
      maxSupply: 10000,
      protocols: ['aave', 'compound', 'uniswap']
    });

    console.log('Contract deployed at:', contract.getAddress());

    // Create a license
    console.log('Creating license...');
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

    console.log('License created:', license);

    // Use license as collateral for lending
    console.log('Using license as collateral...');
    const lendingResult = await defiSDK.useLicenseAsCollateral({
      protocol: 'aave',
      licenseId: 1,
      asset: 'USDC',
      amount: '500'
    });

    console.log('Lending result:', lendingResult);

  } catch (error) {
    console.error('Error:', error);
  }
}

/**
 * Lending and borrowing example
 */
async function lendingBorrowingExample() {
  const defiSDK = new LicenseChainDeFi({
    network: 'ethereum',
    privateKey: process.env.PRIVATE_KEY!,
    rpcUrl: process.env.RPC_URL,
    protocols: ['aave', 'compound']
  });

  try {
    // Use license as collateral
    const collateralResult = await defiSDK.useLicenseAsCollateral({
      protocol: 'aave',
      licenseId: 1,
      asset: 'USDC',
      amount: '1000'
    });

    console.log('Collateral supplied:', collateralResult);

    // Borrow against license
    const borrowResult = await defiSDK.borrowAgainstLicense({
      protocol: 'aave',
      licenseId: 1,
      asset: 'USDC',
      amount: '500',
      interestRate: 'stable'
    });

    console.log('Borrowed amount:', borrowResult);

    // Check borrowing power
    const borrowingPower = await defiSDK.getBorrowingPower(1);
    console.log('Remaining borrowing power:', borrowingPower);

  } catch (error) {
    console.error('Lending/borrowing error:', error);
  }
}

/**
 * Yield farming example
 */
async function yieldFarmingExample() {
  const defiSDK = new LicenseChainDeFi({
    network: 'ethereum',
    privateKey: process.env.PRIVATE_KEY!,
    rpcUrl: process.env.RPC_URL,
    protocols: ['yearn', 'uniswap']
  });

  try {
    // Stake license for rewards
    const stakeResult = await defiSDK.stakeLicense({
      protocol: 'yearn',
      licenseId: 1,
      duration: 30, // days
      autoCompound: true
    });

    console.log('License staked:', stakeResult);

    // Get staking rewards
    const rewards = await defiSDK.getStakingRewards(1);
    console.log('Staking rewards:', rewards);

    // Claim rewards
    const claimResult = await defiSDK.claimRewards(1);
    console.log('Rewards claimed:', claimResult);

  } catch (error) {
    console.error('Yield farming error:', error);
  }
}

/**
 * Liquidity mining example
 */
async function liquidityMiningExample() {
  const defiSDK = new LicenseChainDeFi({
    network: 'ethereum',
    privateKey: process.env.PRIVATE_KEY!,
    rpcUrl: process.env.RPC_URL,
    protocols: ['uniswap', 'sushiswap']
  });

  try {
    // Provide liquidity for license tokens
    const liquidityResult = await defiSDK.provideLiquidity({
      protocol: 'uniswap',
      licenseId: 1,
      tokenA: 'USDC',
      tokenB: 'WETH',
      amountA: '1000',
      amountB: '0.5'
    });

    console.log('Liquidity provided:', liquidityResult);

    // Get liquidity mining rewards
    const miningRewards = await defiSDK.getLiquidityMiningRewards(1);
    console.log('Mining rewards:', miningRewards);

  } catch (error) {
    console.error('Liquidity mining error:', error);
  }
}

/**
 * Cross-chain DeFi example
 */
async function crossChainDeFiExample() {
  const defiSDK = new LicenseChainDeFi({
    network: 'ethereum',
    privateKey: process.env.PRIVATE_KEY!,
    rpcUrl: process.env.RPC_URL,
    protocols: ['aave', 'compound']
  });

  try {
    // Lend on Ethereum, collateral on Polygon
    const crossChainResult = await defiSDK.crossChainLending({
      lendingChain: 'ethereum',
      collateralChain: 'polygon',
      licenseId: 1,
      asset: 'USDC',
      amount: '500'
    });

    console.log('Cross-chain lending:', crossChainResult);

    // Bridge license for DeFi
    const bridgeResult = await defiSDK.bridgeLicenseForDeFi({
      fromChain: 'ethereum',
      toChain: 'polygon',
      licenseId: 1,
      protocol: 'aave'
    });

    console.log('License bridged for DeFi:', bridgeResult);

  } catch (error) {
    console.error('Cross-chain DeFi error:', error);
  }
}

// Run examples
if (require.main === module) {
  basicUsageExample()
    .then(() => console.log('Basic usage example completed'))
    .catch(console.error);
}

export {
  basicUsageExample,
  lendingBorrowingExample,
  yieldFarmingExample,
  liquidityMiningExample,
  crossChainDeFiExample
};
