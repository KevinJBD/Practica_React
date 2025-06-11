import React from 'react'
import BotonCrearCuenta from './BotonCrearCuenta.jsx';
import BotonInicioSesion from './BotonInicioSesion.jsx';


const ContenedorBotones = () => {
  return (
    <div className='col-12'>
      <BotonCrearCuenta/>
      <BotonInicioSesion/>
    </div>
  )
}

export default ContenedorBotones
