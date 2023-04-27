
import { Link } from 'react-router-dom';
import NavBar from '../Apresentacao/components/NavBar'
import Footer from '../Apresentacao/components/Footer'
import ScreenLogin from './components.jsx/ScreenLogin';

function App() {
  return (
    <div>
      <NavBar/>
      <ScreenLogin/>
      <Footer/>
    </div>
  )
  
}

export default App
