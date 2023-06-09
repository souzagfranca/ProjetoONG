import Content from '../components/Content'
import { useContext } from 'react'
import UserContext from '../../../contexts/UserContext'

export default function Perfil() {
    const { userName } = useContext(UserContext)
    return (
        <Content>
            <h2>Perfil de {userName}</h2>
        </Content >
    );
}