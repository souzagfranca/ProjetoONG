
import { Link } from 'react-router-dom';
import NavBar from '../Apresentacao/components/NavBar'
import Footer from '../Apresentacao/components/Footer'
import ScreenLogin from './components.jsx/ScreenLogin';

function App() {
  return (
    <div>
      <NavBar SobreNos="sim" Planos="sim" Contato="sim"/>
      <ScreenLogin/>
      <Footer/>
    </div>
  )
}

export default App
