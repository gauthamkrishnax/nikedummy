import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Error from './components/Error/Error';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/:category" element={<Main />} />
        <Route path="/:category/:price" element={<Main />} />
      </Routes>
    </div >
  );
}

export default App;
