import { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import AccountCreatePage from './components/AccountCreatePage';
import './index.css';

const ACCOUNT_CREATED_KEY = 'accountCreated';

function App() {
  const [accountCreated, setAccountCreated] = useState<boolean | null>(null);

  useEffect(() => {
    setAccountCreated(localStorage.getItem(ACCOUNT_CREATED_KEY) === 'true');
  }, []);

  const handleAccountComplete = () => {
    setAccountCreated(true);
  };

  if (accountCreated === null) {
    return (
      <div className="w-full h-screen" style={{ background: 'var(--color-neutral-50)' }} />
    );
  }

  if (!accountCreated) {
    return <AccountCreatePage onComplete={handleAccountComplete} />;
  }

  return (
    <div className="w-full h-screen">
      <Dashboard />
    </div>
  );
}

export default App;
