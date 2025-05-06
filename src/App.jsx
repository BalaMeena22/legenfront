import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';  

function App() {  
  return (  
    <BrowserRouter>  
      <Routes>  
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/dashboard' element={<Dashboard />} />  
      </Routes>  
    </BrowserRouter>  
  );  
}  

export default App;  