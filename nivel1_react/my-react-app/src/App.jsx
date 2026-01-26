import { useState } from 'react';
import './style.css'; 

function App() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (usernameError || emailError || passwordError) {
            alert('No se puede enviar: el formulario contiene errores');
        } else {
            alert(`${username}, ${email}, ${password}`);
        }
        };
        const [usernameError, setUsernameError] = useState('');
        const handleUsername = (e) => {
            const { value } = e.target;
            setUsername(value);
            if (value.length <= 6) {
                setUsernameError('El username debe tener más de 6 caracteres');
            } else {
                setUsernameError('');
            }
        };
        const [emailError, setEmailError] = useState('');
        const handleEmail = (e) => {
            const { value } = e.target;
            setEmail(value);
            if (!value.includes('@') || !value.includes('.')) {
                setEmailError('El email debe contener @ y un .');
            } else {
                setEmailError('');
            }
        };
        const [passwordError, setPasswordError] = useState('');
        const handlePassword = (e) => {
            const { value } = e.target;
            setPassword(value);
            if (value.length<8){
                setPasswordError('La contraseña debe tener mínimo 8 caracteres.');
            }else{
                setPasswordError('');
            }
        }
    return (
            <form className='centrar' onSubmit={handleSubmit}>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={handleUsername}
                />
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={handleEmail}
                />
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={handlePassword}
                />
                <button>Submit</button>
                <p className='error'>{usernameError}</p>
                <p className='error'>{emailError}</p>
                <p className='error'>{passwordError}</p>
            </form>
        );
}
export default App;