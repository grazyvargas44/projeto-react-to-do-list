import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Container, ToDoList, Input, Button, ListItem, Trash, Check } from './styles' // componentes


//Código JavaScript
function App() {
  const [list, setList] = useState([])
  const [task, setTask] = useState('')

  function inputMudou(event) {
    setTask(event.target.value)

  }

  function cliqueiNoBotao() {
    if (task) {
      setList([...list, { id: uuid(), task, finished: false }])
    }

  }

  function finalizarTarefa(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function deletarTarefa(id) {
    const deletList = list.filter(item => item.id !== id)

    setList(deletList)
  }

  //Código HTML | JavaScript | React
  return (
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="O que tenho pra fazer..." />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem isfinished={item.finished} key={item.id}>
                <Check onClick={() => finalizarTarefa(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deletarTarefa(item.id)} />
              </ListItem>
            ))
          ) : (
            <h3>Não há itens na lista</h3>
          )
          }
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
