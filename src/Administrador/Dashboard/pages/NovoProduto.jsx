import Button from '../components/Button';
import Content from '../components/Content'

export default function NovoProduto() {
    return (
        <Content>
            <div className="d-flex justify-content-between">
                <h2>Novo produto</h2>
                <Button link="/painel/estoque" title="Voltar" />
            </div>
            <form action="" className='my-4'>

                <label className='mt-4 form-label' htmlFor="codigo">Codigo do produto</label>
                <input type="number" name="codigo" id="codigo" className='form-control' placeholder='Codigo do produto' />

                <label className='mt-4 form-label' htmlFor="nome">Nome do produto</label>
                <input type="text" name="name" id="name" className='form-control' placeholder='Nome do produto' />

                <label className='mt-4 form-label' htmlFor="marca">Marca do produto</label>
                <input type="text" name="marca" id="marca" className='form-control' placeholder='Marca do produto' />

                <button className='btn btn-success mt-4'>Salvar</button>

            </form>
        </Content >
    );
}