import { Container } from './App.styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page from './components/page/page';

function App() {
  return (
    <Container>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Page/>} />
          </Routes>
        </BrowserRouter>
    </Container>
  );
}

export default App;
