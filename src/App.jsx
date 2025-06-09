import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import Header from './Layout/Header';
import Information from './components/Information';
import MainPage from './outlet/MainPage';
import ClothingPage from './outlet/ClothingPage';
import ShoesPage from './outlet/ShoesPage';
import AdminPage from './outlet/AdminPage';

function App() {

  function HeadOn(){
      const location = useLocation();
      const adminOn = location.pathname === '/AdminPage';
      return (
      <>
      { !adminOn && <Header/>}
      { !adminOn &&  <Information/>}
      </>
      )
  }
  

  return (
    <BrowserRouter>
      <HeadOn/>
      <Routes>
        <Route path='/AdminPage' element={<AdminPage/>}/>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/ClothingPage" element={<ClothingPage/>}/>
        <Route path='/ShoesPage' element={<ShoesPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
