import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'
import AppRouter from './components/AppRouter';
import Loader from './components/Loader';

function App() {

  const loading = false;

  if (loading){
    return <Loader/>
  }

  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
