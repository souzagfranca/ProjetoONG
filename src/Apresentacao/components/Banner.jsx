import React from 'react';
import bannerInicial from '/img/banner.png'

function App() {

    return (
        <div>
            {/* BANNER INICIAL */}
            <section id="banner-inicial">
                <img src={bannerInicial} className="img-responsive w-100" alt="" />
            </section>

        </div>
    )
}

export default App
