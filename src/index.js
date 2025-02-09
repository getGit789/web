import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './theme/createEmotionCache';
import { setupResizeObserverPolyfill } from './utils/resizeObserverPolyfill';

// Setup ResizeObserver polyfill
setupResizeObserverPolyfill();

const clientSideEmotionCache = createEmotionCache();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CacheProvider value={clientSideEmotionCache}>
      <App />
    </CacheProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// Measure performance
reportWebVitals(({ name, value, id }) => {
  // Send to analytics
  console.log(`Web Vital: ${name} - ${value} (ID: ${id})`);
  // You can send this data to your analytics service
  if (window.gtag) {
    window.gtag('event', name, {
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      metric_id: id,
      metric_value: value,
      metric_delta: 0,
    });
  }
});
