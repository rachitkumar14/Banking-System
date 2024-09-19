import {  useState } from "react";

function Bank() {
  const [askDeposit, setAskDeposit] = useState(false);
  const [askWithdraw, setAskWithdraw] = useState(false);
  const [amount, setAmount] = useState(0);
  //  const [atm,setAtm]=useState(false);
  const [five,setFive]=useState('')
  const [askFive,setAskFive]=useState(false)
  const [two,setTwo]=useState('')
  const [askTwo,setAskTwo]=useState(false)
  const [one,setOne]=useState('')
  const [askOne,setAskOne]=useState(false)
  const [totalAmount, setTotalAmount] = useState(0);
  const [withdrawAmount,setWithdrawAmount]=useState(0)

  function deposit(e) {
e.preventDefault();
const total=amount+totalAmount;
    setTotalAmount(total);
   
   if(total>10000)
   {
    alert('You can deposit more than 10K Rs. in this Bank Account')
    setTotalAmount(totalAmount);

   }
 
  else if(amount===0)
    {
        alert('Please Deposit the money First')
    }
    
    else{
        alert(`your ${amount} Rs. deposited in the Rachit Bank`);
    }
   
    setAmount(0);

  }
  function twoHundredNotes()
  {
    setAskTwo(true)
    setTwo(withdrawAmount/200)
  }
  function oneHundredNotes()
  {
    setAskOne(true)
    setOne(withdrawAmount/100)
  }
 function fiveHundredNotes()
 {
  setAskFive(true)
  setFive(withdrawAmount/500)

 }
  function withdrawMoney(e)
  {
      e.preventDefault();
     
      if(totalAmount<withdrawAmount)
      {
        alert('Your Account Balance is lesser than Withdrawl Amount')
      }
      else 
      {
        alert(`${withdrawAmount} Rs. debited from your Bank Account`)
         setAskOne(false);
         setAskTwo(false)
         setAskFive(false)
      //  setNotes(withdrawAmount/500);
        // setAtm(true);
        setTotalAmount(totalAmount-withdrawAmount);
       
      }

     
      
  }

  return (
    <div>
      {askDeposit ? (
        ""
      ) : (
        <div>
          <h1>Welcome in the Rachit Bank</h1>
          <h2>Do you want to deposit Money?</h2>
          <button
            onClick={() => {
              setAskDeposit(true);
            }}
          >
            Yes
          </button>
          <button onClick={() => setAskDeposit(false)}>NO</button> <br />
          <br />
        </div>
      )}

      {askDeposit ? (
        <div>
          <label>Enter Amount</label>{" "}
          <input
            type="text"
            placeholder="Enter Amount"
            onChange={(e) => setAmount(parseInt(e.target.value))}
          ></input>
          <br />
          <br />
          <button onClick={deposit}>Deposit</button>
          <br />
          <br />
          <h2>Bank Balance {totalAmount} Rs.</h2>
          
          <br />
          <h1>Do you want to Withdraw money?</h1> <br/> <br/>
          <button onClick={()=>setAskWithdraw(true)}>Yes</button> 
    
          <button onClick={()=>setAskWithdraw(false)}>NO</button>  <br/> <br/>
         {
          askWithdraw?(<div>
          <label>Enter your Amount</label>  <input type="text" onChange={(e)=>setWithdrawAmount(e.target.value)}></input> <br/> <br/>
          <h3>Which type of Note do you Want?</h3>
          <button onClick={()=>fiveHundredNotes()}>500</button>
          {
            askFive?<div>
              
              <h3>You can get {five} Notes of 500</h3>

            </div>:""
          }
          <button onClick={()=>twoHundredNotes()}>200</button>
          {
            askTwo?<div>
              
              <h3>You can get {two} Notes of 500</h3>

            </div>:""
          }
           <button onClick={()=>oneHundredNotes()}>100</button>
          {
            askOne?<div>
              
              <h3>You can get {one} Notes of 100</h3>

            </div>:""
          }
          {/* <button onClick={twoHundredNote}>200</button>
          <button onClick={oneHundredNote}>100</button> */}
          <button onClick={withdrawMoney}>Withraw</button>
         
          </div>):<h1>Thanks for Visiting Us</h1>
         }
          
        </div>
      ) : (
        <h2>Thanks For Contacting us</h2>
      )}
    </div>
  );
}
export default Bank;
