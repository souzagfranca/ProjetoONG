
import { Link } from 'react-router-dom';
import bannerInicial from '/img/banner.png'
import React from 'react';


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
