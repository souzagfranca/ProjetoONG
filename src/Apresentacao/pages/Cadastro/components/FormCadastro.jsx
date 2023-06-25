import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import UserContext from '../../../../contexts/UserContext'
import TaskContext from '../../../../contexts/TaskContext'
import { useParams } from "react-router"
import './cadastro.css'

export default function FormCadastro() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { handleLogin } = useContext(UserContext)
    const { insereCadastro } = useContext(TaskContext)
    const { criarLogin } = useContext(UserContext)
    const navigate = useNavigate()
    const { planos } = useParams()
    const [errorPassword, setErrorPassword] = useState('')


    const validaEmail = {
        required: {
            value: true,
            message: 'E-mail é obrigatorio'
        }
    }

    const validaName = {
        required: {
            value: true,
            message: 'Seu nome é obrigatorio'
        },
        minLength: {
            value: 5,
            message: "O nome deve ter no minimo 5 caracteres"
        }
    }

    const validaSenha = {
        required: {
            value: true,
            message: 'Senha é obrigatoria'
        },
        minLength: {
            value: 8,
            message: "Senha deve ter no minimo 8 caracteres"
        }
    }

    const validaSenha2 = {
        required: {
            value: true,
            message: 'Senha 2 é obrigatoria'
        },
        minLength: {
            value: 8,
            message: "Senha deve ter no minimo 8 caracteres"
        }
    }

    const validaDDD = {
        required: {
            value: true,
            message: 'DDD é obrigatorio'
        },
        minLength: {
            value: 2,
            message: "DDD deve conter 2 caracteres"
        },
        maxLength: {
            value: 2,
            message: "DDD deve conter 2 caracteres"
        }
    }

    const validaTel = {
        required: {
            value: true,
            message: 'Telefone é obrigatorio'
        },
        minLength: {
            value: 8,
            message: "Telefone deve conter no minimo 8 caracteres"
        },
    }

    const validaPlano = {
        required: {
            value: true,
            message: 'O plano é obrigatorio'
        },
    }

    async function onSubmit(data) {
        const { password2, ...dados } = data
        const { email, password } = data

        if (password2 !== dados.password) {
            setErrorPassword("Senhas não correspondem, favor verificar!")
            return
        }

        try {
            await insereCadastro(dados)
            await criarLogin(email, password)
            navigate('/painel')
        } catch (error) {
            console.log('Não foi possível cadastrar o usuário', error.message)
        }
    }

    return (
        <div className="row" id="cadastroArea">
            <div className="col-12 col-lg-6 d-flex" id="cadastroTexto">
                <div className="m-auto">
                    <div className="container text-white p-3">
                        <h1>O sistema que trará para sua empresa:</h1>
                        <ul className='mt-5'>
                            <li className='my-2 fs-2 fw-bold'>Facilidade;</li>
                            <li className='my-2 fs-2 fw-bold'>Praticidade;</li>
                            <li className='my-2 fs-2 fw-bold'>Organização;</li>
                            <li className='my-2 fs-2 fw-bold'>Planejamento;</li>
                            <li className='my-2 fs-2 fw-bold'>Metas Solidas;</li>
                            <li className='my-2 fs-2 fw-bold'>Relatorios completos;</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-6" id="cadastroForm">
                <div className="container">
                    <div className="col-md-9 col-11 mt-5 mb-5 m-auto">
                        <h2 className='my-3 fw-bold text-verde-escuro fs-1'>Inscreva-se agora !</h2>
                        <div id='card-cadastro' className="login-box border-5 rounded shadow p-3 mb-5 rounded text-white p-4">

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group my-3">
                                    <label htmlFor="name" className="text-left">Nome completo:</label>
                                    <input type="text" id="name" name="name" {...register("name", validaName)} className="form-control" placeholder='Jõao da silva ribeiro' />
                                    <input type="text" name="tipo" defaultValue="usuario" className='d-none' {...register("tipo")} />
                                    {errors.name && <p>{errors.name.message}</p>}
                                </div>

                                <div className="form-group my-3">
                                    <label htmlFor="email" className="text-left">Email:</label>
                                    <input type="email" name="email" id="email" {...register("email", validaEmail)} className="form-control" placeholder='joaoribeiro@gmail.com' />
                                    {errors.email && <p>{errors.email.message}</p>}
                                </div>

                                <div className="form-group my-3">
                                    <label htmlFor="password">Senha:</label>
                                    <input type="password" name="password" id="password" {...register("password", validaSenha)} className="form-control" placeholder='********' />
                                    {errors.password && <p>{errors.password.message}</p>}
                                </div>

                                <div className="form-group my-3">
                                    <label htmlFor="password2">Confirme sua senha:</label>
                                    <input type="password" name="password2" id="password2" {...register("password2", validaSenha2)} className="form-control" placeholder='********' />
                                    {errors.password2 && <p>{errors.password2.message}</p>}
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group my-3">
                                            <label htmlFor="tel">Telefone:</label>
                                            <input type="number" name="tel" id="tel" {...register("tel", validaTel)} className="form-control" placeholder='9 9999-9999' />
                                            {errors.tel && <p>{errors.tel.message}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group my-3">
                                        <label htmlFor="tel">Plano:</label>
                                        <select name="plano" className='form-control' {...register("plano", validaPlano)} defaultValue={planos} id="plano">
                                            <option value="null">Selecione um plano</option>
                                            <option value="mensal">Mensal - R$ 159</option>
                                            <option value="trimestral">Trimestral - R$ 139</option>
                                            <option value="semestral">Semestral - R$ 119</option>
                                            <option value="anual">Anual - R$ 109</option>
                                        </select>
                                        {errors.plano && <p>{errors.plano.message}</p>}
                                    </div>
                                </div>
                                <div className="text-center">
                                    {errorPassword && <p>{errorPassword}</p>}
                                    <button type="submit" className="btn btn-primary my-5 py-3 w-75 text-center" id="bt-cad">Continuar <i className="bi bi-arrow-right ms-3"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}