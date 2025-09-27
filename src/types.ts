export interface DeFiConfig {
  rpcUrl: string;
  privateKey?: string;
  networkId: number;
  gasPrice?: string;
  gasLimit?: number;
}

export interface TokenInfo {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  totalSupply: string;
}

export interface PoolInfo {
  address: string;
  token0: TokenInfo;
  token1: TokenInfo;
  reserve0: string;
  reserve1: string;
  totalSupply: string;
  fee: number;
}

export interface StakingPool {
  address: string;
  token: TokenInfo;
  rewardToken: TokenInfo;
  totalStaked: string;
  rewardRate: string;
  periodFinish: number;
  stakingToken: string;
}

export interface LendingPool {
  address: string;
  asset: TokenInfo;
  totalLiquidity: string;
  totalBorrowed: string;
  utilizationRate: number;
  borrowRate: number;
  supplyRate: number;
  reserveFactor: number;
}

export interface YieldFarmingPosition {
  poolId: string;
  stakedAmount: string;
  rewardDebt: string;
  pendingRewards: string;
  lastUpdateTime: number;
}

export interface LiquidityPosition {
  poolAddress: string;
  token0Amount: string;
  token1Amount: string;
  lpTokenAmount: string;
  share: number;
}

export interface SwapParams {
  tokenIn: string;
  tokenOut: string;
  amountIn: string;
  amountOutMin: string;
  deadline: number;
  recipient: string;
}

export interface SwapResult {
  transactionHash: string;
  amountIn: string;
  amountOut: string;
  priceImpact: number;
  gasUsed: string;
}

export interface DeFiTransaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  gasUsed: string;
  gasPrice: string;
  status: 'pending' | 'success' | 'failed';
  blockNumber?: number;
  timestamp: number;
}

export interface DeFiError extends Error {
  code: string;
  data?: any;
}
