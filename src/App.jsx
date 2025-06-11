import Ejercicio01 from './components/Ejercicio01.jsx'
import BotonGeneral from './components/utils/BotonGeneral.jsx'
import ContenedorBotones from './components/utils/ContenedorBotones.jsx'
import Ejercicio02 from './components/Ejercicio02.jsx';


function App() {
  

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='mt-2 text-center alert alert-success'>
              Hola UTSH
            </h1>
          </div>
        </div>
      </div>
      {/**Mando a llamar un componente Externo */}
      <Ejercicio01 />
      <BotonGeneral />
      <ContenedorBotones />
      <Ejercicio02 />
      
    </>
  )
}

export default App
