export class DeFiError extends Error {
  public readonly code: string;
  public readonly data?: any;

  constructor(message: string, code: string, data?: any) {
    super(message);
    this.name = 'DeFiError';
    this.code = code;
    this.data = data;
  }
}

export class InsufficientBalanceError extends DeFiError {
  constructor(required: string, available: string) {
    super(
      `Insufficient balance. Required: ${required}, Available: ${available}`,
      'INSUFFICIENT_BALANCE',
      { required, available }
    );
  }
}

export class SlippageError extends DeFiError {
  constructor(expected: string, actual: string, maxSlippage: number) {
    super(
      `Slippage too high. Expected: ${expected}, Actual: ${actual}, Max Slippage: ${maxSlippage}%`,
      'SLIPPAGE_TOO_HIGH',
      { expected, actual, maxSlippage }
    );
  }
}

export class TransactionFailedError extends DeFiError {
  constructor(hash: string, reason: string) {
    super(
      `Transaction failed: ${reason}`,
      'TRANSACTION_FAILED',
      { hash, reason }
    );
  }
}

export class PoolNotFoundError extends DeFiError {
  constructor(poolAddress: string) {
    super(
      `Pool not found: ${poolAddress}`,
      'POOL_NOT_FOUND',
      { poolAddress }
    );
  }
}

export class TokenNotFoundError extends DeFiError {
  constructor(tokenAddress: string) {
    super(
      `Token not found: ${tokenAddress}`,
      'TOKEN_NOT_FOUND',
      { tokenAddress }
    );
  }
}

export class InvalidAmountError extends DeFiError {
  constructor(amount: string) {
    super(
      `Invalid amount: ${amount}`,
      'INVALID_AMOUNT',
      { amount }
    );
  }
}

export class NetworkError extends DeFiError {
  constructor(message: string) {
    super(
      `Network error: ${message}`,
      'NETWORK_ERROR',
      { message }
    );
  }
}

export class ContractError extends DeFiError {
  constructor(method: string, reason: string) {
    super(
      `Contract error in ${method}: ${reason}`,
      'CONTRACT_ERROR',
      { method, reason }
    );
  }
}
