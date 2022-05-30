import React, {useState} from 'react';
import './style.css'

import { Card } from '../../components/Card'

export function Home() {
  const [estudanteNome, setEstudanteNome] = useState('')
  const [estudantes, setEstudantes] = useState([])
  const [estudanteIdade, setEstudanteIdade] = useState('')

  function addEstudantes() {
    const novoEstudante = {
      nome: estudanteNome,
      hora: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }),
      idade: estudanteIdade
    }
    setEstudantes(prevState => [...prevState, novoEstudante]);
  }

  return (
    <div className="container">
      <h1>Preseça do Tech4Me</h1>

      <input 
        type="text" 
        placeholder='Digite seu nome...'
        onChange={e => setEstudanteNome(e.target.value)}
      />

      <input 
        type="text" 
        placeholder='Digite sua idade...'
        onChange={e => setEstudanteIdade(e.target.value)}
      />

      <button type='button' onClick={addEstudantes}>Adicionar</button>

      {
        estudantes.map(estudante => <Card nome={estudante.nome} hora={estudante.hora} idade={estudante.idade} key={estudante.hora}/>)
      }
    </div>
  );
}

