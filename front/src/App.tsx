import { Routes, Route } from 'react-router-dom';
import { Code, CreateOffer, Login, Profile, SignIn } from './pages';
import { Exchange } from './pages/Exchage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/profile" element={<Profile />}  />
      <Route path="/code" element={<Code />} />
      <Route path='/create-offer' element={<CreateOffer />} />
      <Route path="/exchange" element={<Exchange />} />
    </Routes>
  )
}

export default App
