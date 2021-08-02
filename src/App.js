import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'
import AppRouter from './components/AppRouter';
import Loader from './components/Loader';

import 'bulma/css/bulma.min.css';

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
