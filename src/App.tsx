import './App.css'
import Content from './components/Content';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInSide from './pages/SignInSide';

function App() {

  return (
    <>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<SignInSide />} />
            <Route path="/" element={<Content />} />
          </Routes>
        </BrowserRouter>
      </StyledEngineProvider>
    </>
  )
}

export default App
