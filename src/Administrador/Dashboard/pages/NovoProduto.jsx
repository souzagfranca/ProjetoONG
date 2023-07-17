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
                <h2>Nova ação</h2>
                <Button link="/painel/estoque" title="Voltar" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} action="" className='my-4'>

                <label className='mt-4 form-label' htmlFor="nome">Nome da ação</label>
                <input type="text" name="nome" id="nome" className='form-control' placeholder='Nome da ação' {...register("nome")} />
                <input type="text" name="tipo" className='d-none' defaultValue="acao" {...register("tipo")}/>
                
                <label className='mt-4 form-label' htmlFor="dt_acao">Data</label>
                <input type="date" name="dt_acao" id="dt_acao" className='form-control' placeholder='Data' {...register("dt_acao")}/>

                <label className='mt-4 form-label' htmlFor="local">Local</label>
                <input type="text" name="local" id="local" className='form-control' placeholder='Local' {...register("local")}/>

                <label className='mt-4 form-label' htmlFor="materialdoado">Material Doado</label>
                <input type="text" name="materialdoado" id="materialdoado" className='form-control' placeholder='Material Doado' {...register("materialdoado")}/>

                <label className='mt-4 form-label' htmlFor="relato">Digite um breve resumo do que foi a ação de hoje.</label>
                <input type="text" name="relato" id="relato" className='form-control' placeholder='Escreva aqui o que achou' {...register("relato")}/>

                <button className='btn btn-success mt-4'>Enviar</button>

            </form>
        </Content >
    );
}