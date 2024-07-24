import { NextUIProvider } from '@nextui-org/react'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Experience from './pages/Experience'

const menuItems = ['About', 'Experience', 'Projects', 'Contact']

const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout menuItems={menuItems} />,
    children: [{
      path: "/",
      element: <Home />
    },
    {
      path: "/experience",
      element: <Experience />
    },
    {
      path: "/projects",
      element: <div>Resume</div>
    },
    {
      path: "/contact",
      element: <div>Work</div>
    }],
  },
])

function App() {
  return (
    <NextUIProvider>
      <ThemeProvider>
        <RouterProvider router={router} ></RouterProvider>
      </ThemeProvider>
    </NextUIProvider>
  )
}

export default App
