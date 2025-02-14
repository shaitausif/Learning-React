import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseCurrencyinfo from './hooks/UseCurrencyinfo.js'
import {Inputbox} from "./components/index.js"

function App() {
  const [amount, setamount] = useState("")
  const [from, setfrom] = useState('USD')
  const [To, setTo] = useState('INR')
  const [convertedAmount, setconvertedAmount] = useState(0)
  const [enterSubmit, setenterSubmit] = useState(false)


  const currencyInfo = UseCurrencyinfo(from)
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setfrom(To)
    setTo(from)
    
    setamount(0)
  }
  
  
  

  const convert = () => {
    const result = amount * currencyInfo[To];
    setconvertedAmount(parseFloat(result.toFixed(2)))
  }
  


  return (
    <>
     <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage:`url(https://images.pexels.com/photos/6160300/pexels-photo-6160300.jpeg?auto=compress&cs=tinysrgb&w=600)`}}>
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form onSubmit={(e)=>{
              e.preventDefault()
              convert()
            }}>
              <div className='w-full mb-1'>
                <Inputbox
                  label="from"
              
                  amount={amount}
                  onAmountChange={(amount)=>setamount(amount)}
                  onCurrencyChange={(currency)=>{setfrom(currency)}}
                  currencyOptions={options}
                  selectedCurrency={from}


                />
              </div>
              <div className='w-full relative h-0.5'>
                <button
                 className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white bg-blue-600 rounded-md text-white px-2 py-0.5'
                 onClick={()=>{swap()}}>Swap</button>
              </div>
              <div className='w-full mb-1'>
                <Inputbox
                  label="to"
                  amount={convertedAmount}
                  amountDisabled={true}
                  
                  onAmountChange={(amount)=>setconvertedAmount(amount)}
                  onCurrencyChange={(currency)=>{setTo(currency)}}
                  currencyOptions={options}
                  selectedCurrency={To}
                />
              </div>
              <button 
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
              >Convert {from.toUpperCase()} to {To.toUpperCase()}</button>
            </form>
          </div>

        </div>
     </div>
    </>
  )
}

export default App
