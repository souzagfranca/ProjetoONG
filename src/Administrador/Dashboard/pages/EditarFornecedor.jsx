import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import Content from '../components/Content'
import TaskContext from '../../../contexts/TaskContext';

export default function EditarFornecedor() {
    const { register, handleSubmit } = useForm()
    const { editarPessoa, dadosPessoa } = useContext(TaskContext)
    const { key } = useParams()
    const pessoa = dadosPessoa.find((item) => item.key == key)
    const navigate = useNavigate()

    async function onSubmit(data) {
        try {
            // Chamar a TaskService
            await editarPessoa(data)
            // Navegar para home
            navigate("/painel/fornecedores")
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Content>
            <div className="d-flex justify-content-between">
                <h2>Editar fornecedor</h2>
                <Button link="/painel/fornecedores" title="Voltar" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} action="" className='my-4'>
                <input type="hidden" {...register("key")} value={key} />

                <label className='mt-4 form-label' htmlFor="nome">Representante</label>
                <input type="text" name="nome" id="nome" className='form-control' defaultValue={pessoa.nome} placeholder='Nome do representante' {...register("nome")} />
                <input type="text" name="tipo" className='d-none' defaultValue="pessoa" {...register("tipo")} />

                <label className='mt-4 form-label' htmlFor="cpf">CPF</label>
                <input type="number" name="cpf" id="cpf" className='form-control' defaultValue={pessoa.cpf} placeholder='CPF' {...register("cpf")} />

                <label className='mt-4 form-label' htmlFor="empresa">Empresa</label>
                <input type="text" name="empresa" id="empresa" className='form-control' defaultValue={pessoa.empresa} placeholder='Razão Social' {...register("empresa")} />

                <label className='mt-4 form-label' htmlFor="cnpj">CNPJ</label>
                <input type="number" name="cnpj" id="cnpj" className='form-control' defaultValue={pessoa.cnpj} placeholder='CNPJ' {...register("cnpj")} />

                <label className='mt-4 form-label' htmlFor="telefone">Telefone</label>
                <input type="tel" name="telefone" id="telefone" className='form-control' defaultValue={pessoa.telefone} placeholder='Telefone' {...register("telefone")} />

                <button className='btn btn-success mt-4'>Salvar</button>

            </form>
        </Content >
    );
}