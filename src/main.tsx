import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/error-page';
import LazyReact from './pages/LazyReact';
import LazyNative from './pages/LazyNative';
import NoLazy from './pages/NoLazy';
import './index.css';

const items = 15;

const router = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <ErrorPage /> },
  { path: '/lazy-react', element: <LazyReact items={items} /> },
  { path: '/lazy-native', element: <LazyNative items={items} /> },
  { path: '/no-lazy', element: <NoLazy items={items} /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
