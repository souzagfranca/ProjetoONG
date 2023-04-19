import React from 'react';

function App(props) {
    return (
        <div className="col-12 col-md-3" >
            <div className="card mt-5 mt-sm-0">
                <div className='bg-verde-escuro text-center text-white rounded'>
                    <p className='fs-3 pt-2 pb-2'>mensal</p>
                </div>
                <div className='text-center p-3'>
                    <small className='text-center text-verde-escuro mt-3 mb-3'>R$<small className='fw-bold fs-4'>{props.preco}</small></small>
                    <div className='text-center fs-6'>
                        <p className='text-start'><i className="bi bi-basket3 text-verde-escuro fs-4"></i> Controle de vendas;</p>
                        <p className='text-start'><i className="bi bi-boxes text-verde-escuro fs-4"></i> Gerenciamento de estoque e mercadoria;</p>
                        <p className='text-start'><i className="bi bi-calendar-check text-verde-escuro fs-4"></i> Gestão de metas e prazos;</p>
                        <p className='text-start'><i className="bi bi-cash-coin text-verde-escuro fs-4"></i> Relátorios de lucros e custos;</p>
                        <button className='border border-0 bg-verde-escuro1 fs-5 pt-2 pb-2 text-white w-75 rounded border-white mt-3 mb-3'>Saiba Mais <i className="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App
