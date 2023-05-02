import './cadastro.css'

export default function FormCadastro() {
    return (
        <div id="cadastroArea" className="row">
            <div id="cadastroTexto" className="col-md-6 d-flex">
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

            <div className="col-md-6" id="cadastroForm">
                <div className="container">
                    <div className="col-md-8 mt-5 mb-5 m-auto">
                        <h2 className='my-3 fw-bold text-verde-escuro fs-1'>Inscreva-se agora !</h2>
                        <div className="login-box border-5 rounded shadow p-3 mb-5 rounded text-white p-4">

                            <form>
                                <div className="form-group my-3">
                                    <label htmlFor="name" className="text-left">Nome completo:</label>
                                    <input type="text" name="name" className="form-control" placeholder='Jõao da silva ribeiro' />
                                </div>

                                <div className="form-group my-3">
                                    <label htmlFor="email" className="text-left">Email:</label>
                                    <input type="email" name="email" className="form-control" placeholder='joaoribeiro@gmail.com' />
                                </div>

                                <div className="form-group my-3">
                                    <label htmlFor="password">Senha:</label>
                                    <input type="password" name="password" className="form-control" placeholder='********' />
                                </div>

                                <div className="form-group my-3">
                                    <label htmlFor="password2">Confirme sua senha:</label>
                                    <input type="password" name="password2" className="form-control" placeholder='********' />
                                </div>

                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group my-3">
                                            <label htmlFor="password2">DDD:</label>
                                            <input type="password" name="password2" className="form-control" placeholder='(61)' />
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="form-group my-3">
                                            <label htmlFor="password2">Telefone:</label>
                                            <input type="password" name="password2" className="form-control" placeholder='9 9999-9999' />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary my-5 py-3 w-75 text-center" id="bt-cad">Continuar <i class="bi bi-arrow-right ms-3"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}