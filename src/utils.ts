import { BigNumber } from 'bignumber.js';

export class DeFiUtils {
  /**
   * Convert wei to ether
   */
  static weiToEther(wei: string): string {
    return new BigNumber(wei).dividedBy(new BigNumber(10).pow(18)).toString();
  }

  /**
   * Convert ether to wei
   */
  static etherToWei(ether: string): string {
    return new BigNumber(ether).multipliedBy(new BigNumber(10).pow(18)).toString();
  }

  /**
   * Convert token amount based on decimals
   */
  static formatTokenAmount(amount: string, decimals: number): string {
    return new BigNumber(amount).dividedBy(new BigNumber(10).pow(decimals)).toString();
  }

  /**
   * Convert formatted amount to raw amount based on decimals
   */
  static parseTokenAmount(amount: string, decimals: number): string {
    return new BigNumber(amount).multipliedBy(new BigNumber(10).pow(decimals)).toString();
  }

  /**
   * Calculate percentage
   */
  static calculatePercentage(part: string, total: string): number {
    if (new BigNumber(total).isZero()) return 0;
    return new BigNumber(part).dividedBy(new BigNumber(total)).multipliedBy(100).toNumber();
  }

  /**
   * Calculate price impact
   */
  static calculatePriceImpact(expectedAmount: string, actualAmount: string): number {
    if (new BigNumber(expectedAmount).isZero()) return 0;
    const impact = new BigNumber(expectedAmount).minus(new BigNumber(actualAmount))
      .dividedBy(new BigNumber(expectedAmount))
      .multipliedBy(100);
    return impact.toNumber();
  }

  /**
   * Calculate APY
   */
  static calculateAPY(rewardRate: string, totalStaked: string, rewardTokenPrice: string, stakedTokenPrice: string): number {
    if (new BigNumber(totalStaked).isZero()) return 0;
    
    const annualRewards = new BigNumber(rewardRate).multipliedBy(365 * 24 * 60 * 60);
    const rewardValue = annualRewards.multipliedBy(new BigNumber(rewardTokenPrice));
    const stakedValue = new BigNumber(totalStaked).multipliedBy(new BigNumber(stakedTokenPrice));
    
    return rewardValue.dividedBy(stakedValue).multipliedBy(100).toNumber();
  }

  /**
   * Calculate utilization rate
   */
  static calculateUtilizationRate(borrowed: string, supplied: string): number {
    if (new BigNumber(supplied).isZero()) return 0;
    return new BigNumber(borrowed).dividedBy(new BigNumber(supplied)).multipliedBy(100).toNumber();
  }

  /**
   * Calculate health factor
   */
  static calculateHealthFactor(
    collateralValue: string,
    borrowedValue: string,
    liquidationThreshold: number
  ): number {
    if (new BigNumber(borrowedValue).isZero()) return Infinity;
    
    const threshold = new BigNumber(collateralValue).multipliedBy(liquidationThreshold / 100);
    return threshold.dividedBy(new BigNumber(borrowedValue)).toNumber();
  }

  /**
   * Format number with decimals
   */
  static formatNumber(value: string, decimals: number = 2): string {
    return new BigNumber(value).toFixed(decimals);
  }

  /**
   * Check if address is valid
   */
  static isValidAddress(address: string): boolean {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  }

  /**
   * Check if amount is valid
   */
  static isValidAmount(amount: string): boolean {
    try {
      const bn = new BigNumber(amount);
      return bn.isPositive() && bn.isFinite();
    } catch {
      return false;
    }
  }

  /**
   * Generate random nonce
   */
  static generateNonce(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  /**
   * Calculate deadline timestamp
   */
  static getDeadline(minutes: number = 20): number {
    return Math.floor(Date.now() / 1000) + (minutes * 60);
  }

  /**
   * Sleep function
   */
  static sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Retry function with exponential backoff
   */
  static async retry<T>(
    fn: () => Promise<T>,
    maxRetries: number = 3,
    baseDelay: number = 1000
  ): Promise<T> {
    let lastError: Error;
    
    for (let i = 0; i < maxRetries; i++) {
      try {
        return await fn();
      } catch (error) {
        lastError = error as Error;
        if (i === maxRetries - 1) throw lastError;
        
        const delay = baseDelay * Math.pow(2, i);
        await this.sleep(delay);
      }
    }
    
    throw lastError!;
  }
}
