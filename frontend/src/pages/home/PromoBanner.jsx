import React from 'react'

const PromoBanner = () => {
    return (
        <section className='section__container banner__container'>
            <div className='banner__card'>
                <span><i className="ri-truck-line"></i></span>
                <h4>Transport Rapid</h4>
                <p>Comenzile tale ajung la tine în cel mai scurt timp, oriunde în țară, prin serviciile noastre de livrare expres.</p>
            </div>

            <div className='banner__card'>
                <span><i className="ri-money-dollar-circle-line"></i></span>
                <h4>Banii înapoi garantat</h4>
                <p>Rambursare fără bătăi de cap pentru orice retur eligibil.</p>
            </div>

            <div className='banner__card'>
                <span><i className="ri-user-voice-fill"></i></span>
                <h4>Asistență de încredere</h4>
                <p>Suntem aici pentru tine, oricând ai nevoie de ajutor.</p>
            </div>


        </section>
    )
}

export default PromoBanner