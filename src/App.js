import { createContext, useState,useEffect } from "react";
import "./App.css";
import Balance from "./components/Balance";
import Header from "./components/Header";
import History from "./components/History";
import Transcation from "./components/Transcation";

export const AppContext = createContext(null);
const  expenseArray = [], incomeArray = [];
const reducer = (acc,curr) => acc + curr;
function App() {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [history, setHistory] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();

  const handleSubmit = () => {
    // console.log(text,amount);
    let intAmount = parseInt(amount);
    if (text === "" || amount === "") {
      alert("invalid Inputs");
      return;
    }
    if (intAmount > 0) {
      setBalance(intAmount + balance)
      incomeArray.push(intAmount)
      setIncome(incomeArray.reduce(reducer));
    }
    else{
      setBalance(balance + intAmount)
      expenseArray.push(intAmount)
      setExpense(-(expenseArray.reduce(reducer)));
    }
    setHistory([...history, { text: text, amount: amount }]);
    setText("");
    setAmount("");
  };

  const UseEffectCleanup = () => {
    const [size,setSize] = useState(window.innerWidth)
  
    const checksize = () => {
      setSize(window.innerWidth)
    }
  
     useEffect (() => {
      // window.addEventListener("resize", checksize)
      return (
        window.addEventListener("resize", checksize)
      )
    })
  
  };
  

  return (
    <div className="App">
      <div className="app-container">
      <AppContext.Provider
        value={{
          balance,
          income,
          expense,
          history,
          text,
          setText,
          amount,
          setAmount,
          handleSubmit,
        }}
      >
        <Header />
        <hr></hr>
        <Balance />
        <hr></hr>
        <History />
        <hr></hr>
        <Transcation />
        <hr></hr>
      </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
