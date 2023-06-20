import Button from '../components/Button';
import Content from '../components/Content'

export default function NovoForncedor() {
    return (
        <Content>
            <div className="d-flex justify-content-between">
                <h2>Novo fornecedor</h2>
                <Button link="/painel/fornecedores" title="Voltar" />
            </div>
            <form action="" className='my-4'>

                <label className='mt-4' htmlFor="nome">Nome</label>
                <input type="number" name="nome" id="nome" className='form-control' placeholder='Nome do fornecedor' />

                <label className='mt-4' htmlFor="empresa">Empresa</label>
                <input type="text" name="empresa" id="empresa" className='form-control' placeholder='Nome da empresa' />

                <label className='mt-4' htmlFor="telefone">Telefone</label>
                <input type="tel" name="telefone" id="telefone" className='form-control' placeholder='Telefone' />

                <label className='mt-4' htmlFor="cpf">CPF</label>
                <input type="text" name="cpf" id="cpf" className='form-control' placeholder='CPF' />

                <button className='btn btn-success mt-4'>Salvar</button>
                
            </form>
        </Content >
    );
}