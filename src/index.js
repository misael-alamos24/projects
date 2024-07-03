import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {router} from './router/index';
import { RouterProvider } from 'react-router-dom';
// import App from './App';

// const puppeteer = require('puppeteer');

// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://sudo-qubs-mu.vercel.app', {
//       waitUntil: 'domcontentloaded',
//     });
//     await page.screenshot({
//       path: 'hn.png',
//     });
    
//     await browser.close();
// })();


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);

document.getElementById('title-html').innerText = 'Santiago - Desarrollador Web Full Stack';


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
