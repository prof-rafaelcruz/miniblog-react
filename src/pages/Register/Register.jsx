import styles from './Register.module.css';
import { useState, useEffect } from 'react';

const Register = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setError('');

    const user = {
      displayName,
      email,
      password
    }

    if(password !== confirmPassword) {
      setError('As senhas precisam ser iguais!');
      return
    }

    console.log(user);
  }

  return (
    <div className={styles.register}>
        <h2>Registre-se para postar</h2>
        <p>Crie seu usuário e compartilhe suas histórias</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input 
              type="text" 
              name="displayName" 
              id="displayName"
              required
              placeholder='Nome do usuário' 
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </label>
          <label>
            <span>E-mail:</span>
            <input 
              type="email" 
              name="email" 
              id="email"
              required
              placeholder='Insira seu e-mail' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Senha:</span>
            <input 
              type="password" 
              name="password" 
              id="password"
              required
              placeholder='Insira sua senha' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <span>Confirmação de senha:</span>
            <input 
              type="password" 
              name="confirmPassword" 
              id="confirmPassword"
              required
              placeholder='Conforme a sua senha' 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <button className='btn'>Registrar</button>
          {error && (<p className='error'>{error}</p>)}
        </form>
    </div>
  )
}

export default Register;