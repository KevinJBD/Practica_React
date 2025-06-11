import React from 'react'

const Ejercicio02 = () => {
// Logica del componente
// Variable / constante
//hooks
// Funciones 
const nombreProducto = 'Smart TV 90"'
function agregarACarritoDeCompras(){
    console.log(`El producto ${nombreProducto} ha sido agregado al carrito de compras`);
}

function eliminarProducto(){
    console.warn(`El producto ${nombreProducto} se ha eliminado del carrito de compras`);
}

    return (
        <>
        <div className="row mt-4">
            <div className="col-12">
                <h2 className='h4 mt-4'>
                    Ejercico 2 - Boton y Funciones
                    
                </h2>
                <hr />
                <div>
                    <button onClick={agregarACarritoDeCompras} className='btn btn-primary w-25'>
                        <i className="bi bi-car-front-fill"></i>
                        <span className='ms-2'>Guardar Articulo</span>
                    </button>
                    <button onClick={eliminarProducto} className='btn btn-danger w-25 ms-4'>
                        <i className="bi bi-x-lg"></i>
                        <span className='ms-2'>Eliminar Articulo</span>
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Ejercicio02
