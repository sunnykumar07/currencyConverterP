import React , { useState } from 'react'
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {

  const [to, setTo] = useState("INR")
  const [from, setFrom] = useState("USD")
  const [convertedAmount, setConvertedAmount]= useState("")
  const [amount, setAmount]= useState("")

  const currencyInfo = useCurrencyInfo(from)
  console.log(currencyInfo)

  const options = currencyInfo ? Object.keys(currencyInfo) : [];
  console.log(options)
  

  const swap =  () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = () => { 
    setConvertedAmount(amount * currencyInfo[to])
  }

    

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount = {amount}
                              onAmountChange={(amount) => setAmount(amount)}
                              onCurrencyChange={(currency) => setFrom(currency)}
                              currencyOptions={options}
                              currencyType={from}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                      <InputBox
                              label="To"
                              amount = {convertedAmount}
                              onCurrencyChange={(currency) => setTo(currency)}
                              currencyOptions={options}
                              currencyType={to}
                              amountDisable
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()} 
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

  export default App
