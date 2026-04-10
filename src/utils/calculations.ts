import type { EMIResult, SIPResult } from '../types';

/**
 * Calculate EMI (Equated Monthly Installment)
 * Formula: EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]
 */
export function calculateEMI(
  principal: number,
  annualRate: number,
  tenureMonths: number
): EMIResult {
  if (principal <= 0 || annualRate <= 0 || tenureMonths <= 0) {
    return {
      monthlyEMI: 0,
      totalInterest: 0,
      totalAmount: 0,
      principalAmount: principal,
    };
  }

  const monthlyRate = annualRate / 12 / 100;
  const n = tenureMonths;
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
    (Math.pow(1 + monthlyRate, n) - 1);

  const totalAmount = emi * n;
  const totalInterest = totalAmount - principal;

  return {
    monthlyEMI: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalAmount: Math.round(totalAmount),
    principalAmount: principal,
  };
}

/**
 * Calculate SIP (Systematic Investment Plan) maturity value
 * Formula: M × ({[1 + r]^n - 1} / r) × (1 + r)
 * where r = monthly rate, n = total months
 */
export function calculateSIP(
  monthlyInvestment: number,
  annualReturnRate: number,
  years: number
): SIPResult {
  if (monthlyInvestment <= 0 || annualReturnRate <= 0 || years <= 0) {
    return {
      investedAmount: 0,
      estimatedReturns: 0,
      totalValue: 0,
    };
  }

  const r = annualReturnRate / 12 / 100;
  const n = years * 12;
  const totalValue =
    monthlyInvestment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const investedAmount = monthlyInvestment * n;
  const estimatedReturns = totalValue - investedAmount;

  return {
    investedAmount: Math.round(investedAmount),
    estimatedReturns: Math.round(estimatedReturns),
    totalValue: Math.round(totalValue),
  };
}

/**
 * Format number to Indian currency format (e.g. 1,00,000)
 */
export function formatIndianCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format number to Indian number format
 */
export function formatIndianNumber(num: number): string {
  return new Intl.NumberFormat('en-IN').format(num);
}

/**
 * Convert amount to Lakhs/Crores string (e.g. "1.5 Cr", "45 L")
 */
export function formatCrLakh(amount: number): string {
  if (amount >= 1_00_00_000) {
    return `₹${(amount / 1_00_00_000).toFixed(2)} Cr`;
  } else if (amount >= 1_00_000) {
    return `₹${(amount / 1_00_000).toFixed(2)} L`;
  }
  return `₹${formatIndianNumber(amount)}`;
}
