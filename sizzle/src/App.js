import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { Logo } from './Logo';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Body from './components/body'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Router>
        <Routes>
          <Route path="*" element={ <Body /> } />
          <Route path="/signup" element={ <Signup /> } />
          <Route path="/login" element={ <Login /> } />
        </Routes>
      </Router>
      <Footer />

      
    </ChakraProvider>
  );
}

export default App;
