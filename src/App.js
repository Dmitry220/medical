import React, { Suspense, useEffect, useState } from 'react';
import './assets/css/font.css';
import './assets/css/Reset.css';
import './App.css';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Page/MainBlock/Main';
import { Contact } from './Components/Page/Contact/Contact';
import { Why } from './Components/Page/Why/Why';
import { Feature } from './Components/Page/Feature/Feature';
import { Footer } from './Components/Footer/Footer';
import { Indicator } from './Components/Indicator/Indicator';
import { GlobalStyles } from "./Components/globalStyles";
import { lightTheme, darkTheme } from "./Components/Themes"
import { ThemeProvider } from 'styled-components'
const Gallery = React.lazy(() => import('./Components/Page/Gallery/Gallery'));

// Hook
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}


function App() {

  const [theme, setTheme] = useLocalStorage("theme",'light');
  const [burgerActive, setBurgerActive] = useState(false)

  const themeToggler = () => theme === 'light' ? setTheme('dark') : setTheme('light')

  useEffect(() => {
		const onScroll = e => {

			let block = document.querySelectorAll(`section`)
      
			block.forEach(s => {
				let posSection = s.getBoundingClientRect().top + window.pageYOffset;
				if (window.pageYOffset > posSection - document.documentElement.clientHeight) {
					s.classList.add('show')
				}
			})	
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, [])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className={"wrapper"}>          
          <Indicator />
          <Header themeToggler={themeToggler} burgerActive={burgerActive} setBurgerActive={setBurgerActive}/>
          <div className="page">
            <Main />
            <Why />
            <Feature />
            <Suspense fallback={<div>Loading...</div>}>
              <Gallery />
            </Suspense>
            <Contact />
          </div>
          <Footer />
        </div>
      </>

    </ThemeProvider >
  );
}

export default App;


