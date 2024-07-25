import { NextUIProvider } from '@nextui-org/react'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Experience from './pages/Experience'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const menuItems = ['Home', 'About', 'Experience', 'Projects']

const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout menuItems={menuItems} />,
    children: [{
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/experience",
      element: <Experience />
    },
    {
      path: "/projects",
      element: <Projects />
    },
    {
      path: "/contact",
      element: <Contact />
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
