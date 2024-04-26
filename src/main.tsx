import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import CardList from './components/MenuList';
import AppProvider from './context/Context';
import './index.css';
import Router from './routers/Routers';


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <AppProvider>
    <Router/>
  </AppProvider>
);
