import React, { useState } from "react";
import Imagen from '../../imagenes/illustration-dashboard.png'
import './Main.css'

function Main() {
  const [input, setInput] = useState('')

  function handleSubmit(e){
    e.preventDefault()

    const inputElement = e.target.elements.inputElement
    const submitElement = e.target.elements.submitElement

    if(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(input)) {
      inputElement.classList.remove('error')
      inputElement.classList.add('success')
      inputElement.value = 'Email has been registered'
      inputElement.disabled = true

      submitElement.classList.add('success')
      submitElement.innerText = 'Success'
      submitElement.disabled = true
      //Despues de 5 segundos volver a la normalidad
      setTimeout(() => {
        inputElement.classList.remove('error')
        inputElement.classList.remove('success')
        inputElement.disabled = false
        inputElement.value = ''
        inputElement.placeholder = 'Your email adress'
        
        submitElement.classList.remove('success')
        submitElement.classList.remove('error')
        submitElement.innerText = 'Notify Me'
        submitElement.disabled = false
      }, 3000);
    }else{
      inputElement.classList.remove('success')
      inputElement.classList.add('error')
      inputElement.value = 'Enter a valid email'
    }
  }

  function handleChange(e) {
    setInput(e.target.value)
  }

  return(
    <>
    <div className="main-container">
      <form className="main-form" onSubmit={handleSubmit}>
        <input id="inputElement" className="main-input" type="text" placeholder="Your email adress" onChange={handleChange} value={input}/>
        <button id="submitElement" type="submit" className="main-submit" children={`Notify Me`}></button>
      </form>
      <img className="main-imagen" src={Imagen} alt="Ilustración"/>
      </div>
    </>
  )
}

export default Main;