import { useForm } from "react-hook-form"
import { useContext, useState } from "react"
import UserContext from '../../../../contexts/UserContext';
import { Navigate, useNavigate } from "react-router-dom";
import '../assets/App.css'

export default function ScreenLogin() {
    const form = useForm()
    const { register, handleSubmit, formState: { errors } } = form
    const { handleLogin } = useContext(UserContext)
    const [errorLogin, setErrorLogin] = useState()
    const navigate = useNavigate()

    async function onSubmit(data) {
        const { email, senha } = data
        setErrorLogin("")
        try {
            await handleLogin(email, senha)
            navigate("/painel")
        } catch (error) {
            setErrorLogin(error.message)
        }
    }

    const validaEmail = {
        required: {
            value: true,
            message: "Email é obrigatório"
        }
    }

    const validaSenha = {
        required: {
            value: true,
            message: "Senha é obrigatório"
        },
        minLenght: {
            value: 8,
            message: "Senha deve ter no minimo 8 caractere"
        }
    }

    return (
        <div className="col-md-3 mt-5 mb-5 m-auto">
            <div className="login-box border-5 rounded shadow p-3 mb-5 bg-white rounded">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {errorLogin && <p className="erro">{errorLogin}</p>}
                    <div className="form-group mt-3">
                        <label htmlFor="email" className="text-left">Email:</label>
                        <input type="text" name="username" className="form-control" id="email"
                        {...register("email", validaEmail)} />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="username">Senha:</label>
                        <input type="password" name="password" className="form-control" id="senha" 
                        {...register("senha", validaSenha)} />
                        {errors.senha && <p>{errors.senha.message}</p>}
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="manter-conect" />
                        <label className="form-check-label" for="manter-conect">Mantenha-me conectado</label>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary mt-3 mb-3 w-60 text-center" id="bt-entrar">Entrar</button>
                    </div>
                    <div className="text-center">
                        <p>Não possui cadastro?</p>
                        <button type="submit" className="btn btn-primary mb-4 w-50 text-center" id="bt-cad">Cadastre-se</button>
                    </div>
                </form>
            </div>
        </div>
    );
}