import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/inter';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [isNavbarOpened, setisNavbarOpened] = useState(true);

  return (
    <BrowserRouter>

      <Navbar
        isNavbarOpened={isNavbarOpened}
        setisNavbarOpened={setisNavbarOpened}
      />

      <Header
        setisNavbarOpened={setisNavbarOpened}
      />

      <Router />

      <ToastContainer />

    </BrowserRouter>
  );
}

export default App;
