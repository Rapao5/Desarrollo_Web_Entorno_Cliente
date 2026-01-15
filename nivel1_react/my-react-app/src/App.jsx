function ParentComponent() {

    function greetings(){
        return "Yo aprendí a programar en foros y en mis tiempos compilabamos a mano."
    }

    return <ChildComponent greetings={greetings}/>
   
}
function ChildComponent(props){
    return <p>{props.greetings()}</p>
}

export default ParentComponent