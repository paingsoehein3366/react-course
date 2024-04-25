import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import CardList from './components/CardList';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
    path: "/card",
    element:<CardList/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RouterProvider router={router}></RouterProvider>);
