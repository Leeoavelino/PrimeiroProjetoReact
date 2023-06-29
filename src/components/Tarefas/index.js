import React from "react"; //importando a biblioteca react neste arquivo
import PropTypes from 'prop-types' //biblioteca para fazer validacao das propriedades
import {FaEdit, FaWindowClose} from 'react-icons/fa'  //importando os dois icones expecificos (FaEdit, FaWindowClose) da bibliote de icons do react
import './Tarefas.css' //importando o estilo do arquivo Tarefas.css

export default function Tarefas({tarefas, handleEdit, handleDelete}){
  return(
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => ( //essa array recebe tarefa e index, e a cada volta vai retornar um li que exibe tarefa.

      //Cada elemento filho dessa lista(li) precisa ter a propriedade key setado com um valor unico.

        <li key={tarefa}> { tarefa }

        <span>
          <FaEdit onClick={ (e) => handleEdit (e, index)} className="edit"/>
          <FaWindowClose onClick={ (e) => handleDelete(e, index)} className="delete"/>
        </span>

        </li>
        //colocando dois botoes. um de editar e um de deletar. esses botoes estao com os icons da biblioteca do react
      ))}

    </ul>
  )
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}
