import { useState } from "react";

export const Ejercicio03 = () => {
//Variables

//Hooks
const [numerito, setNumerito] = useState(0);


//Funciones
const sumar = () => {
    setNumerito(numerito + 1);
}
const restar = () => {
    setNumerito(numerito - 1);
}
const reiniciar = () => {
    setNumerito(0);
}

    return (
        <>
            <div className="row mt-4">
                <div className="col-12">
                    <h2 className='h4 mt-4'>
                        Funciones y Contador
                    </h2>
                </div>
                <div>
                    <div className="col-12 text-center">
                        <p className="h1">
                            Contador: {numerito}
                        </p>
                        <div className="col-12">
                            <button className="w-25 btn btn-warning text-dark fw-bold " onClick={sumar}>
                                Sumar
                            </button>
                            <button className="w-25 btn btn-primary text-dark fw-bold ms-4" onClick={reiniciar}>
                                <span> Reiniciar</span>
                            </button>
                            <button className="w-25 btn btn-danger text-dark fw-bold ms-4" onClick={restar}>
                                <span> Restar</span>
                            </button>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


//Tarea realizar algo similar al ejercicio 3, un boton que salude y boton para despedirse, usando useState, estado inicial Hola UTSH