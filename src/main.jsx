import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Seller from './seller_components/Seller.jsx'
// import Store from './seller_components/Store.jsx'
// import Profile from './seller_components/Profile.jsx'
import { Provider } from 'react-redux'
import appStore from './store/store.js'
// import Transactions from './seller_components/Transactions.jsx'
import Buyer from './buyer_components/Buyer.jsx'
// import Notifications from './seller_components/Notifications.jsx'
// import Documents from './seller_components/Documents.jsx'
// import Task from './seller_components/Task.jsx'
// import Activity from './seller_components/Activity.jsx'
// import BuyerTransactions from './buyer_components/BuyerTransactions.jsx'
// import BuyerProfile from './buyer_components/BuyerProfile.jsx'

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { lazy, Suspense } from 'react';

const Store = lazy(() => import("./seller_components/Store.jsx"));
const Transactions = lazy(() => import("./seller_components/Transactions.jsx"));
const Task  = lazy(() => import("./seller_components/Task.jsx"));
const Activity = lazy(() => import("./seller_components/Activity.jsx"));
const Notifications  = lazy(() => import("./seller_components/Notifications.jsx"));
const Documents = lazy(() => import("./seller_components/Documents.jsx"));
const Profile = lazy(() => import("./seller_components/Profile.jsx"));
const BuyerTransactions = lazy(() => import("./buyer_components/BuyerTransactions.jsx"));
const BuyerProfile = lazy(() => import("./buyer_components/BuyerProfile.jsx"));


const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App />
  },
  {
    path : "/seller",
    element : <Seller />,
    children : [
      {
        path : "store",
        element : <Suspense fallback={<div>Loading Products...</div>}><Store /></Suspense>
      },
      {
        path : "transactions",
        element : <Suspense fallback={<div>Loading...</div>}><Transactions /></Suspense>
      },
      {
        path : "task",
        element : <Suspense fallback={<div>Loading...</div>}><Task /></Suspense>
      },
      {
        path : "activity",
        element : <Suspense fallback={<div>Loading...</div>}><Activity /></Suspense>
      },
      {
        path : "notifications",
        element : <Suspense fallback={<div>Loading...</div>}><Notifications /></Suspense>
      },
      {
        path : "documents",
        element : <Suspense fallback={<div>Loading...</div>}><Documents /></Suspense>
      },
      {
        path : "profile",
        element : <Suspense fallback={<div>Loading...</div>}><Profile /></Suspense>
      },
    ],
  },
  {
    path : "/buyer",
    element : <Buyer />,
    children : [
      {
        path : "store",
        element : <Suspense fallback={<div>Loading...</div>}><Store /></Suspense>
      },
      {
        path : "buyerTransactions",
        element : <Suspense fallback={<div>Loading...</div>}><BuyerTransactions /></Suspense>
      },
      {
        path : "buyerProfile",
        element : <Suspense fallback={<div>Loading...</div>}><BuyerProfile /></Suspense>
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  
  <Provider store={appStore}>
    <RouterProvider router={appRouter}></RouterProvider>
    <ToastContainer />
  </Provider>
)
