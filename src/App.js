import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<StarshipList/>}/>
        <Route path='/:id' element={<StarshipDetails />} />
      </Routes>
    </>
  );
}

export default App;
