import Content from '../components/Content'
import { useContext } from 'react'
import UserContext from '../../../contexts/UserContext'

export default function Perfil() {
    const { userName } = useContext(UserContext)
    return (
        <Content>
            <h1>Perfil de {userName}</h1>
        </Content >
    );
}