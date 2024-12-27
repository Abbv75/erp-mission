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
import { Container } from '@mui/joy';

function App() {
  const [isNavbarOpened, setisNavbarOpened] = useState(false);

  return (
    <BrowserRouter>

      <Navbar
        isNavbarOpened={isNavbarOpened}
        setisNavbarOpened={setisNavbarOpened}
      />

      <Header
        setisNavbarOpened={setisNavbarOpened}
      />

      <Container
        sx={{
          pt: 2
        }}
      >
        <Router />
      </Container>

      <ToastContainer />

    </BrowserRouter>
  );
}

export default App;
