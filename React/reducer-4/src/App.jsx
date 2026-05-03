import { useReducer } from 'react';

// 1. Initial State
const initialState = { balance: 0, transactionCount: 0 };

// 2. The Reducer Function
const reducer = (state, action) => {

  switch (action.type) {

    case 'DEPOSIT':
      return {
        balance: state.balance + action.payload,
        transactionCount: state.transactionCount + 1
      };

    case 'WITHDRAW':
      // Prevent withdrawing if there isn't enough money
      if (state.balance < action.payload) {
        alert("Insufficient funds!");
        return state;
      }
      return {
        balance: state.balance - action.payload,
        transactionCount: state.transactionCount + 1
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

function App() {
  // 3. Initialize the Hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Bank of React</h1>

      {/* 4. Display the State */}
      <h2>Current Balance: ${state.balance}</h2>
      <p>Total Transactions: {state.transactionCount}</p>

      {/* 5. Dispatch Actions from the UI */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
        <button onClick={() => dispatch({ type: 'DEPOSIT', payload: 10 })}>
          Deposit $10
        </button>

        <button onClick={() => dispatch({ type: 'DEPOSIT', payload: 50 })}>
          Deposit $50
        </button>

        <button onClick={() => dispatch({ type: 'WITHDRAW', payload: 10 })}>
          Withdraw $10
        </button>
      </div>

      <button
        onClick={() => dispatch({ type: 'RESET' })}
        style={{ marginTop: '20px', backgroundColor: 'red', color: 'white' }}>
        Reset Account
      </button>
    </div>
  );
}

export default App;