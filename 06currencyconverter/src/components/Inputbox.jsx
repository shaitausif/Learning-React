import React from 'react';
import { useId } from 'react';

const Inputbox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = '',
}) => {
  const id = useId();

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow clearing the input
    if (value === '') {
      onAmountChange && onAmountChange('');
    } else {
      // Convert value to a number if it's not empty
      const numberValue = parseFloat(value);
      if (!isNaN(numberValue)) {
        onAmountChange && onAmountChange(numberValue);
      }
    }
  };

  return (
    <div className={`${className} bg-white p-3 rounded-lg text-sm flex`}>
      <div className="w-1/2">
        <label htmlFor={id} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          type="number"
          id={id}
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount === '' ? '' : amount} // Set value to empty string if cleared
          onChange={handleInputChange} // Handle input change
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-200 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Inputbox;
