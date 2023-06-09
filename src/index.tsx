import React from 'react';
import ReactDOM from 'react-dom/client';
import './sparkles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  PrevColorsContextProvider, ColorContextProvider,
  KeyColorsContext, KeyColorsContextProvider,
  PrevBoardColorContextProvider, BoardColorsContextProvider, KeyTypeContextProvider
} from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PrevColorsContextProvider>
      <ColorContextProvider>
        <KeyColorsContextProvider>
          <BoardColorsContextProvider>
            <PrevBoardColorContextProvider>
              <KeyTypeContextProvider>
                <App />
              </KeyTypeContextProvider>
            </PrevBoardColorContextProvider>
          </BoardColorsContextProvider>
        </KeyColorsContextProvider>
      </ColorContextProvider>
    </PrevColorsContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();