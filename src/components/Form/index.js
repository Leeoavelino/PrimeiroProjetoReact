import React from "react"; //importando a biblioteca react neste arquivo
import PropTypes from 'prop-types' //biblioteca para fazer validacao das propriedades
import {FaPlus} from 'react-icons/fa' //importando icones (FaPlus) da bibliote de icons do react
import './Form.css' //importando o estilo da biblioteca Form.css

export default function Form({handleSubmit, handleChange, novaTarefa}){

  return(
    <form onSubmit={handleSubmit} action="#" className="form">

    <input onChange={handleChange} type="text" value={ novaTarefa } />

    <button type="submit">
      <FaPlus/>
    </button>

    {/* importando o icone importado da biblioteca de icons do react no botao de enviar
    Colocamos o valor do input de novaTarefa que esta sendo importado do arquivo main */}

  </form>
  )
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired, //informa o que ela é e se é requeirdo
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired //aqui é uma string e é requerida
}

// o evento onChange é utilizado para que seja realizada determinada ação após alguma mudança
