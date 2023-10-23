import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import EmailList from './components/EmailList'
import EmailBody from './components/EmailBody'
import { Provider } from 'react-redux'
import store from './utils/emailStore'

const App = () => {
  const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <EmailList/>
    },
    {
        path : "/emailitem/:id",
        element : <EmailBody/>,
    },
])
return (
  <Provider store={store}>
<div>
    <RouterProvider router={appRouter}/>
</div>
</Provider>
)
}

export default App