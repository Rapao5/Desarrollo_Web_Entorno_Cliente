import {useState} from 'react'

function App(){
    const [isParagraphVisible, setIsParagraphVisible] = useState(true)
    const toggleStatus = () => {
    setIsParagraphVisible(!isParagraphVisible)
    }

    const [newContador, setNewContador] = useState(0)
    const [modo, setModo] = useState()

    const [estadoBoton, setEstadoBoton] = useState(true)
    const cambiarBoton = () => {
        setEstadoBoton(!estadoBoton)
    }
 
    return (
        <>
        <h1>Miniretillo</h1>
        {isParagraphVisible && (
        <p>Este es un texto oculto.</p>
        )}
        <button onClick={toggleStatus}>
        {isParagraphVisible ? 'Esconder' : 'Mostrar'} texto
        </button>
        <p>Contador {newContador}</p>
        <button onClick={() => setNewContador((n) => n + 1)}>+1
        numero</button>
        <button onClick={() => setNewContador(0)}>Reset</button>
        <br/>
        <br/>
        <input type="text" value={modo} placeholder='Añade algo (papafrita)' onChange={(e)=>setModo(e.target.value)}/>
        {modo && <p>{modo}</p>}
        <br/>
        <br/>
        {estadoBoton && (
            <p>Este botón ya estaba al inicio.</p>
        )}
        <button onClick={cambiarBoton}>{estadoBoton ? 'Ocultar' : 'Mostrar'}</button>
        </>
    )
}

export default App