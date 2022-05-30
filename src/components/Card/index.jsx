import './style.css';

export function Card(props) {
  return (
    <div className="card">
      <div>
        <label>Nome: </label>
        <strong>{props.batatinha}</strong>
      </div>
      <div>
        <label>Idade: </label>
        <strong>{props.idade}</strong>
      </div>
      <div>
        <label>Hora: </label>
        <strong>{props.hora}</strong>
      </div>
    </div>
  );
}



