import React from 'react'
import Precos from './Precos'


function App() {
    return (
        <div>
            {/* PLANOS E PREÇOS */}
            <section className='bg-cinza-escuro pt-5 pb-5' id="precos">
                <div className="col-md-12 pb-5">
                    <div className="container">
                        <div className="row">
                            <h1 className='text-verde-escuro1 f2-bold text-center mb-5'>PLANOS</h1>
                            <Precos preco="159"></Precos>
                            <Precos preco="139"></Precos>
                            <Precos preco="119"></Precos>
                            <Precos preco="109"></Precos>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default App
