import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'

function App() {
  const DUMMY_EXPENSES = [
    { id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 27) },
    { id: 'e2', title: 'Car Insurance 2', amount: 584.88, date: new Date(2021, 4, 14) },
    { id: 'e3', title: 'Car Insurance 3', amount: 219.67, date: new Date(2021, 2, 7) },
    { id: 'e4', title: 'Car Insurance 4', amount: 219.67, date: new Date(2020, 9, 7) }
  ];

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    console.log(expense)
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div >
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h2>hello</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
