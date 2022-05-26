import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'
 import { ThemeProvider, createTheme } from '@mui/material/styles';
 import { Paper,Switch } from '@mui/material';


function App() {
  const [darkmode , setdarkmode]= useState(false)
  const darkTheme = createTheme({
    palette: {
 mode: darkmode ? 'dark':'light',
    },
  });
 
    return (
      <ThemeProvider theme={darkTheme}>
      <Paper style={{height:"100vh"}}>
      
     
        <main>toggle for dark/light mode matrial ui </main>
        <Switch
      checked={darkmode}
      onChange={()=>setdarkmode(!darkmode)}
      
    />
      </Paper>
      </ThemeProvider>
    );
}

export default App
