import { LicenseChainDeFi } from '../src';

// Example usage of LicenseChain DeFi SDK
async function basicUsageExample() {
  // Initialize the DeFi SDK
  const deFi = new LicenseChainDeFi({
    rpcUrl: 'https://mainnet.infura.io/v3/YOUR_PROJECT_ID',
    privateKey: 'YOUR_PRIVATE_KEY',
    networkId: 1, // Ethereum mainnet
    gasPrice: '20000000000', // 20 gwei
    gasLimit: 500000
  });

  try {
    // Get token information
    console.log('Getting token info...');
    const tokenInfo = await deFi.getTokenInfo('0xA0b86a33E6441b8C4C8C0d4b0c8C0d4b0c8C0d4b');
    console.log('Token info:', tokenInfo);

    // Get token balance
    console.log('Getting token balance...');
    const balance = await deFi.getBalance('0xA0b86a33E6441b8C4C8C0d4b0c8C0d4b0c8C0d4b', '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6');
    console.log('Balance:', balance);

    // Get yield farming pools
    console.log('Getting yield farming pools...');
    const pools = await deFi.getYieldFarmingPools();
    console.log('Yield farming pools:', pools);

    // Get liquidity pools
    console.log('Getting liquidity pools...');
    const liquidityPools = await deFi.getPools();
    console.log('Liquidity pools:', liquidityPools);

    // Get swap quote
    console.log('Getting swap quote...');
    const quote = await deFi.getSwapQuote(
      '0xA0b86a33E6441b8C4C8C0d4b0c8C0d4b0c8C0d4b', // Token A
      '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6', // Token B
      '1000000000000000000' // 1 token
    );
    console.log('Swap quote:', quote);

    // Get staking pools
    console.log('Getting staking pools...');
    const stakingPools = await deFi.getStakingPools();
    console.log('Staking pools:', stakingPools);

    // Get lending pools
    console.log('Getting lending pools...');
    const lendingPools = await deFi.getLendingPools();
    console.log('Lending pools:', lendingPools);

  } catch (error) {
    console.error('Error:', error);
  }
}

// Example of yield farming operations
async function yieldFarmingExample() {
  const deFi = new LicenseChainDeFi({
    rpcUrl: 'https://mainnet.infura.io/v3/YOUR_PROJECT_ID',
    privateKey: 'YOUR_PRIVATE_KEY',
    networkId: 1
  });

  try {
    // Stake in yield farming pool
    console.log('Staking in yield farming pool...');
    const stakeResult = await deFi.stakeInYieldFarming('pool-1', '1000000000000000000');
    console.log('Stake transaction:', stakeResult);

    // Claim rewards
    console.log('Claiming rewards...');
    const claimResult = await deFi.claimYieldFarmingRewards('pool-1');
    console.log('Claim transaction:', claimResult);

    // Unstake from yield farming
    console.log('Unstaking from yield farming...');
    const unstakeResult = await deFi.unstakeFromYieldFarming('pool-1', '500000000000000000');
    console.log('Unstake transaction:', unstakeResult);

  } catch (error) {
    console.error('Yield farming error:', error);
  }
}

// Example of liquidity operations
async function liquidityExample() {
  const deFi = new LicenseChainDeFi({
    rpcUrl: 'https://mainnet.infura.io/v3/YOUR_PROJECT_ID',
    privateKey: 'YOUR_PRIVATE_KEY',
    networkId: 1
  });

  try {
    // Add liquidity
    console.log('Adding liquidity...');
    const addLiquidityResult = await deFi.addLiquidity(
      '0xA0b86a33E6441b8C4C8C0d4b0c8C0d4b0c8C0d4b', // Token A
      '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6', // Token B
      '1000000000000000000', // Amount A
      '2000000000000000000'  // Amount B
    );
    console.log('Add liquidity transaction:', addLiquidityResult);

    // Get liquidity positions
    console.log('Getting liquidity positions...');
    const positions = await deFi.getLiquidityPositions('0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6');
    console.log('Liquidity positions:', positions);

    // Remove liquidity
    console.log('Removing liquidity...');
    const removeLiquidityResult = await deFi.removeLiquidity(
      '0xA0b86a33E6441b8C4C8C0d4b0c8C0d4b0c8C0d4b', // Token A
      '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6', // Token B
      '500000000000000000' // LP token amount
    );
    console.log('Remove liquidity transaction:', removeLiquidityResult);

  } catch (error) {
    console.error('Liquidity error:', error);
  }
}

// Example of staking operations
async function stakingExample() {
  const deFi = new LicenseChainDeFi({
    rpcUrl: 'https://mainnet.infura.io/v3/YOUR_PROJECT_ID',
    privateKey: 'YOUR_PRIVATE_KEY',
    networkId: 1
  });

  try {
    // Stake tokens
    console.log('Staking tokens...');
    const stakeResult = await deFi.stake('0xA0b86a33E6441b8C4C8C0d4b0c8C0d4b0c8C0d4b', '1000000000000000000');
    console.log('Stake transaction:', stakeResult);

    // Claim staking rewards
    console.log('Claiming staking rewards...');
    const claimResult = await deFi.claimStakingRewards('0xA0b86a33E6441b8C4C8C0d4b0c8C0d4b0c8C0d4b');
    console.log('Claim transaction:', claimResult);

    // Unstake tokens
    console.log('Unstaking tokens...');
    const unstakeResult = await deFi.unstake('0xA0b86a33E6441b8C4C8C0d4b0c8C0d4b0c8C0d4b', '500000000000000000');
    console.log('Unstake transaction:', unstakeResult);

  } catch (error) {
    console.error('Staking error:', error);
  }
}

// Example of lending operations
async function lendingExample() {
  const deFi = new LicenseChainDeFi({
    rpcUrl: 'https://mainnet.infura.io/v3/YOUR_PROJECT_ID',
    privateKey: 'YOUR_PRIVATE_KEY',
    networkId: 1
  });

  try {
    // Supply tokens
    console.log('Supplying tokens...');
    const supplyResult = await deFi.supply('0xA0b86a33E6441b8C4C8C0d4b0c8C0d4b0c8C0d4b', '1000000000000000000');
    console.log('Supply transaction:', supplyResult);

    // Borrow tokens
    console.log('Borrowing tokens...');
    const borrowResult = await deFi.borrow('0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6', '500000000000000000');
    console.log('Borrow transaction:', borrowResult);

    // Repay tokens
    console.log('Repaying tokens...');
    const repayResult = await deFi.repay('0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6', '250000000000000000');
    console.log('Repay transaction:', repayResult);

  } catch (error) {
    console.error('Lending error:', error);
  }
}

// Example of DEX operations
async function dexExample() {
  const deFi = new LicenseChainDeFi({
    rpcUrl: 'https://mainnet.infura.io/v3/YOUR_PROJECT_ID',
    privateKey: 'YOUR_PRIVATE_KEY',
    networkId: 1
  });

  try {
    // Perform swap
    console.log('Performing swap...');
    const swapResult = await deFi.swap(
      '0xA0b86a33E6441b8C4C8C0d4b0c8C0d4b0c8C0d4b', // Token in
      '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6', // Token out
      '1000000000000000000', // Amount in
      '1900000000000000000'  // Amount out min
    );
    console.log('Swap result:', swapResult);

  } catch (error) {
    console.error('DEX error:', error);
  }
}

// Run examples
if (require.main === module) {
  basicUsageExample()
    .then(() => console.log('Basic usage example completed'))
    .catch(console.error);
}