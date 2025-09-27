import { DeFiConfig, DeFiTransaction } from './types';
import { DeFiError, NetworkError } from './errors';
import { DeFiManager } from './DeFiManager';
import { YieldFarmingManager } from './YieldFarmingManager';
import { LiquidityManager } from './LiquidityManager';
import { StakingManager } from './StakingManager';
import { LendingManager } from './LendingManager';
import { DEXManager } from './DEXManager';

export class LicenseChainDeFi {
  private config: DeFiConfig;
  private deFiManager: DeFiManager;
  private yieldFarmingManager: YieldFarmingManager;
  private liquidityManager: LiquidityManager;
  private stakingManager: StakingManager;
  private lendingManager: LendingManager;
  private dexManager: DEXManager;

  constructor(config: DeFiConfig) {
    this.config = config;
    this.deFiManager = new DeFiManager(config);
    this.yieldFarmingManager = new YieldFarmingManager(config);
    this.liquidityManager = new LiquidityManager(config);
    this.stakingManager = new StakingManager(config);
    this.lendingManager = new LendingManager(config);
    this.dexManager = new DEXManager(config);
  }

  // DeFi Manager methods
  async getTokenInfo(tokenAddress: string) {
    return this.deFiManager.getTokenInfo(tokenAddress);
  }

  async getBalance(tokenAddress: string, userAddress: string) {
    return this.deFiManager.getBalance(tokenAddress, userAddress);
  }

  async transfer(tokenAddress: string, to: string, amount: string) {
    return this.deFiManager.transfer(tokenAddress, to, amount);
  }

  async approve(tokenAddress: string, spender: string, amount: string) {
    return this.deFiManager.approve(tokenAddress, spender, amount);
  }

  // Yield Farming methods
  async getYieldFarmingPools() {
    return this.yieldFarmingManager.getPools();
  }

  async stakeInYieldFarming(poolId: string, amount: string) {
    return this.yieldFarmingManager.stake(poolId, amount);
  }

  async unstakeFromYieldFarming(poolId: string, amount: string) {
    return this.yieldFarmingManager.unstake(poolId, amount);
  }

  async claimYieldFarmingRewards(poolId: string) {
    return this.yieldFarmingManager.claimRewards(poolId);
  }

  // Liquidity methods
  async addLiquidity(tokenA: string, tokenB: string, amountA: string, amountB: string) {
    return this.liquidityManager.addLiquidity(tokenA, tokenB, amountA, amountB);
  }

  async removeLiquidity(tokenA: string, tokenB: string, lpTokenAmount: string) {
    return this.liquidityManager.removeLiquidity(tokenA, tokenB, lpTokenAmount);
  }

  async getLiquidityPositions(userAddress: string) {
    return this.liquidityManager.getPositions(userAddress);
  }

  // Staking methods
  async getStakingPools() {
    return this.stakingManager.getPools();
  }

  async stake(tokenAddress: string, amount: string) {
    return this.stakingManager.stake(tokenAddress, amount);
  }

  async unstake(tokenAddress: string, amount: string) {
    return this.stakingManager.unstake(tokenAddress, amount);
  }

  async claimStakingRewards(tokenAddress: string) {
    return this.stakingManager.claimRewards(tokenAddress);
  }

  // Lending methods
  async getLendingPools() {
    return this.lendingManager.getPools();
  }

  async supply(tokenAddress: string, amount: string) {
    return this.lendingManager.supply(tokenAddress, amount);
  }

  async borrow(tokenAddress: string, amount: string) {
    return this.lendingManager.borrow(tokenAddress, amount);
  }

  async repay(tokenAddress: string, amount: string) {
    return this.lendingManager.repay(tokenAddress, amount);
  }

  // DEX methods
  async getSwapQuote(tokenIn: string, tokenOut: string, amountIn: string) {
    return this.dexManager.getQuote(tokenIn, tokenOut, amountIn);
  }

  async swap(tokenIn: string, tokenOut: string, amountIn: string, amountOutMin: string) {
    return this.dexManager.swap(tokenIn, tokenOut, amountIn, amountOutMin);
  }

  async getPools() {
    return this.dexManager.getPools();
  }

  // Utility methods
  async getTransactionStatus(hash: string): Promise<DeFiTransaction> {
    try {
      // Implementation would depend on the specific blockchain
      throw new Error('Not implemented');
    } catch (error) {
      throw new NetworkError(`Failed to get transaction status: ${error.message}`);
    }
  }

  async waitForTransaction(hash: string, confirmations: number = 1): Promise<DeFiTransaction> {
    try {
      // Implementation would depend on the specific blockchain
      throw new Error('Not implemented');
    } catch (error) {
      throw new NetworkError(`Failed to wait for transaction: ${error.message}`);
    }
  }

  getConfig(): DeFiConfig {
    return { ...this.config };
  }

  updateConfig(newConfig: Partial<DeFiConfig>): void {
    this.config = { ...this.config, ...newConfig };
    // Update all managers with new config
    this.deFiManager.updateConfig(this.config);
    this.yieldFarmingManager.updateConfig(this.config);
    this.liquidityManager.updateConfig(this.config);
    this.stakingManager.updateConfig(this.config);
    this.lendingManager.updateConfig(this.config);
    this.dexManager.updateConfig(this.config);
  }
}
