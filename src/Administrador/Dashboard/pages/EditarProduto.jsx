import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import Content from '../components/Content'
import TaskContext from '../../../contexts/TaskContext';

export default function EditarProduto() {
    const { register, handleSubmit } = useForm()
    const { modificar, dadosProdutos } = useContext(TaskContext)
    const { key } = useParams()
    const produto = dadosProdutos.find((item) => item.key == key)
    const navigate = useNavigate()

    async function onSubmit(data) {
        console.log(data)
        try {
            // Chamar a TaskService
            await modificar(data)
            // Navegar para home
            navigate("/painel/estoque")
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Content>
            <div className="d-flex justify-content-between">
                <h2>Editar produto</h2>
                <Button link="/painel/estoque" title="Voltar" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} action="" className='my-4'>
                <input type="hidden" {...register("key")} value={key} />

                <label className='mt-4 form-label' htmlFor="nome">Descrição</label>
                <input type="text" name="name" id="name" className='form-control' placeholder='Descrição' defaultValue={produto.name}  {...register("name")} />
                <input type="text" name="tipo" className='d-none' defaultValue={produto.tipo} {...register("tipo")} />

                <label className='mt-4 form-label' htmlFor="marca">Marca</label>
                <input type="text" name="marca" id="marca" className='form-control' defaultValue={produto.marca} placeholder='Marca' {...register("marca")} />

                <label className='mt-4 form-label' htmlFor="quantidade">Quantidade</label>
                <input type="number" name="quantidade" id="codigo" className='form-control' defaultValue={produto.quantidade} placeholder='Quantidade' {...register("quantidade")} />

                <label className='mt-4 form-label' htmlFor="valorcusto">Valor de custo</label>
                <input type="number" name="valorcusto" id="valorcusto" className='form-control' defaultValue={produto.valorcusto} placeholder='Valor de custo' {...register("valorcusto")} />

                <label className='mt-4 form-label' htmlFor="valorvenda">Valor de venda</label>
                <input type="number" name="valorvenda" id="valorvenda" className='form-control' defaultValue={produto.valorvenda} placeholder='Valor de venda' {...register("valorvenda")} />

                <button className='btn btn-success mt-4'>Salvar</button>

            </form>
        </Content >
    );
}