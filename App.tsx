import { Header } from './components/Header'

import styles from './App.module.css'
import  './global.css' 
import {Body} from './components/Body'
import { FormEvent, useState } from 'react'
import { Task } from './components/Task'


export function App() {
  const [inputText, setInputText] = useState("")
  const [tasks, setTasks] = useState([ 
    {
      content: "Estudar react",
      isChecked: false
    },
    {
      content: "Terminar a página",
      isChecked: true
    }
  ]);

  const handleInput = (text: string) => {
    setInputText(text)
  }

  function handleCreateNewTask(event: FormEvent) {
    console.log(event)
    event.preventDefault()

    setTasks([...tasks, {
      content: inputText,
      isChecked: false
    }]);
    setInputText('');
  }
  

  const handleChecked = (taskToCheck: string) => {
    console.log({taskToCheck})
    const check = tasks.map(task => {
      if (task.content === taskToCheck) {
        console.log({task})
        return  {content: task.content, isChecked: !task.isChecked}
      }
      else return task
    })
    console.log({check})
    setTasks(check)
  }

  const totalTasks = tasks.length
  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeleted = tasks.filter(task => task.content !== taskToDelete)

    setTasks(tasksWithoutDeleted);
  }

  console.log(Task)
  return (
    <div>
        <Header 
        handleInput={handleInput}
        handleNewTask={handleCreateNewTask}
        inputText={inputText}
        setInputText={setInputText}
        />
      <div className={styles.wrapper}>
       <Body 
       totalTasks={totalTasks}
       onCheck={handleChecked}
       tasks={tasks}
       onDeleteTask={deleteTask}
       />
      </div>
    </div>
  )
}