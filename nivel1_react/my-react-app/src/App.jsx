import {useState} from "react"

function ParentComponent() {
    const [name, setName] = useState("Juanaco")
    return <ChildComponent name={name} setName={setName} />
}
function ChildComponent(props){
    return (
        <>
            <h1>Hello {props.name}</h1>
            <button onClick={ () => props.setName("Juanky")}> Change name</button>
            <button onClick={ () => props.setName("Klara")}> Saluda a la jefa</button>
        </>
    )
}

export default ParentComponent