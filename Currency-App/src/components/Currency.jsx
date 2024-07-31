import React, { useState } from 'react'
import '../css/currency.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa"; 
import { TbBackground } from 'react-icons/tb';
import axios from 'axios';
let BASE_URL='https://api.freecurrencyapi.com/v1/latest';
let API_KEY= "api key";


function Currency() {

  const [amount, setAmount]= useState(0);
  const [fromCurrency , setFromCurreny]=useState('USD');
  const [toCurrency , setToCurreny]= useState('TRY');
  const [result , setResult ]= useState(0);

  const exchange= async()=>{
   // console.log(amount);
   // console.log(fromCurrency);
    //console.log(toCurrency);
   // console.log(result);

   const response =await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
   setResult(((response.data.data[toCurrency])*amount).toFixed(2));
  }
  return (
    <div className='currency-div'>
    <div className='text' style={{color:'white',backgroundColor:'rgba(0, 0, 0, 0.750)',textAlign:'center'}}>DÖVİZ KURU UYGULAMASI</div>
    <div style={{marginTop:'20px'}}>
    <input value={amount} onChange={(e) =>setAmount(e.target.value)} type="number" className='amount'/>
    <select onChange={(e)=>setFromCurreny(e.target.value)} className='from-currency-option' >
        <option>USD</option>
        <option>TRY</option>
        <option>EUR</option>
    </select>
    <FaRegArrowAltCircleRight style={{fontSize:'25px',marginRight:"10px" }}/>
    <select onChange={(e)=>setToCurreny(e.target.value)} className='to-currency-option'>
        <option>TRY</option>
        <option>USD</option>
        <option>EUR</option>
        </select>

    <input value={result} onChange={(e)=>setResult(e.target.value)} type="number" className='result'/> 
    </div>

    <div  style={{marginTop:'20px'}}>
      <button className='btn'  onClick={exchange} >
        ÇEVİR
      </button>
    </div>

    </div>
   
  )
}

export default Currency