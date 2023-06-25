import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Content from '../components/Content'
import TaskContext from '../../../contexts/TaskContext';

export default function NovoProduto() {
    const { register, handleSubmit } = useForm()
    const { insereProduto } = useContext(TaskContext)
    const navigate = useNavigate()

    async function onSubmit(data) {

        try {
            await insereProduto(data)
            navigate('/painel/estoque')
        } catch (error) {
            console.log('Não foi possível cadastrar o produto', error.message)
        }
    }

    return (
        <Content>
            <div className="d-flex justify-content-between">
                <h2>Novo produto</h2>
                <Button link="/painel/estoque" title="Voltar" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} action="" className='my-4'>

                <label className='mt-4 form-label' htmlFor="nome">Descrição do produto</label>
                <input type="text" name="name" id="name" className='form-control' placeholder='Nome do produto' {...register("name")} />
                <input type="text" name="tipo" className='d-none' defaultValue="produto" {...register("tipo")}/>
                
                <label className='mt-4 form-label' htmlFor="marca">Marca</label>
                <input type="text" name="marca" id="marca" className='form-control' placeholder='Marca do produto' {...register("marca")}/>

                <label className='mt-4 form-label' htmlFor="quantidade">Quantidade</label>
                <input type="number" name="quantidade" id="codigo" className='form-control' placeholder='Codigo do produto' {...register("quantidade")}/>

                <label className='mt-4 form-label' htmlFor="valorcusto">Valor de custo</label>
                <input type="number" name="valorcusto" id="valorcusto" className='form-control' placeholder='Codigo do produto' {...register("valorcusto")}/>

                <label className='mt-4 form-label' htmlFor="valorvenda">Valor de venda</label>
                <input type="number" name="valorvenda" id="valorvenda" className='form-control' placeholder='Codigo do produto' {...register("valorvenda")}/>

                <button className='btn btn-success mt-4'>Salvar</button>

            </form>
        </Content >
    );
}