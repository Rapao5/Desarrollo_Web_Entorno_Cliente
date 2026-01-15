function App() {

    const users = [
        {id:1, name:'Jose', role:'Web Developer'},
        {id: 2, name:'Estefania', role:'Web Developer'},
        {id: 3, name:'Ruben', role:'Team Leader'},
        {id: 4, name:'Juanky', role:'Web Developer'}
    ]
    return (
        <>
        <p>Lista de usuarios activos:</p>
        <ul>
            {users.map(function (users){
                return (
                    <li key={users.id} className={users.role}>
                    {users.name} — {users.role}
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default App