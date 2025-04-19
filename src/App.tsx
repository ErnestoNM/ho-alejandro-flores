import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
//import ContactFormConfirmation from './pages/ContactFormConfirmation';
import './App.css';

const App = () => {
  return (
    <div id='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
{/*           <Route path='/email-confirmation' element={<ContactFormConfirmation />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
