import {  useEffect } from 'react';




export default function useDarkMode(darkMode) {
    
  useEffect ( () => {
      
    if (darkMode==true){document.body.classList.add("dark-mode")} 
    else {document.body.classList.remove("dark-mode")}
  }, [darkMode])

}




    
