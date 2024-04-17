
import './App.css'
import Caixa from '../Caixa/Caixa'
import foto1 from '../../images/sedans.svg'
import foto2 from '../../images/suvs.svg'
import foto3 from '../../images/luxury.svg'
import React from 'react'



const App = () => {
  return(
    <>
    <section className='container'>

    <div className="caixa1">
       <Caixa
       imagem={foto1}
       texto="SEDANS"
       pezinho="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
       textBtn="Learn More"/>
    </div>

    <div className='caixa2'>
       <Caixa
       imagem={foto2}
       texto="SUVS"
       pezinho="Take on an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
       textBtn="Learn More"/>
    </div>

    <div className='caixa3'>
       <Caixa
       imagem={foto3}
       texto="LUXURY"
       pezinho="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
       textBtn="Learn More"/>
    </div>
    </section>
    </>
  )
}

export default App