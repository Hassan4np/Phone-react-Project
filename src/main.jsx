import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import MyBrowser from './Root/Roots.jsx'
const Globaldata = createContext(null)


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Globaldata.Provider value={"hassan ali"}>
      <RouterProvider router={MyBrowser} />
    </Globaldata.Provider>
  </React.StrictMode>

)
export{Globaldata}