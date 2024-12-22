import { createContext, Dispatch, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import './styles/globals.css'

type ContextType = {
  theme: string;
  setTheme: Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ContextType | null>(null)

function App() {

  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
    <div className={` ${theme}`}>
      <Header />
      <Main />
      <Footer />
    </div>
    </ThemeContext.Provider>
  )
}

export default App
