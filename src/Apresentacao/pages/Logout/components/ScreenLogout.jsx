import { Navigate, useNavigate } from "react-router-dom";
import '../assets/App.css'

export default function ScreenLogout() {
    const navigate = useNavigate()
    navigate("/")

    return (
        <>
        </>
    );
}
