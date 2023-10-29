

import React, { useState } from 'react';
function Calculator(){
  const [income , setIncome] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [expenses, setExpenses] = useState('');
  const [showValues, setShowValues] = useState(false);

  const handleIncomeChange = (event) => {
    setIncome(event.target.value);
  };
  const handlePurchasePriceChange = (event) => {
    setPurchasePrice(event.target.value);
  };
  const handleSellingPriceChange = (event) => {
    setSellingPrice(event.target.value);
  };

  const handleExpensesChange = (event) => {
    setExpenses(event.target.value);
  };
  const calculateGainAmount = () => {
    const purchase = parseFloat(purchasePrice) || 0;
    const sale = parseFloat(sellingPrice) || 0;
    const expense = parseFloat(expenses) || 0;
    const ans=sale - purchase - expense;
    return ans;
  };

  let message = '';
  var taxpay=0.0;

  if (income === "$0 - $18,200") {
    message = "0%";
  } else if (income === "$18,201 - $45,000") {
    message = "Nil + 19% of excess over $18,200";
    taxpay= (calculateGainAmount()*0.19);
  }
  else if (income === "$45,001 - $120,000") {
    message = "$5,092 + 32.5% of excess over $45,000";
    taxpay= (calculateGainAmount()*0.325);
  }
  else if (income === "$120,001 - $180,000") {
    message = "$29,467 + 37% of excess over $120,000";
    taxpay= (calculateGainAmount()*0.37);
  }
  else if (income === "$180,000 +") {
    message = "$51,667 + 45% of excess over $180,000";
    taxpay= (calculateGainAmount()*0.45);
  }


    return(
     
     <div className='main' style={{display:'flex'}}>
        <div className='left'>
          <div className='calculator'>
               <div className='insideCalculator'>
                   <h1>Free Crypto Tax Calculator Australia</h1>
                   <div className='calc' style={{marginTop: '25px'}}>
                    <form>
                        <div className='first'style={{ display: 'flex' }}>
                        <div>
                         <label style={{ marginRight: '10px', fontFamily:'inter' , fontWeight: 'bold' }}>Financial year</label>  
                         <select style={{width :'230px', height:'40px', borderRadius:'5px', backgroundColor:' #EFF2F5', border: 'none'}}>  
                         <option>FY 2023-24</option>  
                         <option>FY 2022-23</option>   
                         </select>     
                        </div>
                        <div>
                         
                         <label style={{ marginRight: '5px', fontFamily:'inter' , fontWeight: 'bold' }}>Country</label>  
                         <select style={{width :'225px', height:'40px', borderRadius:'5px' , backgroundColor:' #EFF2F5', border: 'none'}}>  
                         <option> Australia</option>  
                         <option>United Kingdom</option>   
                         </select>   
                        </div>
                       
                        </div >  
                       
                        <div className='second' style={{display:'flex' , marginTop:'25px'}}>
                         <div ><span style={{fontFamily:'inter' , fontWeight: 'bold'}}>Enter Purchase Price of Crypto</span>
                         <input type='number' style={{width:'335px' , height:'53px' , borderRadius:'5px', backgroundColor:' #EFF2F5' ,border: 'none'}} value={purchasePrice} onChange={handlePurchasePriceChange}></input></div>
                         <div><span style={{fontFamily:'inter' , fontWeight: 'bold'}}>Enter Sell Price of Crypto</span>
                         <input type='number' style={{width:'280px' , height:'53px', borderRadius:'5px', backgroundColor:' #EFF2F5' , border: 'none'}}  value={sellingPrice} onChange={handleSellingPriceChange}></input></div>
                         
                        </div>
                        <div className='third' style={{display:'flex' , marginTop:'25px'}}>
                       
                         <div>
                          <div style={{ display: 'flex', alignItems: 'center' , marginTop:'2px' , fontFamily:'inter' , fontWeight: 'bold' }}>Enter Your Expense</div>
                          <input type='number' style={{width:'335px' , height:'53px' , borderRadius:'5px', backgroundColor:' #EFF2F5' , border: 'none'}} value={expenses} onChange={handleExpensesChange}></input>
                         </div>
                         <div>
                          <div style={{fontFamily:'inter' , fontWeight: 'bold'}}>Investment Type</div>
                          <div style={{display:'flex'}}><div style={{height:'50px' , width:'130px' , borderRadius:'5px', backgroundColor:' #EFF2F5' , border: 'none'}}><label style={{ display: 'flex', alignItems: 'center'  , marginTop:'2px' }}><span style={{fontFamily:'inter' , fontWeight: 'bold'}}>Short term</span> <input type='checkbox' style={{ marginLeft: '5px', width: '30px', height: '30px' ,marginTop:'12px' , border: 'none' }} /></label></div>
                          <div style={{height:'50px',  width:'130px' , marginLeft: '27px' , borderRadius:'5px', backgroundColor:' #EFF2F5' , border: 'none'}}><label style={{ display: 'flex', alignItems: 'center' , marginTop:'2px'}}><span style={{fontFamily:'inter' , fontWeight: 'bold'}}>Long term</span> <input type='checkbox' style={{ marginLeft: '5px' ,  width: '30px', height: '30px' ,marginTop:'12px' , border: 'none'}} checked={showValues} onChange={() => setShowValues(!showValues)} /></label></div></div>
                         </div>
                         
                        </div>
                        <div className='fourth'  style={{display:'flex' , marginTop:'50px'}}>
                         <div>
                          <div style={{fontFamily:'inter' , fontWeight: 'bold'}}>Select Your Annual Income</div>
                          <div>
                          <select style={{width :'335px', height:'53px', borderRadius:'5px', backgroundColor:' #EFF2F5', border: 'none'}}  value={income} onChange={handleIncomeChange}>  
                          <option>Select</option>
                         <option><span style={{fontFamily:'inter' , fontWeight: 'bold'}}>$0 - $18,200</span></option>  
                         <option><span style={{fontFamily:'inter' , fontWeight: 'bold'}}>$18,201 - $45,000</span></option> 
                         <option><span style={{fontFamily:'inter' , fontWeight: 'bold'}}>$45,001 - $120,000</span></option> 
                         <option><span style={{fontFamily:'inter' , fontWeight: 'bold'}}>$120,001 - $180,000</span></option> 
                         <option><span style={{fontFamily:'inter' , fontWeight: 'bold'}}>$180,000 +</span></option>   
                         </select>  
                          </div>
                        
                         </div>
                         <div>
                          <div><span style={{fontFamily:'inter' , fontWeight: 'bold'}}>Tax Rate</span></div>
                          <div style={{fontFamily:'inter' , fontWeight: 'bold'}}>{message}</div>
                         </div>
                        </div>
                        <div className='fifth' style={{display:'flex' , marginTop:'50px'}}>
                          <div>
                        <div><span style={{fontFamily:'inter' , fontWeight: 'bold'}}>Capital Gain Amount</span></div>
                        <div style={{height:'50px' , width:'333px' , borderRadius:'5px', backgroundColor:' #EFF2F5', textAlign:'center'}}>{showValues ? `$${calculateGainAmount()}` : '---'}</div>
                        </div>
                        <div>
                        <div><span style={{fontFamily:'inter' , fontWeight: 'bold'}}>Discount For long term gain</span></div>
                        <div style={{height:'50px' , width:'295px' , borderRadius:'5px', backgroundColor:' #EFF2F5', textAlign:'center'}}>{showValues ? `$${calculateGainAmount()/2}` : '---'}</div>
                        </div>
                        </div>
                        <div className='sixth' style={{display:'flex' , marginTop:'30px'}}>
                        <div style={{height:'80px' , width:'333px' , borderRadius:'5px', backgroundColor:' #EBF9F4'}}><div style={{textAlign:'center'}}><div><span style={{fontFamily:'inter' , fontWeight: 'bold'}}>Net Capital gain Tax Amount</span></div><div style={{color:'green' , fontSize: '20px', fontWeight: 'bold' }}>{showValues ? `$${calculateGainAmount()/2}` : `$${calculateGainAmount()}`}</div></div></div>
                        <div style={{height:'80px' , width:'295px' , borderRadius:'5px', backgroundColor:' #EBF2FF'}}><div style={{textAlign:'center'}}><div><span style={{fontFamily:'inter' , fontWeight: 'bold'}}>The Tax you need to pay*</span></div><div style={{color:'blue' , fontSize: '20px', fontWeight: 'bold' }}>{showValues ? `$${taxpay}` : `$${2*taxpay}`}</div></div></div>


                        </div>
                        
                    </form>                    
                   </div>
               </div>
          </div>
          <div className='faq'>
          <h1>hello I amdee,ngffrgfjbgfrhjgnscbdb</h1>
          </div> 
          

         </div>
         
     </div>
    );
}
export default Calculator;