import { useState } from 'react';

function InputsPesquisar() {
  const [ resultado, setResultado ] = useState(() => '');

  function onChange(e) {
    setResultado(e.target.value);
  }

  function pesquisar() {
    const argumentos = resultado.split('+').toString();
    window.location.href = `https://google.com/search?q=${argumentos}`;
  }

  return (
    <div className="nav_inputs">
      <input type="search" className="input_search" onChange={onChange}/>
      <input type="submit" value="Search" className="input_submit" onClick={pesquisar}/>
    </div>
  )
}

export default InputsPesquisar;