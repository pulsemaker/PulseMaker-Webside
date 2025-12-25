import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { WalletContextProvider } from './context/WalletContextProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WalletContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WalletContextProvider>
  </StrictMode>,
)
