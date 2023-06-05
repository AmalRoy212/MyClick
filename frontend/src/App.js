import './App.css';
import { ToastContainer } from 'react-toastify';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Container style={{
      margin:'0',padding:'0',maxWidth:'100%',
    }}>
        <ToastContainer /> 
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
