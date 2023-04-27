import '../assets/App.css'

export default function ScreenLogin() {
    return (
        <div className="col-md-3 mt-5 mb-5 m-auto">
            <div className="login-box border-5 rounded shadow p-3 mb-5 bg-white rounded">
                    <form>
                        <div className="form-group mt-3">
                            <label htmlFor="email" className="text-left">Email:</label>
                            <input type="text" name="username" className="form-control" />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="username">Senha:</label>
                            <input type="password" name="password" className="form-control" />
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