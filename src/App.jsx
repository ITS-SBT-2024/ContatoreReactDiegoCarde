import { useState } from 'react'
import { useEffect } from 'react';

function App() {
  const [contatore, setContatore] = useState(0);
  const [colore, setColore] = useState(0);
  const [status, setStatus] = useState(0);
  const [coloreBottoni, setColoreBottoni] = useState(0);
  const textStyle = {
    color: "lightgrey",
    textShadow: "2px 0 green -2px 0 green 0 2px green 0 -2px green 1px 1px green -1px -1px green 1px -1px green -1px 1px green",
    textAalign: "center"
  }
  const main = {
    backgroundColor: colore,
    textShadow: "whitesmoke",
    width: "1000px",
    borderRadius: "25px",
    margin: "auto",
    border: "3px solid lightblue",
    padding: "10px",
    float: "center"
  }

  const btn = {
    backgroundColor: coloreBottoni,
    height: "100px",
    width: "100px",
    border: "3px solid lightblue"
  }

  const HTMLContatore = {
    height: "20px",
    width: "150px",
    padding: "25px",
    backgroundColor: coloreBottoni,
    fontFamily: "bold",
    fontSize: "20px",
    border: "3px solid lightblue",
    borderRadius: "10px"
  }
  useEffect(() => {
    if (contatore > 0) {
      setColore("green")
      setStatus("Positivo")
      setColoreBottoni("lightblue")
    }
    else if (contatore < 0) {
      setColore("red")
      setStatus("Negativo")
      setColoreBottoni("lightgrey")
    }
    else {
      setColore("blue")
      setStatus("Neutro")
      setColoreBottoni("lightblue")
    }
  }, [contatore])


  return (<div id="main" style={main}>
    <h1 id="text" style={textStyle}>...._^^ THE COUNTER STRIKER ^^_....</h1>
    <div className="divisore" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <button id="btn" style={btn} onClick={() => setContatore(contatore - 1)}>-1</button>
      <p id="contatore" style={HTMLContatore}><span>Contatore: {contatore}</span></p>
      <button id="btn" style={btn} onClick={() => setContatore(contatore + 1)} >+1</button>
      <p >{status}</p>
    </div>
  </div>
  );
}
export default App


