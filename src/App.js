import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';

const Layout = () =>{
  return(
    <div>
      <Nav/>
      <Outlet/>
    </div>
  )
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
