import React from 'react'
import { Link } from 'react-router-dom'

import bannerImg from "../../assets/header.png"

const Banner = () => {
    return (
        <div className='section__container header__container'>
            <div className='header__content z-30 '>
            <h4 className="uppercase" style={{ fontSize: '1rem', fontWeight: 'bold', color: '#D32F2F', marginBottom: '10px' }}>
    Pentru comenzi, te rugăm să ne contactezi direct. Încercăm să îți oferim cele mai bune opțiuni și asistență!
</h4>

<h4 className="uppercase" style={{ fontSize: '1rem', fontWeight: 'bold', color: '#D32F2F' }}>
Livrare oriunde – doar 30 lei transport!
</h4>
                <h1>Tutun premium</h1>
                <p>Descoperă colecția noastră de tutun de top, disponibil atât la pungă, cât și la găleată 
                    ideal pentru a satisface toate preferințele. Ne mândrim cu produsele noastre de top și cu un serviciu rapid și
                    eficient, astfel încât să îți fie ușor să comanzi exact ce îți trebuie. Simplu, de încredere și mereu la îndemână.</p>
                <button className='btn'><Link to='/Magazin'>Vezi Oferte</Link></button>
            </div>
            <div className='header__image'>
                <img src={bannerImg} alt = "banner image"/>
            </div>
        </div>
    )
}

export default Banner