import { useEffect, useState } from "react";

function UseCurrencyinfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const uppercaseCurrency = currency.toUpperCase();
    fetch(`https://v6.exchangerate-api.com/v6/688d1ae41e2d41cdf5cf6cb9/latest/${uppercaseCurrency}`)
      .then((res) => res.json())
      .then((res) => setData(res.conversion_rates || {}))
      .catch((err) => console.log("Error fetching currency data: ", err));
  }, [currency]);

  return data; // Ensure the hook returns the state
}


export default UseCurrencyinfo