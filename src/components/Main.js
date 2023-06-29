import React, {Component} from "react"; //importando Component da biblioteca React
import './Main.css'  //importando a estilizaçao do arquivo Main.css
import Tarefas from "./Tarefas"; //importando a pasta Tarefas e os seus elementos contidos
import Form from "./Form"; //importando a pasta Form e os seus elementos contidos

//exportando a classe Main para que possa ser importado nos outros arquivos
export default class Main extends Component{

  //estado do componente. tudo que mudar dentro de state vai refletir no render
  state = {
    novaTarefa: '',  //vem com o valor vazio e recebe o valor do formulario
    tarefas: [], //array vazio para colocar as tarefas
    index: -1 //se esse estado for -1 quer dizer que nao estamos criando e nao editando.
  }

componentDidMount(){ //para utilizar tudo que foi salvo na base de dados.

  const tarefas = JSON.parse(localStorage.getItem('tarefas')) //pegando tudo de foi salvo em tarefas no localStorage e colocando na variavel tarefas

  if(!tarefas) return

  this.setState({
    tarefas
  })

}

componentDidUpdate(prevProps, prevState){ // prevState = estado anterior

  const {tarefas} = this.state //pegar as tarefas e colocar na variavel

  if(tarefas === prevState.tarefas) return //se a tarefa atual e a anterior forem iguais. para aqui mesmo.

  localStorage.setItem('tarefas', JSON.stringify(tarefas)) //as tarefas nao sendo iguais salvamos no localStorage (base de dados).

}

  //handleSubmit é o nome do metodo. responsavel pela inclusao de tarefas.
  handleSubmit = (e) => {
    e.preventDefault()  //para previnir o envio do form

    const { tarefas, index } = this.state  //pegar tarefa e index

    let {novaTarefa} = this.state

    novaTarefa = novaTarefa.trim() //trim serve para eliiminar os espaços em branco do começo e do final do que iremos escrever para por no nova tarefa

    if(tarefas.indexOf(novaTarefa) !== -1) return //verificar se essa tarefa existe

    const novasTarefas = [...tarefas] //cria um array e copia os elementos de tarefas dentro

    if(index == -1){  //se o indice for igual a -1 quer dizer que estamos criando uma tarefa
      this.setState({
        tarefas: [...novasTarefas, novaTarefa], //pegando um array e jogando dentro do outro com as ediçoes e jogando tudo dentro de tarefas
        novaTarefa: '' //para apos digitarmos uma tarefa o local do input voltar vazio para escrevermos outra tarefa.
      })
    }else{ //contrario do if é editando tarefas
      novasTarefas[index] = novaTarefa

      this.setState({
        tarefas: [...novasTarefas],
        index: -1
      })
    }

  }

  //metodo utilizado para atualizar o valor da variavel novaTarefa que esta no onChange
  handleChange = (e) => {

    //pega o valor do onChange e coloca no novaTarefa
    this.setState({
      novaTarefa: e.target.value,
    })

  }

  handleEdit = (e, index) => {  //metodo para editar o valor atual
    const {tarefas} = this.state  //pegamos as tarefas

    this.setState({
      index,
      novaTarefa: tarefas[index] //pegando  index de tarefas
    })
  }

  handleDelete = (e, index) => {
    const {tarefas} = this.state
    const novasTarefas = [...tarefas]
    novasTarefas.splice(index, 1) //deletando um elemento do array tarefa

    this.setState({
      tarefas: [...novasTarefas] //colocando os elementos restantes no tarefas
    })
  }

 //metodo render para renderizar na tela. render é usado em classes
  render(){

    //pegando os valores de novaTarefa e tarefas de this.state. usando destructor
     const { novaTarefa, tarefas } = this.state

    return(

      //className é a mesma coisa de class do javascript
      <div className="main">

        <h1>
          Lista de Tarefas
        </h1>

        <Form handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        novaTarefa={novaTarefa}
        />

        <Tarefas handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
        tarefas={tarefas}
        />


      </div>

      //importando o form e o tarefas para o Main.js
      //no formulario enviar o valor para o novaTarefa que esta no state la no inicio.

    )
  }

}
