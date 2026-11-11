import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';
import './styles/motion.css';
import './styles/layout.css';
import './styles/legal-modal.css';
import './styles/sections.css';
import './styles/booking.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element #root fehlt in index.html');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
