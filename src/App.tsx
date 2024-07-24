import { NextUIProvider } from '@nextui-org/react'
import './App.css'
import { Navigator } from './components/Navigator'
import { ThemeProvider } from './context/ThemeContext'
import ContentWork from './components/ContentWork'

function App() {
  const menuItems = ['Home','About', 'Resume', 'Work']
  return (
    <NextUIProvider>
      <ThemeProvider>
        <div className={`flex flex-col min-h-screen`}>
          <Navigator menuItems={menuItems} />
          <ContentWork></ContentWork>
        </div>
      </ThemeProvider>
    </NextUIProvider>
  )
}

export default App
