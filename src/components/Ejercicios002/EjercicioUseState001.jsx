import React, { useState } from 'react'
import { TituloEjercicio } from '../utils/TituloEjercicio'

export const EjercicioUseState001 = () => {
    const [textoBoton, setTextoBoton] = useState('Registrar');

    const cambiarTextoBoton = () => {
        setTextoBoton('Registrado'); 
    }

    return (
        <>
            <TituloEjercicio tituloEjercicio="Ejercicio 001 Introduccion a Hook State" />
            <div className="col-12 text-center">
                <button className="btn btn-dark w-25" onClick={cambiarTextoBoton}>
                    <i class="bi bi-box-arrow-in-right w-25"></i>
                    {textoBoton}
                </button>
                <br />
            </div>
        </>
    )
}
