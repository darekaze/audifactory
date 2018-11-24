/*
 * Format to HKD
 * usage: import currency from '@/filters/currency';
 * currency.format(amount/100);
 */

export default new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'HKD',
  minimumFractionDigits: 2,
});
