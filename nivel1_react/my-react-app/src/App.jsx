export default function App() {
return (
        <>
        {/*Comentario dentro de JSX*/}
        <Componentes/>
        </>
    )
}

function Componentes(){
    return (
        <>
        <UserComponent/>
        <ProfileComponent/>
        <FeedComponent/>
        </>
    )
}

function UserComponent(){
    return <>
        <h2>1º Componente</h2>
        </>
}
function ProfileComponent(){
    return <>
        <h3>2º Componente</h3>
        </>
}
function FeedComponent(){
    return <>
        <h4>3º Componente</h4>
        </>
}
// Comentario fuera de return
// export default App
